import React, { useState, useEffect } from 'react';
import './Shop.css';
import { useNavigate } from 'react-router-dom';

import travelBackpack from '../assets/images/travel-backpack.jpg';
import portableCharger from '../assets/images/portable-charger.jpg';
import travelPillow from '../assets/images/travel-pillow.jpg';
import waterBottle from '../assets/images/water-bottle.jpg';
import luggageTag from '../assets/images/luggageTag.jpeg';
import handSanitizer from '../assets/images/handSanitizer.jpg';
import umbrella from '../assets/images/umbrella.jpeg';
import earplugs from '../assets/images/earplugs.jpg';

const products = [
  { id: 1, name: 'Travel Backpack', description: 'A durable and spacious backpack for all your travel needs.', price: 700, image: travelBackpack },
  { id: 2, name: 'Portable Charger', description: 'Keep your devices charged on the go.', price: 1000, image: portableCharger },
  { id: 3, name: 'Travel Pillow', description: 'Comfortable and supportive travel pillow.', price: 500, image: travelPillow },
  { id: 4, name: 'Water Bottle', description: 'Stay hydrated with this leak-proof water bottle.', price: 400, image: waterBottle },
  { id: 5, name: 'Luggage Tag', description: 'Easily identify your luggage.', price: 100, image: luggageTag },
  { id: 6, name: 'Hand Sanitizer', description: 'Pocket-sized hand sanitizer.', price: 50, image: handSanitizer },
  { id: 7, name: 'Travel Umbrella', description: 'Compact, windproof travel umbrella.', price: 350, image: umbrella },
  { id: 8, name: 'Earplugs', description: 'Soft foam earplugs for noise reduction.', price: 100, image: earplugs },
];

function Shop() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem('userToken'));
  const [cart, setCart] = useState(user ? JSON.parse(localStorage.getItem('cart')) || [] : []);
  const [wishlist, setWishlist] = useState(user ? JSON.parse(localStorage.getItem('wishlist')) || [] : []);
  const [notification, setNotification] = useState('');
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    cart.forEach(item => {
      initialQuantities[item.id] = item.quantity;
    });
    return initialQuantities;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [cart, wishlist, user]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }));
  };

  const handleRedirectToLogin = (product, actionType) => {
    if (!user) {
      if (window.confirm("You need to log in to proceed. Would you like to log in now?")) {
        navigate('/loginregister');
      }
      return;
    }

    switch (actionType) {
      case 'addToCart':
        addToCart(product);
        break;
      case 'buyNow':
        buyNow(product);
        break;
      case 'addToWishlist':
        addToWishlist(product);
        break;
      default:
        break;
    }
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    showNotification(${product.name} added to cart!);
  };

  const increaseCartQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseCartQuantity = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCart(updated);
  };

  const buyNow = async (product) => {
    const quantity = quantities[product.id] || 1;
    const totalPrice = product.price * quantity;

    try {
      const baseUrl = process.env.REACT_APP_API_URL?.trim();
      const response = await fetch(${baseUrl}/api/orders/buy, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product,
          quantity,
          totalPrice
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showNotification(You have bought ${product.name} successfully!);
      } else {
        showNotification(data.message || 'Error purchasing product.');
      }
    } catch (error) {
      showNotification('Error purchasing product.');
    }
  };

  const addToWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      showNotification(${product.name} is already in your wishlist.);
    } else {
      setWishlist([...wishlist, product]);
      showNotification(${product.name} added to wishlist.);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    showNotification('Product removed from wishlist.');
  };

  return (
    <div className="shop-container">
      {notification && <div className="notification">{notification}</div>}

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Rs. {product.price}</p>

              <div className="quantity-btn-group">
                <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                <input type="number" value={quantities[product.id] || 1} readOnly />
                <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </div>

              <div className="button-group">
                <button onClick={() => handleRedirectToLogin(product, 'addToCart')}>Add to Cart</button>
                <button onClick={() => handleRedirectToLogin(product, 'buyNow')}>Buy Now</button>
                <button onClick={() => handleRedirectToLogin(product, 'addToWishlist')}>Add to Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="wishlist-container">
        <h2>Your Wishlist</h2>
        {wishlist.length === 0 ? <p>Your wishlist is empty.</p> : (
          <ul>
            {wishlist.map((item) => (
              <li key={item.id}>
                <h4>{item.name} - Rs. {item.price}</h4>
                <div>
                  <button onClick={() => handleRedirectToLogin(item, 'addToCart')}>Add to Cart</button>
                  <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cart-container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? <p>Your cart is empty.</p> : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h4>{item.name} - Rs. {item.price} x {item.quantity}</h4>
                <div>
                  <button onClick={() => decreaseCartQuantity(item.id)}>Remove</button>
                  <button onClick={() => increaseCartQuantity(item.id)}>Add</button>
                  <button onClick={() => buyNow(item)}>Buy Now</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
      </div>
    </div>
  );
}
