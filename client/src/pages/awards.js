import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'; // usamos el hook una sola vez
import styles from '../css/awards.module.css';
import { useAwards } from '../hooks/useAwards';
import { useDelayedLoading } from '../hooks/useDelayedLoading';

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { awards, loading, error } = useAwards();
  const showLoadingText = useDelayedLoading(loading);

  // Llama al hook una vez y usa la utilidad "plana" dentro del map
  const { withBaseUrl } = useBaseUrlUtils();

  // Pre-procesa awards para resolver URLs de imagen
  const processedAwards = (awards || []).map((award) => {
    let imageUrl = null;

    if (award.image) {
      if (award.image.startsWith('http://') || award.image.startsWith('https://')) {
        imageUrl = award.image;
      } else {
        imageUrl = withBaseUrl(award.image);
      }
    }

    return {
      ...award,
      imageUrl,
    };
  });

  const openModal = (image, title) => {
    if (image) setSelectedImage({ image, title });
  };

  const closeModal = () => setSelectedImage(null);

  if (loading) {
    return (
      <Layout title="Awards & Achievements" noFooter>
        <main className={styles.timelineContainer}>
          <h1 className={styles.pageTitle}>Awards & Achievements</h1>
          {showLoadingText && (
            <div className="loadingText">
              <p>Loading awards...</p>
            </div>
          )}
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Awards & Achievements" noFooter>
        <main className={styles.timelineContainer}>
          <h1 className={styles.pageTitle}>Awards & Achievements</h1>
          <div className={styles.error}>Error loading awards: {error}</div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Awards & Achievements">
      <main className={styles.timelineContainer}>
        <h1 className={styles.pageTitle}>Awards & Achievements</h1>
        <div className={styles.timeline}>
          {processedAwards.map((award) => (
            <div key={award.id} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.contentWrapper}>
                  <div className={styles.textContent}>
                    {award.url ? (
                      <a href={award.url} target="_blank" rel="noopener" className={styles.titleLink}>
                        <h3 className={styles.title}>{award.title}</h3>
                      </a>
                    ) : (
                      <h3 className={styles.title}>{award.title}</h3>
                    )}
                    <div className={styles.typeAndDate}>
                      <span className={styles.type}>{award.type}</span>
                      <span className={styles.date}>{award.date}</span>
                    </div>
                    {award.entity && <h4 className={styles.entity}>{award.entity}</h4>}
                    {award.description && <p className={styles.description}>{award.description}</p>}
                  </div>

                  {award.imageUrl && (
                    <div
                      className={styles.imageContainer}
                      onClick={() => openModal(award.imageUrl, award.title)}
                    >
                      <img
                        src={award.imageUrl}
                        alt={award.title}
                        className={styles.awardImage}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.closeButton} onClick={closeModal}>&times;</span>
              <img src={selectedImage.image} alt={selectedImage.title} className={styles.modalImage} />
              <p className={styles.modalCaption}>{selectedImage.title}</p>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
