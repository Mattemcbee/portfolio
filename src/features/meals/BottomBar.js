import React from 'react'
import { Container, Col, Row } from 'reactstrap';
const BottomBar = (props) => {
    return (
        <Container className=' d-none d-md-block text-center' style={{ width: '100%', paddingTop: '100px', marginLeft:'auto', marginRight:'auto' }}>
            <Row>
                <Col xs='4' style={{ backgroundColor: '#EAC7C7', height: '1px', marginTop: '20px'}}/>
                <Col xs='4'>
                    <a href="https://github.com/Mattemcbee" className='hoverEff mx-2'>
                        <i className='fa fa-github-square fa-2x' style={{ color: '#EAC7C7' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-mcbee/" className='hoverEff mx-2'>
                            <i className='fa fa-linkedin-square fa-2x' style={{ color: '#EAC7C7' }} />
                        </a>
                    </Col>

                        <Col xs='4' style={{ backgroundColor: '#EAC7C7', height: '1px', marginTop: '20px'}}/>
                    </Row>

                </Container>
                );
};
                export default BottomBar;
