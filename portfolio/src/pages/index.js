import Layout from '@theme/Layout';
import styles from '../css/index.module.css';

const newsData = [
  {
    title: 'Presentation at RBVM Symposium (Almería 2025): Semantic Instance Segmentation using an Open-Vocabulary',
    description: `I had the opportunity to present my research at the RBVM Symposium organized in Almería, Spain
    by the Spanish Committee of Automation, in the Computer Vision category. I introduced TALOS, the system I
    developed for open-vocabulary semantic instance segmentation, and shared the methodology and results detailed
    in my paper.`,
    date: 'Jun 2025',
    image: '/img/simposio_almeria_news.jpg',
    customButtons: [
      { text: 'Symposium Website', color: '#72c28e', url: 'https://arm.ual.es/rbvm/' },
      { text: 'Paper PDF', color: '#b93434', url: '/pdf/paper_simposio_almeria.pdf' },
      // { text: 'LinkedIn Post', color: '#0a66c2', url: 'https://linkedin.com/in/example' },
    ],
  },
];

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
          <img
            src="/img/profile.jpg"
            alt="Macorís Decena"
            className={styles.profileImage}
          />
          <h1 className={styles.mainTitle}>Macorís Decena</h1>
          <p className={styles.mainDescription}>
            Hi! I'm a 21-year-old Software Engineer from Spain, interested in research and development
            of AI and Computer Vision systems, as well as backend development. I am
            passionate about facing complex problems and using my creativity to solve them.
            As a native Spanish speaker with a C1 level in English, I can communicate fluently in
            international environments.
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
                    I am currently a member of the MAPIR UMA (MAchine Perception and Intelligent Robotics)
                    research group, where I am working on the research and development of Computer Vision
                    and AI systems. I'm also looking for internship/junior opportunities in the field of AI
                    and CV for this summer. If you are interested in collaborating or have opportunities
                    available, please feel free to contact me!
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
                newsData.length === 1
                  ? `${styles.newsGrid} ${styles.singleNews}`
                  : styles.newsGrid
              }
            >
              {newsData.map((news, index) => (
                <div key={index} className={styles.newsCard}>
                  <div className={styles.newsImageContainer}>
                    <img
                      src={news.image}
                      alt={news.title}
                      className={styles.newsImage}
                    />
                  </div>
                  <div className={styles.newsContent}>
                    <div className={styles.newsDate}>{news.date}</div>
                    <h3 className={styles.newsTitle}>{news.title}</h3>
                    <p className={styles.newsDescription}>{news.description}</p>
                    {news.customButtons && news.customButtons.length > 0 && (
                      <div className={styles.newsButtonContainer}>
                        {news.customButtons.map((button, btnIndex) => (
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
