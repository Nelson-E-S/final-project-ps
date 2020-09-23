import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import WeatherDisplay from '../components/WeatherDisplay';

const MyNav = () =>(
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <WeatherDisplay />
        <LinkContainer to="/home">
            <Navbar.Brand href="#home" >My Facts App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
);

export default MyNav;