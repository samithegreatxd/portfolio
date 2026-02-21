import React, { useState, useEffect } from "react";
import "./enter.css";
import Hero from "./hero"; // your main component

const Enter = ({ name }) => {
  const [stage, setStage] = useState(0);
  const [fade, setFade] = useState(false);
  const [showHero, setShowHero] = useState(false);

  const handleContinue = () => {
    setFade(true); // start fade-out

    setTimeout(() => {
      setStage(1); // switch to stage 1
      setFade(false); // fade-in stage 1
    }, 600); // match CSS fade duration
  };

  // Once stage 1 is shown, hide it after 4 seconds and show Hero
  useEffect(() => {
    if (stage === 1) {
      const timer = setTimeout(() => {
        setFade(true); // fade-out stage 1
        setTimeout(() => {
          setShowHero(true); // show Hero after fade
        }, 600);
      }, 4000); // 4 seconds
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <>
      {!showHero && (
        <section className="enter-wrapper">
          <div className={`enter-card ${fade ? "fade-out" : "fade-in"}`}>
            {stage === 0 ? (
              <>
                <h1 className="enter-title">
                  <span className="enter-glow">Welcome {name}</span>
                </h1>
                <p className="enter-sub">
                  Here you will know everything about me
                  <br />
                  <span className="enter-small">It's like u will see me naked(joking)</span>
                </p>
                <span className="enter-tap" onClick={handleContinue}>
                  Tap to continue
                </span>
              </>
            ) : (
              <>
                <h1 className="enter-title">Samiul Haque</h1>
                <p className="enter-sub">
                  A cringy self improvement guy who wants to be happy
                </p>
              </>
            )}
          </div>
        </section>
      )}
      {showHero && <Hero />}
    </>
  );
};

export default Enter;