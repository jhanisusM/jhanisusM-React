import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Resume from "./pages/compo/resume"
import Portfolio from "./pages/compo/portfolio"
import Contact from "./pages/compo/contact"
import Tech from "./pages/compo/tech"
import About from "./pages/About";
import './App.css';

const App = () => (

  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);


export default App;
