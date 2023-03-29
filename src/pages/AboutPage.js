import { useSelector } from "react-redux";
import { Col, Container, Row, Button } from "reactstrap";
import { selectFilteredRecipes, selectNumberOfFiltered, selectTotalNumberInRecipe, selectIngLength } from "../features/recipes/AddRecipeSlice";
import ProjectCard from "../features/meals/ProjectsCard";
import { selectAllRecipe } from "../features/recipes/AddRecipeSlice";
import { INGREDIENTS } from "../app/shared/INGREDIENTLIST";
import { PROJECTS } from "../app/shared/PROJECTS";
import samplePDF1 from "../app/assets/MattMcBeeCV.pdf";
import Header from "../components/Header";
import { useState } from "react";
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';
import SideNav from "../features/meals/Sidebar";

const AboutPage = () => {

  return (
    <Container fluid className="homeBackground3 " >
      <Header />
      <SideNav />
      <Row>
        <Col
          sm="size: 12"
          className=" text-center"
        >
          <h1>Connect with me </h1>
          <h2>Find out more about me here</h2>

          <Button className="hoverEff" style={{
            borderRadius: "10px", borderColor: '#EAC7C7',
            backgroundColor: "black", color: '#EAC7C7', textDecoration: 'none', width: '100px',
            height: '50px', justifyContent: 'center', margin: '5px'
          }}
            href={"https://github.com/Mattemcbee"} target="_blank"
            rel="noreferrer">
            Github
          </Button>
          <Button className="hoverEff" style={{
            borderRadius: "10px", borderColor: '#EAC7C7',
            backgroundColor: "black", color: '#EAC7C7', textDecoration: 'none', width: '100px',
            height: '50px', justifyContent: 'center', margin: '5px'
          }}
            href={"https://www.linkedin.com/in/matthew-mcbee/"} target="_blank"
            rel="noreferrer">
            LinkedIn
          </Button>
          <Button className="hoverEff" style={{
            borderRadius: "10px", borderColor: '#EAC7C7',
            backgroundColor: "black", color: '#EAC7C7', textDecoration: 'none', width: '100px',
            height: '50px', justifyContent: 'center', margin: '5px'
          }}
            href={samplePDF1} target="_blank"
            rel="noreferrer">
            Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;