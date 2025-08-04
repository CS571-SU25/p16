import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router'; // use react-router-dom
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.png';
import leetcodeLogo from '../assets/LeetCode_logo_black.png';

export default function NavigationBar({ children }) {
  return (
    <Navbar bg="light" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Liming Han</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-me">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/education">Education</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
            <Nav.Link
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="d-flex align-items-center">
          {children}
          <Nav.Link
            href="https://github.com/liminghan1"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center ms-2"
          >
            <img src={githubLogo} alt="GitHub" width="24" height="24" className="me-1" />
            GitHub
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/liminghan"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center ms-2"
          >
            <img src={linkedinLogo} alt="LinkedIn" width="24" height="24" className="me-1" />
            LinkedIn
          </Nav.Link>
           <Nav.Link
            href="https://leetcode.com/u/LimingH/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center ms-2"
          >
            <img src={leetcodeLogo} alt="LeetCode" width="24" height="24" className="me-1" />
            LeetCode
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
