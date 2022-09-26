import React from "react";
import "./Program.css";
import programData from "../data/programs";

const rightArrow =
  "https://wpclipart.com/dl.php?img=/signs_symbol/button/button_direction/direction_arrow_gold_right_T.png";

const Program = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="unique-text">Explore our</span>
        <span>Programs</span>
        <span className="unique-text">to shope you </span>
      </div>
      <div className="program-Categories">
        {programData.map((program, index) => (
          <div className="Category" key={index}>
            {program.Image}
            <span>{program.heading} </span>
            <span>{program.details} </span>
            <div className="join-now">
              <span>Join Now </span>
              <img className="right-arrow" src={rightArrow} alt="right-arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
