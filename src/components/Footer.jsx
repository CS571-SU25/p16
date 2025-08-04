import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fullDateTime = now.toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <footer className="py-3 mt-auto">
      <Container className="d-flex justify-content-between align-items-center">
        <div> Liming Han</div>
        <div aria-label="Current date and time">{fullDateTime}</div>
      </Container>
    </footer>
  );
}
