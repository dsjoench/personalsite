import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';



function Navbar() {
  
  return (

      <Nav  defaultActiveKey="#about" className="flex-column" >
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
      <Nav.Link href="#project">PROJECTS</Nav.Link>
      <Nav.Link href="#education">EDUCATION</Nav.Link>
      <Nav.Link href="#skill">SKILL</Nav.Link>

      
    </Nav>


  );
}

export default Navbar;