import React from 'react';
import NavBar from './NavBar';
import FeaturedStories from './FeaturedStories';

import React from 'react';
import NavBar from './NavBar';
import FeaturedStories from './FeaturedStories';

const Home = () => {
  return (
    <div className="pt-20" id="Home">
      <div className="flex items-center justify-between px-8 py-20 max-w-[1300px] mx-auto gap-16">
        <div className="flex flex-col gap-4 max-w-xl">
          <input
            type="text"
            placeholder="Search titles,authors,topics..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow transition-all duration-300 focus:outline-none focus:border-violet-500 hover:shadow-violet-400/50"
          />

          {/* Welcome Text */}
          <p className="text-4xl font-bold mb-2">Welcome to Unfold Ink</p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Share your ideas, stories, and creativity with the world.
          </p>

          {/* Button */}
          <button className="bg-violet-500 rounded-full text-white px-6 py-3 mt-4 font-medium hover:shadow-lg hover:shadow-violet-400/50 hover:scale-105 transition-all duration-300">
            Start Writing
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="home_page_img.jpg"
            alt="Blogging"
            className="w-[120%] h-[350px] object-cover rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Featured Stories */}
      <FeaturedStories />
    </div>
  );
};

export default Home;
