import React from "react";
import "./hero.css";
import myImage from "../assets/me.jpg"; // put your image here

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-card">
        <div className="hero-text">
          <h1 className="hero-title">Samiul Haque</h1>
          <p className="hero-sub">
            Gamer, coder, and self-improvement enthusiast. Always strategizing, always leveling up—both in games and in life.
          </p>
        </div>
        <div className="hero-image-container">
          <img src={myImage} alt="Sami" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;