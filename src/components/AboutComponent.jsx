import { useMemo } from 'react';
import '../styles/about.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { profileModel } from '../models/portfolioModel';
import { DownloadIcon, IconLocation, IconPhone, IconEmail } from './IconsComponent';


const AboutComponent = () => {
  const { ref, isVisible } = useScrollReveal();
  const profile = useMemo(() => profileModel, []);

  return (
    <section id="about" ref={ref} className="about">
      <div className="about-inner">

        {/* Heading */}
        <p className="section-eyebrow">01 - About</p>
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
                Get CV
              </a>
              <a
                href={profile.resume}
                download="Aryan_Kafle_Resume.pdf"
                className="about-download-btn about-download-btn-outline"
              >
                <DownloadIcon />
                Get Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
