import { useMemo, useCallback, useState } from 'react';
import '../styles/navbar.css';
import { useTheme } from '../context/ThemeContext';
import { navLinksModel } from '../models/portfolioModel';
import useActiveSection from '../hooks/useActiveSection';

const sectionIds = navLinksModel.map((l) => l.href.replace('#', ''));

const NavbarComponent = () => {
  const { isDark, toggleTheme } = useTheme();
  const { active, scrollTo }    = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth-scroll to section without page reload
  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    scrollTo(href.replace('#', ''));
    setMenuOpen(false);
  }, [scrollTo]);

  const links = useMemo(() => navLinksModel, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="nav-logo">
          AK
        </a>

        {/* Desktop link list */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`nav-link ${active === link.href.replace('#', '') ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls: theme toggle + hamburger */}
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDark ? (
              /* Sun icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M5.64 18.36l-.71.71M18.36 18.36l-.71-.71M5.64 5.64l-.71-.71M12 7a5 5 0 100 10A5 5 0 0012 7z"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
              </svg>
            )}
          </button>

          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href}
               onClick={(e) => handleClick(e, link.href)}
               className="mobile-link">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
