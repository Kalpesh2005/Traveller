<<<<<<< HEAD
=======
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Contact.css';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitStatus('Submitting...');
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/contact', formData);
//       setSubmitStatus(response.data.message);

//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     } catch (error) {
//       setSubmitStatus('Submission failed. Please try again.');
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-header">
//         {/* <h1>Contact Us</h1> */}
//         <p><h3>Have questions? Reach out to us!</h3></p>
//       </div>
//       <div className="contact-info">
//         <div className="contact-details">
//           <h2>Contact Information</h2>
//           <p>Email: <a href="mailto:info@123travel.com">info@123travel.com</a></p>
//           <p>Phone: <a href="tel:+123-456-7890">+123-456-7890</a></p>
//           <p>Address: 123 Travel , Bardoli</p>
//         </div>
//         <div className="contact-form">
//           <h2>Send Us a Message</h2>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Message:
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <button type="submit">Submit</button>
//           </form>
//           {submitStatus && <p className="submit-status">{submitStatus}</p>}
//         </div>
//       </div>
//       <div className="contact-map">
//         <h2>Find Us</h2>
//         <iframe
//           title="Google Maps"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14893.115368202458!2d73.14055129999998!3d21.06152245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be060e07393bc51%3A0xf96e044991e337e9!2sUKA%20TARSADIA%20University!5e0!3m2!1sen!2sin!4v1725173072232!5m2!1sen!2sin"
//           width="100%"
//           height="300"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default Contact;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './Contact.css';

// // function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: ''
// //   });

// //   const [submitStatus, setSubmitStatus] = useState(null);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitStatus('Submitting...');

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/contact', formData);
// //       setSubmitStatus(response.data.message);
      
// //       // Show popup message
// //       alert('Form submitted successfully!');

// //       setFormData({
// //         name: '',
// //         email: '',
// //         message: ''
// //       });
// //     } catch (error) {
// //       setSubmitStatus('Submission failed. Please try again.');
// //       console.error('Error submitting form:', error);
// //     }
// //   };

// //   return (
// //     <div className="contact-container">
// //       <div className="contact-header">
// //         <h3>Have questions? Reach out to us!</h3>
// //       </div>
// //       <div className="contact-info">
// //         <div className="contact-details">
// //           <h2>Contact Information</h2>
// //           <p>Email: <a href="mailto:info@123travel.com">info@123travel.com</a></p>
// //           <p>Phone: <a href="tel:+123-456-7890">+123-456-7890</a></p>
// //           <p>Address: 123 Travel , Bardoli</p>
// //         </div>
// //         <div className="contact-form">
// //           <h2>Send Us a Message</h2>
// //           <form onSubmit={handleSubmit}>
// //             <label>
// //               Name:
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </label>
// //             <label>
// //               Email:
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </label>
// //             <label>
// //               Message:
// //               <textarea
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </label>
// //             <button type="submit">Submit</button>
// //           </form>
// //           {submitStatus && <p className="submit-status">{submitStatus}</p>}
// //         </div>
// //       </div>
// //       <div className="contact-map">
// //         <h2>Find Us</h2>
// //         <iframe
// //           title="Google Maps"
// //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14893.115368202458!2d73.14055129999998!3d21.06152245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be060e07393bc51%3A0xf96e044991e337e9!2sUKA%20TARSADIA%20University!5e0!3m2!1sen!2sin!4v1725173072232!5m2!1sen!2sin"
// //           width="100%"
// //           height="300"
// //           style={{ border: 0 }}
// //           allowFullScreen=""
// //           loading="lazy"
// //         ></iframe>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Contact;



// Contact.jsx
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

<<<<<<< HEAD
// Determine backend URL
const envApi = process.env.REACT_APP_API_URL?.trim();
const BACKEND_URL = envApi && envApi !== ''
  ? envApi
  : (process.env.NODE_ENV === 'production'
      ? 'https://traveller-17ng.onrender.com'
      : 'http://localhost:5000');
=======
const BACKEND_URL = 'https://traveller-17ng.onrender.com'; // ✅ Use Render backend
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
<<<<<<< HEAD
    setFormData(prev => ({ ...prev, [name]: value }));
=======
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');

    try {
<<<<<<< HEAD
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response?.data?.message) {
        setSubmitStatus(response.data.message);
      } else {
        setSubmitStatus('Form submitted successfully.');
      }

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);

      if (error.response && error.response.data && error.response.data.message) {
        // Server returned JSON error
        setSubmitStatus(error.response.data.message);
      } else if (error.response && error.response.status) {
        // Server returned HTML or other error
        setSubmitStatus(`Server error: ${error.response.status}`);
      } else {
        setSubmitStatus('Submission failed. Please try again.');
      }
=======
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
      setSubmitStatus(response.data.message);

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('Submission failed. Please try again.');
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
<<<<<<< HEAD
        <h3>Have questions? Reach out to us!</h3>
      </div>

=======
        <p><h3>Have questions? Reach out to us!</h3></p>
      </div>
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a
      <div className="contact-info">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:info@123travel.com">info@123travel.com</a></p>
          <p>Phone: <a href="tel:+123-456-7890">+123-456-7890</a></p>
<<<<<<< HEAD
          <p>Address: 123 Travel, Bardoli</p>
        </div>

=======
          <p>Address: 123 Travel , Bardoli</p>
        </div>
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
<<<<<<< HEAD
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>

            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>

            <button type="submit">Submit</button>
          </form>

=======
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
>>>>>>> b6ec3f2f378b2d23489f84e442b29b7c613ca30a
          {submitStatus && <p className="submit-status">{submitStatus}</p>}
        </div>
      </div>

      <div className="contact-map">
        <h2>Find Us</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14893.115368202458!2d73.14055129999998!3d21.06152245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be060e07393bc51%3A0xf96e044991e337e9!2sUKA%20TARSADIA%20University!5e0!3m2!1sen!2sin!4v1725173072232!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
