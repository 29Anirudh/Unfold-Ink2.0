import React, { useState } from 'react';

const EditProfile = ({ user, setUser, onClose }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

      {/* Profile Photo */}
      <div className="mb-4 text-center">
        <label htmlFor="photo">
          <img
            src={user.photo}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover cursor-pointer"
          />
        </label>
        <input id="photo" type="file" className="hidden" onChange={handlePhotoChange} />
      </div>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Full Name</label>
        <input
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Bio */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Bio</label>
        <textarea
          name="bio"
          value={user.bio}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        onClick={onClose}
        className="w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded"
      >
        Save & Close
      </button>
    </div>
  );
};

export default EditProfile;
