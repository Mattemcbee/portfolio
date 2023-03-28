import { Card, CardImg, CardText, CardBody, Col, Row } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';
const ProjectDetails= ({meal}) => {

    const { image, image2, disc, imageDisc, imageDisc2, name, time, level, recipeOut } = meal;
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
      from: { transform: "translateX(-100%)" },
      to: [
        { transform: "translateX(0%)" },
      ],
      config: { duration: 250 }
  });
    
    useEffect(() => {
      setToggle(true);
    }, []);
    return ( 

        <Col md={{size:'6', offset:'0'}} xs={{size:'10', offset:'1'}}>
                    <animated.div style={animatedStyle2} >

            <Card className='cardStyle '>
            <Carousel>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={image}
                            alt="Image One"
                        />
                        <Carousel.Caption>
                            <p>{imageDisc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Image Two"
                        />
                        <Carousel.Caption>
                            <p>{imageDisc2}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>            </Card>
                </animated.div>

        </Col>
        
    );
};

export default ProjectDetails;