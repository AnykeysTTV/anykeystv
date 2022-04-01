import * as React from "react";

import { Container, Row, Col } from "react-bootstrap";

const AboutMePage = () => {
  return (
    <Container className="scroll" data-id="about">
      <Row>
        <Col style={{ offset: 6 }}>
          <h3>Hey Gamers</h3>
          <br />
          <h4>
            {" "}
            I like to have an chill and relaxing streams and brainstorm about
            ideas or discussing subjects about games or whats happennd today.
            <br /> I mostly play massive multiplayer online games also knows as
            MMO I am playing guild wars 2 most of my time, have been playing
            this game since 2012. <br /> I always respond to my chat when i
            stream and try to have an healty stream everytime ig go live
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMePage;
