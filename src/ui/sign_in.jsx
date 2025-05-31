import React, { useState } from "react";
import Left from "./Left";
import { useNavigate } from "react-router-dom";

const SignInPage = ({ setUser }) => {
  const nav = useNavigate();
  const BASE_URL =
    process.env.REACT_APP_BACKEND_BASEURL || "https://unfold-ink-backend.vercel.app";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${BASE_URL}/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Sign in failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      nav("/");
    } catch (err) {
      setError("Something went wrong, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Section */}
      <Left />

      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 bg-gray-100 flex justify-center items-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-6">Sign in to continue to Unfold Ink</p>

          {/* Email */}
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <div className="flex items-center bg-gray-200 rounded-md mb-4 px-3 py-2">
            <span className="mr-2">📧</span>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none flex-1"
            />
          </div>

          {/* Password */}
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <div className="flex items-center bg-gray-200 rounded-md mb-4 px-3 py-2">
            <span className="mr-2">🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none flex-1"
            />
            <button
              type="button"
              className="ml-2 text-sm text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-6 text-sm">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 text-red-600 font-semibold">{error}</div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-bold py-3 rounded-md mb-4 transition`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Links */}
          <div className="text-center text-sm">
            <a href="#forgot" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
            <p className="mt-2">
              Don’t have an account?{" "}
              <span
                onClick={() => nav("/signup")}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
