import React, { Component } from "react";
import Row from "../../../components/Row";
import Hero from "../../../components/Hero";
import Col from "../../../components/Col";
import FriendCard from "../../../components/FriendCard";
import Container from "../../../components/Container";
import friends from "./portfolio.json";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./portfolio.css";



class portfolio extends Component {

    state = {
        friends,
        clicked: [],
    };

    refresh = () => {
        this.setState({ friends })
    };

    componentDidMount = () => {
        this.setState({
            friends,
            clicked: this.state.friends.map(item => (
                <FriendCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    occupation={item.occupation}
                    location={item.location}
                />
            ))
        });
    };

    clickedShowAll = () => {
        console.log("Show All");
        this.setState({
            friends,
            clicked: this.state.friends.map(item => (
                <FriendCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    occupation={item.occupation}
                    location={item.location}
                />
            ))
        });
       
    };

    clickedReact = () => {
        console.log("React Frame Work"); 
        this.refresh()
        const amigos = this.state.friends.filter(friend => friend.technology == "react");
        this.setState({
            friends: amigos,
            clicked: this.state.friends.map(item => (
                <FriendCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    occupation={item.occupation}
                    location={item.location}
                />
            ))
        });
    };

    clickDynamic = () => {
        console.log("Click Dynamic");
        const friends = this.state.friends.filter(friend => friend.technology === "dynamic");
        this.setState({
            friends,
            clicked: this.state.friends.map(item => (
                <FriendCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    occupation={item.occupation}
                    location={item.location}
                />
            ))
        });
    };
    clickedStatic = () => {
        console.log("Static Sites");
        const friends = this.state.friends.filter(friend => friend.technology === "static");
        this.setState({
            friends,
            clicked: this.state.friends.map(item => (
                <FriendCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    occupation={item.occupation}
                    location={item.location}
                />
            ))
        });
    };

    clickedMongodb = () => {
        console.log("Mongo DB");
        const friends = this.state.friends.filter(friend => friend.technology === "mongo");
        this.setState({
            friends,
            clicked: this.state.friends.map(item => (
                <FriendCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    occupation={item.occupation}
                    location={item.location}
                />
            ))
        });
    };

    clickedMysql = () => {
        console.log("My SQL");
        const friends = this.state.friends.filter(friend => friend.technology === "mysql");
        this.setState({
            friends,
            clicked: this.state.friends.map(item => (
                <FriendCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    occupation={item.occupation}
                    location={item.location}
                />
            ))
        });
    };

    render() {
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
                            <div className="row">
                                <div className="col-sm-12 col-md-12" id="map">
                                    <FormGroup>
                                        <Button alt="Show All"
                                            onClick={this.clickedShowAll}
                                        > <span className="fa fa-filter" /> Show All</Button>
                                        <span id="space" />
                                        <Button
                                            alt="React"
                                            onClick={this.clickedReact}
                                        > <span className="fa fa-folder-open" /> React FrameWork</Button>
                                        <span id="space" />
                                        <Button
                                            alt="Dynamic"
                                            onClick={this.clickDynamic}
                                        > <span className="fa fa-archive" /> Dynamic Websites</Button>
                                        <span id="space" />
                                        <Button
                                            alt="Static"
                                            onClick={this.clickedStatic}
                                        > <span className="fa fa-html5" /> Static Websites</Button>
                                        <span id="space" />
                                        <Button
                                            alt="Mongo DB"
                                            onClick={this.clickedMongodb}
                                        > <span className="fa fa-stack-exchange" /> Mongodb Implementation</Button>
                                        <span id="space" />
                                        <Button
                                            alt="MySQL"
                                            onClick={this.clickedMysql}
                                        > <span className="fa fa-stack-exchange" /> MySQL Implementation</Button>
                                    </FormGroup>
                                </div>
                                {this.state.clicked}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
};

export default portfolio;