import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import uwLogo from '../../assets/uwmadison.png';

export default function Education() {
  const timeline = [
    {
      school: 'University of Wisconsin–Madison',
      degree: 'In progress: B.S. in Computer Science',
      degree1: 'In progress: B.S. in Molecular and Cellular Biology',
      dates: 'Sep 2023 – Present',
      description: '',
    }
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Education</h1>
      
      <Row className="justify-content-center g-4">
        {timeline.map((item, idx) => (
          <Col key={idx} xs={12} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center">
                <Image
                  src={uwLogo}
                  alt={`${item.school} logo`}
                  fluid
                  style={{ maxHeight: '100px', objectFit: 'contain' }}
                  className="mb-3"
                />

                <Card.Title className="text-center">{item.school}</Card.Title>
                
                <Card.Subtitle className="mb-2 text-center">
                  {item.degree}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-center">
                  {item.degree1}
                </Card.Subtitle>

                <Card.Text className="text-center">
                  <small className="text-secondary">{item.dates}</small>
                </Card.Text>

                <Card.Text className="text-center">{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
