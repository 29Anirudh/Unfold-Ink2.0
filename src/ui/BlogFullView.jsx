import React from "react";
import NavBar from "./NavBar";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

function BlogFullview({ allPosts }) {
  const { postId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  const flattenedPosts = allPosts.flat();
  const post = flattenedPosts.find((p) => p._id === postId);
  const author = post.author;
  console.log(allPosts);
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="container mx-auto pt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <p className="text-gray-600">No post found with ID: {postId}</p>
          <Link
            to="/"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto py-8 pt-20 px-4">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center mb-6">
            <img
              src={author.photo || "/profile.png"}
              alt={author.fullName}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-medium text-gray-900">{author.fullName}</p>
              <p className="text-sm text-gray-600">
                {new Date(post.createdAt).toDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            <span className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
            {post.rating && (
              <div className="flex items-center mr-4">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="..." />
                </svg>
                <span className="ml-1 text-gray-600">
                  {post.rating} ({post.ratingCount || 0} ratings)
                </span>
              </div>
            )}
          </div>
        </header>

        <div className="mb-8">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <article
          className="prose max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </div>
  );
}

export default BlogFullview;
