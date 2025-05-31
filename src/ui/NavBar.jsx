import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 80) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false); // close menu after click on mobile
  };

  return (
    <nav className="bg-white fixed top-0 z-20 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
        >
          Unfold Ink
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-lg text-gray-600">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className={`cursor-pointer ${
                  activeSection === section
                    ? "text-black font-semibold border-b-2 border-blue-600"
                    : ""
                }`}
                onClick={()=>navigate('/')}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* User & CTA */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            className="bg-violet-500 rounded-full text-white px-4 py-1"
            onClick={() => navigate("/create")}
          >
            Create a Blog
          </button>
          {user ? (
            <img
              src={user.photo || "/profile.png"}
              alt={user.name}
              className="h-8 w-8 object-cover rounded-full cursor-pointer hover:scale-105 hover:shadow-md transition-all"
              onClick={() => navigate("/profile")}
            />
          ) : (
            <FaRegUser
              size={28}
              className="text-gray-700 hover:text-violet-600 transition cursor-pointer border-2 rounded-full border-black p-1"
              onClick={() => navigate("/signup")}
            />
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2 text-lg text-gray-700">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`block ${
                    activeSection === section
                      ? "text-black font-semibold"
                      : ""
                  }`}
                  onClick={handleNavClick}
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="bg-violet-500 text-white py-2 rounded-lg"
            onClick={() => {
              navigate("/create");
              setMenuOpen(false);
            }}
          >
            Create a Blog
          </button>
          {user ? (
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/profile");
                setMenuOpen(false);
              }}
            >
              <img
                src={user.photo || "profile.png"}
                alt={user.name}
                className="h-8 aspect-square rounded-full"
              />
              <p>{user.name || "Profile"}</p>
            </div>
          ) : (
            <button
              className="text-left flex items-center gap-2 text-gray-700 hover:text-violet-600"
              onClick={() => {
                navigate("/signup");
                setMenuOpen(false);
              }}
            >
              <FaRegUser size={20} />
              Sign Up
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
