import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default function Home() {
  const pages = [
    {
      title: 'About Me',
      path: '/about-me',
      description: 'Learn more about me and my background.',
      download: false,
    },
    {
      title: 'Projects',
      path: '/projects',
      description: 'Check out my coding projects and research.',
      download: false,
    },
    {
      title: 'Education',
      path: '/education',
      description: 'See my academic journey and achievements.',
      download: false,
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch via a quick contact form.',
      download: false,
    },
    {
      title: 'Resume',
      path: '/p16/resume.pdf',
      description: 'Download my full resume as a PDF.',
      download: true,
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Liming Han</h1>
      <p className="text-center mb-5">
        Welcome! Use the links below to navigate through my site.
      </p>
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {pages.map((page, idx) => (
          <Col key={idx} className="d-flex">
            <Card className="flex-fill shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{page.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {page.description}
                </Card.Text>

                {page.download ? (
                  <Button
                    variant="primary"
                    href={page.path}
                    className="mt-3 align-self-start"
                  >
                    Visit {page.title}
                  </Button>
                ) : (
                  <Button
                    as={Link}
                    to={page.path}
                    variant="primary"
                    className="mt-3 align-self-start"
                  >
                    Go to {page.title}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
