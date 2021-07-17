import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import amanSingh from "../../Assets/amanSingh.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Type2 from "./Type2";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome !
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AMAN SINGH THAKUR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <br/>
                <Type2 />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img src={amanSingh} alt="amanSingh pic" className="img-fluid" />
            </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
