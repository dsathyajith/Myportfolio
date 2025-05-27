import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, link, image }) => {
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
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub /> View on GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;