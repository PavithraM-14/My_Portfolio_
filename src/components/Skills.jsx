import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const technicalSkills = [
    'C/C++',
    'Python',
    'JavaScript',
    'Java',
    'React.js',
    'Node.js',
    'HTML5/CSS3',
    'Excel',
    'PowerPoint',
    'MongoDB',
    'MySQL',
    'Git/GitHub',
    
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Leadership',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Project Management',
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-sections">
          <div className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tools-section">
          <h3>Tools & Platforms</h3>
          <div className="tools-list">
            <span className="tool-badge">VS Code</span>
            <span className="tool-badge">Figma</span>
            <span className="tool-badge">Canva</span>
            <span className="tool-badge">Tinkercad</span>
            <span className="tool-badge">Flask</span>
            <span className="tool-badge">Bootstrap</span>
            <span className="tool-badge">Tailwind CSS</span>
            <span className="tool-badge">Firebase</span>
            <span className="tool-badge">Postman</span>
            <span className="tool-badge">GitHub</span>
            <span className="tool-badge">Jupyter Notebook</span>
            <span className="tool-badge">PyCharm</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;