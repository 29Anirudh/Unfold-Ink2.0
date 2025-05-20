import React, { useState } from "react";
import Left from "./Left";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "password") checkPasswordStrength(value);
  };

  const checkPasswordStrength = (password) => {
    if (password.length >= 12 && /[A-Z]/.test(password) && /\d/.test(password)) {
      setPasswordStrength("Strong");
    } else if (password.length >= 8) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email.";
    if (formData.password.length < 6) newErrors.password = "Password too short.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Account created successfully!");
    }
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Side */}
      <Left />

      {/* Right Side - 40% */}
      <div className="w-2/5 bg-gray-100 flex justify-center items-center">
        <form
          className="bg-white p-8 rounded-xl shadow-md max-w-md w-4/5"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-2 text-2xl font-semibold">Create Account</h2>
          <p className="mb-6 text-gray-600">
            Start your journey with Unfold Ink
          </p>

          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-2 bg-gray-200 rounded mb-2"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm">{errors.fullname}</p>
          )}

          <label className="block mt-3 mb-1 font-medium">Email</label>
          <div className="flex items-center bg-gray-200 rounded-md mb-2 px-3 py-2">
            <span className="mr-2">📧</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent outline-none flex-1"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <label className="block mt-3 mb-1 font-medium">Password</label>
          <div className="flex items-center bg-gray-200 rounded-md mb-2 px-3 py-2">
            <span className="mr-2">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <p
            className={`text-sm mb-2 ${
              passwordStrength === "Strong"
                ? "text-green-600"
                : passwordStrength === "Medium"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            Strength: {passwordStrength}
          </p>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <label className="block mt-3 mb-1 font-medium">Confirm Password</label>
          <div className="flex items-center bg-gray-200 rounded-md mb-2 px-3 py-2">
            <span className="mr-2">🔒</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-transparent outline-none flex-1"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}

          <div className="flex items-center mt-4 mb-4">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to the terms and conditions</label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm mb-2">{errors.agree}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md"
          >
            Create Account
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <a href="#signin" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
