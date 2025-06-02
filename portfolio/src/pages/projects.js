import React from 'react';
import Layout from '@theme/Layout';
import styles from './projects.module.css';

const projects = [  {
    title: 'TALOS',
    image: '/img/talos_project.png',    description:
      `A Modular and Automatic System for Open-Vocabulary Semantic Instance Segmentation.
      
      TALOS is a method developed as part of research at the MAPIR UMA group. Its processing consists of three sequential stages: Tagging, Location, and Segmentation. It is an automatic method, taking only a single image as input, and it's modular, allowing the inclusion of various state-of-the-art models at each of its stages. It includes a ROS2 node designed for communication with robotic platforms. Qualitative evaluations demonstrate that TALOS provides richer semantic information and higher mask quality than Detectron2.`,
    finished: false,
    githubUrl: 'https://github.com/macorisd/talos',
  },
  {
    title: 'Ultimate Computer Vision TicTacToe',
    image: '/img/u_cv_ttt_project.png',
    description:
      `A Computer Vision-powered Python program that analyzes a physical TicTacToe game through the camera and plays against the user.
      
      It uses OpenCV for image processing and leverages the MiniMax algorithm for optimal gameplay against the user.`,
    finished: true,
    githubUrl: 'https://github.com/macorisd/u-cv-ttt',
  },
  {
    title: 'Planit',
    image: '/img/planit_project.png',
    description:
      'A mobile task organizer app using Android Studio and SQLite, with multi-language support.',
    finished: true,
    githubUrl: 'https://github.com/macorisd/planit',
  },
  {
    title: 'Instagram Fake Account Analysis',
    image: '/img/instagram_fake_analysis_project.png',
    description:
      'A research study in R focused on classifying fake Instagram accounts through dataset analysis.',
    finished: true,
    githubUrl: 'https://github.com/macorisd/instagram-fake-account-analysis',
  },
  {
    title: 'Threes Space State Search',
    image: '/img/threes_project.png',
    description:
      'A Python program that uses state-space search theory to achieve the highest score in the game Threes, visualized with Pygame.',
    finished: true,
    githubUrl: 'https://github.com/macorisd/threes-space-state-search',
  },
  {
    title: 'Orcast',
    image: '/img/orcast_project.png',
    description:
      'A Unity-developed pixel art game focused on saving the future of a magical valley.',
    finished: true,
    githubUrl: 'https://yellow-beavers.itch.io/orcast',
  },
  {
    title: 'Personal Portfolio (This Site)',
    image: '/img/portfolio_project.png',
    description:
      'My personal Software Engineer portfolio, built with Docusaurus + React. Features articles, education, work experience, and more.',
    finished: true,
    githubUrl: 'https://github.com/macorisd/portfolio',
  },
];

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
  return (
    <Layout title="Projects">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Featured Projects</h1>
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}