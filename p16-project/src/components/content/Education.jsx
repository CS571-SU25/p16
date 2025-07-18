// src/content/Education.jsx
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Education() {
  const timeline = [
    {
      school: 'University of Wisconsin–Madison',
      degree: 'B.S. in Computer Science',
      degree1: 'B.S. in Molecular and Cellular Biology',
      dates: 'Sep 2023 – Present',
      description:
        '',
    }
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Education</h1>
      
      <Row className="justify-content-center g-4">
        {timeline.map((item, idx) => (
          <Col key={idx} xs={12} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center">{item.school}</Card.Title>
                
                <Card.Subtitle className="mb-2 text-muted text-center">
                  {item.degree}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  {item.degree1}
                </Card.Subtitle>

                <Card.Text className="text-center">
                  <small className="text-secondary">{item.dates}</small>
                </Card.Text>

                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
