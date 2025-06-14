import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL =
    process.env.REACT_APP_BACKEND_BASEURL ||
    "https://unfold-ink-backend.vercel.app";

  useEffect(() => {
    const fetchFeaturedStories = async () => {
      try {
        console.log("Fetching from:", `${BASE_URL}/api/blogs/featured/random`);
        const response = await fetch(`${BASE_URL}/api/blogs/featured/random`);
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error("Error fetching featured stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedStories();
  }, []);

  return (
    <div className="px-6 py-16 max-w-[1200px] mx-auto">
      <h2 className="text-center mb-10 text-gray-900 text-4xl font-bold">
        Featured Stories
      </h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-12 h-12 border-4 border-[#7B61FF] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-6">
          {stories.map((story) => (
            <Link to={`/blog/${story._id}`} key={story._id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={story.featuredImage}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <span className="bg-transparent border-0 px-4 py-1 rounded-full text-sm text-violet-500 cursor-pointer transition-colors hover:bg-violet-100 w-fit">
                    {story.category}
                  </span>

                  <h3 className="text-lg text-gray-900 font-semibold leading-snug line-clamp-1">
                    {story.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={story.profile_pic || "/profile.jpg"}
                      alt={story.author}
                      className="rounded-full w-8 h-8 object-cover"
                    />
                    <p className="text-gray-600 text-sm">By {story.author}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedStories;
