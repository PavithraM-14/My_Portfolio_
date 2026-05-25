import React from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const certifications = [
    'Introduction to Cybersecurity – Cisco Networking Academy (Jan 2025)',
    'Introduction to Data Science – Cisco Networking Academy (Feb 2025)',
    'Introduction to IoT and Digital Transformation – Cisco Networking Academy (May 2025)',
    'Javascript Essentials – Cisco Networking Academy (May 2025)',
    'Introduction to Prompt Engineering – Microsoft (May 2025)',
    'Technology Apprenticeship Job Simulation – Accenture (Forage) (July 2025)',
    'Python Essentials 1 – Cisco Networking Academy (Oct 2025)',
    'Introduction to Industry 4.0 and Industrial Internet of Things - NPTEL (62% Elite) (Nov 2025)',
    'Introduction to Modern AI – Cisco Networking Academy (Nov 2025)',
    'Security and Connectivity Support – Cisco Networking Academy (Dec 2025)',
    'Blockchain and its Applications - NPTEL (60% Elite) (April 2026)',
    'Natural Language Processing - NPTEL (75% Elite + Silver) (April 2026)'
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications & Certificates</h2>
        
        <div className="certifications">
          <ul className="cert-list">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;