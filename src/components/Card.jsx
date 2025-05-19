const Card = ({ post }) => {
  return (
    <>
      <div className="rounded-xl hover:scale-105 shadow-md hover:shadow-lg transition-all hover:shadow-gray-500 cursor-pointer">
        <div className="rounded-xl relative h-48 overflow-hidden">
          <img
            src={post.img}
            alt="Image Not Found"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-6 py-3 flex flex-col">
          <p className="text-xl font-bold pt-3">{post.header}</p>
          <p className="line-clamp-3 text-gray-500 pt-3">{post.content}</p>
          <div className="pt-4 flex flex-row justify-between items-center text-gray-500">
            <div className="flex flex-row items-center gap-3">
              <img src={post.profile_pic} className="rounded-full w-8 " />
              <p>{post.author}</p>
            </div>
            <div className="text-sm">{post.date}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
