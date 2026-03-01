import React from "react";
import "./miracle.css";
import Chart from "./chart";

const Miracle = () => {
  return (
    <section className="miracle-wrapper">
      <div className="miracle-content">
        <h1 className="miracle-title">My Miracles</h1>
        <p className="miracle-sub">
          Here are some of my miracles as developer
        </p>

       

        {/* Render GPA + Chart component */}
        <Chart />
      </div>
    </section>
  );
};

export default Miracle;