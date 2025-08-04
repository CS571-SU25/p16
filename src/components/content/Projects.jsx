import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import BookmarkButton from '../BookmarkButton';

export default function Projects({ favorites, onToggleFavorite }) {
  const githubProfile = 'https://github.com/liminghan1';

  const relevantClassesTaken = [
    {
      label: 'CS400: Programming III',
      desc:
        'Covers balanced trees, graphs & traversal, hash tables, sets, and complexity; includes a medium-sized project using Java.',
      link: `${githubProfile}/CS400`,
    },
    {
      label: 'CS354: Machine Organization and Programming',
      desc:
        'Explores C programming, virtual memory, dynamic allocation, caching, assembly, the call stack, and interrupts.',
      link: `${githubProfile}/CS354`,
    },
    {
      label: 'CS571: Building User Interfaces',
      desc:
        'Teaches event-driven and direct-manipulation UI paradigms, accessibility, and multi-platform UI toolkits (web and mobile).',
      link: `${githubProfile}/CS571`,
    },
    {
      label: 'CS540: Introduction to AI',
      desc:
        'Introduces search algorithms, logic & knowledge representation, probabilistic reasoning, and ML foundations through various projects and assignments.',
      link: `${githubProfile}/CS540`,
    },
  ];

  const techStack = [
    'JavaScript',
    'React',
    'Python',
    'Java',
    'Bootstrap',
    'PyTorch',
    'Git',
    'C',
    'Assembly',
    'R',
    'Bash'
  ];

  const codingProjects = [
    {
      id: 'portfolio-1',
      title: 'Portfolio Website',
      description:
        'A React site deployed on GitHub Pages with responsive, accessible design and theme customization.',
      link: 'https://github.com/CS571-SU25/p16',
      date: 'Jul 2025',
    },
    {
      id: 'portfolio-2',
      title: 'Coming Soon!',
      description: 'Stay tuned for my next coding project.',
      link: '',
      date: '',
    },
    {
      id: 'portfolio-3',
      title: 'Coming Soon!',
      description: 'More to come—check back later!',
      link: '',
      date: '',
    },
  ];

  const researchExperience = [
    {
      id: 'research-1',
      title: 'Coming Soon!',
      description: 'Research details will be added here.',
      paper: '',
      date: '',
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Portfolio</h1>

     

      {/* Relevant Classes */}
      <h3 className="mb-3">Relevant Classes</h3>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4 mb-5">
        {relevantClassesTaken.map((cls, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{cls.label}</Card.Title>
                <Card.Text className="flex-grow-1">{cls.desc}</Card.Text>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href={cls.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Projects
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Coding Projects */}
      <div id="coding-projects">
        <h3 className="mb-3">Coding Projects</h3>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {codingProjects.map((proj) => {
            const isBookmarked = favorites.some((f) => f.id === proj.id);
            return (
              <Col key={proj.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>
                      {proj.title}
                      <div className="float-end">
                        <BookmarkButton
                          isBookmarked={isBookmarked}
                          onClick={() => onToggleFavorite(proj)}
                        />
                      </div>
                    </Card.Title>
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
                        disabled={!proj.link}
                      >
                        View Code
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      {/* Research Experience */}
      <h3 className="mb-3">Research Experience</h3>
      <Row xs={1} className="g-4 mb-5">
        {researchExperience.map((res) => {
          const isBookmarked = favorites.some((f) => f.id === res.id);
          return (
            <Col key={res.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>
                    {res.title}
                    <div className="float-end">
                      <BookmarkButton
                        isBookmarked={isBookmarked}
                        onClick={() => onToggleFavorite(res)}
                      />
                    </div>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    {res.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{res.date}</small>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      href={res.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={!res.paper}
                    >
                      Read Paper
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Languages & Frameworks */}
      <h3 className="mb-3">Languages & Frameworks</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3 mb-5">
        {techStack.map((tech, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <Card className="text-center shadow-sm px-3 py-2">
              <Card.Body>
                <Badge bg="secondary" text="white">
                  {tech}
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
