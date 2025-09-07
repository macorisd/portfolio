import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/education.module.css';
import useEducation from '../hooks/useEducation';
import { useDelayedLoading } from '../hooks/useDelayedLoading';

export default function Education() {
  const { education, loading, error } = useEducation();
  const showLoadingText = useDelayedLoading(loading);

  if (loading) {
    return (
      <Layout title="Education" noFooter>
        <main className={styles.timelineContainer}>
          <h1 className={styles.pageTitle}>Education</h1>
          {showLoadingText && (
            <div className="loadingText">
              <p>Loading education data...</p>
            </div>
          )}
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Education" noFooter>
        <main className={styles.timelineContainer}>
          <h1 className={styles.pageTitle}>Education</h1>
          <div className={styles.timeline}>
            <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
              <p>Error loading education data: {error}</p>
              <p>Please try refreshing the page or check if the server is running.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Education">
      <main className={styles.timelineContainer}>
        <h1 className={styles.pageTitle}>Education</h1>
        <div className={styles.timeline}>
          {education.map((study, index) => (
            <div key={study.id || index} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                {study.url ? (
                  <a href={study.url} target="_blank" rel="noopener" className={styles.studyNameLink}>
                    <h3 className={styles.studyName}>{study.name}</h3>
                  </a>
                ) : (
                  <h3 className={styles.studyName}>{study.name}</h3>
                )}
                <h4 className={styles.institution}>{study.institution}</h4>
                <span className={styles.date}>
                  {study.start} – {study.end || (study.expectedEnd ? `Present (Expected ${study.expectedEnd})` : 'Present')}
                </span>
                {study.grade && (
                  <span className={styles.finalGrade}>
                    {study.end === null ? 'Current Grade: ' : 'Final Grade: '}{study.grade}
                  </span>
                )}
                {study.description && (
                  <p className={styles.description}>{study.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
