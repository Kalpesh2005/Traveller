// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './Packages.css';

// function Packages() {
//   const location = useLocation();
//   const { locationName } = location.state || {}; // Retrieve the selected location from state
//   const navigate = useNavigate();
//   const travelPackages = [
//         {
//           id: 1,
//           name: 'Andaman & Nicobar Islands',
//           duration: '8 Days / 7 Nights',
//           food: 'All-inclusive meals, Breakfast',
//           residence: 'Lake Resort',
//           tourPlans: ['Chidiya Tapu Beach', 'Bharatpur Beach', 'Elephant Beach'],
//           price: 'Rs.70,000',
//         },
//         {
//           id: 2,
//           name: 'Lakshadweep',
//           duration: '5 Days / 4 Nights',
//           food: 'All-inclusive meals',
//           residence: 'Beach Resort',
//           tourPlans: ['Agatti Island', 'Minicoy', 'Andretti Island'],
//           price: 'Rs.35,000',
//         },
//         {
//           id: 3,
//           name: 'Manali',
//           duration: '5 Days / 4 Nights',
//           food: 'All-inclusive meals',
//           residence: 'Mountain Resort',
//           tourPlans: ['Solang Valley', 'Rohtang Pass', 'Manu Temple'],
//           price: 'Rs.35,000',
//         },
//         {
//           id: 4,
//           name: 'Shimla',
//           duration: '4 Days / 3 Nights',
//           food: 'Breakfast and Dinner',
//           residence: 'Mountain Lodge',
//           tourPlans: ['Jakhoo Temple', 'Mall Road', 'The Ridge'],
//           price: 'Rs.25,000',
//         },
//         {
//           id: 5,
//           name: 'Ladakh',
//           duration: '7 Days / 6 Nights',
//           food: 'Full Board',
//           residence: 'Luxury Camps',
//           tourPlans: ['Pangong Lake', 'Nubra Valley', 'Leh Palace'],
//           price: 'Rs.45,000',
//         },
//         {
//           id: 6,
//           name: 'Kachchh',
//           duration: '6 Days / 5 Nights',
//           food: 'All-inclusive meals',
//           residence: 'Desert Resort',
//           tourPlans: ['Rann of Kutch', 'Mandvi Beach', 'Dhordo Village'],
//           price: 'Rs.30,000',
//         },
//         {
//           id: 7,
//           name: 'Kedarnath',
//           duration: '3 Days / 2 Nights',
//           food: 'Breakfast Only',
//           residence: 'Temple Guesthouse',
//           tourPlans: ['Kedarnath Temple', 'Gaurikund', 'Triyuginarayan Temple'],
//           price: 'Rs.20,000',
//         },
//         {
//           id: 8,
//           name: 'Bali',   
//           duration: '6 Days / 5 Nights',
//           food: 'All-inclusive meals',
//           residence: 'Beach Resort',
//           tourPlans: ['Uluwatu Temple', 'Tegallalang Rice Terraces', 'Kuta Beach'],
//           price: 'Rs.80,000',
//         },
//         {
//           id: 9,
//           name: 'Maldives',
//           duration: '5 Days / 4 Nights',
//           food: 'All-inclusive meals',
//           residence: 'Overwater Villa',
//           tourPlans: ['Male City Tour', 'Snorkeling', 'Diving'],
//           price: 'Rs.95,000',
//         },
//         {
//           id: 10,
//           name: 'Bangkok',
//           duration: '4 Days / 3 Nights',
//           food: 'Breakfast Only',
//           residence: 'City Hotel',
//           tourPlans: ['Grand Palace', 'Wat Pho', 'Floating Market'],
//           price: 'Rs.50,000',
//         },
//         {
//           id: 11,
//           name: 'New York',
//           duration: '7 Days / 6 Nights',
//           food: 'Breakfast Only',
//           residence: 'Luxury Hotel',
//           tourPlans: ['Statue of Liberty', 'Central Park', 'Empire State Building'],
//           price: 'Rs.95,000',
//         },
//         {
//           id: 12,
//           name: 'Paris',
//           duration: '5 Days / 4 Nights',
//           food: 'Breakfast Only',
//           residence: 'Luxury Hotel',
//           tourPlans: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
//           price: 'Rs.90,000',
//         },
//       ];
    

//   // Filter packages based on the selected location
//   const filteredPackages = locationName
//     ? travelPackages.filter((pkg) => pkg.name === locationName)
//     : travelPackages;

//   const handleBookNow = (pkg) => {
//     const user = localStorage.getItem('user'); // Check if user is logged in

//     if (!user) {
//       // If user is not logged in, show a message and navigate to login page
//       alert('You must log in first to book a package!');
//       navigate('/loginregister', { state: { packageName: pkg.name, packagePrice: pkg.price } });
//     } else {
//       // If user is logged in, navigate to the booking page
//       navigate('/book-now', { state: { packageName: pkg.name, packagePrice: pkg.price } });
//     }
//   };

//   return (
//     <div className="packages-container">
//       {locationName && <h2>Showing packages for {locationName}</h2>}
//       <div className="packages-list">
//         {filteredPackages.map((pkg) => (
//           <div key={pkg.id} className="package-card">
//             <h2>{pkg.name}</h2>
//             <ul className="package-details">
//               <li>
//                 <span className="detail-title"><strong>Duration:</strong></span>
//                 <span className="detail-content">{pkg.duration}</span>
//               </li>
//               <li>
//                 <span className="detail-title"><strong>Food:</strong></span>
//                 <span className="detail-content">{pkg.food}</span>
//               </li>
//               <li>
//                 <span className="detail-title"><strong>Residence:</strong></span>
//                 <span className="detail-content">{pkg.residence}</span>
//               </li>
//               <li>
//                 <span className="detail-title"><strong>Tour Plans:</strong></span>
//                 <ul className="tour-plans">
//                   {pkg.tourPlans.map((plan, index) => (
//                     <li key={index}>{plan}</li>
//                   ))}
//                 </ul>
//               </li>
//               <li>
//                 <span className="detail-title"><strong>Price:</strong></span>
//                 <span className="detail-content">{pkg.price}</span>
//               </li>
//             </ul>
//             <button className="book-now-btn" onClick={() => handleBookNow(pkg)}>
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Packages;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Packages.css';

function Packages() {
  const location = useLocation();
  const { locationName } = location.state || {};
  const navigate = useNavigate();

  const travelPackages = [
    {
      id: 1,
      name: 'Andaman & Nicobar Islands',
      duration: '8 Days / 7 Nights',
      food: 'All-inclusive meals, Breakfast',
      residence: 'Lake Resort',
      tourPlans: ['Chidiya Tapu Beach', 'Bharatpur Beach', 'Elephant Beach'],
      price: 'Rs.70,000',
    },
    {
      id: 2,
      name: 'Lakshadweep',
      duration: '5 Days / 4 Nights',
      food: 'All-inclusive meals',
      residence: 'Beach Resort',
      tourPlans: ['Agatti Island', 'Minicoy', 'Andretti Island'],
      price: 'Rs.35,000',
    },
    {
      id: 3,
      name: 'Manali',
      duration: '5 Days / 4 Nights',
      food: 'All-inclusive meals',
      residence: 'Mountain Resort',
      tourPlans: ['Solang Valley', 'Rohtang Pass', 'Manu Temple'],
      price: 'Rs.35,000',
    },
    {
      id: 4,
      name: 'Shimla',
      duration: '4 Days / 3 Nights',
      food: 'Breakfast and Dinner',
      residence: 'Mountain Lodge',
      tourPlans: ['Jakhoo Temple', 'Mall Road', 'The Ridge'],
      price: 'Rs.25,000',
    },
    {
      id: 5,
      name: 'Ladakh',
      duration: '7 Days / 6 Nights',
      food: 'Full Board',
      residence: 'Luxury Camps',
      tourPlans: ['Pangong Lake', 'Nubra Valley', 'Leh Palace'],
      price: 'Rs.45,000',
    },
    {
      id: 6,
      name: 'Kachchh',
      duration: '6 Days / 5 Nights',
      food: 'All-inclusive meals',
      residence: 'Desert Resort',
      tourPlans: ['Rann of Kutch', 'Mandvi Beach', 'Dhordo Village'],
      price: 'Rs.30,000',
    },
    {
      id: 7,
      name: 'Kedarnath',
      duration: '3 Days / 2 Nights',
      food: 'Breakfast Only',
      residence: 'Temple Guesthouse',
      tourPlans: ['Kedarnath Temple', 'Gaurikund', 'Triyuginarayan Temple'],
      price: 'Rs.20,000',
    },
    {
      id: 8,
      name: 'Bali',
      duration: '6 Days / 5 Nights',
      food: 'All-inclusive meals',
      residence: 'Beach Resort',
      tourPlans: ['Uluwatu Temple', 'Tegallalang Rice Terraces', 'Kuta Beach'],
      price: 'Rs.80,000',
    },
    {
      id: 9,
      name: 'Maldives',
      duration: '5 Days / 4 Nights',
      food: 'All-inclusive meals',
      residence: 'Overwater Villa',
      tourPlans: ['Male City Tour', 'Snorkeling', 'Diving'],
      price: 'Rs.95,000',
    },
    {
      id: 10,
      name: 'Bangkok',
      duration: '4 Days / 3 Nights',
      food: 'Breakfast Only',
      residence: 'City Hotel',
      tourPlans: ['Grand Palace', 'Wat Pho', 'Floating Market'],
      price: 'Rs.50,000',
    },
    {
      id: 11,
      name: 'New York',
      duration: '7 Days / 6 Nights',
      food: 'Breakfast Only',
      residence: 'Luxury Hotel',
      tourPlans: ['Statue of Liberty', 'Central Park', 'Empire State Building'],
      price: 'Rs.95,000',
    },
    {
      id: 12,
      name: 'Paris',
      duration: '5 Days / 4 Nights',
      food: 'Breakfast Only',
      residence: 'Luxury Hotel',
      tourPlans: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
      price: 'Rs.90,000',
    },
  ];

  const filteredPackages = locationName
    ? travelPackages.filter((pkg) => pkg.name === locationName)
    : travelPackages;

  const handleBookNow = (pkg) => {
    const token = localStorage.getItem('userToken'); // ✅ Check token instead of user

    if (!token) {
      alert('You must log in first to book a package!');
      navigate('/loginregister', { state: { packageName: pkg.name, packagePrice: pkg.price } });
    } else {
      navigate('/book-now', { state: { packageName: pkg.name, packagePrice: pkg.price } });
    }
  };

  return (
    <div className="packages-container">
      {locationName && <h2>Showing packages for {locationName}</h2>}
      <div className="packages-list">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h2>{pkg.name}</h2>
            <ul className="package-details">
              <li>
                <strong>Duration:</strong> {pkg.duration}
              </li>
              <li>
                <strong>Food:</strong> {pkg.food}
              </li>
              <li>
                <strong>Residence:</strong> {pkg.residence}
              </li>
              <li>
                <strong>Tour Plans:</strong>
                <ul className="tour-plans">
                  {pkg.tourPlans.map((plan, index) => (
                    <li key={index}>{plan}</li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>Price:</strong> {pkg.price}
              </li>
            </ul>
            <button className="book-now-btn" onClick={() => handleBookNow(pkg)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
