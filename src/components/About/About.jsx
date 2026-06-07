import { motion } from 'framer-motion';
import { FaGraduationCap, FaDownload, FaRocket } from 'react-icons/fa';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-line" /> About Me <span className="eyebrow-line" />
          </div>
          <h2 className="section-title">
            The Person <span className="highlight">Behind the Code</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <div className="about-bio-card">
              <h3>Hi there!</h3>
              <p>
                I'm a motivated software engineer with completed academic requirements for a
                BSc (Hons) in Software Engineering from the University of Plymouth. I bridge a
                strong foundation in frontend development (React) with an active focus on
                backend technologies.
              </p>
              <p>
                I've handled end-to-end logic across multiple full-stack projects and am
                currently expanding my technical expertise in Python and scalable backend
                architectures — seeking to contribute to modern, enterprise-grade web applications.
              </p>

              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-icon"><FaRocket /></div>
                  <div>
                    <div className="stat-value">7+ Projects</div>
                    <div className="stat-desc">Built &amp; Delivered</div>
                  </div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-icon"><FaGraduationCap /></div>
                  <div>
                    <div className="stat-value">BSc (Hons)</div>
                    <div className="stat-desc">Software Engineering</div>
                  </div>
                </div>
              </div>

              <div className="about-languages">
                <span className="lang-badge">English <span className="lang-level">Proficient</span></span>
                <span className="lang-badge">Sinhala <span className="lang-level">Native</span></span>
                <span className="lang-badge">Japanese <span className="lang-level">Learning</span></span>
              </div>

              <a
                href="https://drive.google.com/file/d/11COah1EQ7rQw__Yxs3mlC_rzmOCEquz0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download CV <FaDownload />
              </a>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="education-side">
              <h3>Education</h3>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-year">2022 – 2025</span>
                    <h4>BSc (Hons) Software Engineering</h4>
                    <p className="institution">
                      <FaGraduationCap style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      University of Plymouth · via NSBM
                    </p>
                    <p className="grade">Graduated · 2025</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-year">2021</span>
                    <h4>G.C.E. Advanced Level</h4>
                    <p className="institution">
                      <FaGraduationCap style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      Sri Lanka
                    </p>
                    <p className="grade">3S Passes</p>
                  </div>
                </div>
              </div>

              <div className="extras-section">
                <p className="extras-title">Interests &amp; Hobbies</p>
                <div className="extras-list">
                  <span className="extra-tag">Football</span>
                  <span className="extra-tag">Chess</span>
                  <span className="extra-tag">Open Source</span>
                  <span className="extra-tag">UI Design</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
