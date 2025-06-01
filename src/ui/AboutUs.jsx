import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="background"></div>

      {/* Page 1: About Section */}
      <section className="section about-section">
        <div className="glass about-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae semper elit.
          </p>
        </div>
        <div className="glass about-box">
          <p>
            Our mission is to innovate and inspire. We believe in excellence and teamwork.
          </p>
        </div>
      </section>

      {/* Page 2: Our Team Section */}
      <section className="section team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {[
            { img: 'profile.png', name: 'Phanindra Tippabattina', role: 'Designer' },
            { img: 'profile.png', name: 'Charani Jatavathu', role: 'Front end Developer' },
            { img: 'profile.png', name: 'Vijay Krishna Uppara', role: 'Front end Developer' },
            { img: 'profile.png', name: 'Denyusha Sunnampudi', role: 'Front end Developer' },
            { img: 'profile.png', name: 'Anirudh Batana', role: 'Backend Developer' },
            { img: 'profile.png', name: 'Bharath kalyan', role: 'Backend Developer' },
          ].map((member, index) => (
            <div className="glass team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;