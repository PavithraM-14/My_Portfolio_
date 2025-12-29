import React from 'react';
import { Mail, LinkedinIcon } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content-centered">
          <div className="contact-info-centered">
            <h3>Let's Connect!</h3>
            <p>
              I'm currently seeking internship opportunities and open to collaborating 
              on interesting projects. Feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:pavithramuralikrishnan1403@gmail.com">
                    pavithramuralikrishnan1403@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <LinkedinIcon size={24} />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/pavithra-m-174255328/" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/in/pavithra-m-174255328/
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-location">
              <p>📍 Chennai, Tamil Nadu, India</p>
              <p>📞 +91 7339530270</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;