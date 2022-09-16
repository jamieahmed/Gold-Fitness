import React from "react";
import Header from "../Header/Header";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <div className="left-home">
        <Header />
        <div className="best-ad">
          <div></div>
          <span>The best GYM in Westfield</span>
        </div>

        <div className="Home-des">
          <div>
            <span className="unique-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>
              Ideal <span className="unique-text">Body</span>
            </span>
          </div>
          <div>
            <span>
              Our mission is to provide an Entertaining, Educational, Friendly
              and Inviting, Functional and Innovative experience of
              uncompromising quality that meets the health and fitness needs of
              the entire family.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span> +80</span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span>+1230</span>
            <span>members joind</span>
          </div>
          <div>
            <span>+50</span>
            <span>Programs</span>
          </div>
        </div>
        <div className="home-button">
          <button className="btn">Get start today</button>
          <button className="btn"> Learn More</button>
        </div>
      </div>
      <div className="right-home">
        <button className="btn">Join Today</button>
        <img
          className="home-image-one"
          src="https://tse1.mm.bing.net/th?id=OIP.R9XKrp0kuFHkXUiWdqYsTQHaFm&pid=Api&P=0"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
