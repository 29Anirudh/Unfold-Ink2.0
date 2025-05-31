import ListItems from "../components/ListItems";

const Economics = ({ posts }) => {
  return (
    <section id="Economics" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">Economics</h1>

        {posts.length ? (
          <ListItems posts={posts} />
        ) : (
          <div className="flex flex-col justify-center items-center min-h-[60vh] text-center">
            <p className="text-3xl font-semibold mb-4">
              No Posts Found Under this Category.
            </p>
            <p className="text-lg text-gray-500">Check out our other posts.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Economics;
