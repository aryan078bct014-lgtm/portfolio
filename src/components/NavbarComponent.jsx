import { useMemo, useCallback, useState } from 'react';
import '../styles/navbar.css';
import { useTheme } from '../context/ThemeContext';
import { navLinksModel } from '../models/portfolioModel';
import useActiveSection from '../hooks/useActiveSection';
import { IconSun, IconMoon } from './IconsComponent';

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
            {isDark ? <IconSun /> : <IconMoon />}
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
