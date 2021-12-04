import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import liver from "../../Assets/Projects/liver.jpeg";
import race from "../../Assets/Projects/race.png";
import gsoc from "../../Assets/Projects/gsoc.png";
import allcancer from "../../Assets/Projects/allcancer.jpeg";
import stockmarket from "../../Assets/Projects/stockmarket.png";
import foodwastage from "../../Assets/Projects/foodwastage.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my Best <strong className="purple">Works</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gsoc}
              isBlog={true}
              title="GSoC | CERN-HSF"
              description="AWAKE in CERN is working on compressing size of LHC from 27km to mere 6-8km. 
              As a GSOC student, I was asked to read about 12TB of data created during 2017–18 experimental run and create a faster and simpler AWAKE database and to supply API for searching and visualizing multiple datasets in the timestamp range"
              link="https://medium.com/singh96aman/https-medium-com-singh96aman-gsoc-2019-cern-hsf-pyawake-153b1218ba25"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockmarket}
              isBlog={false}
              title="Market Watch"
              description="This project was built in the company of Mr. Pranjal where we sought out to develop an SVM model on historical data of top 30 BSE and top 50 NSE companies in the pursuit to accurately predict the movement of stocks."
              link="https://github.com/singh96aman/MarketWatchBETA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allcancer}
              isBlog={true}
              title="Treatment of ALL Cancer"
              description="As part of my summer internship at Indian Institute of Technology Kharagpur, I had to work with Mr. Tushar Mungle and Professor Jayanta Mukhopadhyay in coalition with Tata Medical Center Kolkata, to create a pill reminding application for ALS patients as well as develop framework to mimic doctor's decision making."
              link="https://github.com/singh96aman/IIT-Kharagpur-Workspace"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={race}
              isBlog={true}
              title="Analysis of Diversity in US"
              description="Working on EE01 dataset to highlight minority gaps for different races, genders and ethnicities in the US"
              link="https://medium.com/nerd-for-tech/analyzing-diversity-in-the-us-eca0ed5edcbc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liver}
              isBlog={false}
              title="Effects of Alcohol on Liver"
              description="Using drinking patterns and historical data to predict the chances of a person developing a liver related disease."
              link="https://github.com/singh96aman/Effects-of-alcohol-on-liver"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodwastage}
              isBlog={false}
              title="Prediction of Food Wastage using ANN"
              description="Using Manipal Cafeteria statistics to highlight the amount of food wasted using Aritifical Neural Networks"
              link="https://github.com/singh96aman/Food_Wastage_Using_ANN"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
