import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

const socialLinks = [
  {
    href: "https://www.facebook.com/dilanjana.sathyajith/",
    icon: <FaFacebookF />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/ds_meeriyagalla/",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/dilanjana/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/dsathyajith",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.youtube.com/@mryoki",
    icon: <FaYoutube />,
    label: "YouTube",
  },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
      </div>

      <div className="container">
        {/* Left — Text */}
        <div className="hero-text">
<p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            Dilanjana
            <span className="name-accent">Sathyajith</span>
          </h1>

          <p className="hero-role">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1800,
                "React & Frontend Developer",
                1800,
                "Python & Backend Enthusiast",
                1800,
                "UI/UX Enthusiast",
                1800,
              ]}
              wrapper="span"
              className="typed-role"
              speed={55}
              repeat={Infinity}
            />
          </p>

          <p className="hero-bio">
            Motivated software engineer with a BSc (Hons) in Software
            Engineering, bridging strong frontend (React) skills with an active
            focus on backend technologies and scalable systems.
          </p>

          <div className="hero-social">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <FaArrowRight />
            </a>
            <a
              href="https://drive.google.com/file/d/1uWnmGZlpJ5PF2i8CImXHS7kI3IIevofG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Download CV <FaDownload />
            </a>
          </div>
        </div>

        {/* Right — Terminal Card */}
        <div className="hero-visual">
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-title">profile.json</span>
            </div>
            <div className="terminal-body">
              <span className="json-line">
                <span className="json-bracket">{"{"}</span>
              </span>
              <span className="json-line">
                &nbsp;&nbsp;<span className="json-key">"name"</span>:{" "}
                <span className="json-string">"Dilanjana Sathyajith"</span>,
              </span>
              <span className="json-line">
                &nbsp;&nbsp;<span className="json-key">"role"</span>:{" "}
                <span className="json-string">"Software Engineer"</span>,
              </span>
              <span className="json-line">
                &nbsp;&nbsp;<span className="json-key">"degree"</span>:{" "}
                <span className="json-string">"BSc (Hons) Soft. Eng."</span>,
              </span>
              <span className="json-line">
                &nbsp;&nbsp;<span className="json-key">"university"</span>:{" "}
                <span className="json-string">"Plymouth via NSBM"</span>,
              </span>
              <span className="json-line">
                &nbsp;&nbsp;<span className="json-key">"focus"</span>:{" "}
                <span className="json-string">"React + Python"</span>,
              </span>
              <span className="json-line">
                &nbsp;&nbsp;<span className="json-key">"location"</span>:{" "}
                <span className="json-string">"Sri Lanka"</span>,
              </span>
              <span className="json-line">
                &nbsp;&nbsp;<span className="json-key">"status"</span>:{" "}
                <span className="json-bool">"open_to_work"</span>
              </span>
              <span className="json-line">
                <span className="json-bracket">{"}"}</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
