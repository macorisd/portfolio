import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/certifications.module.css';

// List of certifications
const certifications = [
  {
    name: 'Certificate of Attendance - Simposio RBVM Almería 2025',
    date: 'Jun 2025',
    issuer: 'Comité Español de Automática',
    url: 'https://ingmec.ual.es/ojs/index.php/RBVM25/issue/view/1',
    featured: false,
    importance: 4,
    fields: ['Computer Vision', 'Research', 'Public Speaking', 'Conferences']
  },
  {
    name: '"Project Management & Agile Fundamentals" course',
    date: 'Mar 2025',
    issuer: 'Santander Open Academy',
    url: 'https://www.santanderopenacademy.com/en/courses/project-management-agile-fundamentals.html',
    featured: false,
    importance: 4,
    fields: ['Project Management', 'Agile Methodologies', 'Scrum', 'Kanban']
  },
  {
    name: '"Ethics of AI" course',
    date: 'Sep 2023',
    issuer: 'University of Helsinki',
    url: 'https://certificates.mooc.fi/validate/k7avhk315m',
    featured: false,
    importance: 4,
    fields: ['Computational Ethics', 'Ethics', 'Artificial Intelligence']
  },
  {
    name: '"Cloud Computing" course',
    date: 'Jul 2023',
    issuer: 'Google Actívate',
    url: 'https://skillshop.exceedlms.com/student/award/uzZkfu2TeDSk84qZm9baa7iD',
    featured: false,
    importance: 4,
    fields: ['Cloud Computing']
  },
  {
    name: '"Elements of AI" course by University of Helsinki',
    date: 'Jun 2023',
    issuer: 'MinnaLearn',
    url: 'https://certificates.mooc.fi/validate/uhssbzwds4h',
    featured: false,
    importance: 4,
    fields: ['Artificial Intelligence']
  },
  {
    name: '"Master Microsoft Word" course by David Bueno Vallejo',
    date: 'Jun 2023',
    issuer: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-f33abb1b-a310-4762-9f26-a4226b094729/',
    featured: false,
    importance: 4,
    fields: ['Office Tools', 'Microsoft Word', 'Productivity Software']
  },
  {
    name: '"Mobile App Development" course',
    date: 'Jun 2023',
    issuer: 'Google Activate',
    url: 'https://skillshop.exceedlms.com/student/award/x41Cg5Jm287UKWMwaajjXWdy',
    featured: false,
    importance: 4,
    fields: ['iOS Development', 'Android Development']
  },
  {
    name: 'C1 Advanced - Score 189',
    date: 'Jul 2021',
    issuer: 'Cambridge English',
    url: null,
    featured: true,
    importance: 5,
    fields: ['English']
  },
];

export default function Certifications() {
  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Separate and sort certifications
  const featuredCerts = certifications
    .filter(cert => cert.featured)
    .sort((a, b) => b.importance - a.importance);

  const moreCerts = certifications
    .filter(cert => !cert.featured)
    .sort((a, b) => b.importance - a.importance);

  const CertificationCard = ({ certification }) => (
    <div 
      className={`${styles.card} ${certification.url ? styles.clickable : ''}`}
      onClick={() => handleCardClick(certification.url)}
    >
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <h3 className={styles.name}>{certification.name}</h3>
          <p className={styles.issuer}>{certification.issuer}</p>
          <p className={styles.date}>{certification.date}</p>
          <div className={styles.fieldList}>
            {certification.fields.map((field, idx) => (
              <span key={idx} className={styles.fieldTag}>{field}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout title="Certifications">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Certifications</h1>
        
        {featuredCerts.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Featured Certifications</h2>
            <div className={styles.cardContainer}>
              {featuredCerts.map((certification, index) => (
                <CertificationCard key={index} certification={certification} />
              ))}
            </div>
          </section>
        )}

        {moreCerts.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>More Certifications</h2>
            <div className={styles.cardContainer}>
              {moreCerts.map((certification, index) => (
                <CertificationCard key={index} certification={certification} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

