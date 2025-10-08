import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookNow.css';

function BookNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state || {};
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    people: '1',
  });
  const [error, setError] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(locationState.packagePrice);
  const [formErrors, setFormErrors] = useState({});
  const isAuthenticated = localStorage.getItem('userToken');

  const [packageName, setPackageName] = useState(locationState.packageName);
  const [packagePrice, setPackagePrice] = useState(locationState.packagePrice);

  // ✅ Always resolve backend API
  const API_URL =
    process.env.REACT_APP_API_URL?.trim() ||
    'https://traveller-17ng.onrender.com';

  useEffect(() => {
    if (!isAuthenticated && (packageName && packagePrice)) {
      localStorage.setItem('bookingIntent', JSON.stringify({ packageName, packagePrice }));
      alert('Please log in or register to book a package.');
      navigate('/loginregister');
    }

    if ((!packageName || !packagePrice) && isAuthenticated) {
      const savedIntent = JSON.parse(localStorage.getItem('bookingIntent'));
      if (savedIntent?.packageName && savedIntent?.packagePrice) {
        setPackageName(savedIntent.packageName);
        setPackagePrice(savedIntent.packagePrice);
        setCalculatedPrice(savedIntent.packagePrice);
      }
    }
  }, [isAuthenticated, packageName, packagePrice, navigate]);

  useEffect(() => {
    const basePrice = parseInt(packagePrice?.replace('Rs.', '').replace(',', '')) || 0;
    const peopleCount = parseInt(formData.people) || 1;
    let totalPrice = basePrice * peopleCount;
    if (peopleCount >= 4) totalPrice *= 0.75;
    setCalculatedPrice(`Rs.${totalPrice.toLocaleString()}`);
  }, [formData.people, packagePrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.phone) errors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = 'Must be a 10-digit number';
    if (!formData.date) errors.date = 'Travel date is required';
    if (!parseInt(formData.people) || parseInt(formData.people) <= 0) errors.people = 'Must be at least 1 person';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!validateForm()) return;

    try {
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageName,
          packagePrice: calculatedPrice,
          ...formData,
        }),
      });

      if (response.ok) {
        localStorage.removeItem('bookingIntent');
        setSubmitted(true);
        setTimeout(() => navigate('/explore'), 1000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Booking failed. Try again.');
      }
    } catch (error) {
      console.error('❌ Booking error:', error);
      setError(error.message);
    }
  };

  if (!packageName) {
    return <p>No package selected. Please go back and select a package.</p>;
  }

  return (
    <div className="book-now-container">
      {submitted ? (
        <p>Your booking has been submitted successfully!</p>
      ) : (
        <>
          <h1>Book Your Trip to {packageName}</h1>
          <p>
            Package Price (for {formData.people} {formData.people === '1' ? 'Person' : 'People'}): {calculatedPrice}
          </p>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              {formErrors.name && <p className="error-message">{formErrors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              {formErrors.email && <p className="error-message">{formErrors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="date">Preferred Travel Date</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              {formErrors.date && <p className="error-message">{formErrors.date}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="people">Number of People</label>
              <input type="number" id="people" name="people" value={formData.people} onChange={handleChange} min="1" required />
              {formErrors.people && <p className="error-message">{formErrors.people}</p>}
            </div>

            <button type="submit" className="submit-btn">Submit Booking</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </>
      )}
    </div>
  );
}

export default BookNow;
