import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';

const locations = [
  {
    name: 'Andaman & Nicobar Islands',
    description: 'The Andaman & Nicobar Islands is geographically located at the Bay of Bengal, Longitude 92 degree to 94 degree East, Latitude 60 to 140 North and a Distance of 1200 Kms from Chennai/Kolkatta to Port Blair.',
    image: require('../assets/images/andaman.jpeg'),
  },
  {
    name: 'Lakshadweep',
    description: 'Lakshadweep, the group of 36 islands is known for its exotic and sun-kissed beaches and lush green landscape. The name Lakshadweep in Malayalam and Sanskrit means a hundred thousand islands.',
    image: require('../assets/images/lakshadweep.jpeg'),
  },
  {
    name: 'Manali',
    description: 'Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route...',
    image: require('../assets/images/manali.jpeg'),
  },
  {
    name: 'Shimla',
    description: 'Shimla, city, capital of Himachal Pradesh state, northwestern India...',
    image: require('../assets/images/shimla.jpeg'),
  },
  {
    name: 'Ladakh',
    description: 'Ladakh (meaning "land of high mountain passes") is a mountainous region in North India...',
    image: require('../assets/images/ladakh.jpeg'),
  },
  {
    name: 'Kachchh',
    description: 'Kachchh is an ancient land possessed of great antiquity...',
    image: require('../assets/images/kachchh.jpeg'),
  },
  {
    name: 'Kedarnath',
    description: 'Chota Char Dham Yamunotri Gangotri Kedarnath Badrinath...',
    image: require('../assets/images/kedarnath.jpeg'),
  },
  {
    name: 'Bali',
    description: 'Bali is a beautiful Indonesian island known for its forested volcanic mountains...',
    image: require('../assets/images/bali.jpeg'),
  },
  {
    name: 'Maldives',
    description: 'The Republic of the Maldives is an island nation in the Indian Ocean...',
    image: require('../assets/images/maldives.jpeg'),
  },
  {
    name: 'Bangkok',
    description: 'Bangkok, city, capital, and chief port of Thailand...',
    image: require('../assets/images/bangkok.jpeg'),
  },
  {
    name: 'New York',
    description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean...',
    image: require('../assets/images/newyork.jpeg'),
  },
  {
    name: 'Paris',
    description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy, and culture.',
    image: require('../assets/images/paris.jpeg'),
  },
];

function Explore() {
  const navigate = useNavigate();

  const handleLocationClick = (locationName) => {
    navigate('/packages', { state: { locationName } });
  };

  return (
    <div className="explore-container">
      {/* <h1>Explore Locations</h1> */}
      <div className="locations-list">
        {locations.map((location, index) => (
          <div className="location-card" key={index} onClick={() => handleLocationClick(location.name)}>
            <img src={location.image} alt={location.name} className="location-image" />
            <div className="location-info">
              <h2>{location.name}</h2>
              <p>{location.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
