import React from 'react';
import Layout from '@theme/Layout';
import styles from './articles.module.css';

// List of articles
const articles = [
  {
    title: 'Instance semantic segmentation using an open vocabulary',
    date: 'May 2025',
    venue: {
      name: 'Simposio RBVM - Almería 2025',
      url: 'https://arm.ual.es/rbvm/',
    },
    authors: [
      { name: 'Decena-Gimenez, M.', url: null },
      { name: 'Moncada-Ramirez, J.', url: null },
      { name: 'Ruiz-Sarmiento, J.R.', url: 'https://mapir.isa.uma.es/mapirwebsite/?p=1366' },
      { name: 'Gonzalez-Jimenez, J.', url: 'https://mapir.isa.uma.es/mapirwebsite/?p=1536' },
    ],
    group: {
      name: 'MAPIR UMA',
      url: 'https://mapir.isa.uma.es/mapirwebsite/',
    },
    abstract: `Traditional instance semantic segmentation, based on frameworks like Detectron2,
    is restricted by a "closed vocabulary" derived from its training data (e.g., COCO), limiting
    its ability to recognize objects from unseen categories. To overcome this limitation, we
    present TALOS, a modular and flexible method for open-vocabulary instance semantic
    segmentation. TALOS executes a sequence of three stages: Tagging (extraction of semantic
    labels of present object classes), Location (bounding box localization for each instance
    via visual grounding based on the extracted labels), and Segmentation (generation of accurate
    pixel masks in a category-agnostic manner). Modularity allows integrating diverse state-of-
    the-art technologies. Qualitative evaluations demonstrate that TALOS correctly identifies
    and segments objects from categories beyond COCO, outperforming Detectron2 in semantic
    richness and mask quality, especially in complex scenes.`,
    pdfUrl: 'https://drive.google.com/file/d/1BrQ8pja14TiN8dBNRmDNccvg6Sl7ivgK/view?usp=sharing',
    customButtons: [
      {
        text: 'Publication',
        color: '#2e90db',
        url: 'https://ingmec.ual.es/ojs/index.php/RBVM25/article/view/38',
      },
      {
        text: 'TALOS GitHub',
        color: '#6f42c1',
        url: 'https://github.com/macorisd/TALOS',
      },
    ],
  },
];

export default function Articles() {
  return (
    <Layout title="Published Articles">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Published Articles</h1>
        <div className={styles.cardContainer}>
          {articles.map((article, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardContent}>
                {/* Title */}
                <h2 className={styles.title}>{article.title}</h2>

                {/* Meta: Date & Venue */}
                <div className={styles.meta}>
                  <span className={styles.date}>
                    {article.date || 'Pending publication'}
                  </span>
                  {' • '}
                  {article.venue.url ? (
                    <a
                      href={article.venue.url}
                      target="_blank"
                      rel="noopener"
                      className={styles.venue}
                    >
                      {article.venue.name}
                    </a>
                  ) : (
                    <span className={styles.venue}>{article.venue.name}</span>
                  )}
                </div>

                {/* Authors */}
                <div className={styles.authors}>
                  {article.authors.map((author, i) => (
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
                      {i < article.authors.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </div>

                {/* Research Group */}
                {article.group?.name && (
                  <div className={styles.group}>
                    {article.group.url ? (
                      <a
                        href={article.group.url}
                        target="_blank"
                        rel="noopener"
                        className={styles.groupLink}
                      >
                        {article.group.name}
                      </a>
                    ) : (
                      <span className={styles.groupName}>{article.group.name}</span>
                    )}
                    {' '}Research Group
                  </div>
                )}

                {/* Abstract */}
                <div className={styles.abstractContainer}>
                  <p className={styles.abstract}>
                    {article.abstract.replace(/\n/g, ' ')}
                  </p>
                </div>

                {/* Buttons: Read PDF + Custom Buttons */}
                <div className={styles.buttonContainer}>
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener"
                    className={styles.pdfButton}
                  >
                    Read PDF
                  </a>

                  {article.customButtons &&
                    article.customButtons.map((btn, i) => (
                      <a
                        key={i}
                        href={btn.url}
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
