import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import V1 from "./images/examples/port-v1.png";
import V2 from "./images/examples/port-v2.png";
import Planner from "./images/examples/day-planner.png";
import Sanrio from "./images/examples/sanrio.png";
import Porefect from "./images/examples/porefect-boring.png";
import StitchMe from "./images/examples/stitchme-all.png";

function Projects() {
  return (
    <Row xs={1} md={2} id="projects-bg" className="g-4">
      <Col>
        <Card id="pro-card">
          <LinkContainer to="/portfolio1">
            <Card.Img variant="top" src={V1} alt="project pic" />
          </LinkContainer>
          <LinkContainer to="/portfolio1">
            <Card.Body>
              <Card.Title class="card-title over-title1" href="#portfolio1">
                Portfolio V1
              </Card.Title>
              <Card.Text>
                The very first portfolio I made, though more of a portfolio
                template than an actual portfolio showing off my skills/work.
                Uses HTML and CSS! Decided to go with a more retro feeling look
                with oranges and browns.
              </Card.Text>
            </Card.Body>
          </LinkContainer>
        </Card>

        <Card id="pro-card">
          <LinkContainer to="/portfolio2">
            <Card.Img variant="top" src={V2} alt="project pic" />
          </LinkContainer>
          <LinkContainer to="/portfolio2">
            <Card.Body>
              <Card.Title class="card-title over-title2" href="#portfolio2">
                Portfolio V2
              </Card.Title>
              <Card.Text>
                The second portfolio I've made, this one actually tailored to me
                and not just a plain empty template. Uses HTML, CSS and
                Boostrap! The theme is more based off of the jumbotron photo;
                pulling accent colors from there to use in other places.
              </Card.Text>
            </Card.Body>
          </LinkContainer>
        </Card>

        <Card id="pro-card">
          <LinkContainer to="/day-planner">
            <Card.Img variant="top" src={Planner} alt="project pic" />
          </LinkContainer>
          <LinkContainer to="/day-planner">
            <Card.Body>
              <Card.Title class="card-title over-title3" href="#day-planner">
                Day Planner
              </Card.Title>
              <Card.Text>
                A day planner webpage that saves user input in said columns so
                the user can come back to it and reference it later. Uses HTML,
                CSS, Javascript and Bootstrap! I went with a Vaporwave theme,
                using CSS efects to make some elements look like neon lights
                with flickering included.
              </Card.Text>
            </Card.Body>
          </LinkContainer>
        </Card>
      </Col>

      <Col>
        <Card id="pro-card">
          <LinkContainer to="/sanrio-quiz">
            <Card.Img variant="top" src={Sanrio} alt="project pic" />
          </LinkContainer>
          <LinkContainer to="/sanrio-quiz">
            <Card.Body>
              <Card.Title class="card-title over-title4" href="#sanrio-quiz">
                Sanrio Quiz
              </Card.Title>
              <Card.Text>
                A quiz on Sanrio facts I thought were neat with a timer function
                and highscores page; has a theme to match as well using accent
                colors from Sanrio characters in the background. Uses HTML, CSS
                and Javascript!
              </Card.Text>
            </Card.Body>
          </LinkContainer>
        </Card>

        <Card id="pro-card">
          <LinkContainer to="/porefect-alt">
            <Card.Img variant="top" src={Porefect} alt="project pic" />
          </LinkContainer>
          <LinkContainer to="/porefect-alt">
            <Card.Body>
              <Card.Title class="card-title over-title5" href="#porefect-alt">
                Porefect Alt.
              </Card.Title>
              <Card.Text>
                This is an alternate theme for a group project app, Porefect.
                Porefect is an app to log your skincare routine in the proper
                order. Ended up going in a different direction but wanted to
                show my work off in another way. Uses Bootstrap, Handlebars,
                Javaascript and Cloudinary for uploading photos!{" "}
              </Card.Text>
            </Card.Body>
          </LinkContainer>
        </Card>

        <Card id="pro-card">
          <LinkContainer to="/stitch-me">
            <Card.Img variant="top" src={StitchMe} alt="project pic" />
          </LinkContainer>
          <LinkContainer to="/stitch-me">
            <Card.Body>
              <Card.Title class="card-title over-title6" href="#stitch-me">
                Stitch Me
              </Card.Title>
              <Card.Text>
                The last group project I collaborated on with classmates.
                StitchMe is an app to keep track of your embroidery projects
                whether they're finished, works in progress or were just started
                on. Uses React, React Bootstrap, MongoDB and Cloudinary for
                photo uploads!
              </Card.Text>
            </Card.Body>
          </LinkContainer>
        </Card>
      </Col>
    </Row>
  );
}

export default Projects;
