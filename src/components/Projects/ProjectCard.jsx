import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, link, image, type }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={title}
          onError={(e) => { e.target.style.opacity = '0.25'; }}
        />
        <div className="project-image-overlay" />
        {type && <span className="project-badge">{type}</span>}
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-techs">
          {technologies.map((tech, i) => (
            <span key={i} className="project-tech">{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            {link.includes('github') ? <><FaGithub /> GitHub</> : <><FaExternalLinkAlt /> Live</>}
          </a>
        ) : (
          <span className="project-no-link">Private Project</span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
