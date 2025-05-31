import Card from "./Card";
import { useState, useEffect, useRef } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const ListItems = ({ posts }) => {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const itemsPerPage = 3;

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const hasNext = page < totalPages - 1;
  const hasPrev = page > 0;

  // Handle carousel scroll on desktop
  useEffect(() => {
    if (!isMobile && containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.offsetWidth;
      container.scrollTo({
        left: scrollAmount * page,
        behavior: "smooth",
      });
    }
  }, [page, isMobile]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Posts Container */}
      <div
        ref={containerRef}
        className={`flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide transition-all duration-500 ${
          isMobile ? "flex-wrap" : "overflow-hidden"
        }`}
      >
        {(isMobile ? posts : posts.slice(0)).map((post, index) => (
          <div
            key={post._id || index}
            className={`flex-shrink-0 w-full sm:w-full md:w-1/2 lg:w-1/3`}
            style={{ scrollSnapAlign: "start" }}
          >
            <Card post={post} />
          </div>
        ))}
      </div>

      {/* Navigation buttons - only on desktop */}
      {!isMobile && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-2 -translate-y-1/2">
          {/* Prev */}
          {hasPrev ? (
            <button
              onClick={() => setPage(page - 1)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg shadow-[#7B61FF] hover:scale-110 transition-transform duration-300"
              aria-label="Previous"
            >
              <FaAngleDoubleLeft size={20} color="#7B61FF" />
            </button>
          ) : (
            <div className="w-12 h-12" />
          )}

          {/* Next */}
          {hasNext ? (
            <button
              onClick={() => setPage(page + 1)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg shadow-[#7B61FF] hover:scale-110 transition-transform duration-300"
              aria-label="Next"
            >
              <FaAngleDoubleRight size={20} color="#7B61FF" />
            </button>
          ) : (
            <div className="w-12 h-12" />
          )}
        </div>
      )}
    </div>
  );
};

export default ListItems;
