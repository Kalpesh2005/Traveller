import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from '../assets/images/background.jpeg'; // Adjust the path as necessary

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Make in Your Journey.</h1>
          <p><h3>Explore the world with what you love beautiful natural beauty.</h3></p>
          <p className="popular-places"><h3>Popular Places: Kedarnath, Andaman & Nicobar Islands, Bali, Maldives</h3></p>
            <Link to="/explore" className="explore-btn">Explore Now</Link>
          </div>
        </div>
      </div>
  );
}

export default Home;



