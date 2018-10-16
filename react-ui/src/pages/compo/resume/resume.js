import React from "react";
import Row from "../../../components/Row";
import Hero from "../../../components/Hero";
import Col from "../../../components/Col";
import Container from "../../../components/Container";
import { FormGroup, Button } from "reactstrap";

const resume = () => {
    return (
        <div>
            <Hero backgroundImage={require("../../../images/contact.jpg")} >
                <h1>Resume</h1>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12" id="title">
                        <h3>Resume</h3>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <FormGroup style={{textAlign:"center"}}>
                            
                            <Button
                                alt="Resume"
                                href={"https://drive.google.com/file/d/1CHIYQjN2FugyNNXGTw7T75oaqnjGIG_x/view?usp=sharing"}  
                                > <span className="glyphicon glyphicon-file" /> View Resume PDF </Button>
                            <span id="space" />
                            <Button
                                alt="Resume"
                                href={"https://docs.google.com/document/d/1zuR2CcsO_9K8f8MnpouVK2mKQvCI8kro5Fbh2ZSTKK8/edit?usp=sharing"}  
                                > <span className="glyphicon glyphicon-file" /> View Resume .txt </Button>
                            <span id="space" />
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default resume;
