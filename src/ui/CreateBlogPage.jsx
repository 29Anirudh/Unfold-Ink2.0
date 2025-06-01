import BlogEditor from "./BlogEditor";

const CreateBlogPage = ({ user }) => {
  return (
    <section className="min-h-screen flex justify-center items-start pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 sm:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Create a New Blog Post</h1>
        <BlogEditor user={user} />
      </div>
    </section>
  );
};

export default CreateBlogPage;
