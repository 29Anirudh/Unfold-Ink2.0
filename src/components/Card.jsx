import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const author = post.author;

  return (
    <Link
      to={`/blog/${post._id}`}
      key={post._id}
      className="block rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-48 overflow-hidden rounded-t-xl">
        <img
          src={post.featuredImage}
          alt="Image Not Found"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="p-4 sm:p-6 flex flex-col">
        <p className="text-lg sm:text-xl font-bold line-clamp-1">
          {post.title}
        </p>

        <div
          className="prose max-w-none line-clamp-3 text-gray-600 text-sm sm:text-base mt-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="pt-4 flex flex-row justify-between items-center text-gray-500 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <img
              src={author.photo || "profile.jpg"}
              alt={author.fullName}
              className="rounded-full w-7 h-7 sm:w-8 sm:h-8 object-cover"
            />
            <p className="truncate max-w-[100px] sm:max-w-[150px]">
              {author.fullName}
            </p>
          </div>
          <div>{new Date(post.updatedAt).toLocaleDateString()}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
