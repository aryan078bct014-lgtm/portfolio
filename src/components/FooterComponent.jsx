import { useMemo, useCallback } from 'react';
import '../styles/footer.css';
import { navLinksModel, profileModel } from '../models/portfolioModel';

const FooterComponent = () => {
  const links = useMemo(() => navLinksModel, []);
  const year  = useMemo(() => new Date().getFullYear(), []);

  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <span className="footer-logo">AK</span>
          <nav className="footer-nav">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="footer-nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} {profileModel.name}. All rights reserved.</p>
          <p className="footer-copy">Computer Engineering — Kathmandu, Nepal</p>
        </div>

      </div>
    </footer>
  );
};

export default FooterComponent;
