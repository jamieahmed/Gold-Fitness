import React from "react";
import "./Program.css";
import programData from "../data/programs";

const rightArrow =
  "https://tse1.mm.bing.net/th?id=OIP.LJfvKjQP4FpFfkVuY0ps1wHaD9&pid=Api&P=0";

const Program = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="unique-text">Explore our</span>
        <span>Programs</span>
        <spa className="unique-text">to shope you </spa>
      </div>
      <div className="program-Categories">
        {programData.map((program) => (
          <div className="Category">
            {program.Image} <br />
            <span>{program.heading} </span>
            <span>{program.details} </span>
            <div className="join-now">
              <span>Join Now</span>
              <img className="right-arrow" src={rightArrow} alt="right-arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
