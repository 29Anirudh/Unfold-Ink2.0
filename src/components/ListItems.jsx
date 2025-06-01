import Card from "./Card";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const ListItems = ({ posts }) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const startIndex = page * itemsPerPage;
  const visiblePosts = posts.slice(startIndex, startIndex + itemsPerPage);
  const hasNext = startIndex + itemsPerPage < posts.length;
  const hasPrev = startIndex > 0;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-7 pb-20">
        {visiblePosts.map((post, index) => (
          <li key={post._id || index}>
            <Card post={post} />
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        {/* Prev Button */}
        {hasPrev ? (
          <button
            onClick={() => setPage(page - 1)}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg shadow-[#7B61FF] hover:scale-105 transform transition cursor-pointer"
            aria-label="Previous page"
          >
            <FaAngleDoubleLeft size={24} color="#7B61FF" />
          </button>
        ) : (
          <div className="w-14 h-14" />
        )}

        {/* Next Button */}
        {hasNext ? (
          <button
            onClick={() => setPage(page + 1)}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg shadow-[#7B61FF] hover:scale-105 transform transition cursor-pointer"
            aria-label="Next page"
          >
            <FaAngleDoubleRight size={24} color="#7B61FF" />
          </button>
        ) : (
          <div className="w-14 h-14" />
        )}
      </div>
    </div>
  );
};

export default ListItems;
