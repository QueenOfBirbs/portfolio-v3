import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

// TOP NAV PICS/
import Pic1 from "./images/project-pics/portfolio-v2/topnav.png";
import Pic2 from "./images/project-pics/portfolio-v2/topnav-hover.png";

// ABOUT ME PIC
import Pic3 from "./images/project-pics/portfolio-v2/aboutme.png";

// WORK PICS
import Pic4 from "./images/project-pics/portfolio-v2/work-1.png";
import Pic5 from "./images/project-pics/portfolio-v2/work1-hover.png";
import Pic6 from "./images/project-pics/portfolio-v2/work-2.png";
import Pic7 from "./images/project-pics/portfolio-v2/work2-hover.png";
import Pic8 from "./images/project-pics/portfolio-v2/work-3.png";
import Pic9 from "./images/project-pics/portfolio-v2/work3-hover.png";
import Pic10 from "./images/project-pics/portfolio-v2/work-4.png";
import Pic11 from "./images/project-pics/portfolio-v2/work4-hover.png";
import Pic12 from "./images/project-pics/portfolio-v2/work-5.png";
import Pic13 from "./images/project-pics/portfolio-v2/work5-hover.png";

// FOOTER PIC
import Pic14 from "./images/project-pics/portfolio-v2/foot.png";
import Pic15 from "./images/project-pics/portfolio-v2/foot-hover.png";

function Portfolio2() {
  return (
    <>
      <Row xs={12} id="project-bg">
        <Col xs={12} s={12} md={4} lg={4}>
          <Stack>
            <Container>
              <div id="left-box-pro">
                <Container>
                  <h1 id="title">Portfolio V2</h1>
                  <h2 id="description">Description:</h2>
                  <h3>
                    This is the second version of my portfolio, made around the
                    half way point of the class (the projects will reflect this
                    as well). The theme is mostly just using the accent colors
                    from the jumbotron image itself.<br></br>
                    <br></br>
                    Bootstrap, HTML, and CSS were used in this project. Made in
                    May 2022.
                    <br></br> <br></br>
                    *The screenshots are from the smaller/responsive page, it
                    makes it easer to see everything as the work tiles are quite
                    large.*
                  </h3>
                </Container>

                <Container id="button-area">
                  <a
                    href="https://github.com/QueenOfBirbs/portfolio-v2"
                    target="_blank"
                  >
                    <Button id="pro-button">Github</Button>

                    <a
                      href="https://queenofbirbs.github.io/portfolio-v2/"
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
                    <img
                      className="d-block w-100"
                      src={Pic1}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic2}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title1">Navbar/Top of Page</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The top navigation bar redirects to the matching part of
                      the page. When the links are hovered over, it strikes out
                      the text and changes color. "Resume" and "Portfolio" link
                      to outside sites; "Resume" to a resume on Google Drive,
                      and "Portfolio" to the Github of the portfolio.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <img
                  className="d-block w-100"
                  src={Pic3}
                  alt="portfolio 2 pic"
                />
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title2">About Me</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      A very short blurb about myself, I've learned how to write
                      longer ones since. The link "work" redirects to this
                      section.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic4}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic5}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic6}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic7}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic8}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic9}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic10}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic11}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic12}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic13}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title3">Work</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      These are the cards that have the projects I chose to
                      highlight on them. On mobile they stack on top of each
                      other but have another layout when not in that size.{" "}
                      <br></br>
                      Each card has a hover effect that matches a color from the
                      image. Alot of these are the same ones I decided to
                      showcase on this portfolio too. When a card is clicked, it
                      leads to the Github that matches it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic14}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Pic15}
                      alt="portfolio 2 pic"
                    />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title4">Footer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The footer holds all of my contact info. When "Email" is
                      clicked it links to whatever email app is your default so
                      you can send an email, "Github" links to my personal
                      Github profile, and "LinkedIn" links to my LinkedIn
                      profile. These links also have the same hover effects as
                      the navigation bar.
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

export default Portfolio2;
