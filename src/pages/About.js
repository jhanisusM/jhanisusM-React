import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./about.css";

const About = () => (
  <div>
    <Hero backgroundImage={require("../images/la23.jpg")}>
      <h1>Jhanisus Melendez</h1>
      <a href="https://github.com/jhanisusM" class="btn btn-dark">
        <span class="fa fa-github"></span>
      </a>
      <a href="https://www.linkedin.com/in/jhanisus/" class="btn btn-dark">
        <span class="fa fa-linkedin-square"></span>
      </a>
      <a href="https://stackoverflow.com/users/8730147/jhanisusm" class="btn btn-dark">
        <span class="fa fa-stack-overflow"></span>
      </a>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>About Me</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="pic">
            <img src={require("../images/pic1.jpg")} />
          </div>
          <p>
            I am an analytical full stack web developer with 2+ years as an image reading analyst. My attention to detail and adaptability
              to shifting priorities has afforded me the ability to facilitate and act as a liaison for various projects.
              I have a technical background in the hard sciences, and I am a UCLA bootcamp alumnus with experience in dynamic
              web applications using Mongodb, MySQL, Express, Node JS, React, HTML/CSS, and C++. Driven to exceed customer
              expectations by delivering valuable well-designed products that innovate technical solutions.
          </p>
        </Col>
      </Row>
      {/* ----------------------------Technologies----------------------  */}
      <Hero backgroundImage={require("../images/la6.jpg")}>
        <h1>Technologies</h1>
      </Hero>
      <Row>
        <Col size="md-12">
          <h1>Technologies</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col size="md-12">

          <div class="row" >
            <div className="col-4">
              <ul>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> MERN FullStack </span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> JavaScript</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> MongoDB</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> Express.js</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> React</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> Node.js</span>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul >
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> HTML</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> CSS</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> jQuery</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> APIs and AJAX</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> GIT/Github/Heroku</span>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul >
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> Firebase </span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> MySQL</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> Sequelize</span>
                </li>
                <li>
                  <span className="fa fa-floppy-o"></span>
                  <span> NPM packages</span>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>








      {/* ----------------------------Portfolio----------------------  */}
      <Hero backgroundImage={require("../images/la2.jpg")}>
        <h1>Portfolio</h1>
      </Hero>
      <Row>
        <Col size="md-12">
          <h1>Technologies</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col size="md-12">

        </Col>
      </Row>




    </Container>
  </div>
);

export default About;
