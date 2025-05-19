import React from "react";

const SignInPage = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Side - 60% */}
      <div className="relative w-3/5 h-full overflow-hidden">
        <img
          src="maybe1.jpg"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Blue translucent overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-700 bg-opacity-30 z-10"></div>
        <div className="relative z-20 flex flex-col items-center text-center text-white px-4 h-full justify-center">
          <h1 className="text-4xl mb-2">Welcome to Unfold Ink</h1>
          <p className="mb-4">
            Your space for expressive storytelling and creativity.
          </p>

          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 mb-4 border border-white border-opacity-30 w-72 text-center">
            <p>write and publish your stories</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 mb-4 border border-white border-opacity-30 w-72 text-center">
            <p>connect with a community of readers .</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-30 w-72 text-center">
            <p>explore topics around the world.</p>
          </div>
        </div>
      </div>

      {/* Right Side - 40% */}
      <div className="w-2/5 bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-4/5">
          <h2 className="mb-2 text-2xl font-semibold">Welcome Back</h2>
          <p className="mb-6 text-gray-600">Sign in to continue to Unfold Ink</p>

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
              className="bg-transparent outline-none flex-1"
            />
          </div>

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
              className="bg-transparent outline-none flex-1"
            />
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

          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md mb-4">
            Sign In
          </button>

          <div className="text-center">
            <a href="#forgot" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
            <p className="mt-2">
              Don’t have an account?{" "}
              <a href="#signup" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
