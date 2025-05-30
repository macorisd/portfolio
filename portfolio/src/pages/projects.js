import React from 'react';
import Layout from '@theme/Layout';

const projects = [
  {
    name: 'TALOS Object Detector',
    description: 'A real-time object detection system built with Detectron2, integrating live camera feeds.',
    link: 'https://github.com/yourusername/talos-object-detector',
    tags: ['Python', 'Computer Vision', 'Deep Learning'],
  },
  {
    name: 'Portfolio Website',
    description: 'My own personal portfolio built with Docusaurus.',
    link: 'https://yourwebsite.com',
    tags: ['React', 'Docusaurus'],
  },
  // More projects...
];

export default function Projects() {
  return (
    <Layout title="Featured Projects">
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
        <h1>Featured Projects</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {projects.map((project) => (
            <div key={project.name} style={{ border: '1px solid #eee', borderRadius: '16px', padding: '1.5rem', flex: '1 0 40%', minWidth: 320, background: '#fafbfc' }}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>
                <strong>Tech:</strong> {project.tags.join(', ')}
              </p>
              <a href={project.link} target="_blank" rel="noopener">View Project</a>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
