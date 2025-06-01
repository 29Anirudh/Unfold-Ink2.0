import { useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";

const sections = [
  "Home",
  "Politics",
  "Movies",
  "Cultural",
  "Economics",
  "Cricket",
  "About Us",
  "Contact Us",
];

const NavBar = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // State to hold target scroll section after navigation
  const [scrollTarget, setScrollTarget] = useState(null);

  useEffect(() => {
    // Scroll to target section after navigating to home
    if (scrollTarget && location.pathname === "/") {
      scroller.scrollTo(scrollTarget, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
      setScrollTarget(null);
    }
  }, [scrollTarget, location.pathname]);

  useEffect(() => {
    // Update active section underline based on current route or scroll position
    if (location.pathname === "/AboutUs") {
      setActiveSection("About Us");
    } else if (location.pathname === "/contact") {
      setActiveSection("Contact Us");
    } else if (location.pathname === "/") {
      const handleScroll = () => {
        let current = "Home";

        for (const section of sections) {
          if (section === "About Us" || section === "Contact Us") continue;
          const el = document.getElementById(section);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section;
          }
        }
        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // On other routes (if any), remove highlight
      setActiveSection(null);
    }
  }, [location.pathname]);

  // Handle click for nav items
  const handleNavClick = (section) => {
    setMenuOpen(false);

    if (section === "About Us") {
      navigate("/AboutUs");
    } else if (section === "Contact Us") {
      navigate("/contact");
    } else {
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll to section
        setScrollTarget(section);
        navigate("/");
      } else {
        // Already home, just scroll
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -70,
        });
      }
    }
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg text-gray-600">
          {sections.map((section) => (
            <li key={section}>
              {/* About Us and Contact Us are route links */}
              {(section === "About Us" || section === "Contact Us") ? (
                <Link
                  to={section === "Contact Us" ? "/contact" : "/AboutUs"}
                  className={`cursor-pointer ${
                    activeSection === section
                      ? "text-black font-semibold border-b-2 border-blue-600"
                      : ""
                  }`}
                  onClick={() => handleNavClick(section)}
                >
                  {section}
                </Link>
              ) : (
                // Scroll links
                <button
                  className={`cursor-pointer bg-transparent border-none ${
                    activeSection === section
                      ? "text-black font-semibold border-b-2 border-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => handleNavClick(section)}
                >
                  {section}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* User & Create Blog */}
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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2 text-lg text-gray-700">
            {sections.map((section) => (
              <li key={section}>
                {(section === "About Us" || section === "Contact Us") ? (
                  <Link
                    to={section === "Contact Us" ? "/contact" : "/AboutUs"}
                    className={`block ${
                      activeSection === section ? "text-black font-semibold" : ""
                    }`}
                    onClick={() => handleNavClick(section)}
                  >
                    {section}
                  </Link>
                ) : (
                  <button
                    className={`block bg-transparent border-none text-left w-full ${
                      activeSection === section ? "text-black font-semibold" : "text-gray-700"
                    }`}
                    onClick={() => handleNavClick(section)}
                  >
                    {section}
                  </button>
                )}
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
                src={user.photo || "/profile.png"}
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
