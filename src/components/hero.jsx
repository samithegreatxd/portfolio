import React, { useEffect, useState } from "react";
import "./hero.css";
import myImage from "../assets/me.jpg";
import { getCurrentAge } from "./ageapi";
import Continue from "./continue";

const Hero = () => {
  const age = getCurrentAge();
  const text = `From 13 it all started, right now I'm ${age} with no regrets`;

  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [showTap, setShowTap] = useState(false);
  const [goNext, setGoNext] = useState(false);

  // Typing effect
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [text]);

  // Wait 3 seconds after typing
  useEffect(() => {
    if (typingDone) {
      const timer = setTimeout(() => {
        setShowTap(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [typingDone]);

  // 🔥 If user tapped → render Continue component
  if (goNext) {
    return <Continue />;
  }

  return (
    <section className="hero-wrapper">
      <div className="hero-content">

        <div className="hero-text">
          <h1 className="code-title">
            {displayedText}
          </h1>

          {showTap && (
            <div
              className="enter-tap"
              onClick={() => setGoNext(true)}
            >
              Tap to continue
            </div>
          )}
        </div>

        <div className="hero-image-container">
          <img src={myImage} alt="Sami" className="hero-image" />
        </div>

      </div>
    </section>
  );
};

export default Hero;