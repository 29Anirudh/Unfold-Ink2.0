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

      {/* About Section */}
      <section className="min-h-screen flex flex-wrap justify-center items-center gap-10 px-4 py-10">
        <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-xl p-6 w-72 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae semper elit.
          </p>
        </div>
        <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-xl p-6 w-72 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <p>
            Our mission is to innovate and inspire. We believe in excellence and teamwork.
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
