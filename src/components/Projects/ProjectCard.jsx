import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, link, image }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img 
          src={image} 
          alt={title} 
          className="project-image"
          onError={(e) => {
            e.target.src = '/images/project-placeholder.jpg';
          }}
        />
      </div>
      <div className="project-content">
        <div className="project-content-inner">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="technologies">
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
        
        {link && (
          <div className="project-link-container">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              {link.includes('github') ? (
                <>
                  <FaGithub /> View Code
                </>
              ) : (
                <>
                  <FaExternalLinkAlt /> View Live
                </>
              )}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;