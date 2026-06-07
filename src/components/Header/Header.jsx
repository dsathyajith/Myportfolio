import { useState, useEffect } from 'react';
import './Header.css';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-bracket">{'{'}</span>
          <span className="logo-initials">DS</span>
          <span className="logo-bracket">{'}'}</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={closeMenu}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary header-cta">
          Hire Me
        </a>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
};

export default Header;
