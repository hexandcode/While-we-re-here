import { useRef, useEffect, useState } from 'react';
import './FadeText.css';

const FadeText = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={ref} className={`fade-text ${visible ? 'visible' : ''}`}>
      {children}
    </p>
  );
};

export default FadeText;
