import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import "./styleHeroSection.css";
function HeroSection() {
  return (
    <div className="hero-section-container">
      <div className="hero-section">
        <div className='border-hero'>
          <h1>Movies One</h1>
          <div className="els-hero">
            <h2>Home</h2>
            <FaAnglesRight color="white" />
            <h3>Movies One</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection