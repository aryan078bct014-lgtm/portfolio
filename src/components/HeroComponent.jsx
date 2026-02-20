import { useMemo, useCallback } from 'react';
import '../styles/hero.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { profileModel } from '../models/portfolioModel';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
  </svg>
);

const HeroComponent = () => {
  const { ref, isVisible } = useScrollReveal(0.05);
  const profile = useMemo(() => profileModel, []);

  const goTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const v = isVisible ? 'visible' : '';

  return (
    <section id="home" ref={ref} className="hero">
      <div className="hero-inner">

        <div className={`hero-left ${v}`}>

          <p className="hero-eyebrow">Portfolio</p>

          <h1 className="hero-name">ARYAN</h1>
          <span className="hero-name-outline">KAFLE</span>

          <p className="hero-title">{profile.title}</p>
          <p className="hero-subtitle">{profile.subtitle}</p>

          <div className="hero-buttons">
            <a href="#projects"
               onClick={(e) => { e.preventDefault(); goTo('projects'); }}
               className="btn-solid">
              View Work
            </a>
            <a href="#contact"
               onClick={(e) => { e.preventDefault(); goTo('contact'); }}
               className="btn-ghost">
              Contact
            </a>
          </div>
        </div>

        <div className={`hero-right ${v}`}>
          <img
            src={profile.logoImage}
            alt="Aryan Kafle monogram logo"
            className="hero-logo-img"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroComponent;