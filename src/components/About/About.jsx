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
              Results-driven Software Engineering Undergraduate with expertise in front-end development, UI/UX design, and full-stack technologies. Passionate about building scalable, user-friendly web applications and continuously improving my technical skills.
            </p>
            <p>
              Seeking opportunities to contribute to innovative projects while expanding my expertise in React.js, MongoDB, and secure authentication systems.
            </p>
            <div className="btn-container">
              <a 
                href="https://drive.google.com/file/d/17Afka3n8kY1SY57aJz8WgBj2yJFS6xJh/view?usp=sharing" 
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
                <p>University of Plymouth (2022 - Present)</p>
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