import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Gemauth – Gemstone Auction & ML Platform",
      description: "A gemstone auction and ML-powered authentication platform that ensures secure and transparent transactions.",
      details: [
        "Developed image-based gemstone analysis for accurate identification",
        "Implemented admin-approved auction listings",
        "Created escrow-based payment system for trust and reliability"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Python"],
      link: "#",
      image: "/images/gemauth.jpg"
    },
    {
      title: "Cinex – Cinema Booking System",
      description: "Developed a complete front-end for a cinema booking system with PayPal integration and real-time features.",
      details: [
        "User-friendly booking interface with real-time seat availability",
        "Integrated PayPal payment processing",
        "Secure transaction handling"
      ],
      technologies: ["React.js", "HTML", "CSS", "Bootstrap"],
      link: "#",
      image: "/images/cinex.jpg"
    },
    {
      title: "GoAppoint – Online Appointment System",
      description: "An online appointment scheduling system designed for efficient bookings and time management.",
      details: [
        "Role-based authentication system",
        "Real-time notifications",
        "Responsive user interface"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/ravishka1325/GROUP-PROJECT",
      image: "/images/goappoint.jpg"
    },
    {
      title: "Green Supermarket – Online Shopping",
      description: "An e-commerce platform for grocery shopping with secure transactions.",
      details: [
        "Secure cart and checkout system",
        "Order tracking functionality",
        "Search and filtering features"
      ],
      technologies: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
      link: "https://github.com/kisarasandes1122/GreenSupermarket",
      image: "/images/greensupermarket.jpg"
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
              details={project.details}
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