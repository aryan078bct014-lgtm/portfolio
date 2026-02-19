import { useMemo, useCallback } from 'react';
import '../styles/contact.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { profileModel } from '../models/portfolioModel';

const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const IconPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const GMAIL_URL = 'https://mail.google.com';

const ContactComponent = () => {
  const { ref, isVisible } = useScrollReveal();
  const profile = useMemo(() => profileModel, []);

  const openGmail = useCallback((e) => {
    e.preventDefault();
    window.open(GMAIL_URL, '_blank', 'noopener,noreferrer');
  }, []);

  const items = useMemo(() => [
    { label: 'Email',    value: profile.email,    href: GMAIL_URL,              newTab: true,  icon: <IconEmail /> },
    { label: 'Phone',    value: profile.phone,    href: `tel:${profile.phone}`, newTab: false, icon: <IconPhone /> },
    { label: 'Location', value: profile.location, href: null,                   newTab: false, icon: <IconPin />   },
  ], [profile]);

  return (
    <section id="contact" ref={ref} className="contact">
      <div className="contact-inner">

        <p className="section-eyebrow">04 — Contact</p>
        <h2 className="section-heading">Get In Touch</h2>
        <p className="contact-intro">
          Open to opportunities, collaborations, or a good technical conversation. Feel free to reach out.
        </p>

        <div className="contact-grid">

          <div className="contact-items">
            {items.map(({ label, value, href, newTab, icon }) => (
              <div key={label} className="contact-item">
                <span className="contact-item-icon">{icon}</span>
                <div>
                  <p className="contact-item-label">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="contact-item-value"
                      target={newTab ? '_blank' : undefined}
                      rel={newTab ? 'noopener noreferrer' : undefined}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="contact-item-value">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: big CTA block ── */}
          <div className="contact-cta">
            <div className="cta-inner">
              <span className="cta-line1">Let's Build</span>
              <span className="cta-line2">Something</span>
              <a
                href={GMAIL_URL}
                onClick={openGmail}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-email-btn"
              >
                Send Email
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
