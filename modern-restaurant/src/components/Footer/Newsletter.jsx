import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";
const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Bronlamak" />
      <h1 className="headtext__cormorant">Stol bronlamak</h1>
      <p className="p__opensans">Hergünki menýulardan habarly bol!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="email adresiňi giriz" />
      <button className="custom__button">Bronla</button>
    </div>
  </div>
);

export default Newsletter;
