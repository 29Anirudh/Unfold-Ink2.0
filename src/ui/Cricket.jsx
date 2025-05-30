import ListItems from "../components/ListItems";
const Cricket = ({ posts }) => {
  return (
    <>
      <div className="w-screen min-h-screen bg-white pt-20 p-16" id="Cricket">
        <p className="text-3xl font-bold">Cricket</p>
        {posts.length ? (
          <ListItems posts={posts} />
        ) : (
          <div className="flex flex-col justify-center items-center min-h-screen">
            <p className="text-4xl font-semibold">No Posts Found Under this category.</p>
            <p className="text-lg text-gray-500">Checkout our other posts.</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Cricket;
