import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
          <h1 style={{ fontSize: "2.5em" }}>
              INTRODUCING MYSELF
            </h1>
            <p className="home-about-body">
            Hi, I am Aman! I love to add intelligence to inanimate objects through code.
<br/><br/>
I am a proud CS alum of Manipal Institute of Technology. During my tenure as a student, I have built various tools while collaborating with startups. For instance, I worked with CampusHaat to build an e-commerce platform and interned at Accolite to build a scheduler for randomizing drug tests. Additionally, I collaborated with faculty and peers to create stochastic models like predicting medical prescriptions for ALL cancer patients or predicting the direction of stock movement.
<br/><br/>
I believe that the future of software engineering is open-source, sustainable development, and inclusivity at the workplace. To that end, I have published several articles on these topics. As the ex-technical head of Linux Users Group Manipal, I conducted workshops to promulgate open-source initiatives and Linux OS. As fate would have it, I got an opportunity to work with CERN scientists as part of the GSoC program to release an open-source library, pyawake. The library would build meta-data indexes on top of large HDF files to help visualize series of images faster.
<br/><br/>
Currently, I work in the Risk division of Goldman Sachs as a Senior Engineer to build pipelines to accurately report the firm's liquidity to regulators. While my work lets me impact Wall Street, I dabble with R&D engineering at Goldman to work on projects involving machine learning and predictive analysis.
              <br />
              <br />
              Programming/Scripting/Software -
              <i>
                <b className="purple">Python, Java, C/C++, JavaScript, Bash, Spring, Flask, Angular, React, Git</b> 
              </i>
              <br />
              <br />
              Analytics Toolkit - <i><b className="purple">Spark,Pandas, SQL, Excel, NLTK, TensorFlow, Scikit-learn, R, AzureML, Tableau, Matplotlib</b></i>
            </p>
          </Col>
        </Row>
        <About/>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/singh96aman/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/singh96aman/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/singh96aman/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
