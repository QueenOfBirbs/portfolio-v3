import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "./images/project-pics/sanrio/homepage.png";
import Pic2 from "./images/project-pics/sanrio/homepage-hover.png";
import Pic3 from "./images/project-pics/sanrio/base-quiz.png";
import Pic4 from "./images/project-pics/sanrio/base-quiz-hover.png";
import Pic5 from "./images/project-pics/sanrio/progress-circle.png";
import Pic6 from "./images/project-pics/sanrio/finished-quiz.png";
import Pic7 from "./images/project-pics/sanrio/highscore.png";
import Pic8 from "./images/project-pics/sanrio/highscore-hover.png";

function SanrioQuiz() {
  return (
    <>
      <Row xs={12} id="project-bg">
        <Col xs={12} s={12} md={4} lg={4}>
          <Stack>
            <Container>
              <div id="left-box-pro">
                <Container>
                  <h1 id="title">Sanrio Quiz</h1>
                  <h2 id="description">Description:</h2>
                  <h3>
                    This is a finished homework assignment from the beginning of
                    the bootcamp course. Though a little rough compared to my
                    later works, I'm still quite fond of the CSS on it as it was
                    challenging for me at the time it was made.<br></br>{" "}
                    <br></br>Made using HTML, Javascript and CSS. Made in April
                    2022.{" "}
                  </h3>
                </Container>

                <Container id="button-area">
                  <a
                    href="https://github.com/QueenOfBirbs/codequizhomework"
                    target="_blank"
                  >
                    <Button id="pro-button">Github</Button>

                    <a
                      href="https://queenofbirbs.github.io/codequizhomework/"
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
                    <img className="d-block w-100" src={Pic1} alt="sanrio pic" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic2} alt="sanrio pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title1">Homepage</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      This is the page that the user is greeted with when they
                      first see the page. Has a hover effect on the start button
                      that changes the background to a a different pattern.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic3} alt="sanrio pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic4} alt="sanrio pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title2">Beginning of Quiz</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      When the user clicks the start button, it will trigger the
                      quiz to begin, starting the timer at 60 seconds, will give
                      them Sanrio/San X based questions to answer. Each answer
                      has a change in background when the mouse hovers over it
                      so the user can see the choice they're making more easily.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <img className="d-block w-100" src={Pic5} alt="sanrio pic"/>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title3">Middle of Quiz</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      While answering questions, the webpage will keep track of
                      the answers chosen and show if it was correct or wrong
                      based off of the color shown on the progress bar made of
                      circles. (Green is correct, Red is incorrect) <br></br>If
                      an answer is incorrect it will take 5 seconds off of thee
                      timer and subtract that from the score as well. If the
                      user's timer hits 0 before the user answers all the
                      questions, it will cancel the game and cause a gameover.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div id="pro-card-img">
                <img className="d-block w-100" src={Pic6} alt="sanrio pic"/>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title4">Finished Quiz</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Once the user finishes all of the questions without
                      getting a gameover, the game will show the ending score.
                      (which is the amount of time left)<br></br> If the user
                      got a gameover then it will also redirect to this screen
                      but is automatically given the score of 0.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div id="pro-card-img">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic7} alt="sanrio pic"/>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src={Pic8} alt="sanrio pic"/>
                  </Carousel.Item>
                </Carousel>
                <Card id="pro-card" className="text-center">
                  <Card.Header id="pro-title5">Highscore Page</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      This page will record scores of all of the users that
                      played. The game automatically redirects here after a
                      successfully finished game but this page is also able to
                      be accessed on the homepage in the top left corner.
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

export default SanrioQuiz;
