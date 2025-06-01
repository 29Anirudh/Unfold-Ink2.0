import ListItems from "../components/ListItems";

const Politics = ({ posts }) => {
  const loading = !posts || posts.length === 0;

  return (
    <section id="Politics" className="bg-white">
      <div className="w-full min-h-screen bg-white px-4 pt-20 sm:px-8 md:px-12 lg:px-16 py-10">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Politics</p>

        {loading ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="w-16 h-16 border-4 border-[#7B61FF] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <ListItems posts={posts} />
        )}
      </div>
    </section>
  );
};


export default Politics;
