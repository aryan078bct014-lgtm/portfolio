import { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';
import { useTheme } from '../context/ThemeContext';
import { navLinksModel } from '../models/portfolioModel';
import useActiveSection from '../hooks/useActiveSection';
import { IconSun, IconMoon } from './IconsComponent';

const sectionIds = navLinksModel
  .map((l) => l.href.replace('#', ''))
  .filter(Boolean);

const NavbarComponent = () => {
  const { isDark, toggleTheme }  = useTheme();
  const { active, scrollTo }     = useActiveSection(sectionIds);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  // Track mounted state so the setTimeout never calls setState after unmount
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  // Track the timeout so we can clear it on unmount
  const timerRef = useRef(null);
  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const closeMenu = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMenuClosing(true);
    timerRef.current = setTimeout(() => {
      if (!mountedRef.current) return;
      setMenuOpen(false);
      setMenuClosing(false);
    }, 280);
  }, []);

  const toggleMenu = useCallback(() => {
    if (menuOpen) {
      closeMenu();
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      setMenuOpen(true);
      setMenuClosing(false);
    }
  }, [menuOpen, closeMenu]);

  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    scrollTo(href.replace('#', ''));
    closeMenu();
  }, [scrollTo, closeMenu]);

  const links = useMemo(() => navLinksModel, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="nav-logo">
          AK
        </a>

        {/* Desktop links */}
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

        {/* Controls */}
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDark ? (<IconMoon />) : (<IconSun />)}
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen && !menuClosing ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="ham-bar ham-bar-top" />
            <span className="ham-bar ham-bar-mid" />
            <span className="ham-bar ham-bar-bot" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={`mobile-menu${menuClosing ? ' mobile-menu-closing' : ''}`}>
          <div className="mobile-menu-inner">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="mobile-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
