import { useState } from 'react'
import '../.././App.css'
import { HashRouter, Route, Routes, Link } from 'react-router'
import { Navbar, Nav, Container } from 'react-bootstrap';
import AboutMe from '../content/AboutMe'
import Projects from '.././content/Projects'
import Home from '.././content/Home';
import Contact from '.././content/Contact'
import Education from '.././content/Education'
import githubLogo from '../../assets/github.svg'
import linkedinLogo from '../../assets/linkedin.png'


function App() {
  
return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="light" expand="md">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Liming Han</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
                <Nav.Link as={Link} to="/projects">Portfolio</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/education">Education</Nav.Link>
                <Nav.Link
                  href="resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link
                  href="https://github.com/liminghan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                >
                  <img
                    src={githubLogo}
                    alt="GitHub"
                    width="24"
                    height="24"
                    className="me-1"
                  />
                  GitHub
                </Nav.Link>

                <Nav.Link
                  href="https://www.linkedin.com/in/YourProfile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    width="24"
                    height="24"
                    className="me-1"
                  />
                  LinkedIn
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid className="flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
<           Route path="/education" element={<Education />} />
          </Routes>
        </Container>
      </div>
    </HashRouter>
  )
}
export default App
