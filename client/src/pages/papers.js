import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../css/papers.module.css';
import usePapers from '../hooks/usePapers';

export default function Papers() {
  const { papers, loading, error } = usePapers();

  if (loading) {
    return (
      <Layout title="Published Papers">
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Published Papers</h1>
          <div className={styles.cardContainer}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>Loading papers data...</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Published Papers">
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Published Papers</h1>
          <div className={styles.cardContainer}>
            <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
              <p>Error loading papers data: {error}</p>
              <p>Please try refreshing the page or check if the server is running.</p>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Published Papers">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Published Papers</h1>
        <div className={styles.cardContainer}>
          {papers.map((paper, idx) => (
            <div key={paper.id || idx} className={styles.card}>
              <div className={styles.cardContent}>
                {/* Title */}
                <h2 className={styles.title}>{paper.title}</h2>

                {/* Meta: Date & Venue */}
                <div className={styles.meta}>
                  <span className={styles.date}>
                    {paper.date || 'Pending publication'}
                  </span>
                  {' • '}
                  {paper.venue?.url ? (
                    <a
                      href={paper.venue.url}
                      target="_blank"
                      rel="noopener"
                      className={styles.venue}
                    >
                      {paper.venue.name}
                    </a>
                  ) : (
                    <span className={styles.venue}>{paper.venue?.name}</span>
                  )}
                </div>

                {/* Authors */}
                {paper.authors && paper.authors.length > 0 && (
                  <div className={styles.authors}>
                    {paper.authors.map((author, i) => (
                      <React.Fragment key={author.name}>
                        {author.url ? (
                          <a
                            href={author.url}
                            target="_blank"
                            rel="noopener"
                            className={styles.authorLink}
                          >
                            <em>{author.name}</em>
                          </a>
                        ) : (
                          <span className={styles.authorName}>
                            <em>{author.name}</em>
                          </span>
                        )}
                        {i < paper.authors.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {/* Research Group */}
                {paper.group?.name && (
                  <div className={styles.group}>
                    {paper.group.url ? (
                      <a
                        href={paper.group.url}
                        target="_blank"
                        rel="noopener"
                        className={styles.groupLink}
                      >
                        {paper.group.name}
                      </a>
                    ) : (
                      <span className={styles.groupName}>{paper.group.name}</span>
                    )}
                    {' '}Research Group
                  </div>
                )}

                {/* Abstract */}
                <div className={styles.abstractContainer}>
                  <p className={styles.abstract}>
                    {paper.abstract?.replace(/\n/g, ' ')}
                  </p>
                </div>

                {/* Buttons: Read PDF + Custom Buttons */}
                <div className={styles.buttonContainer}>
                  {paper.pdfUrl && (
                    <a
                      href={/^https?:\/\//.test(paper.pdfUrl) ? paper.pdfUrl : useBaseUrl(paper.pdfUrl)}
                      target="_blank"
                      rel="noopener"
                      className={styles.pdfButton}
                    >
                      Read PDF
                    </a>
                  )}

                  {paper.customButtons &&
                    paper.customButtons.map((btn, i) => (
                      <a
                        key={i}
                        href={/^https?:\/\//.test(btn.url) ? btn.url : useBaseUrl(btn.url)}
                        target="_blank"
                        rel="noopener"
                        className={styles.customButton}
                        style={{ backgroundColor: btn.color }}
                      >
                        {btn.text}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
