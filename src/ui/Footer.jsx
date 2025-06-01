import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const sections = [
  "Home",
  "Politics",
  "Movies",
  "Cultural",
  "Economics",
  "Cricket",
];

const Footer = () => {
  const nav = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (section) => {
    if (location.pathname !== "/") {
      nav("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          smooth: true,
          offset: -70,
        });
      }, 200);
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">Unfold Ink</h2>
          <p className="mt-2 text-sm">
            A platform where stories unfold and ideas take shape. Join our
            community of readers and writers.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Categories</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            {sections.map((section) => (
              <li
                key={section}
                className="cursor-pointer hover:underline"
                onClick={() => handleCategoryClick(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li
              className="hover:underline cursor-pointer"
              onClick={() => nav("/AboutUs")}
            >
              About Us
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => nav("/contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
          <p className="text-sm">
            Seetharampalya, Bangalore,
            <br />
            Karnataka, 560048
          </p>
          <p className="mt-2 text-sm">Support@ugyan.in</p>
          <p className="text-sm">+91 79751 65470</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 Unfold Ink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
