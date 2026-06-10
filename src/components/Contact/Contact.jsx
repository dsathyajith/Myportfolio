import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope, FaMapMarkerAlt,
  FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaPaperPlane,
} from 'react-icons/fa';
import './Contact.css';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const socialLinks = [
  { href: 'https://www.linkedin.com/in/dilanjana/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  { href: 'https://github.com/dsathyajith', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.instagram.com/ds_meeriyagalla/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.facebook.com/dilanjana.sathyajith/', icon: <FaFacebookF />, label: 'Facebook' },
];

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-line" /> Contact <span className="eyebrow-line" />
          </div>
          <h2 className="section-title">
            Let's <span className="highlight">Work Together</span>
          </h2>
          <p className="section-desc">Open to internship opportunities and collaborations. Let's connect!</p>
        </motion.div>

        <div className="contact-grid">
          {/* Info Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <div className="contact-info-side">
              <h3>Get In Touch</h3>
              <p className="contact-tagline">
                Whether you have an internship opportunity, a project idea, or just want to
                say hello — my inbox is always open. I'll get back to you as soon as possible!
              </p>

              <div className="info-cards">
                <a href="mailto:meeriyagallad@gmail.com" className="info-card">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">meeriyagallad@gmail.com</div>
                  </div>
                </a>
                <div className="info-card">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <div className="info-label">Location</div>
                    <div className="info-value">Colombo, Sri Lanka</div>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Find me on</h4>
                <div className="contact-social-links">
                  {socialLinks.map(({ href, icon, label }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                      {icon} {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="contact-form-card">
              <h3>Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="from_name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="from_email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="What's this about?" required />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Write your message here..." rows="5" required />
                </div>

                {status === 'success' && (
                  <p className="form-feedback success">Message sent! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="form-feedback error">Something went wrong. Please try again.</p>
                )}

                <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : <> Send Message <FaPaperPlane /> </>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <footer className="site-footer">
          <p>© 2026 <span>Dilanjana Sathyajith</span>. Crafted with React &amp; framer-motion.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
