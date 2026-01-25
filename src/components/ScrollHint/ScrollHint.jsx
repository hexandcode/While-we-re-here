import { useEffect, useState } from 'react';
import './ScrollHint.css';

const ScrollHint = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`arrow ${hidden ? 'hidden' : ''}`}>
      ↓
    </div>
  );
};

export default ScrollHint;
