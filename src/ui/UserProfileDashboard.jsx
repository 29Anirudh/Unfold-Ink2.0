import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const UserProfileDashboard = ({ user, setUser }) => {
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const BASE_URL =
    process.env.REACT_APP_BACKEND_BASEURL || "https://unfold-ink-backend.vercel.app";
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (user && token) {
      fetch(`${BASE_URL}/api/blogs/mine`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((err) => console.error("Error loading user's blogs", err));
    }
  }, [user]);

  const handlePhotoChange = (e) => {
    if (e.target.files?.[0]) setPhotoFile(e.target.files[0]);
  };

  const handleDelete = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/blogs/${blogId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete the blog");
      setBlogs((prev) => prev.filter((b) => b._id !== blogId));
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
      const res = await fetch(`${BASE_URL}/api/auth/profile`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to update profile");

      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p className="text-center mt-20">Loading user...</p>;

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4 pt-20">
          <div className="bg-white w-full max-w-md rounded-xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <label className="block mb-3">
              <span className="text-sm">Full Name</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <label className="block mb-3">
              <span className="text-sm">Bio</span>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <label className="block mb-4">
              <span className="text-sm">Profile Picture</span>
              <input type="file" accept="image/*" onChange={handlePhotoChange} />
            </label>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsEditing(false)}
                disabled={loading}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleProfileSave}
                disabled={loading}
                className="px-4 py-2 bg-violet-600 text-white hover:bg-violet-700 rounded"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div
        onClick={() => nav("/")}
        className="text-blue-600 hover:text-violet-600 hover:underline absolute right-6 top-6 text-sm sm:text-base cursor-pointer"
      >
        Back to Home
      </div>

      {/* Profile Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl shadow-md pt-20">
        <div className="flex flex-col items-center text-center bg-violet-50 p-6 rounded-xl">
          <img
            src={user.photo || "/profile.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold mt-3">{user.fullName}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Joined {user.joined ? new Date(user.joined).toLocaleDateString() : "N/A"}
          </p>
          <button
            onClick={() => {
              setIsEditing(true);
              setFullName(user.fullName || "");
              setBio(user.bio || "");
            }}
            className="mt-4 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </button>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-gray-600 mt-1">{user.bio || "No bio available."}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-violet-50 p-4 rounded-xl flex items-center">
              <div className="bg-violet-200 p-2 rounded-full">
                <i className="fa-solid fa-envelope text-violet-700"></i>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold break-words">{user.email}</p>
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

      {/* Blogs Section */}
      <div className="mt-10">
        <h3 className="text-xl font-bold">
          My Blogs <span className="text-violet-600">({blogs.length})</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog._id}`}
              key={blog._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all hover:scale-[1.02] overflow-hidden"
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
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(blog.updatedAt).toLocaleDateString()}
                </p>
                <h4 className="text-base font-semibold mt-2 line-clamp-2">
                  {blog.title}
                </h4>
                <div className="flex justify-end mt-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(blog._id);
                    }}
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
