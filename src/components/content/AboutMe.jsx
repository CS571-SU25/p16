import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import salzburgPic from '../../assets/salzburg.png';
import budapestPic from '../../assets/budapest.png';
import parisPic from '../../assets/paris.png';

export default function AboutMe() {
    const travelPics = [
    {label: "Salzburg", src: salzburgPic},
    {label: "Budapest", src: budapestPic},
    {label: "Paris", src: parisPic},
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">About Me</h1>

      <Row className="align-items-center g-4">
        <Col xs={12} md={4} className="text-center">
          <Image
            src="d.png"
            roundedCircle
            alt="Profile"
            fluid
          />
        </Col>

        <Col xs={12} md={8}>
          <p>
            Hello! I’m <strong>Liming Han</strong>, a student at UW-Madison majoring in Computer Science and Molecular and Cellular Biology.
            In my free time, you’ll find me traveling, working out at the Bakke, or experimenting in the kitchen.
          </p>
          
        </Col>
      </Row>

      <h2 className="mb-4 text-center">Some of my favorite places</h2>
      <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
        {travelPics.map((place, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="shadow-sm">
              <Card.Img 
                variant="top" 
                src={place.src} 
                alt={place.label} 
                style={{ height: '180px', objectFit: 'cover' }} 
              />
              <Card.Body className="text-center">
                <Card.Title>{place.label}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}