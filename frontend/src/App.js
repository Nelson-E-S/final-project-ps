import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Container, Col, Row,Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import HomePage from './pages/HomePage';
import AnimalCasePage from './pages/AnimalCasePage';
import SettingsForm from './components/SettingsForm';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Row>
            <Col>
            <Navbar bg="dark" variant="dark">
              <LinkContainer to="/home">
                <Navbar.Brand href="#home">My Facts App</Navbar.Brand>
                </LinkContainer>
              <Navbar.Collapse>
                <Nav className="mr-auto">
                  <LinkContainer to="/home">                    
                    <Nav.Link href="#home">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/facts">
                    <Nav.Link href="#facts">Facts</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/settings">
                    <Nav.Link href="#settings">Settings</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </Col>
          </Row>
          <Row lg='2' sm='1'>
            <Col lg={2}>
              <WeatherDisplay />
            </Col>
            <Col lg={10}>
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/facts" component={AnimalCasePage} />
                <Route path="/settings" component={SettingsForm} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
