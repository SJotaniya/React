import React from 'react'
import './Style.css'

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="logo"><i class="fas fa-leaf"></i> MyBrand</div>
      <input type="checkbox" id="menu-toggle"/>
      <label for="menu-toggle" class="menu-icon"><i class="fas fa-bars"></i></label>
      <ul class="menu">
        <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
        <li><a href="#"><i class="fas fa-info-circle"></i> About</a></li>
        <li><a href="#"><i class="fas fa-cogs"></i> Services</a></li>
        <li><a href="#"><i class="fas fa-briefcase"></i> Portfolio</a></li>
        <li><a href="#"><i class="fas fa-envelope"></i> Contact</a></li>
      </ul>
    </nav>
  )
}