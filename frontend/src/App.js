import React from 'react';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";

import { Container, Col, Row } from 'react-bootstrap';

import MyNav from './components/MyNav';
import MySwitch from './components/MySwitch';

import HomeCarousel from './components/HomeCarousel';

function App() {
  return (
    <div className="App">
      <div id="back"></div>
      <HomeCarousel />
      <div id="overlayVideo"></div>
      <Router>
        <Container fluid id="content">
          <Row>
            <Col>
              <MyNav />
            </Col>
          </Row>
          <Row>
            <Col>
              <MySwitch />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
