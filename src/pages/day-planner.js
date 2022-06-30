import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "./images/project-pics/day-planner/header.png";
import Pic2 from "./images/project-pics/day-planner/plan-section.png";
import Pic3 from "./images/project-pics/day-planner/glow-header.png";
import Pic4 from "./images/project-pics/day-planner/green-glow.png";
import Pic5 from "./images/project-pics/day-planner/time.png";

function DayPlanner() {
  return (
    <>
      <Row xs={12} id="project-bg">
        <Col xs={12} s={12} md={4} lg={4}>
          <Stack>
            <Container>
              <div id="left-box-pro">
                <Container>
                  <h1 id="title">Day Planner</h1>
                  <h2 id="description">Description:</h2>
                  <h3>
                    Another homework assignment but since I had finished it
                    early that night I decided to mess around with the CSS a
                    bit; I ended up going for a Vaporwave-esque theme.
                    Relatively plain structure wise but one of my favorite
                    themes that I did in class, and helped me figure how to use one of my all-time fave CSS effects.
                    <br></br>
                    <br></br>Bootstrap, HTML, Javascript and CSS were used in
                    this project. Made in April 2022.
                  </h3>
                </Container>

                <Container id="button-area">
                  <a
                    href="https://github.com/QueenOfBirbs/day-planner-homework"
                    target="_blank"
                  >
                    <Button id="pro-button">Github</Button>

                    <a
                      href="https://queenofbirbs.github.io/day-planner-homework/"
                      target="_blank"
                    >
                      <Button id="pro-button">Deployed</Button>
                    </a>
                  </a>
                </Container>
              </div>
            </Container>
          </Stack>
        </Col>

        <Col xs={12} s={12} md={8} lg={8}>
          <Stack>
            <Container>
              <div id="pro-card-img">
                <img className="d-block w-100" src={Pic1} alt="day planner pic" />
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title1">Header</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The header is pretty simple but has fun effects for the
                      heading, text, and border. In the center bottom of the
                      header, there's a function that shows the date of whatever
                      day the user is looking at this page.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <img className="d-block w-100" src={Pic2} alt="day planner pic" />
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title2">Planning Section</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The section underneath the heading holds all the time
                      slots for planning out your day.<br></br> They're also
                      saved to local storage when the user clicks the button so
                      ot'll stay there until you decide to save something over
                      it. The times on the left go from 9 to 5, a usual workday
                      for alot of people.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic3} alt="day planner pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic4} alt="day planner pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic5} alt="day planner pic" />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title3">CSS Effects</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The heading box has two different effects that are really
                      fun; the title and time snippet glows but also flickers
                      much like a real sign would. Since they're together in the
                      code, all the text flickers at the same time.<br></br> In the planning section, boxes that hold the hours of the day also has a similar low effect. his one just glows though, so it doesn't take all the attention away from the headings effects.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Container>
          </Stack>
        </Col>
      </Row>
    </>
  );
}

export default DayPlanner;
