import React from "react";
import Row from "../../../components/Row";
import Hero from "../../../components/Hero";
import Col from "../../../components/Col";
import Container from "../../../components/Container";
import "./portfolio.css";



const portfolio = () => {
     

    return (
        <div>
            <Hero backgroundImage={require("../../../images/la6.jpg")}>
                <h3>Portfolio</h3>
            </Hero>
            <Container style={{ marginTop: 30 }}>

                <Row>
                    <Col size="md-12" id="title">
                        <h4>Portfolio</h4>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    portfolio will go here 
                    </Col>
                </Row>
            </Container>

        </div>
    )
};

export default portfolio;