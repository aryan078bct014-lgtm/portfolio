import { useMemo, useCallback } from 'react';
import '../styles/contact.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { profileModel } from '../models/portfolioModel';
import { IconEmail, IconPhone, IconLocation as IconPin } from './IconsComponent';


const GMAIL_URL = 'https://mail.google.com';

const ContactComponent = () => {
  const { ref } = useScrollReveal();
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
