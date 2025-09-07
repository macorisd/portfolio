import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/certifications.module.css';
import useCertifications from '../hooks/useCertifications';

export default function Certifications() {
  const { certifications, loading, error } = useCertifications();

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

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
            {certification.fields && certification.fields.map((field, idx) => (
              <span key={idx} className={styles.fieldTag}>{field}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <Layout title="Certifications" noFooter>
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Certifications</h1>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Loading certifications data...</p>
          </div>
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Certifications" noFooter>
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Certifications</h1>
          <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
            <p>Error loading certifications data: {error}</p>
            <p>Please try refreshing the page or check if the server is running.</p>
          </div>
        </main>
      </Layout>
    );
  }

  // Separate and sort certifications
  const featuredCerts = certifications
    .filter(cert => cert.featured)
    .sort((a, b) => b.importance - a.importance);

  const moreCerts = certifications
    .filter(cert => !cert.featured)
    .sort((a, b) => b.importance - a.importance);

  return (
    <Layout title="Certifications">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Certifications</h1>
        
        {featuredCerts.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Featured Certifications</h2>
            <div className={styles.cardContainer}>
              {featuredCerts.map((certification, index) => (
                <CertificationCard key={certification.id || index} certification={certification} />
              ))}
            </div>
          </section>
        )}

        {moreCerts.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>More Certifications</h2>
            <div className={styles.cardContainer}>
              {moreCerts.map((certification, index) => (
                <CertificationCard key={certification.id || index} certification={certification} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

