import React from 'react';
import './Pages.css'; // Make sure you create this CSS file to style your component

function Pages() {
  return (
    <div className="pages-container">
      <section className="offers-section">
        <h2>Special Offers</h2>
        <div className="offers-list">
          <div className="offer">
            <h3>Summer Escape</h3>
            <p>Enjoy 30% off on all summer bookings to Bali and Maldives.</p>
          </div>
          <div className="offer">
            <h3>Winter Wonderland</h3>
            <p>Book now and get 25% off on our exclusive winter destinations in Europe.</p>
          </div>
          <div className="offer">
            <h3>Adventure Trips</h3>
            <p>Get an extra 10% off on adventure packages to the Rocky Mountains.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service">
            <h3>Personalized Itineraries</h3>
            <p>We create customized travel plans tailored to your interests and preferences.</p>
          </div>
          <div className="service">
            <h3>24/7 Support</h3>
            <p>Our team is available around the clock to assist you during your travels.</p>
          </div>
          <div className="service">
            <h3>Group Discounts</h3>
            <p>Special pricing and perks for group bookings and corporate events.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-list">
          <div className="testimonial">
            <p>"Amazing experience! The best travel agency I've ever worked with. Highly recommended!"</p>
            <h4>- Patel Keshav</h4>
          </div>
          <div className="testimonial">
            <p>"Top-notch service and very responsive. Our trip was unforgettable."</p>
            <h4>- Patil Ketan</h4>
          </div>
          <div className="testimonial">
            <p>"Great offers and excellent customer service. Will definitely book again!"</p>
            <h4>- Patil Manav</h4>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq">
            <h4>How do I make a booking?</h4>
            <p>You can book directly through our website or contact our customer service team for assistance.</p>
          </div>
          <div className="faq">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and bank transfers.</p>
          </div>
          <div className="faq">
            <h4>Can I modify or cancel my booking?</h4>
            <p>Yes, bookings can be modified or canceled according to our terms and conditions. Please contact us for details.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pages;

