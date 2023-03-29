import React from 'react'
import { Container, Col, Row } from 'reactstrap';
const SideNav = (props) => {
    return (
        <Container className='sidenav d-none d-md-block text-center' style={{ width: '10%', paddingTop: '40px', backgroundColor: '' }}>
            <Row>
                <a href="https://github.com/Mattemcbee" className='hoverEff'>
                    <i className='fa fa-github-square fa-2x' style={{ color: '#EAC7C7' }} />
                </a>
            </Row>
            <Row >
                <a href="https://www.linkedin.com/in/matthew-mcbee/" className='hoverEff'>
                    <i className='fa fa-linkedin-square fa-2x' style={{ color: '#EAC7C7' }} />
                </a>
            </Row>
            <Col style={{ backgroundColor: '#EAC7C7', height: '80%', width: '1px', marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>

            </Col>
        </Container>
    );
};
export default SideNav;
