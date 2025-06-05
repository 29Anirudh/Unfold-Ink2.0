import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoUpload } from "react-icons/go";

function BlogFullview({ allPosts }) {
  const BASE_URL =
    process.env.REACT_APP_BACKEND_BASEURL ||
    "https://unfold-ink-backend.vercel.app";
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [commentError, setCommentError] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [postId]);

  const flattenedPosts = allPosts.flat();
  const post = flattenedPosts.find((p) => p._id === postId);
  console.log(post);
  useEffect(() => {
    if (post) {
      setComments(post.comments || []);
    }
  }, [post]);

  const addComment = async (blogId, commentText, token) => {
    try {
      const response = await fetch(`${BASE_URL}/api/blogs/${blogId}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: commentText }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      return data.comment;
    } catch (err) {
      console.error("Failed to add comment:", err.message);
      throw err;
    }
  };

  const handleCommentSubmit = async () => {
    if (commentText.trim() === "") {
      setCommentError("Nothing to comment");
      return;
    }

    try {
      const newComment = await addComment(postId, commentText, token);
      setComments((prev) => [...prev, newComment]);
      setCommentText("");
      setCommentError("");
    } catch (err) {
      alert("Error posting comment: " + err.message);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/blogs/${postId}/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      setComments((prev) => prev.filter((c) => c._id !== commentId));
    } catch (err) {
      alert("Failed to delete comment: " + err.message);
    }
  };

  const currentUserId = token
    ? JSON.parse(atob(token.split(".")[1])).userId
    : null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        <style>{`
          .loader {
            border-top-color: #6366f1;
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Blog post not found
          </h2>
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
                src={author.photo || "/profile.jpg"}
                alt={author.fullName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900 text-base sm:text-lg">
                  {author.fullName}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {new Date(post.createdAt).toDateString()}
                </p>
              </div>
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

          <label
            htmlFor="add-a-comment"
            className="text-black text-lg mb-2 block"
          >
            Add a Comment
          </label>
          <div className="w-full flex items-center border rounded overflow-hidden mb-2">
            <input
              id="add-a-comment"
              type="text"
              placeholder="Type here..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-grow p-2 outline-none"
            />
            <button
              type="submit"
              className="p-2 hover:bg-gray-200 transition-colors duration-200"
              aria-label="Upload comment"
              onClick={handleCommentSubmit}
            >
              <GoUpload size={20} color="gray" />
            </button>
          </div>
          {commentError && (
            <div className="w-full text-red-500 pl-2">{commentError}</div>
          )}

          {comments.length === 0 ? (
            <p className="text-gray-600 text-base sm:text-lg mt-4">
              No comments yet.
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {comments.map((comment) => (
                <li
                  key={comment._id}
                  className="border p-3 rounded bg-gray-50 flex justify-between items-start"
                >
                  <div>
                    <p className="font-semibold text-sm">{comment.username}</p>
                    <p className="text-gray-700 py-2">{comment.text}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(comment.createdAt).toLocaleString()}
                    </p>
                  </div>
                  {comment.userId?.toString() === currentUserId && (
                    <button
                      onClick={() => handleDeleteComment(comment._id)}
                      className="text-red-500 text-sm hover:underline ml-4"
                    >
                      <i> Delete</i>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default BlogFullview;
