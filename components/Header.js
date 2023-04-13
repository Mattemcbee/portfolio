import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Button,
  Modal,
  Label,
  FormGroup,
  ModalHeader, ModalBody
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { NavLink } from "react-router-dom";
import hatLogo from "../app/assets/img/hatLogo.jpg";
import backDrop from "../app/assets/img/logoM.jpg";

import LoginForm from "./LoginForm";
import UserLoginForm from "../features/user/UserLoginForm";

import React from 'react';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" style={{backgroundColor:'black'}}>
      <NavbarBrand className="ms-5 float-start" href="/HomePage" >
        <img src={backDrop} alt="nucamp logo" className="float-start" style={{ width: '50%' }} />
        {/* <h1 className="mt-1 hoverEff"style={{color:'#EAC7C7', 
        fontSize:'4vh', fontFamily: '' }}>Matt McBee</h1> */}
      </NavbarBrand>
    
      {/* <LoginForm /> */}
      <HashLink className="unstyleLink" smooth to="/HomePage#about">
                About
            </HashLink>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="ms-5 float-start"
        style={{
          color: '#EAC7C7', backgroundColor: 'black', borderRadius: "10px",
          borderColor: '#EAC7C7', border: '5px'
        }} ><i className="fa fa-bars fa-md dark " />
      </NavbarToggler>
      
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto iconColor float-start" navbar  >

          <NavItem>
            <NavLink className="nav-link iconColor hoverEff" style={{ color: '#EAC7C7' }} to="/HomePage">
              {/* <i className="fa fa-home fa-lg fontBasic" />  */}
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link iconColor hoverEff" style={{ color: '#EAC7C7' }} to="/HomePage#about" >
              {/* <i className="fa fa-user fa-lg fontBasic" />  */}
              <HashLink className="unstyled" smooth to="/HomePage#about">
                About
            </HashLink>
            </NavLink>
          </NavItem>
          <NavItem >
            <span className='nav-link iconColor hoverEff' style={{ color: '#EAC7C7' }}
              onClick={() => setModalOpen(true)}>
              {/* <i className="fa fa-phone fa-lg fontBasic"  />  */}
              Contact</span>
            <Modal className='modalBack' isOpen={modalOpen} >
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
          </NavItem>

        </Nav>

      </Collapse>
      
    </Navbar>
  );
};

export default Header;