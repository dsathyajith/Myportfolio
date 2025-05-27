import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'React.js', level: 50 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 45 },
    { name: 'Bootstrap', level: 70 },
    { name: 'MongoDB', level: 70 },
    { name: 'SQL', level: 25 }
  ];

  const softSkills = [
    { name: 'Teamwork & Collaboration', level: 85 },
    { name: 'Effective Communication', level: 75 },
    { name: 'Critical Thinking', level: 45 },
    { name: 'Time Management', level: 70 }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        
        <div className="skills-container">
          <motion.div 
            className="technical-skills"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h3>Technical Skills</h3>
            <div className="skill-bars">
              {technicalSkills.map((skill, index) => (
                <div className="skill-bar" key={`tech-${index}`}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    {skill.level > 0 && <span>{skill.level}%</span>}
                  </div>
                  {skill.level > 0 && (
                    <div className="progress-bar">
                      <motion.div 
                        className="progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="soft-skills"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Soft Skills</h3>
            <div className="skill-bars">
              {softSkills.map((skill, index) => (
                <div className="skill-bar" key={`soft-${index}`}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    {skill.level > 0 && <span>{skill.level}%</span>}
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;