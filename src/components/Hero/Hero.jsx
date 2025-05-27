import { useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Hero.css';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.hero-content h1, .hero-content h3, .hero-content p, .social-icons a');
    
    textElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
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
                'Frontend Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Web Developer',
                1000,
                'YouTuber',
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
            A Frontend Developer passionate about building clean, scalable, and user focused digital experiences.
            I specialize in crafting intuitive interfaces using modern web technologies bringing design to life with performance and precision.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/dilanjana.sathyajith/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.youtube.com/@mryoki/featured" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://twitter.com/DilanjanaSathy1" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/mryoki_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/dilanjana/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/YOKIxD" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
          <a href="#contact" className="cta-button">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;