import React from "react";
import './Style.css'

export default function Section() {
  return (
    <section class="main-section">
      <div class="content">
        <h1>Welcome to MyBrand</h1>
        <p>We provide the best solutions for your business. Our team of experts is here to help you achieve your goals with creativity and passion.</p>
        <button class="cta-button">Learn More</button>
      </div>
      <div class="image">
        <img src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Business Image"/>
      </div>
    </section>
  )
}