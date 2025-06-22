import React, { useState, useEffect } from 'react';
import './News.css'; // You can add styles for your News component in this file

const newsData = [
  {
    id: 1,
    title: "Top 10 Destinations to Visit in 2025",
    date: "2025-05-01",
    content: "Explore the top travel destinations for 2024. From tropical paradises to bustling cities, discover the best places to visit this year."
  },
  {
    id: 2,
    title: "Travel Tips for Safe Journeys",
    date: "2025-09-20",
    content: "Stay safe while traveling with these essential tips. Learn about travel insurance, safety protocols, and more to ensure a smooth trip."
  },
  {
    id: 3,
    title: "How to Plan the Perfect Vacation",
    date: "2025-04-15",
    content: "Planning a vacation can be overwhelming. Follow these steps to create a detailed and enjoyable travel itinerary."
  }
];

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setNews(newsData);
  }, []);

  return (
    <div className="news-container">
      <h2>Latest Travel News</h2>
      <h3>Stay updated with the latest travel news and tips.</h3>
      <h1>    </h1>
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <span className="news-date">{item.date}</span>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
