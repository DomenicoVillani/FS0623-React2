import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 

function MyNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#about" className='text-white'>About </Nav.Link>
            <Nav.Link href="#browse" className='text-white'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;