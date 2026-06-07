import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaPython, FaBootstrap,
  FaUsers, FaComments, FaLightbulb, FaClock,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiFigma } from 'react-icons/si';
import './Skills.css';

const techSkills = [
  { name: 'React.js',     Icon: FaReact,       color: '#61DAFB' },
  { name: 'HTML5',        Icon: FaHtml5,       color: '#E34F26' },
  { name: 'CSS3',         Icon: FaCss3Alt,     color: '#1572B6' },
  { name: 'JavaScript',   Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Python',       Icon: FaPython,      color: '#4B8BBE' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap',    Icon: FaBootstrap,   color: '#7952B3' },
  { name: 'MongoDB',      Icon: SiMongodb,     color: '#47A248' },
  { name: 'UI/UX Design', Icon: SiFigma,       color: '#F24E1E' },
];

const tools = [
  'VS Code', 'Figma', 'GitHub', 'GitHub Copilot',
  'DeepSeek', 'ChatGPT', 'Claude', 'Gemini', 'Bolt',
];

const softSkills = [
  { name: 'Teamwork & Collaboration', Icon: FaUsers,     level: 85 },
  { name: 'Effective Communication',  Icon: FaComments,  level: 78 },
  { name: 'Critical Thinking',        Icon: FaLightbulb, level: 80 },
  { name: 'Time Management',          Icon: FaClock,     level: 75 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-line" /> Skills <span className="eyebrow-line" />
          </div>
          <h2 className="section-title">
            My <span className="highlight">Technical Arsenal</span>
          </h2>
          <p className="section-desc">Technologies and tools I work with to build great things.</p>
        </motion.div>

        {/* Tech Skills */}
        <div className="tech-skills-grid">
          {techSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="tech-skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.Icon />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          className="tools-section"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="tools-label">
            <span className="tools-label-line" />
            Tools &amp; Technologies
            <span className="tools-label-line" />
          </div>
          <div className="tools-grid">
            {tools.map(tool => (
              <div key={tool} className="tool-badge">{tool}</div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="soft-skills-header">
            <h3>Soft Skills</h3>
          </div>
          <div className="soft-skills-grid">
            {softSkills.map((skill, i) => (
              <div key={skill.name} className="soft-skill-card">
                <div className="soft-skill-header">
                  <div className="soft-skill-icon"><skill.Icon /></div>
                  <span className="soft-skill-name">{skill.name}</span>
                </div>
                <div className="soft-skill-bar">
                  <motion.div
                    className="soft-skill-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
