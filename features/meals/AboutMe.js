import { Col, Container, Row, Button, Image, Card, CardImg, CardText, CardBody } from "reactstrap";
import bagel from '../../../src/app/assets/img/bagel.png';
import head from '../../../src/app/assets/img/head.jpg';
import samplePDF1 from '../../app/assets/MathewMcBeeCM.pdf'
import { useState } from "react";
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';
import { Spring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

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
import BottomBar from "./BottomBar";

const AboutMe = () => {
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



    <Row className="ms-auto">
      {/* <h2 className='cardStyle'>About Me</h2> */}
      <Container id="about" style={{ paddingTop: '40px' }}>

        <Row className='m-auto text-center center'>

          <Col sm="10" className="m-auto">
            <animated.div style={animatedStyle2}>

              {/* <h1 className=' cardStyleProject' style={{ fontFamily: '' }}> About Me</h1> */}
              <Row>
                <Col xs='12' md='4'>
                  <img class="center "
                    style={{ backgroundColor:'red', borderRadius: "50% 50% 0 0", backgroundColor: "red", width: '80%', justifyContent: 'center', alignContent:'center' }} top src={head} />
                  

                </Col>
                <Col xs='12' md='8'>
                <h1 className=' cardStyleProject text-start' style={{ fontFamily: '' }}> About Me</h1>

                  <h4 className='fontBasic3 text-start'>I am a fullstack developer based in Richmond, VA. My passion for web development started when I began creating websites for local bands, and following a full-stack development course, I am endeavoring to turn my passion into my career.

<br/> With 3 years of professional work experince and 1 year of web development experience I believe I would make a great addition to a team looking for a creative mind to join their front-end or back-end initiatives.</h4>

                </Col>
                  <BottomBar />


              </Row>
            </animated.div>
            {/* <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <h2 style={{ fontSize:'82px' }}>Hello</h2>
              )}
            </Spring>
          )}
        </VisibilitySensor> */}
            {/* <animated.div style={animatedStyle2} > */}



            {/* <Row>
                <Col className="d-none d-md-block">
                  <Button className="hoverEff" style={{
                    borderRadius: "10px", borderColor: '#EAC7C7',
                    backgroundColor: "black", color: '#EAC7C7',

                      margin: '5px', padding: '10px 20px'
                  }}
                    href={samplePDF1} target="_blank"
                    rel="noreferrer">
                    CV
                  </Button>
                  <Button className="hoverEff" style={{
                    borderRadius: "10px",
                    borderColor: '#EAC7C7', backgroundColor: "#EAC7C7", color: 'black',
                    margin: '5px', padding: '10px 20px'

                  }} onClick={() => setModalOpen(true)}>
                    Let's Talk
                  </Button>
                </Col>

                <Col className="d-md-none">
                  <Button className="hoverEff " style={{
                    borderRadius: "10px", borderColor: '#EAC7C7',
                    backgroundColor: "black", color: '#EAC7C7', textDecoration: 'none',
                    width: '100px', height: '50px', justifyContent: 'center', margin: '5px'
                  }}
                    href={samplePDF1} target="_blank"
                    rel="noreferrer">
                    <p className="center " style={{ fontSize: '4vw' }}>CV</p>
                  </Button>
                  <Button className="hoverEff" style={{
                    borderRadius: "10px", borderColor: '#EAC7C7',
                    backgroundColor: "#EAC7C7", color: 'black', textDecoration: 'none', width: '100px',
                    height: '50px', justifyContent: 'center', margin: '5px'
                  }} onClick={() => setModalOpen(true)}>
                    <p className="center" style={{ fontSize: '4vw' }}>Let's Talk</p>
                  </Button>
                </Col>
              </Row> */}
            {/* </animated.div> */}

            {/* <h4 className='fontBasic3'>I am a fullstack developer based in Richmond, VA, and I am passionate and dedicated to my work. With 3 years of professional work experince and 1 year of code experince I have aquired the skills necessary to build great and premium websites.</h4> */}
            <Modal className='modalBack' style={{ width: '10%' }} isOpen={modalOpen} >
              <ModalHeader toggle={(() => setModalOpen(false))} className='modalBack' >
                Let's Talk
              </ModalHeader>
              <ModalBody className='modalBack' style={{ backgroundColor: '#EAC7C7' }}>
                <Formik >
                  <Form>

                    <FormGroup>
                      <Label>
                        Email:
                      </Label>
                      <Label>
                        <a role='link' className='btn btn-link NoDecorationCardText unstyled unstyleLink2 inline' href='mailto:matthew.mcbee7@gmail.com'>
                          {/* <i className='fa fa-envelope-o NoDecorationCardText unstyled unstylfeLink2' /> */}
                          Matthew.Mcbee7@gmail.com
                        </a>
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label>
                        Phone Number:
                      </Label>
                      <Label>
                        <a role='link' className='btn btn-link NoDecorationCardText unstyleLink inline' href='tel:+15403306288'>
                          <i className='fa fa-phone-o NoDecorationCardText unstyleLink' />540-330-6288
                        </a>
                      </Label>
                    </FormGroup>
                  </Form>
                </Formik>
              </ModalBody>
            </Modal>

          </Col>

        </Row>


      </Container>
    </Row>

  );
};

export default AboutMe;