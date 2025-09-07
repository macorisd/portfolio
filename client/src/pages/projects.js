import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/projects.module.css';
import useProjects from '../hooks/useProjects';
import { useDelayedLoading } from '../hooks/useDelayedLoading';

function ProjectCard({ project }) {
  const handleCardClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={project.finished ? styles.finished : styles.inProgress}>
            {project.finished ? 'Finished' : 'In Development'}
          </span>
        </div>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects, loading, error } = useProjects();
  const showLoadingText = useDelayedLoading(loading);

  if (loading) {
    return (
      <Layout title="Projects" noFooter>
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Featured Projects</h1>
          {showLoadingText && (
            <div className="loadingText">
              <p>Loading projects...</p>
            </div>
          )}
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Projects" noFooter>
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Featured Projects</h1>
          <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
            <p>Error loading projects: {error}</p>
            <p>Please try again later.</p>
          </div>
        </main>
      </Layout>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <Layout title="Projects" noFooter>
        <main className={styles.container}>
          <h1 className={styles.pageTitle}>Featured Projects</h1>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>No projects available.</p>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Projects">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Featured Projects</h1>
        <div className={`${styles.grid} contentFadeIn`}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}