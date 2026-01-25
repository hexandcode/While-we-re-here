import { useState, useEffect } from 'react';
import Section from './components/Section/Section';
import FadeText from './components/FadeText/FadeText';
import ScrollHint from './components/ScrollHint/ScrollHint';
import HeartsBackground from './components/HeartsBackground/HeartsBackground';

const App = () => {
  const [showHearts, setShowHearts] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const screenH = window.innerHeight;

      // маленькие сердца показываются со второй секции
      setShowHearts(scrollY > screenH * 0.3);

      // стрелка исчезает раньше конца первой секции
      setShowArrow(scrollY < screenH * 0.4);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <HeartsBackground visible={showHearts} />

      <Section className="fullscreen" threshold={0.3}>
        <h1>пока мы здесь</h1>
        {showArrow && <ScrollHint />}
      </Section>

      <Section className="medium" threshold={0.5}>
        <FadeText>мы здесь</FadeText>
        <FadeText>даже когда не вместе</FadeText>
      </Section>

      <Section className="medium" threshold={0.5}>
        <FadeText>это становится крепче</FadeText>
      </Section>

      <Section className="medium" threshold={0.5}>
        <FadeText>и это остаётся</FadeText>
      </Section>

      <Section className="fullscreen" threshold={0.3}>
        <FadeText>
          <span className="final-text">
            пока мы здесь — <br />
            это и есть <span className="glow">любовь</span>
          </span>
        </FadeText>
      </Section>
    </>
  );
};

export default App;
