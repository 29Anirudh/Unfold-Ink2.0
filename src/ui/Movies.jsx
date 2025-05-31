import ListItems from "../components/ListItems";
const Movies = ({ posts }) => {
  return (
    <>
    <section id="movies" className="py-20 bg-white">
      <div className="w-screen min-h-screen bg-white pt-20 p-16" id="Movies">
        <p className="text-3xl font-bold">Movies</p>
        {posts.length ? (
          <ListItems posts={posts} />
        ) : (
          <div className="flex flex-col justify-center items-center min-h-screen">
            <p className="text-4xl font-semibold">
              No Posts Found Under this category.
            </p>
            <p className="text-lg text-gray-500">Checkout our other posts.</p>
          </div>
        )}
      </div>
      </section>
    </>
  );
};
export default Movies;
