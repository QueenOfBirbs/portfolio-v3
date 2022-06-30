import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "./images/project-pics/porefect/porefect-homepage.png";
import Pic3 from "./images/project-pics/porefect/porefect-login.png";
import Pic4 from "./images/project-pics/porefect/porefect-signup.png";
import Pic5 from "./images/project-pics/porefect/porefect-profile1.png";
import Pic6 from "./images/project-pics/porefect/porefect-profile2.png";
import Pic7 from "./images/project-pics/porefect/porefect-progress.png";

function Porefect() {
  return (
    <>
      <Row xs={12} id="project-bg">
        <Col xs={12} s={12} md={4} lg={4}>
          <Stack>
            <Container>
              <div id="left-box-pro">
                <Container>
                  <h1 id="title">Porefect Alt. Theme</h1>
                  <h2 id="description">Description:</h2>
                  <h3>
                    Porefect is an app that helps the user plan their skincare
                    routine but also helps out by putting products in the
                    correct order. This was the second group project we did for
                    class; we ended up going in a different direction theme wise
                    but since I worked on this version for a bit I thought I
                    would save it as an example. The example is only to show the
                    theme and is not functional. <br></br>
                    <br></br>Uses Bootstrap, Handlebars, Javaascript and
                    Cloudinary for uploading photos. Made in May 2022.
                  </h3>
                </Container>

                <Container id="button-area">
                  <a
                    href="https://github.com/QueenOfBirbs/porefect-alt"
                    target="_blank"
                  >
                    <Button id="pro-button">Github</Button>

                    <a
                      href="https://queenofbirbs.github.io/porefect-alt/index.html"
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
                <img className="d-block w-100" src={Pic1} alt="porefect pic" />
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title1">Homepage</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The homepage features a modest carousel of skincare
                      pictures and a bright in colorful navbar. Both the icon
                      and the app name link back to this page from any other
                      page on the site. <br></br>
                      Also features a lime favicon for the site and hover
                      effects on the navbar links (which are animated orange
                      squiggles).
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic3} alt="porefect pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic4} alt="porefect pic" />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title3">Login and Sign Up</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The login and sign up page are very similar layout wise
                      but have different themes and custom made citrus fruit
                      buttons. Both have different forms that are relevant for
                      either login in or signing up for an account.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic5} alt="porefect pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic6} alt="porefect pic" />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title3">Profile</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The user profile has a picture of said user on the left
                      side and information on their individual skincare routines
                      on the right. <br></br>Routines include both a night time
                      and a day time routine; as most people have different ones
                      in their skincare regimen. Also features custom made
                      citrus buttons!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div id="pro-card-img">
                <img className="d-block w-100" src={Pic7} alt="porefect pic" />
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title3">User Progress</Card.Header>
                  <Card.Body>
                    <Card.Text>
                   This page is a way for users to track their skincare journey throughout the months they are doing it. Each card has a notes sections and a dropdown menu that lets the user assign what routines were used for said month. <br></br>Would also showcase pictures of their face or problem areas to see how they've either improved or worsened. With all of these different months side by side, it would very easy for the user to see changes and be able to decide to change things up or keep the same routine.
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

export default Porefect;
