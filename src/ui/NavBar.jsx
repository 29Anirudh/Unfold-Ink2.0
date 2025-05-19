import { Link } from "react-scroll";
const Nav = () => {
  return (
    <>
      <div className="flex bg-white shadow-lg justify-evenly py-3 px-4 items-center fixed z-20 top-0 w-screen">
        <div className="w-[20%] text-xl font-bold cursor-pointer">
          {/* Logo */}
          <div>Unfold Ink</div>
        </div>
        <div className="w-[60%]">
          <ul className="flex justify-evenly text-lg text-gray-600">
            <li className="cursor-pointer">
              <Link
                to="Home"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="Politics"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Politics
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="Movies"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Movies
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="Cultural"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Cultural
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="Economics"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Economics
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="Cricket"
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
              >
                Cricket
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[20%] flex justify-evenly text-lg">
          <button className="bg-violet-500 rounded-full text-white px-4 py-1">
            Create a Blog
          </button>
          <button>User</button>
        </div>
      </div>
    </>
  );
};
export default Nav;
