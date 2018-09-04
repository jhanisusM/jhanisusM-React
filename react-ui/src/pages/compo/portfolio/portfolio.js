import React, { Component } from "react";
import Row from "../../../components/Row";
import Hero from "../../../components/Hero";
import Col from "../../../components/Col";
import FriendCard from "../../../components/FriendCard";
import Container from "../../../components/Container";
import friends from "../../../json/portfolio";
import { FormGroup, Button } from "reactstrap";
import "./portfolio.css";

class portfolio extends Component {

    state = {
        friends,
        clicked: [],
        react: [],
        dynamic: [],
        static: [],
        mongo: [],
        mysql: [],
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
                    description={item.description}
                    app={item.app}
                    repo={item.repo}
                    tech={item.tech}
                    tech2={item.tech2}
                    />
                )),
                react: this.state.friends.filter(friend => (friend.tech === "react" || friend.tech2 === "react")),
            dynamic: this.state.friends.filter(friend => (friend.tech === "dynamic" || friend.tech2 === "dynamic")),
            static: this.state.friends.filter(friend => (friend.tech === "static" || friend.tech2 === "static")),
            mongo: this.state.friends.filter(friend => (friend.tech === "mongo" || friend.tech2 === "mongo")),
            mysql: this.state.friends.filter(friend => (friend.tech === "mysql" || friend.tech2 === "mysql")),
        });
    };
    
    clickedShowAll = () => {
        this.setState({
            friends,
            clicked: this.state.friends.map(item => (
                <FriendCard
                id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    app={item.app}
                    repo={item.repo}
                    tech={item.tech}
                    tech2={item.tech2}
                    />
                ))
            });
            
        };

        clickedReact = () => {
            this.setState({
            clicked: this.state.react.map(item => (
                <FriendCard
                id={item.id}
                key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    app={item.app}
                    repo={item.repo}
                    tech={item.tech}
                    tech2={item.tech2}
                    />
                ))
            });
        };
        
        clickDynamic = () => {
            this.setState({
                clicked: this.state.dynamic.map(item => (
                <FriendCard
                id={item.id}
                key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    app={item.app}
                    repo={item.repo}
                    tech={item.tech}
                    tech2={item.tech2}
                    />
                ))
            });
        };
        clickedStatic = () => {
        this.setState({
            clicked: this.state.static.map(item => (
                <FriendCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    app={item.app}
                    repo={item.repo}
                    tech={item.tech}
                    tech2={item.tech2}
                    />
                ))
            });
        };
        
        clickedMongodb = () => {
            this.setState({
                clicked: this.state.mongo.map(item => (
                <FriendCard
                id={item.id}
                key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    app={item.app}
                    repo={item.repo}
                    tech={item.tech}
                    tech2={item.tech2}
                    />
                ))
            });
        };
        
    clickedMysql = () => {
        this.setState({
            clicked: this.state.mysql.map(item => (
                <FriendCard
                id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    app={item.app}
                    repo={item.repo}
                    tech={item.tech}
                    tech2={item.tech2}
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
                                        > <span className="fa fa-folder-open" /> React-based</Button>
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