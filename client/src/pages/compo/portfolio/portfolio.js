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
        topScore: 0,
        clicked: [],
    };


    removeFriend = id => {
        const friends = this.state.friends.filter(friend => friend.id !== id);
        this.setState({ friends });
    };

clickedButton = props => {
    console.log(props);
    switch (props.name){
        case "showAll":
        console.log("Show All button")
        break;
        case "react":
        console.log("React FrameWork")
        break;
        case "dynamic":
        console.log("Dynamic Websites")
        break;
        case "static":
        console.log("Static Websites")
        break;
        case "mongodb":
        console.log("MongodB Implementation")
        break;
        case "mysql":
        console.log("MySQL Implementation")
        break;
        default:
        console.log("Load All")
    }
};


    clickedImage = props => {
        
          
        console.log(this.state.friends[0].id);
        if (this.state.clicked.includes(props.id) === false) {
            this.state.clicked.push(props.id);
            this.setState({
                score: this.state.score + 1,
            });
            if (this.state.score >= this.state.topScore) {
                this.setState((prevState) => ({
                    topScore: prevState.score,
                    topMessage: "You guessed correctly!"
                }))
            };
        }
        else {
            this.setState({
                score: 0,
                clicked: [],
                topMessage: "You guessed incorrectly!"
            });
            if (this.state.score >= this.state.topScore) {
                this.setState({ topScore: this.state.score })
            };
            this.randomArray();
        };
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
                                    <FormGroup onClick={this.clickedButton}>
                                        <Button
                                        type="button"
                                        value="showAll"
                                        name="showAll"
                                                                                
                                        > <span className="fa fa-filter"/> Show All</Button>
                                        <span id="space"/>
                                        <Button
                                        name="react"
                                        > <span className="fa fa-folder-open"/> React FrameWork</Button>
                                        <span id="space"/>
                                        <Button
                                        name="dynamic"
                                        > <span className="fa fa-archive"/> Dynamic Websites</Button>
                                        <span id="space" />
                                        <Button
                                        name="static"
                                        > <span className="fa fa-html5"/> Static Websites</Button>
                                        <span id="space" />
                                        <Button
                                        name="mongodb"
                                        > <span className="fa fa-stack-exchange"/> Mongodb Implementation</Button>
                                        <span id="space" />
                                        <Button
                                        name="mysql"
                                        > <span className="fa fa-stack-exchange"/> MySQL Implementation</Button>
                                    </FormGroup>
                                </div>




                                {this.state.friends.map(item => (
                                    <FriendCard
                                        clickedImage={this.clickedImage}
                                        id={item.id}
                                        key={item.id}
                                        name={item.name}
                                        image={item.image}
                                        occupation={item.occupation}
                                        location={item.location}
                                    />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div >
        )
    }
};

export default portfolio;