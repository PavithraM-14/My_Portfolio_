import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'IdeaHub',
      description: 'A collaborative platform for sharing, discussing, and refining ideas among students',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'In Progress'
    },
    {
      title: 'Healthcare Chatbot',
      description: 'Interactive chatbot for healthcare assistance and information',
      tech: ['Python', 'Flask', 'NLP'],
      status: 'Completed'
    },
    {
      title: 'Air Pollution Analysis Tool',
      description: 'Python program to visualize and predict pollution levels using real-time data',
      tech: ['Python', 'Data Analysis', 'Visualization'],
      status: 'Completed'
    },
    {
      title: 'Elderly Reminder System',
      description: 'Smart reminder system designed to help elderly users manage medications, appointments, and daily tasks with notifications',
      tech: ['Java', 'HTML/CSS', 'JavaScript'],
      status: 'Completed'
    },
    {
      title: 'Digital Recipe Book',
      description: 'Digital platform for storing and sharing recipes',
      tech: ['JavaScript', 'React', 'CSS'],
      status: 'Completed'
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern portfolio website to showcase projects and skills',
      tech: ['React', 'CSS3', 'JavaScript'],
      status: 'Completed'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-status">{project.status}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;