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
                                href={"https://drive.google.com/file/d/1c01q6SlkHBokEnX8Hent27IyEAwzHV49/view?usp=sharing"}  
                                > <span className="glyphicon glyphicon-file" /> View Resume </Button>
                            <span id="space" />
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default resume;