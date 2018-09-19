import React, { Component } from "react";
import Row from "../../../components/Row";
import Hero from "../../../components/Hero";
import Col from "../../../components/Col";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Container from "../../../components/Container";
import axios from "axios";
import {withScriptjs, withGoogleMap, GoogleMap, Marker,} from "react-google-maps";
import "./Contact.css";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{lat: 34.145911, lng: -118.00095}}
    >
        <Marker
            position={{lat: 34.145911, lng: -118.00095}}
        />
    </GoogleMap>
));

class contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    async handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.name);
        const { name, email, message } = this.state;
        window.location.reload();
        const form = await axios.post('/api/form', {
            name, email, message,
        });
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
                                <div className="col-sm-6 col-md-6" style={{textAlign: "center"}} id="map">
                                    <MapWithAMarker
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJYfO25-ti-9JTfBZRIQ9gHkJJVuKMX44&libraries=places&callback=initMap"
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `400px` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />
                                </div>
                                <br />
                                <div className="col-sm-6 col-md-6" style={{textAlign: "left"}}>
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
                            <Form style={{ width: 'auto' }} onSubmit={this.handleFormSubmit}>
                                <FormGroup>
                                    <Label for="name">Name:</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        // value={this.state.name}
                                        onChange={this.handleInputChange}
                                        placeholder="Name (required)" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email:</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        // value={this.state.email}
                                        onChange={this.handleInputChange}
                                        placeholder="Email (required)" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Message:</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        // value={this.state.message}
                                        onChange={this.handleInputChange}
                                        placeholder="Message"
                                        style={{ height: 100 }} />
                                </FormGroup>
                                <Button
                                    disabled={!(this.state.name && this.state.email)}
                                >
                                    Send</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default contact;
