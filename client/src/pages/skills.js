import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/skills.module.css';

const skillsData = {
  'Programming Languages': [
    { name: 'Python', advanced: true },
    { name: 'Java', advanced: true },
    { name: 'C++', advanced: false },
    { name: 'C', advanced: false },
    { name: 'C#', advanced: false },
    { name: 'JavaScript', advanced: false },
    { name: 'R', advanced: false },
    { name: 'Haskell', advanced: false },
  ],
  'Preferred Fields': [
    { name: 'Artificial Intelligence', advanced: true },
    { name: 'Computer Vision', advanced: true },
    { name: 'Backend Development', advanced: true },
    { name: 'Generative AI', advanced: true },
    { name: 'Robotics', advanced: false },
    { name: 'Frontend Development', advanced: false },
  ],
  'Web Development': [
    { name: 'FastAPI', advanced: true },
    { name: 'Spring Boot', advanced: true },
    { name: 'HTML5', advanced: false },
    { name: 'CSS3', advanced: false },
    { name: 'Node.js', advanced: false },
    { name: 'React', advanced: false },
  ],
  'Tools & Technologies': [
    { name: 'Git', advanced: true },
    { name: 'transformers (HuggingFace)', advanced: true },
    { name: 'VS Code', advanced: true },
    { name: 'Vercel', advanced: true },
    { name: 'Jupyter Notebook', advanced: true },
    { name: 'Linux', advanced: true },
    { name: 'Android Studio', advanced: true },
    { name: 'Docker', advanced: false },
    { name: 'Kubernetes', advanced: false },
    { name: 'ROS2', advanced: false },
    { name: 'Unity', advanced: false },
  ],
  'Databases': [
    { name: 'MongoDB', advanced: true },
    { name: 'MySQL', advanced: false },
    { name: 'SQLite', advanced: false },
  ],
  'Soft Skills': [
    { name: 'Problem Solving', advanced: true },
    { name: 'Responsibility & Commitment', advanced: true },
    { name: 'Creativity', advanced: true },
    { name: 'Technical Writing', advanced: true },
    { name: 'Teamwork', advanced: true },
    { name: 'Communication', advanced: false },
    { name: 'Adaptability', advanced: false },
  ],
};

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
  return (
    <Layout title="Skills">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Technical Skills</h1>
        
        <div className={styles.skillsContainer}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
