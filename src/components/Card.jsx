import { Link } from "react-router-dom";
const Card = ({ post }) => {
  const author = post.author;
  return (
    <>
      <Link
        to={`/blog/${post._id}`}
        key={post._id}
      >
        <div className="rounded-xl hover:scale-105 shadow-md hover:shadow-lg transition-all hover:shadow-gray-500 cursor-pointer">
          <div className="rounded-xl relative h-48 overflow-hidden">
          <img
            src={post.featuredImage}
            alt="Image Not Found"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-6 py-3 flex flex-col">
          <p className="text-xl font-bold pt-3 line-clamp-1">{post.title}</p>
          <div
            className="prose max-w-none line-clamp-3 text-gray-600 text-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="pt-4 flex flex-row justify-between items-center text-gray-500">
            <div className="flex flex-row items-center gap-3">
              <img
                src={author.photo || "profile.png"}
                className="rounded-full w-8 aspect-square"
              />
              <p>{author.fullName}</p>
            </div>
            <div className="text-sm">
              {new Date(post.updatedAt).toLocaleDateString()}
            </div>
          </div>
        </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
