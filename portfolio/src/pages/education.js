import React from 'react';
import Layout from '@theme/Layout';
import styles from './education.module.css';

// List of educational experiences
const education = [
  {
    name: 'Software Engineering Bachelor\'s Degree',
    institution: 'Universidad de Málaga',
    url: 'https://www.uma.es/grado-en-ingenieria-del-software',
    start: 'Sep 2021',
    end: null,
    expectedEnd: 'Jun 2025',
    description: `In my fourth year, I received a national scholarship due
    to my academic performance, which allowed me to join the MAPIR UMA
    research group as a research intern. So far, I have earned three honors
    distinctions in the subjects "Business Organization," "Requirements Engineering,"
    and "Formal Methods for Software Engineering."`,
    grade: '8.69/10'
  },
  {
    name: 'Technological Baccalaureate',
    institution: 'Colegio Patrocinio San José Estepona',
    url: "https://colegiosanjose.net/",
    start: 'Sep 2019',
    end: 'Jun 2021',
    expectedEnd: null,
    description: null,
    grade: '10/10'
  },
];

export default function Education() {
  return (
    <Layout title="Education">
      <main className={styles.timelineContainer}>
        <h1 className={styles.pageTitle}>Education</h1>
        <div className={styles.timeline}>
          {education.map((study, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot} />              <div className={styles.timelineContent}>
                {study.url ? (
                  <a href={study.url} target="_blank" rel="noopener" className={styles.studyNameLink}>
                    <h3 className={styles.studyName}>{study.name}</h3>
                  </a>
                ) : (
                  <h3 className={styles.studyName}>{study.name}</h3>
                )}
                <h4 className={styles.institution}>{study.institution}</h4><span className={styles.date}>
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
