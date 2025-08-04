import { Button } from 'react-bootstrap';

export default function BookmarkButton({ isBookmarked, onClick }) {
  return (
    <Button
      variant={isBookmarked ? 'warning' : 'outline-secondary'}
      size="sm"
      onClick={onClick}
      aria-pressed={isBookmarked}
    >
      {isBookmarked ? '★' : '☆'}
    </Button>
  );
}
