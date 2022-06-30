import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Footer() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar id="fixed-bottom" key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand id="contact-header">Contact Me!</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header id="side-box-head" closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <h1 id="slide-header">Ways to contact me!</h1>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link id="nav-link" href="#">(425)-449-6572</Nav.Link>
                                    <Nav.Link id="nav-link" href="mailto:goddess.isis.alexander@gmail.com">Email</Nav.Link>
                                    <Nav.Link id="nav-link" href="https://github.com/QueenOfBirbs" target="_blank">Github</Nav.Link>
                                    <Nav.Link id="nav-link" href="https://www.linkedin.com/in/isis-alexander-a976a3229/" target="_blank">LinkedIn</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Footer;