import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    { img: 'profile.png', name: 'Phanindra Tippabattina', role: 'Designer' },
    { img: 'profile.png', name: 'Charani Jatavathu', role: 'Front end Developer' },
    { img: 'profile.png', name: 'Vijay Krishna Uppara', role: 'Front end Developer' },
    { img: 'profile.png', name: 'Denyusha Sunnampudi', role: 'Front end Developer' },
    { img: 'profile.png', name: 'Anirudh Batana', role: 'Backend Developer' },
    { img: 'profile.png', name: 'Bharath kalyan', role: 'Backend Developer' },
  ];

  return (
    <div className="relative text-white font-sans">
      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center brightness-50 z-[-1] bg-fixed" style={{ backgroundImage: 'url("home_page_img.jpg")' }} />

      <section className="min-h-screen flex flex-col justify-center items-center gap-10 px-4 py-10">
  {/* Our Story */}
  <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-xl p-8 w-full max-w-4xl mt-10 hover:scale-105 hover:shadow-lg transition-all duration-300">
  <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
  <p className="text-white/80 leading-relaxed">
    Unfold Ink was born out of a simple yet powerful idea — to create a space where every voice has a place, and every story matters. In an age where attention is fleeting and creativity is often confined, we wanted to build a platform that encourages thoughtful expression and storytelling in its purest form.
    <br /><br />
    What started as a small passion project has now evolved into a vibrant platform where writers, thinkers, dreamers, and everyday people come together to write about what they love — from politics and pop culture to personal experiences and niche interests. We believe that writing is more than just a medium — it's a mirror of our thoughts, a way to inspire, and a path to connect with others.
    <br /><br />
    Whether you're a seasoned blogger or someone penning their first post, Unfold Ink is designed to support your journey. Our easy-to-use tools, modern editor, and diverse categories are built to help you unfold your thoughts and turn them into meaningful content. This is your stage — and your story deserves to be told.
  </p>
</div>

  {/* Our Mission & Vision */}
  <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-xl p-8 w-full max-w-4xl hover:scale-105 hover:shadow-lg transition-all duration-300">
  <h2 className="text-2xl font-bold text-white mb-4">Our Mission & Vision</h2>
  <p className="text-white/80 leading-relaxed">
    Our mission at Unfold Ink is to democratize the art of storytelling by making blogging accessible to everyone, regardless of background, experience, or expertise. We believe that every individual has something valuable to share — whether it's knowledge, opinion, creativity, or life experience. Our goal is to provide a platform that not only empowers users to write, but also encourages them to engage, learn, and grow as part of a wider community.
    <br /><br />
    We are committed to building a space that is open, respectful, and inspiring — where diverse voices are heard and celebrated. Through intuitive tools, a modern writing interface, and category-driven exploration, we aim to lower the barriers to content creation and make blogging a joyful, expressive act.
    <br /><br />
    Our vision is to evolve into a global storytelling ecosystem — a vibrant digital space where writers from all walks of life can come together to inform, inspire, and ignite conversations. We envision Unfold Ink as more than a platform — as a movement that champions authenticity, nurtures creativity, and connects people through the written word.
  </p>
</div>
</section>


      {/* Team Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/20 border border-white/30 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 w-64"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-2 border-white mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-sm font-bold text-gray-200">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
