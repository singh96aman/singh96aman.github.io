import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiJavascript1,
  DiSpark,
  DiReact,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiGnubash,
  SiLinux,
  SiMysql,
  SiMicrosoftexcel,
  SiTableau,
  SiR,
  SiAzuredevops,
  SiSpring,
  SiVisualstudiocode,
  SiJupyter,
  SiAngular,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
        <p>Bash</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <p>PyTorch</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark />
        <p>Spark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <p>Tensor Flow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p>Jupter</p>
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p>MYSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <p>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <p>Spring</p>
      </Col>

    </Row>
  );
}

export default Techstack;
