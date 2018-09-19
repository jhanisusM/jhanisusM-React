import React from "react";
import "./Hero.css";

const Hero = props => (
  <div className="hero text-center img-fluid" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default Hero;
