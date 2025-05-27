import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, details, technologies, link, image }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      className="project-card"
      variants={fadeIn}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        
        <div className="project-details">
          <h4>Key Features:</h4>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              {link.includes('github') ? <FaGithub /> : <FaExternalLinkAlt />}
              {link.includes('github') ? ' View Code' : ' View Project'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;