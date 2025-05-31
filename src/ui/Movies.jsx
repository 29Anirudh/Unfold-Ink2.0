import ListItems from "../components/ListItems";

const Movies = ({ posts }) => {
  return (
    <section id="Movies" className="bg-white">
      <div className="w-full min-h-screen bg-white pt-20 px-4 sm:px-8 md:px-12 lg:px-16 py-10">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Movies</p>

        {posts.length ? (
          <ListItems posts={posts} />
        ) : (
          <div className="flex flex-col justify-center items-center min-h-[60vh] text-center">
            <p className="text-2xl sm:text-3xl font-semibold mb-2">
              No Posts Found Under this Category.
            </p>
            <p className="text-base sm:text-lg text-gray-500">
              Check out our other posts.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Movies;
