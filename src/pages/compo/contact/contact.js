import React from "react";
import Row from "../../../components/Row";
import Hero from "../../../components/Hero";
import Col from "../../../components/Col";
import Container from "../../../components/Container";

const contact = () => {

    
    return (
        <div>
            <Hero backgroundImage={require("../../../images/laC.jpg")}>
                <h3>Contact Me</h3>
            </Hero>
            <Container style={{ marginTop: 30 }}>

                <Row>
                    <Col size="md-12" id="title">
                        <h4>Find me Here</h4>
                        <hr />
                        <p style={{ textAlign: "center" }} >
                            <em>I'd love to hear from you </em>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="row">
                            <div className="col-4" id="map">
                            </div>
                            <div className="col-6">
                                <br />
                                 City of Monrovia, CA, United States
                        <br />
                              Phone: 213.948.6356
                        <br />
                              Email: jhanisus@gmail.com
                        <br />
                                <p>leave me a message:</p>
                            
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default contact;