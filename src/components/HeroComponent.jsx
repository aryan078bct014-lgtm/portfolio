import { useMemo, useCallback } from 'react';
import '../styles/hero.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { profileModel } from '../models/portfolioModel';

const HeroComponent = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const profile = useMemo(() => profileModel, []);

  const goTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="home" ref={ref} className="hero">
      <div className="hero-inner">

        {/* ── Left: name + subtitle + buttons ── */}
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
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

        {/* ── Right: monogram logo ── */}
        <div className={`hero-image-col ${isVisible ? 'visible' : ''}`}>
          {/*
            Image file: /public/images/logo.png
            This is the RN | AK monogram logo you provided.
            Drop logo.png into /public/images/ and it renders here.
          */}
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
