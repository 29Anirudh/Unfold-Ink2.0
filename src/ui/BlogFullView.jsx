import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogFullview({ allPosts }) {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate async loading for demonstration; 
    // you can remove the timeout if your allPosts is always ready
    const timer = setTimeout(() => setLoading(false), 300); 

    return () => clearTimeout(timer);
  }, [postId]);

  const flattenedPosts = allPosts.flat();
  const post = flattenedPosts.find((p) => p._id === postId);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        <style>{`
          .loader {
            border-top-color: #6366f1; /* violet-600 */
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-xl text-center py-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Blog post not found</h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            No post found with ID: <span className="font-mono">{postId}</span>
          </p>
          <Link
            to="/"
            className="text-blue-600 hover:underline font-semibold text-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const author = post.author;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <main className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-10">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <img
                src={author.photo || "/profile.png"}
                alt={author.fullName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900 text-base sm:text-lg">{author.fullName}</p>
                <p className="text-sm sm:text-base text-gray-600">
                  {new Date(post.createdAt).toDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm sm:text-base">
              <span className="text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
              {post.rating && (
                <div className="flex items-center text-yellow-400">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L3.603 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  <span className="ml-1 text-gray-600">
                    {post.rating} ({post.ratingCount || 0} ratings)
                  </span>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="mb-8">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full max-h-96 sm:max-h-[450px] rounded-lg shadow-md object-cover mx-auto"
          />
        </div>

        <article
          className="prose prose-sm sm:prose lg:prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-6">Comments</h2>
          {/* Comments UI can be added here */}
          <p className="text-gray-600 text-base sm:text-lg">No comments yet.</p>
        </section>
      </main>
    </div>
  );
}

export default BlogFullview;
