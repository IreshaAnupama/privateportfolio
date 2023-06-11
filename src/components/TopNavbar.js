import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { FaLinkedin,FaFacebookSquare,FaInstagram } from 'react-icons/fa';


function TopNavbar() {
const [activeLink,setActiveLink] = useState('home');

// detect to if scroll happen for the change of backgroun
const [scrolled,setScrolled] =useState(false);

useEffect(()=> { 
    const onScroll=() => {
    if (window.scrollY > 50){
        setScrolled(true);
    } else {
        setScrolled(false);
    }
}
    window.addEventListener("scroll",onScroll);

    return () => window.removeEventListener("scroll",onScroll);
},[])

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" alt="java Img" style={{fontSize: "20px"}}>
        <Container>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About me</Nav.Link>
              <Nav.Link href="#features">Projects</Nav.Link>
              
              
              
            </Nav>
            <Nav>
            <Nav.Link eventKey={2} href="#memes">
                Contact me
              </Nav.Link>
              <Nav.Link href="#deets"><FaInstagram/></Nav.Link>
              <Nav.Link href="#features"><FaLinkedin/></Nav.Link>
              <Nav.Link href="#pricing"><FaFacebookSquare/></Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default TopNavbar