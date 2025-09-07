import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../css/index.module.css';
import useIndexData from '../hooks/useIndexData';

export default function Home() {
  const { indexData, loading, error } = useIndexData();

  if (loading) {
    return (
      <Layout>
        <div className={styles.container}>
          <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>Loading...</p>
            </div>
          </main>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className={styles.container}>
          <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
            <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
              <p>Error loading data: {error}</p>
              <p>Please try again later.</p>
            </div>
          </main>
        </div>
      </Layout>
    );
  }

  if (!indexData) {
    return (
      <Layout>
        <div className={styles.container}>
          <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>No data available.</p>
            </div>
          </main>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
          <img
            src={indexData.img}
            alt="Macorís Decena"
            className={styles.profileImage}
          />
          <h1 className={styles.mainTitle}>Macorís Decena</h1>
          <p className={styles.mainDescription}>
            {indexData.description}
          </p>

          {/* Currently Card */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '2rem 0' }}>
            <div className={styles.currentlyCard}>
              <div className={styles.currentlyCardContent}>
                <div className={styles.currentlyIconContainer}>
                  <svg className={styles.currentlyIcon} viewBox="0 0 24 24" fill="none" width="48" height="48">
                    <circle cx="12" cy="12" r="10" fill="#667eea" />
                    <rect x="11" y="10" width="2" height="6" rx="1" fill="#fff" />
                    <rect x="11" y="7" width="2" height="2" rx="1" fill="#fff" />
                  </svg>
                </div>
                <div className={styles.currentlyTextContent}>
                  <h3 className={styles.currentlyTitle}>Currently...</h3>
                  <p className={styles.currentlyDescription}>
                    {indexData.currently}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News Cards */}
          <section className={styles.newsSection}>
            <h2 className={styles.newsSectionTitle}>Latest News</h2>
            <div
              className={
                indexData.news.length === 1
                  ? `${styles.newsGrid} ${styles.singleNews}`
                  : styles.newsGrid
              }
            >
              {indexData.news.map((news, index) => (
                <div key={index} className={styles.newsCard}>
                  <div className={styles.newsImageContainer}>
                    <img
                      src={news.img}
                      alt={news.title}
                      className={styles.newsImage}
                    />
                  </div>
                  <div className={styles.newsContent}>
                    <div className={styles.newsDate}>{news.date}</div>
                    <h3 className={styles.newsTitle}>{news.title}</h3>
                    <p className={styles.newsDescription}>{news.description}</p>
                    {news.buttons && news.buttons.length > 0 && (
                      <div className={styles.newsButtonContainer}>
                        {news.buttons.map((button, btnIndex) => (
                          <a
                            key={btnIndex}
                            href={button.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.newsButton}
                            style={{ backgroundColor: button.color }}
                          >
                            {button.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Margen extra entre news y footer */}
          <div style={{ height: '3rem' }} />
        </main>
      </div>
    </Layout>
  );
}
