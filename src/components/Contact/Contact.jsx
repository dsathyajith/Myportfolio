import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="info-item">
              <FaPhone className="icon" />
              <span>+94 76 160 7175</span>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>meeriyagallad@gmail.com</span>
            </div>
            
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Colombo, Sri Lanka</span>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/dilanjana/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/YOKIxD" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;