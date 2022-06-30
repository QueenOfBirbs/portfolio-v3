import React from "react";
import Container from 'react-bootstrap/Container';

function Homepage() {
    return (
        <Container fluid id="welcome-box" class="container-fluid text-sm-center h1-5">
            <div id="jumbo-word">
                <h1>Welcome to my portfolio!</h1>
            </div>
        </Container>
    )
}

export default Homepage;