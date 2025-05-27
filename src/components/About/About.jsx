import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
          <p>
            I'm a results-driven Software Engineering graduate with a strong focus on frontend development, UI/UX design, and full-stack technologies. I’ve completed my BSc (Hons) in Software Engineering and am currently awaiting graduation.
          </p>
          <p>
            I'm currently focusing on building scalable, secure, and user-friendly web applications using React, while also learning Angular and expanding my skills in DevOps, authentication systems, and modern web technologies.
          </p>
            <div className="btn-container">
              <a 
                href="https://drive.google.com/file/d/11COah1EQ7rQw__Yxs3mlC_rzmOCEquz0/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                Download My CV
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="education"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <h4>BSc (Hons) Software Engineering</h4>
                <p>University of Plymouth (Completed – Graduation Pending, 2025)</p>
              </div>
              <div className="timeline-item">
                <h4>G.C.E. A/L Examination</h4>
                <p>3S Passes (2021)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
