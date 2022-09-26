import React from "react";
import "./Plans.css";
import plansData from "./PlansData";

const planRightIcon =
  "https://tse2.mm.bing.net/th?id=OIP.aEOU1V_fNTS_FkedrACOgAHaHa&pid=Api&P=0";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="plan-header">
        <span className="unique-text"> START YOUR </span>
        <span> JOURNEY </span>
        <span className="unique-text"> TODAY WITH US </span>
      </div>
      <div className="plan-card">
        {plansData.map((plan, index) => (
          <div className="planDetails" key={index}>
            {plan.Image}
            <span> {plan.name}</span>
            <span> {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div>
                  <img
                    className="planRightIcon"
                    src={planRightIcon}
                    alt="plan-Icon"
                  />
                  <span key={i}></span>
                </div>
              ))}
            </div>
            <div>
              <span>Read More benefits</span>
              <button className="btn">Join Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
