import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from './context/ThemeContext';

export default function ThemeToggle() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <Button
      variant="outline-secondary"
       
      onClick={() => setMode(m => (m === 'light' ? 'dark' : 'light'))}
      aria-label="Toggle light/dark theme"
    >
      {mode === 'light' ? ' Dark Mode' : 'Light Mode'}
    </Button>
  );
}
