import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

export default function SavedProjects({ items }) {
  if (items.length === 0)
    return (
      <Container>
        <h1>No Saved Projects Yet</h1>
        <p>Click the ☆ on any project to add it here.</p>
      </Container>
    );

  return (
    <Container>
      <h1>Your Saved Projects</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {items.map(p => (
          <Col key={p.id}>
            <ProjectCard
              project={p}
              isBookmarked
              onToggleFavorite={() => {}}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
