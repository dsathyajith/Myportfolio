import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

import cinexImg from '../../Photos/cinex.png';
import hostelImg from '../../Photos/Hostel.png';
import goAppointImg from '../../Photos/Goappoiment.png';
import gSuperImg from '../../Photos/Gsuperm.png';
import Gemauth from '../../Photos/GemAuth.png';
import Fhub from '../../Photos/Funiturehub.png';
import Gtech from '../../Photos/Geartech.png';

const Projects = () => {
  const projects = [
    {
      title: "Gemauth - Gemstone Platform",
      description: "ML-powered gemstone auction platform with secure transactions.",
      technologies: ["React.js", "Node.js", "MongoDB", "Python"],
      link: "https://github.com/dsathyajith/GemAuth",
      image: Gemauth
    },
    {
      title: "Funiturehub - 3D Furniture Viewer",
      description: "A web-based 3D furniture viewing app allowing users to preview furniture in customizable 2D/3D environments before purchase. Features include adjustable lighting, color selection, and responsive layouts.",
      technologies: ["React.js", "Three.js", "Node.js", "MongoDB", "NodeMailer"],
      link: "https://github.com/ravishkafdo/HCI.git",
      image: Fhub
    },
    {
      title: "Geartech E-Commerce Platform",
      description: "End-to-end digital commerce platform for a computer hardware retailer, featuring responsive web and mobile apps integrated with inventory and order management. Built with Agile methodology for iterative delivery.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
      link: "https://github.com/kisarasandes1122/Geartech.git",
      image: Gtech
    },
    {
      title: "Cinex - Cinema Booking",
      description: "Cinema booking system with PayPal integration.",
      technologies: ["React.js", "Bootstrap"],
      image: cinexImg
    },
    {
      title: "Hostel Rental Platform",
      description: "Online platform for hostel rentals with location services.",
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Google Maps API"],
      image: hostelImg
    },
    {
      title: "GoAppoint - Appointment System",
      description: "Online appointment scheduling system.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      link: "https://github.com/ravishka1325/GROUP-PROJECT",
      image: goAppointImg
    },
    {
      title: "Green Supermarket",
      description: "E-commerce platform for grocery shopping.",
      technologies: ["React.js", "Bootstrap", "MongoDB"],
      link: "https://github.com/kisarasandes1122/GreenSupermarket",
      image: gSuperImg
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                image={project.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;