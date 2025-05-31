import React, { useState } from "react";
import Left from "./Left";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const BASE_URL =
    process.env.REACT_APP_BACKEND_BASEURL ||
    "https://unfold-ink-backend.vercel.app";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

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
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email.";
    if (formData.password.length < 6) newErrors.password = "Password too short.";
    if (formData.password.trim() !== formData.confirmPassword.trim())
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);
    setErrors({});
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullname,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setServerError(data.message || "Signup failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      navigate("/");
    } catch (err) {
      setServerError("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full min-h-screen">
      {/* Left component hidden on small & medium screens */}
      <div className="hidden lg:block lg:w-3/5">
        <Left />
      </div>

      {/* Form section takes full width on small & medium, 2/5 width on large */}
      <div className="w-full lg:w-2/5 bg-gray-100 flex justify-center items-center p-4 sm:p-8">
        <form
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-2 text-2xl font-semibold">Create Account</h2>
          <p className="mb-6 text-gray-600">Start your journey with Unfold Ink</p>

          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-2 bg-gray-200 rounded mb-2"
          />
          {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}

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
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

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
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

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
          {errors.agree && <p className="text-red-500 text-sm mb-2">{errors.agree}</p>}

          {serverError && (
            <p className="text-red-600 font-semibold mb-2">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-bold py-3 rounded-md`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
