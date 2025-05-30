import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

const UserProfileDashboard = ({ user, setUser }) => {
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (user && token) {
      fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/api/blogs/mine`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
        })
        .catch((err) => console.error("Error loading user's blogs", err));
    }
  }, [user]);

  console.log(blogs);
  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };
  const handleDelete = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/api/blogs/${blogId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete the blog");

      // Remove blog from frontend state after successful deletion
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
    } catch (err) {
      alert(err.message);
    }
  };
  const handleProfileSave = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("bio", bio);
      if (photoFile) formData.append("photo", photoFile);

      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to update profile");

      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user)); // Update localStorage
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading user...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto relative">
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <label className="block mb-2">
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border p-2 rounded mt-1"
              />
            </label>
            <label className="block mb-2">
              Bio:
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full border p-2 rounded mt-1"
                rows={3}
              />
            </label>
            <label className="block mb-4">
              Profile Picture:
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mt-1"
              />
            </label>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsEditing(false)}
                disabled={loading}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleProfileSave}
                disabled={loading}
                className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="absolute text-xl font-semibold right-10 text-sky-600 hover:underline hover:text-violet-600 cursor-pointer" onClick={()=>nav('/')}>
        Back to Home
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl shadow">
        <div className="flex flex-col items-center bg-violet-50 p-6 rounded-2xl">
          <img
            src={user.photo || "/profile.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">{user.fullName}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Joined{" "}
            {user.joined ? new Date(user.joined).toLocaleDateString() : "N/A"}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 w-full bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded"
          >
            Edit Profile
          </button>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-gray-600 mt-2">
            {user.bio || "No bio available."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-violet-50 p-4 rounded-xl flex items-center">
              <div className="bg-violet-200 p-2 rounded-full">
                <i className="fa-solid fa-envelope text-violet-700"></i>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
            </div>
            <div className="bg-violet-50 p-4 rounded-xl flex items-center">
              <div className="bg-violet-200 p-2 rounded-full">
                <i className="fa-solid fa-newspaper text-violet-700"></i>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Total Posts</p>
                <p className="font-semibold">{blogs.length} articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs List */}
      <div className="mt-10">
        <h3 className="text-xl font-bold">
          My Blogs <span className="text-violet-600">({blogs.length})</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {blogs.map((blog, idx) => (
            <Link
                        to={`/blog/${blog._id}`}
                        key={blog._id}
              className="bg-white rounded-xl shadow overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-gray-500 transition-all"
            >
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs bg-violet-100 text-violet-600 px-2 py-1 rounded-full">
                  {blog.category}
                </span>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(blog.updatedAt).toLocaleDateString()}
                </p>
                <h4 className="text-base font-semibold mt-1">{blog.title}</h4>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    <i className="fa-solid fa-trash"></i> Delete
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileDashboard;
