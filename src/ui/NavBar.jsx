import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const sections = [
  "Home",
  "Politics",
  "Movies",
  "Cultural",
  "Economics",
  "Cricket",
];

const NavBar = ({ user }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";

      // Check each section's position relative to viewport top
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        // When top of section is at or above 80px from viewport top (accounting for navbar height)
        if (rect.top <= 80) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run once on mount to set correct activeSection if page loads scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex bg-white shadow-lg justify-evenly py-3 px-4 items-center fixed z-20 top-0 w-screen">
      <div
        className="w-[20%] text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Unfold Ink
      </div>

      <div className="w-[60%]">
        <ul className="flex justify-evenly text-lg text-gray-600">
          {sections.map((section) => (
            <li key={section} className="cursor-pointer">
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // Adjust based on navbar height
                className={`${
                  activeSection === section
                    ? "text-black font-semibold border-b-2 border-blue-600"
                    : ""
                }`}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[20%] flex justify-evenly text-lg items-center">
        <button
          className="bg-violet-500 rounded-full text-white px-4 py-1"
          onClick={() => navigate("/create")}
        >
          Create a Blog
        </button>
        {user ? (
          <div onClick={() => navigate("/profile")}>
            <img
              src={user.photo || "profile.png"}
              alt={user.name}
              className="h-8 aspect-square rounded-full cursor-pointer hover:scale-105 hover:shadow-md transition-all hover:shadow-black"
            />
          </div>
        ) : (
          <FaRegUser
            size={35}
            className="text-gray-700 hover:text-violet-600 transition cursor-pointer border-2 rounded-full border-black p-1"
            onClick={() => navigate("/signup")}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
