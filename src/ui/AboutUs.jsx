import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    { img: '/phani 2.jpeg', name: 'Phanindra Tippabattina', role: 'Designer' },
    { img: '/charani1.jpeg', name: 'Charani Jatavathu', role: 'Frontend Developer' },
    { img: '/vijay.jpeg', name: 'Vijay Krishna Uppara', role: 'Frontend Developer' },
    { img: '/denyusha.jpeg', name: 'Denyusha Sunnampudi', role: 'Frontend Developer' },
    { img: '/ani.jpeg', name: 'Anirudh Batana', role: 'Backend Developer' },
    { img: '/bharath.jpeg', name: 'Bharath Kalyan Kanchumarthi', role: 'Backend Developer' },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans">
      {/* Background image div */}
      <div
        className="fixed top-0 left-0 w-full h-screen -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/AboutUs.jpg')",
          filter: 'brightness(0.6)',
        }}
      ></div>

      {/* Content section */}
      <section className="min-h-screen flex flex-col justify-center items-center gap-10 px-4 py-10 max-w-5xl mx-auto">
        {/* Our Story */}
        <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-xl p-8 w-full hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <h2 className="text-2xl font-bold text-black mb-4">Our Story</h2>
          <p className="text-white/80 leading-relaxed">
            Unfold Ink was born out of a simple yet powerful idea — to create a space where every voice has a place, and every story matters. In an age where attention is fleeting and creativity is often confined, we wanted to build a platform that encourages thoughtful expression and storytelling in its purest form.
            <br />
            <br />
            What started as a small passion project has now evolved into a vibrant platform where writers, thinkers, dreamers, and everyday people come together to write about what they love — from politics and pop culture to personal experiences and niche interests. We believe that writing is more than just a medium — it's a mirror of our thoughts, a way to inspire, and a path to connect with others.
            <br />
            <br />
            Whether you're a seasoned blogger or someone penning their first post, Unfold Ink is designed to support your journey. Our easy-to-use tools, modern editor, and diverse categories are built to help you unfold your thoughts and turn them into meaningful content. This is your stage — and your story deserves to be told.
          </p>
        </div>

        {/* Our Mission & Vision */}
        <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-xl p-8 w-full hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <h2 className="text-2xl font-bold text-black mb-4">Our Mission & Vision</h2>
          <p className="text-white/80 leading-relaxed">
            Our mission at Unfold Ink is to democratize the art of storytelling by making blogging accessible to everyone, regardless of background, experience, or expertise. We believe that every individual has something valuable to share — whether it's knowledge, opinion, creativity, or life experience. Our goal is to provide a platform that not only empowers users to write, but also encourages them to engage, learn, and grow as part of a wider community.
            <br />
            <br />
            We are committed to building a space that is open, respectful, and inspiring — where diverse voices are heard and celebrated. Through intuitive tools, a modern writing interface, and category-driven exploration, we aim to lower the barriers to content creation and make blogging a joyful, expressive act.
            <br />
            <br />
            Our vision is to evolve into a global storytelling ecosystem — a vibrant digital space where writers from all walks of life can come together to inform, inspire, and ignite conversations. We envision Unfold Ink as more than a platform — as a movement that champions authenticity, nurtures creativity, and connects people through the written word.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg w-64"
            >
              <img
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 filter brightness-90 contrast-90 saturate-105 border-2 border-white"
                src={member.img}
                alt={member.name}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm font-bold text-gray-800">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white/15 backdrop-blur-md rounded-xl p-6 text-center max-w-4xl text-white font-medium text-base">
          <p>
            Mail us at{' '}
            <a
              href="mailto:support@ugyan.in"
              className="underline hover:text-blue-300"
            >
              support@ugyan.in
            </a>
            <br />
            Visit us at{' '}
            <a
              href="https://www.ugyan.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              www.ugyan.in
            </a>
            <br />
            @UGYAN_TECH_SOLUTIONS, BANGALORE
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
