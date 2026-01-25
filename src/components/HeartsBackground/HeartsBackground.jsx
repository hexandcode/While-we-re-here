import { useState } from 'react';
import './HeartsBackground.css';

const generateHearts = () => {
  const isMobile = window.innerWidth <= 768;
  const NUM_HEARTS = isMobile ? 10 : 14;

  return Array.from({ length: NUM_HEARTS }).map(() => {
    const top = Math.random() < 0.5
      ? Math.random() * 40
      : (isMobile ? 55 : 65) + Math.random() * 35;

    return {
      top,
      left: Math.random() * 90 + 5,
      size: isMobile ? Math.random() * 6 + 8 : Math.random() * 6 + 10,
      delay: Math.random() * 10,
      duration: Math.random() * 6 + 8,
      opacity: Math.random() * 0.3 + 0.2,
      deltaX: Math.random() * 20 - 10,
      deltaY: Math.random() * (isMobile ? 12 : 15) - (isMobile ? 6 : 7.5),
      scale: 1 + Math.random() * 0.3,
    };
  });
};

const HeartsBackground = ({ visible }) => {
  const [hearts] = useState(generateHearts);

  return (
    <div className={`hearts-bg ${visible ? 'visible' : ''}`}>
      {hearts.map((h, i) => (
        <div
          key={i}
          className="heart"
          style={{
            top: `${h.top}%`,
            left: `${h.left}%`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
            '--delta-x': `${h.deltaX}px`,
            '--delta-y': `${h.deltaY}px`,
            '--scale': h.scale,
          }}
        />
      ))}
    </div>
  );
};

export default HeartsBackground;
