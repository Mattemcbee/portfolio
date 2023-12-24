import { useSelector } from "react-redux";
import { Col, Container, Row, Button } from "reactstrap";
import { selectFilteredRecipes, selectNumberOfFiltered, selectTotalNumberInRecipe, selectIngLength } from "../features/recipes/AddRecipeSlice";
import ProjectCard from "../features/meals/ProjectsCard";
import { selectAllRecipe } from "../features/recipes/AddRecipeSlice";
import { INGREDIENTS } from "../app/shared/INGREDIENTLIST";
import { PROJECTS } from "../app/shared/PROJECTS";
import samplePDF1 from "../app/assets/MattMcBeeCV3.pdf";
import Header from "../components/Header";
import { useState } from "react";
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';
import SideNav from "../features/meals/Sidebar";
import BottomBar from "../features/meals/BottomBar";

const AboutPage = () => {

  return (
    <Container fluid className="homeBackground3  " >
      <Header />
      {/* <SideNav /> */}
      <Row>
        <Col
          sm="size: 12"
          className=" text-center "
        >
          <h1>Connect with me </h1>
          <h2>Find out more about me here</h2>

          <Button className="hoverEff " 
          style={{
            borderRadius: "10px", borderColor: '#EAC7C7',
            backgroundColor: "black", color: '#EAC7C7', padding: '10px 15px 10px 15px', margin:'10px'
          }}
            href={"https://github.com/Mattemcbee"} target="_blank"
            rel="noreferrer">
            Github
          </Button>
          <Button className="hoverEff" 
          style={{
            borderRadius: "10px", borderColor: '#EAC7C7',
            backgroundColor: "black", color: '#EAC7C7', padding: '10px 15px 10px 15px', margin:'10px'
          }}
            href={"https://www.linkedin.com/in/matthew-mcbee/"} target="_blank"
            rel="noreferrer">
            LinkedIn
          </Button>
          <Button className="hoverEff" 
          style={{
            borderRadius: "10px", borderColor: '#EAC7C7',
            backgroundColor: "black", color: '#EAC7C7', padding: '10px 15px 10px 15px', margin:'10px'
          }}
            href={samplePDF1} target="_blank"
            rel="noreferrer">
            Resume
          </Button>
        </Col>
      </Row>
      <BottomBar className='center'/>
    </Container>
  );
};

export default AboutPage;