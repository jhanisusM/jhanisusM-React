import React from "react";
import Row from "../../../components/Row";
import Hero from "../../../components/Hero";
import Col from "../../../components/Col";
import Container from "../../../components/Container";

const tech = () => {
    var style = {
        listStyleType: "none"
    };
    return (
        <div>
            <Hero backgroundImage={require("../../../images/la2.jpg")}>
                <h3>Technologies</h3>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12" id="title">
                        <h4>Technologies</h4>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">

                        <div className="row" >
                            <div className="col-sm-6 col-md-4">
                                <ul style={style}>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> MERN FullStack </span>
                                    </li>

                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> MongoDB</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> Express.js</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> React</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> Node.js</span>
                                    </li>
                                    <hr />
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <ul style={style}>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> JavaScript</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> HTML</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> CSS</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> jQuery</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> APIs and AJAX</span>
                                    </li>
                                    <hr />
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <ul style={style}>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> GIT/Github/Heroku</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> Firebase </span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> MySQL</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> Sequelize</span>
                                    </li>
                                    <li>
                                        <span className="fa fa-floppy-o"></span>
                                        <span> NPM packages</span>
                                    </li>
                                    <hr />
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
};

export default tech;