import React, { Component } from "react";
import Row from "../../../components/Row";
import Hero from "../../../components/Hero";
import Col from "../../../components/Col";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Container from "../../../components/Container";

class contact extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    };





    handleFormSubmit = event => {
        event.preventDefault();

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
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
                            <Form style={{ width: '600px' }}>
                                <FormGroup>
                                    <Label for="name">Name:</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        placeholder="Name (required)" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email:</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        placeholder="Eamil (required)" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Message:</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}
                                        placeholder="Message"
                                        style={{ height: 100 }} />
                                </FormGroup>
                                <Button>Send</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default contact;