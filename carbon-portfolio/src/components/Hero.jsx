import { Button } from '@carbon/react';
import './Hero.scss';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          <span className="hero-section__wave">👋</span> Hi, I'm Padma Kunapareddy
        </h1>
        <p className="hero-section__subtitle">Professional | Volunteer | Leader</p>
        <div className="hero-section__buttons">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('timeline')}
          >
            View My Journey
          </Button>
          <Button 
            kind="secondary" 
            size="lg"
            onClick={() => scrollToSection('documents')}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Made with Bob
