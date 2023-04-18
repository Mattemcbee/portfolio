import { Card, CardImg, CardText, CardBody, Col, Row } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import Carousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";import { useState } from "react";
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';
import ramen from '../../app/assets/img/ramen.jpg'
import { useState } from 'react';
 
const ProjectDetailsPreview= ({meal}) => {

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

        <Col xs={{size:'10', offset:'1'}} md={{size:'12', offset:'0'}} style={{borderRadius:'10px ', width:'100%'}}>
                    <animated.div style={animatedStyle2} style={{borderRadius:'10px 10px 0 0'}}>

            <Card className='cardStyle ' style={{borderRadius:'10px'}}>
            <Carousel style={{borderRadius:'10px'}}>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={image}
                            alt="Image One"
                            
                        />
                        <Col className='d-none d-md-block'>
                        <Carousel.Caption >
                            <p className='discBack'>{imageDisc}</p>
                        </Carousel.Caption>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Image Two"
                        />
                        <Col className='d-none d-md-block'>
                        <Carousel.Caption>
                            <p className='discBack'>{imageDisc2}</p>
                        </Carousel.Caption>
                        </Col>
                    </Carousel.Item>
                </Carousel>            </Card>
                </animated.div>

        </Col>
        
    );
};

export default ProjectDetailsPreview;