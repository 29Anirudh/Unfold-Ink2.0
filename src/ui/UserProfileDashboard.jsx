import React, { useState } from 'react';
import EditProfile from './EditProfile';

const UserProfileDashboard = () => {
  const [user, setUser] = useState({
    photo: 'profile.png',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    bio: 'Passionate writer exploring the intersections of technology, culture, and everyday life.',
    joined: 'May 10, 2024',
  });

  const [blogs, setBlogs] = useState([
    {
      image: '1_fs.jpg',
      category: 'Technology',
      date: 'May 15, 2025',
      title: 'Understanding AI in Modern Enterprises'
    },
    {
      image: '2fs.jpg',
      category: 'Cricket',
      date: 'May 5, 2025',
      title: 'Thrilling IPL Finals Recap'
    },
    {
      image: '3fs.jpg',
      category: 'Economics',
      date: 'April 28, 2025',
      title: 'Urban Economies Post-Pandemic'
    },
    {
      image: '1_fs.jpg',
      category: 'Technology',
      date: 'May 15, 2025',
      title: 'Understanding AI in Modern Enterprises'
    },
    {
      image: '2fs.jpg',
      category: 'Cricket',
      date: 'May 5, 2025',
      title: 'Thrilling IPL Finals Recap'
    },
    {
      image: '3fs.jpg',
      category: 'Economics',
      date: 'April 28, 2025',
      title: 'Urban Economies Post-Pandemic'
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      const updatedBlogs = blogs.filter((_, i) => i !== index);
      setBlogs(updatedBlogs);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto relative">
      {/* Overlay Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <EditProfile user={user} setUser={setUser} onClose={() => setIsEditing(false)} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl shadow">
        <div className="flex flex-col items-center bg-violet-50 p-6 rounded-2xl">
          <img
            src={user.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
          <p className="text-sm text-gray-500 mt-1">
            <i className="fa-regular fa-calendar"></i> Joined {user.joined}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 w-full bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded"
          >
            <i className="fa-regular fa-pen-to-square"></i> Edit Profile
          </button>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-gray-600 mt-2">{user.bio}</p>

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
                <p className="font-semibold">12 articles</p>
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
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs bg-violet-100 text-violet-600 px-2 py-1 rounded-full">{blog.category}</span>
                <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
                <h4 className="text-base font-semibold mt-1">{blog.title}</h4>

                <div className="flex justify-between mt-4">
                  <button className="text-sm text-blue-600 hover:underline">
                    <i className="fa-regular fa-pen-to-square"></i> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    <i className="fa-solid fa-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileDashboard;
