import React from 'react'
import { Container, Col, Row, Button } from 'reactstrap';
import samplePDF1 from '../../app/assets/MathewMcBeeCM.pdf'
import { useState } from "react";
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

const BottomBar = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Container className=' ' style={{ width: '50%', paddingTop: '30px', paddingBottom: '50px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Row>
                <Col className='d-none d-md-block' md='3' style={{ backgroundColor: '#EAC7C7', height: '1px', marginTop: '20px' }} />
                <Col xs='12' md='6'>
                    {/* <a href="https://github.com/Mattemcbee" className='hoverEff mx-2'>
                        <i className='fa fa-github-square fa-2x' style={{ color: '#EAC7C7' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-mcbee/" className='hoverEff mx-2'>
                            <i className='fa fa-linkedin-square fa-2x' style={{ color: '#EAC7C7' }} />
                        </a> */}
                    <Row className='' style={{marginTop:''}}>
                    <Col className="">
                        <Button className="hoverEff" style={{
                            borderRadius: "10px", borderColor: '#EAC7C7',
                            backgroundColor: "#111111", color: '#EAC7C7',

                            margin: '5px', padding: '15px 25px'
                        }}
                            href={samplePDF1} target="_blank"
                            rel="noreferrer">
                            CV
                        </Button>
                       

                        {/* <Button className="hoverEff" style={{
                            borderRadius: "10px",
                            borderColor: '#EAC7C7', backgroundColor: "#EAC7C7", color: 'black',
                            margin: '5px', padding: '10px 20px'

                        }}
                          onClick={() => setModalOpen(true)}
                        >
                            Let's Talk
                        </Button> */}
                        </Col>
                    </Row>
                </Col>

                <Col className='d-none d-md-block' md='3' style={{ backgroundColor: '#EAC7C7', height: '1px', marginTop: '20px' }} />
            </Row>
            <Modal className='modalBack modalBackRound' isOpen={modalOpen} >
              <ModalHeader toggle={(() => setModalOpen(false))} className='modalBack' >
                Let's Talk
              </ModalHeader>
              <ModalBody className='modalBackRoundBottom' style={{ backgroundColor: '#EAC7C7' }}>
                <Formik >
                  <Form>

                    <FormGroup>
                      <Label>
                        Email:
                      </Label>
                      <Label>
                        <a role='link' className='btn btn-link NoDecorationCardText unstyleLink inline' href='mailto:matthew.mcbee7@gmail.com'>
                          <i className='fa fa-envelope-o NoDecorationCardText unstyleLink' />Matthew.Mcbee7@gmail.com
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
        </Container>

        
    );
};
export default BottomBar;
