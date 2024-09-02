import React from 'react';
import './Style.css';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h2>About Us</h2>
          <p>
            MyBrand is a leading company in providing top-notch services to
            businesses. Our mission is to empower your brand and help you
            achieve success.
          </p>
        </div>
        <div class="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Services</a> </li>
            <li> <a href="#">Portfolio</a> </li>
            <li> <a href="#">Contact</a> </li>
          </ul>
        </div>
        <div class="footer-section social">
          <h2>Follow Us</h2>
          <div class="social-icons">
            <a href="#"> <i class="fab fa-facebook-f"></i>  </a>
            <a href="#"> <i class="fab fa-twitter"></i> </a>
            <a href="#"> <i class="fab fa-instagram"></i> </a>
            <a href="#"> <i class="fab fa-linkedin-in"></i> </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 MyBrand | Designed by Me</p>
      </div>
    </footer>
  );
}
