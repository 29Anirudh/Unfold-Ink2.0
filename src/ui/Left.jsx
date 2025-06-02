import React from "react";

const Left = () => {
  return (
    <div className="hidden md:block relative h-full overflow-hidden">
      <img
        src="loginup.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Blue translucent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-700 bg-opacity-30 z-10"></div>
      <div className="relative z-20 flex flex-col items-center text-center text-white px-4 h-full justify-center">
        <h1 className="text-4xl mb-2 font-bold">Welcome to Unfold Ink</h1>
        <p className="mb-4">
          Your space for expressive storytelling and creativity.
        </p>

        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 mb-4 border border-white border-opacity-30 w-72 text-center">
          <p>Write and publish your stories</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 mb-4 border border-white border-opacity-30 w-72 text-center">
          <p>Connect with a community of readers</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-30 w-72 text-center">
          <p>Explore topics around the world</p>
        </div>
      </div>
    </div>
  );
};

export default Left;
