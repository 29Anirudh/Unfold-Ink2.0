import { Link } from "react-scroll";
const sections = [
  "Home",
  "Politics",
  "Movies",
  "Cultural",
  "Economics",
  "Cricket",
];
const Footer = () => {
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

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Categories</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            {sections.map((section) => (
              <li key={section} className="cursor-pointer hover:underline">
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust based on navbar height
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Get in Touch
          </h3>
          <p className="text-sm">
            123 Media Street,
            <br />
            New York, NY 10001
          </p>
          <p className="mt-2 text-sm"> contact@unfoldink.com</p>
          <p className="text-sm"> +1 (555) 123-4567</p>
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