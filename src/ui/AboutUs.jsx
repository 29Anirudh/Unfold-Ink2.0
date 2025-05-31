import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-20 px-6 md:px-20 bg-white text-gray-800">
      <section className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4 text-violet-600">About Unfold Ink</h1>
        <p className="text-lg max-w-2xl mx-auto">
          At Unfold Ink, we believe in the power of words to inspire, inform, and ignite change. Our platform is a haven for storytellers, thinkers, and readers alike.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold mb-4 text-violet-600">Our Mission</h2>
          <p>
            To provide a space where voices from all walks of life can share their narratives, insights, and creativity. We aim to foster a community that values authenticity and diversity.
          </p>
        </div>
        <div data-aos="fade-left">
          <img src="/images/mission.jpg" alt="Our Mission" className="rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div data-aos="fade-right" className="order-2 md:order-1">
          <img src="/images/vision.jpg" alt="Our Vision" className="rounded-lg shadow-lg" />
        </div>
        <div data-aos="fade-left" className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold mb-4 text-violet-600">Our Vision</h2>
          <p>
            To become the go-to platform for bloggers and readers seeking meaningful content that resonates and inspires.
          </p>
        </div>
      </section>

      <section className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4 text-violet-600">Join Our Community</h2>
        <p className="mb-6">
          Whether you're a seasoned writer or just starting out, Unfold Ink welcomes you. Share your stories, connect with readers, and be part of a vibrant community.
        </p>
        <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
