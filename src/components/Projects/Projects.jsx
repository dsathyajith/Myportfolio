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

const projects = [
  {
    title: 'GemAuth – Gemstone Auction & ML Platform',
    description: 'Integrated ML-based image analysis using Python to assist in gemstone verification and classification. Features a secure auction system with authentication.',
    technologies: ['React.js', 'Python', 'MongoDB', 'Node.js'],
    link: 'https://github.com/dsathyajith/GemAuth',
    image: Gemauth,
    type: 'Solo Project',
  },
  {
    title: 'FurnitureHub – 3D Room Planner',
    description: 'Interactive 3D web application using Three.js allowing users to place and preview furniture in customizable rooms with adjustable lighting and colour.',
    technologies: ['React.js', 'Three.js', 'Node.js', 'MongoDB', 'NodeMailer'],
    link: 'https://github.com/ravishkafdo/HCI.git',
    image: Fhub,
    type: 'Group Project',
  },
  {
    title: 'Geartech – E-Commerce for PC Hardware',
    description: 'End-to-end e-commerce system featuring a custom PC build configurator and dynamic price updates, built with Agile methodology for iterative delivery.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap'],
    link: 'https://github.com/kisarasandes1122/Geartech.git',
    image: Gtech,
    type: 'Group Project',
  },
  {
    title: 'Cinex – Cinema Booking System',
    description: 'Real-time ticket booking interface with an interactive seat selection map and PayPal API integration for seamless payments.',
    technologies: ['React.js', 'Bootstrap', 'PayPal API'],
    image: cinexImg,
    type: 'Group Project',
  },
  {
    title: 'GoAppoint – Appointment Scheduler',
    description: 'Online appointment scheduling system with real-time availability management, notifications, and a clean user management dashboard.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ravishka1325/GROUP-PROJECT',
    image: goAppointImg,
    type: 'Group Project',
  },
  {
    title: 'Green Supermarket – Grocery Platform',
    description: 'Intuitive e-commerce layout prioritising responsive UI consistency, dynamic search, and order tracking for an online grocery store.',
    technologies: ['React.js', 'Bootstrap', 'MongoDB'],
    link: 'https://github.com/kisarasandes1122/GreenSupermarket',
    image: gSuperImg,
    type: 'Group Project',
  },
  {
    title: 'Hostel Rental Platform',
    description: 'Online platform for hostel rentals with Google Maps location services, property listings, and comprehensive booking management.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'Google Maps API'],
    image: hostelImg,
    type: 'Group Project',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-line" /> Projects <span className="eyebrow-line" />
          </div>
          <h2 className="section-title">
            Things I've <span className="highlight">Built</span>
          </h2>
          <p className="section-desc">A selection of projects I've worked on — personal and academic.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.6 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
