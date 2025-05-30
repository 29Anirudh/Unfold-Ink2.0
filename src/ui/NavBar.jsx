import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const NavBar = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-white shadow-lg justify-evenly py-3 px-4 items-center fixed z-20 top-0 w-screen">
      {/* Left: Logo */}
      <div className="w-[20%] text-xl font-bold cursor-pointer">Unfold Ink</div>
      <div className="w-[60%]">
        <ul className="flex justify-evenly text-lg text-gray-600">
          {[
            "Home",
            "Politics",
            "Movies",
            "Cultural",
            "Economics",
            "Cricket",
          ].map((section) => (
            <li key={section} className="cursor-pointer">
              <Link
                to={section}
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                onClick={() => navigate("/")}
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
          <div className="" onClick={() => navigate("/profile")}>
            <img
              src={user.photo || "profile.png"}
              alt={user.name}
              className="h-8 aspect-square rounded-full cursor-pointer hover:scale-105 hover:shadow-md transition-all hover:shadow-black "
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
