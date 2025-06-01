import React from "react";
import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16 md:px-20">
      <h1 className="text-4xl font-bold text-violet-600 mb-8">Have Any Questions?</h1>
      <p className="text-lg text-gray-700 mb-10 max-w-3xl text-center">
        Let's connect and help you with any queries you have. Reach out to us through any of the methods below.
      </p>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Contact Info */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MdLocationOn size={30} className="text-violet-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Address</h2>
              <p className="text-gray-600 leading-relaxed">
                Seetharampalya, Bangalore, Karnataka, 560048
              </p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-start gap-4">
            <MdPhone size={30} className="text-violet-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Phone Number</h2>
              <p className="text-gray-600 leading-relaxed">+91 79751 65470</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <MdAccessTime size={30} className="text-violet-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hours of Operation</h2>
              <p className="text-gray-600 leading-relaxed">Monday - Saturday: 10 AM to 7 PM</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none"
          />
          <button
            type="submit"
            className="bg-violet-600 text-white font-semibold py-3 rounded-md hover:bg-violet-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
