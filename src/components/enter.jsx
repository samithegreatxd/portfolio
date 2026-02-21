import React, { useState } from "react";
import "./enter.css";

const Enter = ({ name }) => {
  const [stage, setStage] = useState(0);
  const [fade, setFade] = useState(false);

  const handleContinue = () => {
    setFade(true);

    setTimeout(() => {
      setStage(1);
      setFade(false);
    }, 600); // match CSS transition duration
  };

  return (
    <section className="enter-wrapper">
      <div className={`enter-card ${fade ? "fade-out" : "fade-in"}`}>
        {stage === 0 ? (
          <>
            <h1 className="enter-title">
              <span className="enter-glow">
                Welcome {name}
              </span>
            </h1>

            <p className="enter-sub">
              Here you will know everything about me
              <br />
              <span className="enter-small">
                It's like u will see me naked(joking)
              </span>
            </p>

            <span className="enter-tap" onClick={handleContinue}>
  Tap to continue
</span>

          </>
        ) : (
          <>
            <h1 className="enter-title">
              Enter My World
            </h1>

            <p className="enter-sub">
              Skills. Vision. Discipline.  
              Everything you need to know is ahead.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Enter;
