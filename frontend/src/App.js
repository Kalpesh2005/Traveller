
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home';
// import Packages from './components/Packages';
// import BookNow from './components/BookNow';
// import Shop from './components/Shop';
// import About from './components/About';
// import Pages from './components/Pages';
// import News from './components/News';
// import Contact from './components/Contact';
// import Explore from './components/Explore';
// import LoginRegister from './components/LoginRegister';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header>
//           <div className="logo">
//             <h1>Traveller</h1>
//           </div>
//           <nav>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/explore">Explore</Link></li>
//               <li><Link to="/shop">Shop</Link></li>
//               <li><Link to="/pages">Pages</Link></li>
//               <li><Link to="/news">News</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//               <li><Link to="/loginregister">Login</Link></li>
//             </ul>
//           </nav>
//         </header>

//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/packages" element={<Packages />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/pages" element={<Pages />} />
//             <Route path="/news" element={<News />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/explore" element={<Explore />} />
//             <Route path="/book-now" element={<BookNow />} />
//             <Route path="/loginregister" element={<LoginRegister />} />
//             <Route element={<PrivateRoute />}>
//               <Route path="/book-now" element={<BookNow />} />
//             </Route>
//             <Route path="*" element={null} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

/* Responsive Navbar */
.menu-icon {
  display: none;
  font-size: 28px;
  cursor: pointer;
  padding: 10px;
  color: #fff;
}

@media (max-width: 768px) {
  nav {
    display: none;
    flex-direction: column;
    background-color: #333;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    padding: 20px 0;
    z-index: 1000;
  }

  nav.open {
    display: flex;
  }

  .menu-icon {
    display: block;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin: 10px 0;
  }

  nav ul li a {
    font-size: 20px;
  }
}
