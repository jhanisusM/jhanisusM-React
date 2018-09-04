import React from "react";
import AboutMe from "./compo/aboutMe";
import Tech from "./compo/tech";
import Portfolio from "./compo/portfolio";
import Contact from "./compo/contact";
import "./about.css";

const About = () => {

  return (
    <div>
      <AboutMe />
      <Tech />
      <Portfolio />
      <Contact />
    </div>
  )
};

export default About;
