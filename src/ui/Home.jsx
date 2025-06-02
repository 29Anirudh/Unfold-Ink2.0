import { useState, useEffect } from "react";
import FeaturedStories from "./FeaturedStories";
import Politics from "./Politics";
import Movies from "./Movies";
import Cultural from "./Cultural";
import Economics from "./Economics";
import Cricket from "./Cricket";
import { useNavigate } from "react-router-dom";

const Home = ({ posts }) => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const nav = useNavigate();

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const searchValue = value.toLowerCase();

    const newFilteredPosts = posts.map((categoryPosts) =>
      categoryPosts.filter((post) => {
        const title = post.title?.toLowerCase() || "";
        const author =
          typeof post.author === "string"
            ? post.author.toLowerCase()
            : post.author?.fullName?.toLowerCase() || "";
        const category = post.category?.toLowerCase() || "";

        return (
          title.includes(searchValue) ||
          author.includes(searchValue) ||
          category.includes(searchValue)
        );
      })
    );

    setFilteredPosts(newFilteredPosts);
  };

  return (
    <div className="pt-14 min-h-screen" id="Home">
      <div className="flex items-center justify-between px-8 py-20 max-w-[1300px] mx-auto gap-16">
        <div className="flex flex-col gap-4 max-w-xl">
          <input
            type="text"
            placeholder="Search titles, authors, topics..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow transition-all duration-300 focus:outline-none focus:border-violet-500 hover:shadow-violet-400/50"
            onChange={handleSearch}
            value={search}
          />

          <p className="text-4xl font-bold mb-2">Welcome to Unfold Ink</p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Share your ideas, stories, and creativity with the world.
          </p>

          <button
            className="bg-violet-500 rounded-full text-white px-6 py-3 mt-4 font-medium hover:shadow-lg hover:shadow-violet-400/50 hover:scale-105 transition-all duration-300"
            onClick={() => nav("/create")}
          >
            Start Writing
          </button>
        </div>

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

      {/* Category Sections */}
      <Politics posts={filteredPosts[0]} />
      <Movies posts={filteredPosts[1]} />
      <Cultural posts={filteredPosts[2]} />
      <Economics posts={filteredPosts[3]} />
      <Cricket posts={filteredPosts[4]} />
    </div>
  );
};

export default Home;
