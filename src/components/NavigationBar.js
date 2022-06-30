import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap'

function NavigationBar() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar id="navbar" key={expand} expand={expand} className="mb-3">
                    <Container fluid id="middle-nav">
                        <LinkContainer to="/homepage">
                            <Navbar.Brand href="#homepage" id="name-header">Isis Alexander</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header id="side-box-head" closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <h1 id="slide-header">Have a look around!</h1>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav id="redirect" className="justify-content-end flex-grow-1 pe-3">
                                    <LinkContainer to="/aboutme">
                                        <Nav.Link id="nav-link" href="#aboutme">About Me</Nav.Link>
                                    </LinkContainer>
                                    <Nav.Link id="nav-link" href="https://docs.google.com/document/d/1XCR5mve3tDh7L34B_CGqfgd3ZP0bFpMzWI3t5w3IrC0/edit?usp=sharing" target="_blank">Resume</Nav.Link>
                                    <NavDropdown
                                        title="My Work"
                                        class="dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <LinkContainer to="/projects">
                                            <NavDropdown.Item href="#projects">
                                                Overview
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/porefect-alt">
                                            <NavDropdown.Item href="#porefect-alt">
                                                Porefect Alt.
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/day-planner">
                                            <NavDropdown.Item href="#day-planner">
                                                Day Planner
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/portfolio1">
                                            <NavDropdown.Item href="#portfolio1">
                                                Portfolio V1
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/portfolio2">
                                            <NavDropdown.Item href="#portfolio2">
                                                Portfolio V2
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/sanrio-quiz">
                                            <NavDropdown.Item href="#sanrio-quiz">
                                                Sanrio Quiz
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/stitch-me">
                                            <NavDropdown.Item href="#stitch-me">
                                                Stitch Me
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default NavigationBar;