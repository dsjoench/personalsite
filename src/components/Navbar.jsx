import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Avatar from '@mui/material/Avatar';
import avatar from './avatar.png'
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export  function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function NavConditinoal() {
  const { height, width } = useWindowDimensions();

  if (width <=900 ){
    return (
      <Navbar  fixed = "top" bg="primary" expand="lg" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Joseph ChoHang Ng</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#about">ABOUT</Nav.Link>
                  <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
                  <Nav.Link href="#education">EDUCATION</Nav.Link>
                  <Nav.Link href="#skill">SKILL</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>


    )
  }

  return (

      <Nav defaultActiveKey="#about" className= "flex-column" >
      <Avatar alt="Remy Sharp" className ="avatar" src={avatar} sx={{ width: 150, height: 150 }}/>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
      <Nav.Link href="#education">EDUCATION</Nav.Link>
      <Nav.Link href="#skill">SKILL</Nav.Link>


    </Nav>


  );
}

export default NavConditinoal;
