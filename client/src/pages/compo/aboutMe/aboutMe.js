import React from "react";
import Row from "../../../components/Row";
import Col from "../../../components/Col";
import Hero from "../../../components/Hero";
import Container from "../../../components/Container";
import "./aboutMe.css"


const aboutMe = () => {
 return (

     <div>
         <Hero backgroundImage={require("../../../images/la23.jpg")}>
        <h1>Jhanisus Melendez</h1>
        <a href="https://github.com/jhanisusM" className="btn btn-dark">
          <span className="fa fa-github"></span>
        </a>
        <a href="https://www.linkedin.com/in/jhanisus/" className="btn btn-dark">
          <span className="fa fa-linkedin-square"></span>
        </a>
        <a href="https://stackoverflow.com/users/8730147/jhanisusm" className="btn btn-dark">
          <span className="fa fa-stack-overflow"></span>
        </a>
      </Hero>
         <Container style={{ marginTop: 30 }}>
        <Row>
            <Col size="md-12" id="title">
                <h3>About Me</h3>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <div className="pic">
                    <img src={require("../../../images/pic1.jpg")} alt="" />
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
         </Container>
    </div>
    )
};

export default aboutMe;