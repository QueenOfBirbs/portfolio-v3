import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import Me from "./images/me.heif";

function AboutMe() {
  return (
    <Row xs={12}>
      <Col xs={12} md={4} lg={4} id="left-about">
        <Container fluid id="left-box">
          <Card id="card">
            <Card.Img variant="top" src={Me} alt="isis face" />
            <Card.Body>
              <Card.Title id="about-header">About Me</Card.Title>
              <Card.Text>
                Thanks for taking the time to check out my portfolio.<br></br>{" "}
                Feel free to contact me through whatever method you prefer on
                the contact bar below!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="card">
            <ListGroup variant="flush">
              <ListGroup.Item id="li1">Age: 23</ListGroup.Item>
              <ListGroup.Item id="li2">Pronouns: She/Her</ListGroup.Item>
              <ListGroup.Item id="li3">Birthday: Feburary 12th</ListGroup.Item>
              <ListGroup.Item id="li4">City: Monroe, WA</ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>
      </Col>

      <Col xs={12} md={8} lg={8} id="right-about">
        <Container fluid>
          <Stack>
            <Card id="card">
              <Card.Header id="header1">My Strengths</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    As a former arts student, I consider my talents to be more
                    on the creative side as coding is a lovely way to combine
                    both artistic style with a medium that is used and seen by
                    many people. Making cohesive themes with a bit of unique
                    flair for websites is something I greatly enjoy and I
                    consider it to be one of my strongsuits.<br></br>
                    I'm skilled at making page layouts as well, in both
                    Bootstrap (React/Regular) and plain HTML so websites can
                    also have a unique setup. I'm also a perfectionist at heart
                    so I won't stop until it's as close to my vision as humanly
                    possible; if I have to learn a new technique or try and fail
                    many different ways, that's cool with me.
                    <br></br>
                    I'm a fast learner and love to collect more knowledge on
                    anything and everything; so getting more experience would
                    also be a great opportunity, in whatever shape or form that
                    may take!
                  </p>
                </blockquote>
              </Card.Body>
            </Card>

            <Card id="card">
              <Card.Header id="header2">Education and Experience</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    I recently graduated from UW's Full Stack Coding Bootcamp on
                    6/13! Before then most of my experience is based off of
                    dabbling in occasional HTML coding to make my profiles on
                    different sites unique to me. <br></br>
                    Before that my jobs were mostly in customer service based
                    roles that required dealing with all types of people and
                    challenges, often learning new departments and skills to
                    fill whatever was needed.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>

            <Card id="card">
              <Card.Header id="header3">Hobbies and Interests</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    In my free time, I enjoy sewing, embroidery and other crafts
                    as well; many of my hobbies are grandma-adjacent. I like
                    playing video games, more so RPGs and idol rhythm games
                    though I have a softspot for anything with a pixel/oldschool
                    artstyle.
                    <br></br>I also have a large collection of plants that have
                    taken over majority of my windowsills and collect tacky
                    knick knacks. I tend to embarass my cat, Tycho, often by
                    dresssing him up for holidays/events; the picture to your
                    left is him and I on his birthday.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Stack>
        </Container>
      </Col>
    </Row>
  );
}

export default AboutMe;
