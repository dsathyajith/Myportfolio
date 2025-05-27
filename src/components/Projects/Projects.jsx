import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "GoAppoint – Online Appointment System",
      description: "An online appointment scheduling system designed for efficient bookings and time management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/ravishka1325/GROUP-PROJECT",
      image: "/assets/images/project1.jpg"
    },
    {
      title: "Green Supermarket – Online Shopping",
      description: "An e-commerce platform for grocery shopping with secure transactions and user-friendly navigation.",
      technologies: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
      link: "https://github.com/kisarasandes1122/GreenSupermarket",
      image: "/assets/images/project2.jpg"
    },
    {
      title: "Hostel Rental Project",
      description: "An online platform that enables hostel rentals with integrated location services and user-friendly navigation.",
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      link: "#",
      image: "/assets/images/project3.jpg"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
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
        
        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              image={project.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;