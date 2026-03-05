import React, { useEffect, useState } from "react";
import "./premiumHero.css";
import Enter from "./enter";

import { db } from "./firebase";
import { ref, push } from "firebase/database";

const PremiumHero = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [entered, setEntered] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoot(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = async () => {
    const cleanName = name.trim();
    if (!cleanName || loading) return;

    setLoading(true);

    try {
      const encodedName = btoa(cleanName); // 🔥 Base64 encode

      await push(ref(db, "visitors"), {
        name: encodedName,
        createdAt: Date.now(),
      });

      setEntered(true);
    } catch (error) {
      console.error("Failed to save visitor:", error);
      setLoading(false);
    }
  };

  if (entered) {
    return <Enter name={name.trim()} />;
  }

  return (
    <section className="hero-wrapper">
      {showBoot ? (
        <div className="boot-container">
          <p className="boot-line delay-1">{">"} Initializing...</p>
          <p className="boot-line delay-2">{">"} Preparing interface.</p>
        </div>
      ) : (
        <div className="hero-card fade-in">
          <h1 className="hero-title">
            <span className="glitch" data-text="Hi, I'm Sami">
              Hi, I'm Sami
            </span>
          </h1>

          <div className="input-group">
            <input
              type="text"
              placeholder="What's your name?"
              value={name}
              maxLength={30}
              onChange={(e) => setName(e.target.value)}
              className="name-input"
            />

            <button
              className="enter-btn"
              disabled={!name.trim() || loading}
              onClick={handleEnter}
            >
              {loading ? "Entering..." : "Enter"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PremiumHero;