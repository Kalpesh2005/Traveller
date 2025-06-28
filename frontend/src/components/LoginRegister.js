import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './LoginRegister.css';

const LoginRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { packageName, packagePrice } = location.state || {};

  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setPasswordError('');
  };

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    if (isRegister && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const url = isRegister
  ? 'https://traveller-17ng.onrender.com/api/register'
  : 'https://traveller-17ng.onrender.com/api/login';
    
    const data = {
      email,
      password,
      ...(isRegister && { username }),
    };

    try {
      setLoading(true);
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        }
        // ❌ Removed withCredentials: true
      });

      if (response.data.token) {
        localStorage.setItem('userToken', JSON.stringify(response.data.token));
        alert(isRegister ? 'Registration successful!' : 'Login successful!');

        if (packageName && packagePrice) {
          navigate('/book-now', { state: { packageName, packagePrice } });
        } else {
          navigate('/shop');
        }
      } else {
        alert(response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    alert('You have been logged out.');
    navigate('/explore');
  };

  return (
    <div className="container">
      <h1>{isRegister ? 'Create an Account' : 'Login to Your Account'}</h1>
      <form onSubmit={handleSubmit} className="form">
        {isRegister && (
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError('');
            }}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        {isRegister && (
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Processing...' : isRegister ? 'Register' : 'Login'}
        </button>
      </form>

      <div className="toggle-link">
        <span onClick={toggleForm}>
          {isRegister ? 'Already have an account? Login' : 'Need an account? Register'}
        </span>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LoginRegister;
