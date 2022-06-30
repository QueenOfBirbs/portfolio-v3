import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "./images/project-pics/portfolio-v1/navbar.png";
import Pic2 from "./images/project-pics/portfolio-v1/navbar-hover.png";
import Pic3 from "./images/project-pics/portfolio-v1/about-me.png";
import Pic4 from "./images/project-pics/portfolio-v1/work-1.png";
import Pic5 from "./images/project-pics/portfolio-v1/work-2.png";
import Pic6 from "./images/project-pics/portfolio-v1/work-hover.png";
import Pic7 from "./images/project-pics/portfolio-v1/footer.png";
import Pic8 from "./images/project-pics/portfolio-v1/footer-hover.png";

function Portfolio1() {
  return (
    <>
      <Row xs={12} id="project-bg">
        <Col xs={12} s={12} md={4} lg={4}>
          <Stack>
            <Container>
              <div id="left-box-pro">
                <Container>
                  <h1 id="title">Portfolio V1</h1>
                  <h2 id="description">Description:</h2>
                  <h3>
                    This was another very early homework assignment from class,
                    I never ended up filling it in with personal details. I
                    really liked this theme and still so this current portfolio
                    is inspired by this. A little rough as flexbox was not
                    something I understood well at the time.<br></br>
                    <br></br>
                    Bootstrap, HTML, and CSS were used in this project. Made in
                    April 2022.
                  </h3>
                </Container>

                <Container id="button-area">
                  <a
                    href="https://github.com/QueenOfBirbs/portfolio-version-1"
                    target="_blank"
                  >
                    <Button id="pro-button">Github</Button>

                    <a
                      href="https://queenofbirbs.github.io/portfolio-version-1/"
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
                    <img className="d-block w-100" src={Pic1} alt="portfolio 1 pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic2} alt="portfolio 1 pic" />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title1">Navigation Bar</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      A simple navigation bar with links that redirect to
                      different sections on the page and an external link. Also
                      has a hover effect that underlines whatever link the user
                      is hovering on.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <img className="d-block w-100" src={Pic3} alt="portfolio 1 pic" />
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title2">About Me</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      A simple and short "About Me" section, filled with Lorem
                      as it was a good way to see how text looked before trying
                      to come up with a blurb.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic4} alt="portfolio 1 pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic5} alt="portfolio 1 pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic6} alt="portfolio 1 pic" />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title3">Work</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      A section that shows off example projects. Each picture is
                      grayscale at first but changes to color when the user
                      hovers on a picture.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic7} alt="portfolio 1 pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic8} alt="portfolio 1 pic" />
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title4">Footer</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Looks more like a line of text then a easily seen footer
                      but also has functioning links that redirect to accounts
                      and an email function. Also includes the same hover
                      effects as the Navigation Bar where the link is underlined
                      when hovered on.
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

export default Portfolio1;
