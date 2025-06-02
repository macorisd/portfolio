import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './awards.module.css';

// List of awards and achievements
const awards = [
  {
    title: 'University Collaboration Grant with Departments (Academic Year 2024/2025)',
    type: 'Scholarship',
    date: 'Jan 2025',
    entity: 'Ministerio de Educación y Formación Profesional',
    url: 'https://www.uma.es/becas/info/124458/beca-de-colaboracion-con-departamentos/',
    description: 'Awarded a national scholarship due to my academic performance in the Software Engineering Bachelor\'s Degree at Universidad de Málaga. This scholarship allows me to collaborate with the MAPIR UMA research group as a research intern, focusing on computer vision and robotics.',
    image: null,
  },
  {
    title: 'Malackathon 2024 - Most Secure Solution Award',
    type: 'Hackathon',
    date: 'Oct 2024',
    entity: 'NICS Lab - Universidad de Málaga',
    url: 'https://www.nics.uma.es/news/el-primer-malackathon-premia-los-buenos-proyectos-en-materia-de-uso-y-eficiencia-de-recursos-hidricos/',
    description: 'Hackathon focused on water data analysis and management using Oracle Cloud infrastructure. Project centered on analyzing data from Spanish reservoirs, developing a secure and accessible web application to display the data, and implementing water consumption predictions.',
    image: '/img/malackathon_award.jpeg',
  },
  {
    title: 'VIII Academic Excellence Awards for the Spanish Baccalaureate – Awarded',
    type: 'Academic Excellence',
    date: 'Jun 2021',
    entity: 'Ayuntamiento de Estepona',
    url: 'https://ayuntamiento.estepona.es/noticia/16232-el-alcalde-reconoce-a-los-16-mejores-alumnos-de-bachillerato-de-estepona-con-los-viii-premios-a-la-excelencia-educativa',
    description: 'Award received with an average grade of 10 (out of 10) in both the first and second years of the Spanish Baccalaureate.',
    image: '/img/baccalaureate_award.jpg',
  },
];

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image, title) => {
    setSelectedImage({ image, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout title="Awards & Achievements">
      <main className={styles.timelineContainer}>
        <h1 className={styles.pageTitle}>Awards & Achievements</h1>
        <div className={styles.timeline}>
          {awards.map((award, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot} />              <div className={styles.timelineContent}>
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
                    {award.entity && (
                      <h4 className={styles.entity}>{award.entity}</h4>
                    )}
                    {award.description && (
                      <p className={styles.description}>{award.description}</p>
                    )}
                  </div>
                  {award.image && (
                    <div className={styles.imageContainer} onClick={() => openModal(award.image, award.title)}>
                      <img 
                        src={award.image} 
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

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.closeButton} onClick={closeModal}>&times;</span>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className={styles.modalImage}
              />
              <p className={styles.modalCaption}>{selectedImage.title}</p>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
