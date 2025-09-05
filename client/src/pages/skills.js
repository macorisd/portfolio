import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/skills.module.css';

const skillsData = {
  'Programming Languages': [
    { name: 'Python', level: 80 },
    { name: 'Java', level: 80 },
    { name: 'C++', level: 65 },
    { name: 'C', level: 65 },
    { name: 'C#', level: 60 },
    { name: 'JavaScript', level: 40 },
    { name: 'R', level: 60 },
    { name: 'Haskell', level: 30 },
  ],
  'Preferred Fields': [
    { name: 'Artificial Intelligence', level: 80 },
    { name: 'Computer Vision', level: 75 },
    { name: 'Backend Development', level: 70 },
    { name: 'Robotics', level: 50 },
    { name: 'Frontend Development', level: 30 },
  ],
  'Web Development': [
    { name: 'FastAPI', level: 80 },
    { name: 'Spring Boot', level: 70 },
    { name: 'Node.js', level: 40 },
    { name: 'React', level: 40 },
    { name: 'HTML5', level: 60 },
    { name: 'CSS3', level: 60 },
  ],
  'Other Frameworks & Technologies': [
    { name: 'Git', level: 85 },
    { name: 'transformers (HuggingFace)', level: 70 },
    { name: 'Jupyter Notebook', level: 70 },
    { name: 'Linux', level: 70 },
    { name: 'Docker', level: 60 },
    { name: 'Kubernetes', level: 40 },
    { name: 'Vercel', level: 80 },
    { name: 'ROS2', level: 50 },
    { name: 'Generative AI', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Android Studio', level: 70 },
    { name: 'Unity', level: 40 },
  ],
  'Databases': [
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 65 },
    { name: 'SQLite', level: 55 },
  ],
  'Soft Skills': [
    { name: 'Responsibility and commitment', level: 90 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Creativity', level: 85 },
    { name: 'Communication', level: 80 },
    { name: 'Technical Writing', level: 80 },
    { name: 'Teamwork', level: 85 },
    { name: 'Adaptability', level: 75 },
  ],
};

const SkillBar = ({ skill }) => {
  const getBarColor = (level) => {
    if (level >= 85) return '#4ade80'; // Verde para Advanced
    if (level >= 70) return '#3b82f6'; // Azul para Proficient
    if (level >= 55) return '#ffd23c'; // Amarillo para Intermediate
    return '#ff7b15'; // Naranja para Beginner
  };

  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.skillBarContainer}>
        <div 
          className={styles.skillBar}
          style={{ 
            width: `${skill.level}%`,
            backgroundColor: getBarColor(skill.level)
          }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className={styles.categoryContainer}>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <Layout title="Skills">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Skills</h1>
        
        <div className={styles.skillsContainer}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>        <div className={styles.legendContainer}>
          <h4 className={styles.legendTitle}>Proficiency Levels</h4>
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.advanced}`}></div>
              <span>Advanced (85-100%)</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.proficient}`}></div>
              <span>Proficient (70-84%)</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.intermediate}`}></div>
              <span>Intermediate (55-69%)</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.beginner}`}></div>
              <span>Beginner (0-54%)</span>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
