import React from 'react';
import Layout from '@theme/Layout';
import styles from './articles.module.css';

// List of articles
const articles = [
  {
    title: 'Instance semantic segmentation using an open vocabulary',
    date: null,
    venue: { name: 'Simposio RBVM - Almería 2025', url: 'https://arm.ual.es/rbvm/comunicaciones/' },
    authors: [
      { name: 'Decena-Gimenez, M.', url: null },
      { name: 'Moncada-Ramirez, J.', url: null },
      { name: 'Ruiz-Sarmiento, J.R.', url: "https://mapir.isa.uma.es/mapirwebsite/?p=1366" },
      { name: 'Gonzalez-Jimenez, J.', url: "https://mapir.isa.uma.es/mapirwebsite/?p=1536" },
    ],
    group: { name: 'MAPIR UMA', url: 'https://mapir.isa.uma.es/mapirwebsite/' },
    abstract: `Traditional instance semantic segmentation, based on frameworks like Detectron2,
    is restricted by a "closed vocabulary" derived from its training data (e.g., COCO), limiting
    its ability to recognize objects from unseen categories. To overcome this limitation, we present
    TALOS, a modular and flexible method for open-vocabulary instance semantic segmentation. TALOS
    executes a sequence of three stages: Tagging (extraction of semantic labels of present object
    classes), Location (bounding box localization for each instance via visual grounding based on
    the extracted labels), and Segmentation (generation of accurate pixel masks in a category-agnostic
    manner). Modularity allows integrating diverse state-of-the-art technologies. Qualitative
    evaluations demonstrate that TALOS correctly identifies and segments objects from categories
    beyond COCO, outperforming Detectron2 in semantic richness and mask quality, especially in complex
    scenes.`,
    pdfUrl: 'https://drive.google.com/file/d/1BrQ8pja14TiN8dBNRmDNccvg6Sl7ivgK/view?usp=sharing',
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
                <h2 className={styles.title}>{article.title}</h2>
                <div className={styles.meta}>
                  <span className={styles.date}>
                    {article.date || 'Pending publication'}
                  </span>
                  {' • '}
                  {article.venue.url ? (
                    <a href={article.venue.url} target="_blank" rel="noopener" className={styles.venue}>
                      {article.venue.name}
                    </a>
                  ) : (
                    <span className={styles.venue}>{article.venue.name}</span>
                  )}
                </div>
                <div className={styles.authors}>
                  {article.authors.map((author, i) => (
                    <React.Fragment key={author.name}>
                      {author.url ? (
                        <a href={author.url} target="_blank" rel="noopener" className={styles.authorLink}>
                          <em>{author.name}</em>
                        </a>
                      ) : (
                        <span className={styles.authorName}><em>{author.name}</em></span>
                      )}
                      {i < article.authors.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </div>
                {/* Research group line, if available */}
                {article.group?.name && (
                  <div className={styles.group}>
                    {article.group.url ? (
                      <a href={article.group.url} target="_blank" rel="noopener" className={styles.groupLink}>
                        {article.group.name}
                      </a>
                    ) : (
                      <span className={styles.groupName}>{article.group.name}</span>
                    )}
                    {' '}Research Group
                  </div>
                )}
                <div className={styles.abstractContainer}>
                  <p className={styles.abstract}>
                    Traditional instance semantic segmentation, based on frameworks like <strong>Detectron2</strong>,
                    is restricted by a <strong>"closed vocabulary"</strong> derived from its training
                    data (e.g., <strong>COCO</strong>), limiting its ability to recognize objects from
                    unseen categories.
                  </p>
                  <p className={styles.abstract}>
                    To overcome this limitation, we present <strong>TALOS</strong>, a modular and flexible method
                    for <strong>open-vocabulary instance semantic segmentation</strong>. TALOS executes a sequence
                    of three stages:
                  </p>
                  <ul className={styles.abstract}>
                    <li><strong>Tagging</strong>: Extraction of semantic labels of present object classes.</li>
                    <li><strong>Location</strong>: Bounding box localization for each instance via visual grounding
                    based on the extracted labels.</li>
                    <li><strong>Segmentation</strong>: Generation of accurate pixel masks in a category-agnostic
                    manner.</li>
                  </ul>
                  <p className={styles.abstract}>
                    <strong>Modularity</strong> allows integrating diverse state-of-the-art technologies. Qualitative
                    evaluations demonstrate that TALOS correctly identifies and segments objects from categories
                    beyond <strong>COCO</strong>, outperforming <strong>Detectron2</strong> in semantic richness and
                    mask quality, especially in complex scenes.
                  </p>
                </div>
                <a href={article.pdfUrl} target="_blank" rel="noopener" className={styles.pdfButton}>
                  Read PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}