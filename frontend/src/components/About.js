import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        {/* <h1>About Us</h1>
        <p>We are passionate about making your travel dreams come true.</p> */}
      </div>
      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Travel, our mission is to provide unforgettable travel experiences tailored to your needs. We believe that travel is not just about reaching a destination, but about the journey and the memories created along the way. Our team is dedicated to curating unique and personalized travel experiences that inspire and delight.
          </p>
        </section>
        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2020 by a group of travel enthusiasts, we started with a simple vision: to make travel accessible and enjoyable for everyone. From humble beginnings, we've grown into a leading travel agency with a commitment to excellence. Our team is comprised of experienced travel experts who share a passion for exploring the world and helping others do the same.
          </p>
        </section>
        <section className="our-team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              {/* <img src="/path/to/team-member1.jpg" alt="Krishna Patil" /> */}
              <h3>Krishna Patil</h3>
              <p>Founder & CEO</p>
              <p>Krishna is an avid traveler with over 5 years of experience in the travel industry. His passion for exploring new destinations drives our company’s vision.</p>
            </div>
            <div className="team-member">
              {/* <img src="/path/to/team-member2.jpg" alt="Ram Patil" /> */}
              <h3>Ram Patil</h3>
              <p>Travel Consultant</p>
              <p>Ram specializes in creating customized travel itineraries. Her extensive knowledge of destinations and local cultures ensures every trip is a unique adventure.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
      </div>
      <div className="about-footer">
        <p>We look forward to helping you plan your next adventure. Contact us today to start your journey!</p>
      </div>
    </div>
  );
}

export default About;
