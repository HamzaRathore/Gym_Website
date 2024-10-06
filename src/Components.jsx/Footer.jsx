import React from 'react'
import {Link} from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
            <div className="footer-about">
                <h3>About Us</h3>
                <p>We provide top-quality gym facilities with professional trainers to help you achieve your fitness goals. Join us today to start your fitness journey!</p>
            </div>
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>Address: 123 Gym Street, Lahore</p>
                <p>Phone: 0310-4423334</p>
                <p>Email: info@gymwebsite.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Gym Website. All Rights Reserved.</p>
        </div>
    </footer>


    </>
  )
}
