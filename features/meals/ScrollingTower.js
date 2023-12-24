// import dog from './images/dog.jpg'
// import print from './images/printer issue.PNG'
// import tower from './images/tower.jpg'
import tower from '../../app/assets/img/divBack.jpg'
import HomePage from '../../pages/HomePage';
// import ShowPage from './ShowPage.js'

import { Container } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import '../../App.css'; // Create this CSS file to style the component

const ScrollingTower = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container fluid className='m-0 p-0'>
      <div className="background-image2" style={{ transform: `translateY(${scrollY * .4}px)`, overflow: 'auto' }}>
        <img src={tower} style={{width:'100%'}}/>
      </div>
      <div
        className="front-image"
        style={{ top: `${scrollY * -1}px` }}>
            <HomePage />
      </div>
    </Container>
  );
};

export default ScrollingTower;
        // <h1 style={{ fontSize: '50vh' }}>cool</h1>

