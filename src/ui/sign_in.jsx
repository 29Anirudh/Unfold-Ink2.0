import React, { useState } from "react";
import Left from "./Left";
import { useNavigate } from "react-router-dom";

const SignInPage = ({ setUser }) => {
  const nav = useNavigate();
  const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${BASE_URL}/api/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Sign in failed");
        setLoading(false);
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
    <div className="flex h-screen w-screen">
      <Left />
      <div className="w-2/5 bg-gray-100 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md max-w-md w-4/5"
        >
          <h2 className="mb-2 text-2xl font-semibold">Welcome Back</h2>
          <p className="mb-6 text-gray-600">
            Sign in to continue to Unfold Ink
          </p>

          {/* Email input */}
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
              value={email} // controlled input
              onChange={(e) => setEmail(e.target.value)} // update state
              className="bg-transparent outline-none flex-1"
            />
          </div>

          {/* Password input */}
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <div className="flex items-center bg-gray-200 rounded-md mb-4 px-3 py-2">
            <span className="mr-2">🔒</span>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password} // controlled input
              onChange={(e) => setPassword(e.target.value)} // update state
              className="bg-transparent outline-none flex-1"
            />
            {/* Password toggle button */}
            <button
              type="button"
              className="ml-2 cursor-pointer bg-transparent border-none"
              onClick={(e) => {
                const pwdInput = e.currentTarget.previousSibling;
                pwdInput.type =
                  pwdInput.type === "password" ? "text" : "password";
              }}
              aria-label="Toggle password visibility"
            >
              👁️
            </button>
          </div>

          {/* Remember me */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>

          {/* Show error if any */}
          {error && (
            <div className="mb-4 text-red-600 font-semibold">{error}</div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-bold py-3 rounded-md mb-4`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Forgot password and signup links */}
          <div className="text-center">
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
