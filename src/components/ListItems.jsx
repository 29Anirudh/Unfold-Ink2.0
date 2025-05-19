import Card from "./Card";
import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
const ListItems = ({ posts }) => {
  const [page, setPage] = useState(0);
  const startIndex = page * 3;
  const visiblePosts = posts.slice(startIndex, startIndex + 3);
  const hasNext = startIndex + 3 < posts.length;
  const hasPrev = startIndex > 0;
  console.log(posts);
  return (
    <>
      <div>
        <ul className="grid grid-cols-3 pt-7 pb-20 gap-10">
          {visiblePosts.map((post, index) => (
            <li key={index}>
              <Card post={post} />
            </li>
          ))}
        </ul>
        <div className="flex flex-row relative">
          <div className="absolute left-10 bottom-0 ">
            {hasPrev && (
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white shadow-lg shadow-[#7B61FF] hover:scale-105 cursor-pointer"
                onClick={() => setPage(page - 1)}
              >
                <FaAngleDoubleLeft size={40} color="#7B61FF" />
              </div>
            )}
          </div>
          <div className="absolute right-10 bottom-0">
            {hasNext && (
              <div
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white shadow-lg shadow-[#7B61FF] hover:scale-105 cursor-pointer"
                onClick={() => setPage(page + 1)}
              >
                <FaAngleDoubleRight size={40} color="#7B61FF" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ListItems;
