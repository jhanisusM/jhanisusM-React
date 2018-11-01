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
                <a href="https://github.com/jhanisusM" className="btn btn-dark" target="blank" style={{margin:" 0px 3px 0px" }}>
                    <span className="fa fa-github"></span>
                </a>
                <a href="https://www.linkedin.com/in/jhanisus/" className="btn btn-dark" target="blank" style={{margin:" 0px 3px 0px" }}>
                    <span className="fa fa-linkedin-square"></span>
                </a>
                <a href="https://stackoverflow.com/users/8730147/jhanisusm" className="btn btn-dark" target="blank" style={{margin:" 0px 3px 0px" }}>
                    <span className="fa fa-stack-overflow"></span>
                </a>
                <div className="cdd">
                    <span className="cdd">
                        <strong> <u> Code </u> </strong>
                    </span>
                    <span className="cdd">
                        <strong> <u>  Driven </u></strong>
                    </span>
                    <span className="cdd">
                        <strong><u> Design </u> </strong>
                    </span>
                </div>
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
                           I am an analytical chemist turned developer.  My technical background in the hard sciences, along with my desire
                           to help people simplify their lives, has driven me to pursue a career as a developer.I have an aptness for coding, 
                           learning, and exploring new technologies. I am experienced in dynamic web applications using JavaScript, HTML5, 
                           CSS3, React, Mongodb, MySQL, Express, Node JS, and C++. I will be a creative, enthusiastic, and diligent asset 
                           to the your team team. 
          </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default aboutMe;
