import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">Unfold Ink</h2>
          <p className="mt-2 text-sm">
            A platform where stories unfold and ideas take shape. Join our community of readers and writers.
          </p>
        </div>

        {/* Categories */}
        <div>
  <h3 className="text-lg font-semibold text-white mb-2">Categories</h3>
  <ul className="space-y-2 text-sm flex flex-col items-center">
    <li><a href="#home" className="hover:underline text-white" >Home</a></li>
    <li><a href="#politics" className="hover:underline text-white">Politics</a></li>
    <li><a href="#economics" className="hover:underline text-white">Economics</a></li>
    <li><a href="#cultural" className="hover:underline text-white">Cultural</a></li>
    <li><a href="#movies" className="hover:underline text-white">Movies</a></li>
    <li><a href="#cricket" className="hover:underline text-white">Cricket</a></li>
  </ul>
</div>


        {/* Company */}
        <div>
  <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
  <ul className="space-y-1 text-sm">
    <li><Link to="/about" className="hover:underline text-white">About Us</Link></li>
    <li>Careers</li>
    <li>Privacy Policy</li>
    <li>Terms of Service</li>
    <li>Contact Us</li>
  </ul>
</div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
          <p className="text-sm">123 Media Street,<br />New York, NY 10001</p>
          <p className="mt-2 text-sm">📧 contact@unfoldink.com</p>
          <p className="text-sm">📞 +1 (555) 123-4567</p>
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