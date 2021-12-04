import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/AmanSingh_Thakur_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const hackerrank = "Problem Solving Intermediate";
  const cgpa = "8.41/10";
  const gate = "94% Percentile";
  const acm = "4th position";

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Goldman Sachs, Sr. Analyst"
              date="October 2020 - Present"
              content={[]}
            />
            <Resumecontent
              title="Morgan Stanley, Software Consultant"
              date="July 2019 - September 2020"
              content={[]}
            />
             <Resumecontent
              title="Google Summer of Code, CERN-HSF"
              date="2015 - 2019"
              content={[]}
            />
            <Resumecontent
              title="Indian Institute of Technology, Kharagpur"
              date="2015 - 2019"
              content={[]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Manipal Institute of Technology"
              date="2015 - 2019"
              content={[`Computer Science and Engineering, CGPA: ${cgpa}`, "Coursework : Machine Learning, Natural Language Processing, Artificial Intelligence, Algorithms"]}
            />        
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Hackerrank - ${hackerrank}`,
                `GATE 2019 - ${gate}`,
                `ACM Code Jam 2017 - ${acm}`,
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
