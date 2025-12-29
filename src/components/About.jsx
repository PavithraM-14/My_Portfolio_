import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-services">
            <div className="service-item">
              <div className="service-icon">💻</div>
              <h3>App Development</h3>
              <p>Building interactive applications with modern frameworks</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Creating responsive and dynamic web experiences</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🤖</div>
              <h3>AI & ML</h3>
              <p>Exploring artificial intelligence and machine learning</p>
            </div>
          </div>

          <div className="about-text">
            <p>
              I'm a second-year Computer Science student at Easwari Engineering College, Chennai, 
              with a CGPA of 9/10. I'm passionate about learning new technologies and solving 
              real-world problems through code.
            </p>
            <p>
              Currently serving as Director of Innovation at Odyssey Space Club and working as 
              a Research Intern at SRM Group. I'm actively involved in hackathons and technical 
              communities, constantly expanding my skills in full-stack development, IoT, and AI/ML.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3>4+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>8+</h3>
                <p>Hackathons Participated</p>
              </div>
              <div className="stat-item">
                <h3>9.0</h3>
                <p>CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;