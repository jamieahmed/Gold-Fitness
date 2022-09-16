import React from "react";
import "./Purpose.css";

const PuropseImage1 =
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d9387c26947285.56bc05fa60182.jpg";
const PuropseImage2 =
  "https://tse2.mm.bing.net/th?id=OIP.TAnAdWqekILxno6n822cjwHaE7&pid=Api&P=0";
const PuropseImage3 =
  "https://tse2.mm.bing.net/th?id=OIP.TAnAdWqekILxno6n822cjwHaE7&pid=Api&P=0";
const PuropseImage4 =
  "https://tse2.mm.bing.net/th?id=OIP.TAnAdWqekILxno6n822cjwHaE7&pid=Api&P=0";
const Tick =
  "https://tse2.mm.bing.net/th?id=OIP.aEOU1V_fNTS_FkedrACOgAHaHa&pid=Api&P=0";

const Purpose = () => {
  return (
    <div className="puropse">
      <div className="puropse-left">
        <img src={PuropseImage1} alt="puropseImage" />
        <img src={PuropseImage2} alt="puropseImage" />
        <img src={PuropseImage3} alt="puropseImage" />
        <img src={PuropseImage4} alt="puropseImage" />
      </div>
      <div className="puropse-right">
        <span>Some reasons</span>
        <div>
          <span className="unique-text">Why</span>
          <span>Chose Us</span>
        </div>
        <div className="right-details">
          <div>
            <img src={Tick} alt="tick-icon"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={Tick} alt="tick-icon" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={Tick} alt="tick-icon" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={Tick} alt="tick-icon" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
