import { useEffect } from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';
import './Hero.css';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  useEffect(() => {
    const elementsToAnimate = [
      '.greeting',
      '.name',
      '.title-container h2',
      '.intro-text',
      '.social-icons',
      '.cta-buttons'
    ];

    elementsToAnimate.forEach((selector, index) => {
      const el = document.querySelector(selector);
      if (el) {
        setTimeout(() => {
          el.classList.add('show');
        }, index * 300);
      }
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h3 className="greeting">Hello, I'm</h3>
          <h1 className="name">Dilanjana Sathyajith</h1>

          <div className="title-container">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                1000,
                'Full-Stack Developer',
                1000,
                'React Developer',
                1000,
                'UI/UX Enthusiast',
                1000
              ]}
              wrapper="h2"
              speed={50}
              style={{
                color: 'var(--primary-color)',
                fontSize: '2.5rem',
                fontWeight: '600',
                margin: '1rem 0'
              }}
              repeat={Infinity}
            />
          </div>

          <p className="intro-text">
            Building innovative digital experiences with React, Angular, and modern web technologies.
            Passionate about creating clean, scalable applications with intuitive interfaces.
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/dilanjana.sathyajith/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ds_meeriyagalla/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/dilanjana/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/dsathyajith" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/@mryoki" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
            </a>
          </div>

          <div className="cta-buttons">
            <a href="#contact" className="cta-button">Let's Connect</a>
            <a href="https://drive.google.com/file/d/11COah1EQ7rQw__Yxs3mlC_rzmOCEquz0/view?usp=sharing"  download className="cta-button secondary">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
