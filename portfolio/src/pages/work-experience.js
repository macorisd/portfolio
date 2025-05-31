// import React from 'react';
import Layout from '@theme/Layout';
import styles from './work-experience.module.css';

// List of companies with positions
const workExperience = [
  {
    company: 'MAPIR UMA',
    url: 'https://mapir.isa.uma.es/',
    positions: [
      {
        title: 'Research Intern',
        start: 'Jan 2025',
        end: null,
        description: 'Computer Vision research and development work focused on open-vocabulary object detection and segmentation techniques, aimed at their application in building 3D semantic maps for mobile robots.',
        tech: ['Python', 'ROS'],
      }
    ],
  },
  {
    company: 'Plytix',
    url: 'https://www.plytix.com/',
    positions: [
      {
        title: 'Software Engineer Intern',
        start: 'Mar 2025',
        end: 'May 2025',
        description: 'Work focused on backend development with Python (FastAPI) and best practices for API documentation, aimed at establishing a standardized code documentation format for the company.',
        tech: ['Python', 'FastAPI', 'Docker', 'Kubernetes'],
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <Layout title="Work Experience">
      <main className={styles.timelineContainer}>
        <h1 className={styles.pageTitle}>Work Experience</h1>        <div className={styles.timeline}>
          {workExperience.map((company, index) => (
            <div key={index} className={styles.companySection}>
              {company.url ? (
                <a href={company.url} target="_blank" rel="noopener" className={styles.companyNameLink}>
                  <h2 className={styles.companyName}>{company.company}</h2>
                </a>
              ) : (
                <h2 className={styles.companyName}>{company.company}</h2>
              )}
              {company.positions.map((pos, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <h3 className={styles.positionTitle}>{pos.title}</h3>
                    <span className={styles.date}>
                      {pos.start} – {pos.end || 'Present'}
                    </span>
                    <p className={styles.description}>{pos.description}</p>
                    <div className={styles.techList}>
                      {pos.tech.map((tech) => (
                        <span key={tech} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}