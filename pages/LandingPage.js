import { useState } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import AboutMe from "../features/meals/AboutMe";
import ServiceList from "../features/meals/ServiceList";
import LoginForm from "../components/LoginForm";
import ProjectList from '../features/meals/ProjectList'
import samplePDF1 from "../app/assets/MattMcBeeCV.pdf";
import Header from "../components/Header";
import SideNav from "../features/meals/Sidebar";
import Landing from "../features/meals/Landing";


const LandingPage = () => {

  return (
    <Container fluid className="  homeBackground">
      {/* <Header /> */}
    {/* <SideNav/> */}
      <Row>
        <Col xs='12' >
          <Container className=""
          // style={{width:'100%'}}
          >
            <Landing />
          </Container>
        </Col>
        
      </Row>
    </Container>
  );
};

export default LandingPage;