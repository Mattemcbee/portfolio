import { useState } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import AboutMe from "../features/meals/AboutMe";
import ServiceList from "../features/meals/ServiceList";
import LoginForm from "../components/LoginForm";
import ProjectList from '../features/meals/ProjectList'
import samplePDF1 from "../app/assets/MattMcBeeCV.pdf";
import Header from "../components/Header";
import SideNav from "../features/meals/Sidebar";
import React from 'react';
import { HashLink } from 'react-router-hash-link';


const HomePage = () => {

  return (
    <Container fluid className="homeBackground">
      <Header />
    <SideNav/>
    <Row>
            <Col xs="10" className="mx-auto">
            <h1 className="cardStyleProject mx-0">Projects</h1>
          </Col>
          </Row>
          
          <Col xs={{ size: 9}} className='mx-auto'>
            <ProjectList />
          </Col>
      <Row>
        
        <Col sm="12">
          <Container className="" id="about">
            <AboutMe />
          </Container>
        </Col>
        <Col
          sm="10"
          className=" m-auto"
        >
          <h1 className="cardStyleProject mx-0">My Skills</h1>
          <ServiceList />

        </Col>
        <Col
          xs="12"
          className=" text-center"
        >
  
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;