import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

// SIGN UP PICS
import Sign1 from "./images/project-pics/stitchme/light/signup-light.png";
import Sign2 from "./images/project-pics/stitchme/color/signup-color.png";
import Sign3 from "./images/project-pics/stitchme/dark/signup-dark.png";

// LOGIN PICS
import Sign4 from "./images/project-pics/stitchme/light/login-light.png";
import Sign5 from "./images/project-pics/stitchme/color/login-color.png";
import Sign6 from "./images/project-pics/stitchme/dark/login-dark.png";

// PROFILE PICS
import Sign7 from "./images/project-pics/stitchme/light/profile-light.png";
import Sign8 from "./images/project-pics/stitchme/color/profile-color.png";
import Sign9 from "./images/project-pics/stitchme/dark/profile-dark.png";

// PROJECT PAGE PICS
import Sign10 from "./images/project-pics/stitchme/light/project1-light.png";
import Sign11 from "./images/project-pics/stitchme/light/project2-light.png";
import Sign12 from "./images/project-pics/stitchme/dark/project1-dark.png";
import Sign13 from "./images/project-pics/stitchme/dark/project2-dark.png";
import Sign14 from "./images/project-pics/stitchme/color/project1-color.png";
import Sign15 from "./images/project-pics/stitchme/color/project2-color.png";

// THEME PICS
import Sign16 from "./images/project-pics/stitchme/light/theme-light.png";
import Sign17 from "./images/project-pics/stitchme/color/theme-color.png";
import Sign18 from "./images/project-pics/stitchme/dark/theme-dark.png";

// ABOUT US PICS
import Sign19 from "./images/project-pics/stitchme/light/aboutus1-light.png";
import Sign20 from "./images/project-pics/stitchme/light/aboutus2-light.png";
import Sign21 from "./images/project-pics/stitchme/color/aboutus1-color.png";
import Sign22 from "./images/project-pics/stitchme/color/aboutus2-color.png";
import Sign23 from "./images/project-pics/stitchme/dark/aboutus1-dark.png";
import Sign24 from "./images/project-pics/stitchme/dark/aboutus2-dark.png";

function StitchMe() {
  return (
    <>
      <Row xs={12} id="project-bg">
        <Col xs={12} s={12} md={4} lg={4}>
          <Stack>
            <Container>
              <div id="left-box-pro">
                <Container>
                  <h1 id="title">Stitch Me</h1>
                  <h2 id="description">Description:</h2>
                  <h3>
                    StitchMe is a site that helps users organize their fiber
                    arts projects in one centralized spot. Though advertised for
                    fiber arts like embroidery or knitting, it could be used for
                    any art project to show off progress and take down important
                    notes that the user may want to share or save.<br></br>{" "}
                    <br></br>This app uses React, React Bootstrap, MUI, MongoDB
                    (for database purposes) and Cloudinary (for photo uploads). Made in June 2022.
                    <br></br>
                    <br></br>
                    This is definitely a personal pet project of mine, as it was
                    my overall idea, so look forward to future updates and
                    changes!
                  </h3>
                </Container>

                <Container id="button-area">
                  <a
                    href="https://github.com/QueenOfBirbs/StitchMe"
                    target="_blank"
                  >
                    <Button id="pro-button">Github</Button>

                    <a
                      href="https://stitchmeproject.herokuapp.com/"
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
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign1} alt="stitchme pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign2} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={Sign3} alt="stitchme pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title1">Sign Up</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      When visiting the site, this is the first page that greets
                      the user. On the bottom of the box there's a link that
                      redirects to the login page.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign4} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign5} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={Sign6} alt="stitchme pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title2">Login</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The login page is simple but clean, not matter what theme
                      is displayed.<br></br> The link on the very bottom of the
                      box leads to the sign up box, so a user can make an
                      account if they don't already have one to login with.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign7} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign8} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={Sign9} alt="stitchme pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title3">Profile</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      After logging in, a user would be directed to this page,
                      the profile page. On the left a list of projects are shown
                      with an option to add a new one at the bottom of the list.
                      To the right, is the button to redirect to the theme
                      changing page. The user's chosen name is also shown in the
                      welcome message at the very top of the page.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign10} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign11} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={Sign12} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign13} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign14} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign15} alt="stitchme pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title4">Project</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      This is a mockup for an embroidery project, one a user
                      might make themselves while using our site. The bullet
                      points for Notes and Steps are custom on all themes,
                      matching the overall color scheme and vibe of that said
                      theme. <br></br>The carousel on the bottom right shows
                      progress pics from the very beginning fabric and thread
                      choices, to the finished piece.
                      <br></br>I personally stitched the Fire Kirby myself so we
                      had progress pics and a finished pic to use for an
                      example.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign16} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign17} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={Sign18} alt="stitchme pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title5">Theme Changer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      This page has the function to change the theme, to any of
                      the 3 themes shown. It features the toggle switches from
                      MUI, for a simple way to toggle something that was less
                      flashy then the buttons we chose to use.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign19} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign20} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={Sign21} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign22} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Sign23} alt="stitchme pic"/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={Sign24} alt="stitchme pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title6">About Us</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The carousel above shows the about us page in the 3
                      different themes. Each person who worked on the project
                      has a picture of themselves (on the left, in the hoop) and
                      a blurb about themselves (to the right, in the box).{" "}
                      <br></br>The names have a hover effect and link to our
                      individual Github accounts so anyone on the site can have
                      easy access to out profiles.
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

export default StitchMe;
