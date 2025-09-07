import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/skills.module.css';
import useSkills from '../hooks/useSkills';
import { useDelayedLoading } from '../hooks/useDelayedLoading';

const SkillTag = ({ skill, isAdvanced }) => {
  return (
    <div className={`${styles.skillTag} ${isAdvanced ? styles.advancedTag : styles.experiencedTag}`}>
      <span className={styles.skillName}>{skill.name}</span>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  const advancedSkills = skills.filter(skill => skill.advanced);
  const experiencedSkills = skills.filter(skill => !skill.advanced);

  const getAdvancedTitle = (categoryTitle) => {
    if (categoryTitle === 'Preferred Fields') return 'My favorite fields';
    return 'Advanced Experience';
  };

  const getExperiencedTitle = (categoryTitle) => {
    if (categoryTitle === 'Preferred Fields') return 'Other areas of experience';
    return 'Familiar With';
  };

  // Para Soft Skills, mostrar todas juntas sin dividir
  if (title === 'Soft Skills') {
    return (
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>{title}</h3>
        <div className={styles.skillSection}>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} isAdvanced={true} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.categoryContainer}>
      <h3 className={styles.categoryTitle}>{title}</h3>
      
      {advancedSkills.length > 0 && (
        <div className={styles.skillSection}>
          <h4 className={styles.sectionTitle}>
            {getAdvancedTitle(title)}
          </h4>
          <div className={styles.skillsGrid}>
            {advancedSkills.map((skill, index) => (
              <SkillTag key={index} skill={skill} isAdvanced={true} />
            ))}
          </div>
        </div>
      )}
      
      {experiencedSkills.length > 0 && (
        <div className={styles.skillSection}>
          <h4 className={styles.sectionTitle}>
            {getExperiencedTitle(title)}
          </h4>
          <div className={styles.skillsGrid}>
            {experiencedSkills.map((skill, index) => (
              <SkillTag key={index} skill={skill} isAdvanced={false} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Skills() {
  const { skills, loading, error } = useSkills();
  const showLoadingText = useDelayedLoading(loading);

  if (loading) {
    return (
      <Layout title="Skills" noFooter>
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Technical Skills</h1>
          {showLoadingText && (
            <div className="loadingText">
              <p>Loading skills data...</p>
            </div>
          )}
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Skills" noFooter>
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Technical Skills</h1>
          <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
            <p>Error loading skills data: {error}</p>
            <p>Please try again later.</p>
          </div>
        </main>
      </Layout>
    );
  }

  if (!skills || !skills.categories) {
    return (
      <Layout title="Skills" noFooter>
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Technical Skills</h1>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>No skills data available.</p>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Skills">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Technical Skills</h1>
        
        <div className={styles.skillsContainer}>
          {Object.entries(skills.categories).map(([category, categorySkills]) => (
            <SkillCategory key={category} title={category} skills={categorySkills} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
