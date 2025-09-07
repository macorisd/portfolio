import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/work-experience.module.css';
import useWorkExperience from '../hooks/useWorkExperience';

export default function WorkExperience() {
  const { workExperience, loading, error } = useWorkExperience();

  if (loading) {
    return (
      <Layout title="Work Experience" noFooter>
        <main className={styles.timelineContainer}>
          <h1 className={styles.pageTitle}>Work Experience</h1>
          <div className={styles.timeline}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>Loading work experience data...</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Work Experience" noFooter>
        <main className={styles.timelineContainer}>
          <h1 className={styles.pageTitle}>Work Experience</h1>
          <div className={styles.timeline}>
            <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
              <p>Error loading work experience data: {error}</p>
              <p>Please try refreshing the page or check if the server is running.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Work Experience">
      <main className={styles.timelineContainer}>
        <h1 className={styles.pageTitle}>Work Experience</h1>
        <div className={styles.timeline}>
          {workExperience.map((company, index) => (
            <div key={company.id || index} className={styles.companySection}>
              {company.url ? (
                <a href={company.url} target="_blank" rel="noopener" className={styles.companyNameLink}>
                  <h2 className={styles.companyName}>{company.company}</h2>
                </a>
              ) : (
                <h2 className={styles.companyName}>{company.company}</h2>
              )}
              {company.positions && company.positions.map((pos, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <h3 className={styles.positionTitle}>{pos.title}</h3>
                    <span className={styles.date}>
                      {pos.start} – {pos.end || 'Present'}
                    </span>
                    {pos.description && (
                      <p className={styles.description}>{pos.description}</p>
                    )}
                    {pos.tech && pos.tech.length > 0 && (
                      <div className={styles.techList}>
                        {pos.tech.map((tech) => (
                          <span key={tech} className={styles.techBadge}>{tech}</span>
                        ))}
                      </div>
                    )}
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