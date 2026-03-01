import React, { useEffect, useState } from "react";
import "./continue.css";
import Miracle from "./miracle";

const Continue = () => {
  const [phase, setPhase] = useState("lesson"); // lesson → okok → miracle
  const [floatUp, setFloatUp] = useState(false); // trigger Miracle float

  useEffect(() => {
    let timer1, timer2;

    if (phase === "lesson") {
      timer1 = setTimeout(() => setPhase("okok"), 2500);
    } else if (phase === "okok") {
      timer1 = setTimeout(() => setPhase("miracle"), 2500);
    } else if (phase === "miracle") {
      // after 2s in center, float up
      timer2 = setTimeout(() => setFloatUp(true), 2000);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [phase]);

  return (
    <section className="continue-wrapper">
      {phase === "lesson" && (
        <div className="continue-content" style={{ opacity: 1, transform: "translateY(0)" }}>
          <h1 className="continue-title">Life lesson 1</h1>
          <p className="continue-sub">Mistakes make you stronger, so make more of it</p>
        </div>
      )}

      {phase === "okok" && (
        <div className="continue-content">
          <h1 className="continue-title">Okok I'll stop lecturing</h1>
        </div>
      )}

      {phase === "miracle" && (
        <div className={`miracle-fade ${floatUp ? "miracle-float-up" : ""}`}>
          <Miracle />
        </div>
      )}
    </section>
  );
};

export default Continue;