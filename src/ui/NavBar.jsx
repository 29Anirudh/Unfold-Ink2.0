import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-white shadow-lg justify-evenly py-3 px-4 items-center fixed z-20 top-0 w-screen">
      {/* Left: Logo */}
      <div className="w-[20%] text-xl font-bold cursor-pointer">
        Unfold Ink
      </div>

      {/* Center: Navigation Links */}
      <div className="w-[60%]">
        <ul className="flex justify-evenly text-lg text-gray-600">
          {["Home", "Politics", "Movies", "Cultural", "Economics", "Cricket"].map((section) => (
            <li key={section} className="cursor-pointer">
              <Link
                to={section}
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Buttons */}
      <div className="w-[20%] flex justify-evenly text-lg">
        <button
          className="bg-violet-500 rounded-full text-white px-4 py-1"
          onClick={() => navigate("/create")}
        >
          Create a Blog
        </button>
        <button className="text-gray-700 hover:text-violet-600 transition">
          User
        </button>
      </div>
    </div>
  );
};

export default NavBar;