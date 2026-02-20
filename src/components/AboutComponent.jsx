import { useMemo } from 'react';
import '../styles/about.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { profileModel } from '../models/portfolioModel';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
  </svg>
);

const IconLocation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const AboutComponent = () => {
  const { ref, isVisible } = useScrollReveal();
  const profile = useMemo(() => profileModel, []);

  return (
    <section id="about" ref={ref} className="about">
      <div className="about-inner">

        {/* Heading */}
        <p className="section-eyebrow">01 — About</p>
        <h2 className="section-heading">About Me</h2>

        <div className="about-grid">

          <div className={`about-image-col ${isVisible ? 'visible' : ''}`}>

            <img
              src={profile.profileImage}
              alt="Aryan Kafle"
              className="about-photo"
            />
          </div>

          <div className={`about-content-col ${isVisible ? 'visible' : ''}`}>
            <p className="about-bio">{profile.about}</p>

            <div className="about-education">
              <h3 className="about-education-title">Education</h3>
              <p className="about-education-text">{profile.education}</p>
            </div>

            <div className="contact-row">
              <span className="contact-icon"><IconLocation /></span>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">{profile.location}</p>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon"><IconPhone /></span>
              <div>
                <p className="contact-label">Phone</p>
                <a href={`tel:${profile.phone}`} className="contact-value">{profile.phone}</a>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon"><IconEmail /></span>
              <div>
                <p className="contact-label">Email</p>
                <a href={`mailto:${profile.email}`} className="contact-value">{profile.email}</a>
              </div>
            </div>

            <div className="about-downloads">
              <a
                href={profile.cv}
                download="Aryan_Kafle_CV.pdf"
                className="about-download-btn"
              >
                <DownloadIcon />
                Download CV
              </a>
              <a
                href={profile.resume}
                download="Aryan_Kafle_Resume.pdf"
                className="about-download-btn about-download-btn-outline"
              >
                <DownloadIcon />
                Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
