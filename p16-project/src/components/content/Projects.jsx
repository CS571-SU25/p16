import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

export default function Projects() {
    const leetProfile = 'https://leetcode.com/u/LimingH/';

  const leetcodeStats = [
    { label: 'Problems Solved', value: '8' },
    { label: 'Easy', value: '7' },
    { label: 'Medium', value: '1' },
    { label: 'Hard', value: '' },
  ];

  const codingProjects = [
     {
      title: 'Portfolio Website',
      description:
        'This very site built using React. Deployed on GitHub Pages with responsive design and accessible components.',
      link: 'https://github.com/CS571-SU25/p16',
      date: 'Jul 2025',
    },

    {
      title: '',
      description:
        '',
      link: '',
      date: '',
    },
    {
      title: '',
      description:
        '',
      link: '',
      date: '',
    },

  ];

  const researchExperience = [
    {
      title: '',
      description:
        '',
      paper: '',
      date: '',
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Portfolio</h1>

      <h3 className="mb-3">LeetCode Stats</h3>
      <Row xs={1} sm={2} md={3} lg={5} className="g-3 mb-5 justify-content-center">
        {leetcodeStats.map((stat, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <a
              href={leetProfile}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card className="text-center shadow-sm px-3 py-2 bg-primary text-white">
                <Card.Body>
                  <Card.Title>{stat.value}</Card.Title>
                  <Badge bg="light" text="dark">
                    {stat.label}
                  </Badge>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <h3 className="mb-3">Coding Projects</h3>
      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {codingProjects.map((proj, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {proj.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{proj.date}</small>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mb-3">Research Experience</h3>
      <Row xs={1} className="g-4">
        {researchExperience.map((res, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{res.title}</Card.Title>
                <Card.Text className="flex-grow-1">{res.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{res.date}</small>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    href={res.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Paper
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
