import { Card } from 'react-bootstrap';
import BookmarkButton from './BookmarkButton';

export default function ProjectCard({ project, isBookmarked, onToggleFavorite }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text className="flex-grow-1">{project.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <small className="text-muted">{project.date}</small>
          <BookmarkButton
            isBookmarked={isBookmarked}
            onClick={() => onToggleFavorite(project)}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
