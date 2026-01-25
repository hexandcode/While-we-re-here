import { useRef, useEffect, useState } from 'react';
import './Section.css';

const Section = ({ children, className = '', threshold = 0.5 }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section ref={ref} className={`section ${className} ${active ? 'active' : ''}`}>
      {children}
    </section>
  );
};

export default Section;
