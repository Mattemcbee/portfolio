import { Col, Container, Row, Button, Image, Card, CardImg, CardText, CardBody } from "reactstrap";
import bagel from '../../../src/app/assets/img/bagel.png';
import head from '../../../src/app/assets/img/head.jpg';
import samplePDF1 from '../../app/assets/MattMcBeeCV.pdf'
import { useState } from "react";
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';
import HomePage from "../../pages/HomePage";

import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,

  Modal,
  Label,
  FormGroup,
  ModalHeader, ModalBody
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';



import {
  selectAllIngredients,
  selectMealByIngredient,
  filterIngredientsByTrue,
  filterObj,
} from "./MealsSlice";
import MealCard from "./ServiceCard";
import IngredientSelection from "./IngredientSelection";

const Landing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    from: { opacity: "0" },

    to: [
      { opacity: "1" },
    ],
    config: { duration: 1000 }
  });
  const animatedStyle2 = useSpring({
    from: { transform: "translateY(100%)" },
    to: [
      { transform: "translateY(0%)" },
    ],
    config: { duration: 500 }
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (



    <Row className="m-auto fluid">
      {/* <h2 className='cardStyle'>About Me</h2> */}
      <Container className="m-auto homeBackground4 fluid" >

        <Row className='m-auto text-center'>

          <Col sm="12" >
            <Col className='d-none d-sm-block'>

              <animated.div style={animatedStyle} className="m-auto text-start">

                <h2 className='fontBasic4'>Hello! My name is </h2>
                <h2 className='fontBasic5 ' style={{ fontFamily: '', color: 'white' }}> Matt McBee</h2>
                <h2 className='fontBasic4'>I am an aspiring fullstack developer </h2>

                {/* <img class="center"
                style={{ borderRadius: "50% 50% 0 0", backgroundColor: "red", width: '30%', justifyContent: 'center' }} top src={head} /> */}
              </animated.div>
            </Col>
            <Col className=' d-sm-none'>

              <animated.div style={animatedStyle} className="m-auto text-start">

                <h2 className='fontBasic2'>Hello! My name is </h2>
                <h2 className='fontBasic ' style={{ fontFamily: '', color: 'white' }}> Matt McBee</h2>
                <h2 className='fontBasic2'>I am an aspiring fullstack developer </h2>

                {/* <img class="center"
                style={{ borderRadius: "50% 50% 0 0", backgroundColor: "red", width: '30%', justifyContent: 'center' }} top src={head} /> */}
              </animated.div>
            </Col>
            <animated.div style={animatedStyle2}>



              <Row>
                <Col className="">
                  <Button className="hoverEff" style={{
                    borderRadius: "10px", borderColor: '#EAC7C7',
                    backgroundColor: "#111111", color: '#EAC7C7',
                    margin: '5px'
                  }}
                    href="/HomePage"
                  >
                    View Porfolio
                  </Button>

                </Col>


              </Row>
            </animated.div>

            {/* <h4 className='fontBasic3'>I am a fullstack developer based in Richmond, VA, and I am passionate and dedicated to my work. With 3 years of professional work experince and 1 year of code experince I have aquired the skills necessary to build great and premium websites.</h4> */}


          </Col>
        </Row>

      </Container>
    </Row>

  );
};

export default Landing;