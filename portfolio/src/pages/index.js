import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
        <img
          src="/img/profile.jpg"
          alt="Macorís Decena"
          style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        />
        <h1 style={{ fontSize: '3rem', margin: '2rem 0 1rem' }}>Macorís Decena</h1>
        <p style={{ fontSize: '1.5rem', textAlign: 'center', maxWidth: 600 }}>
          Hi! I'm a 21-year-old Software Engineer interested in research and development
          of AI and Computer Vision systems, as well as backend development. I am
          passionate about facing complex problems and using my creativity to solve them.
        </p>

        <section style={{ width: '100%', maxWidth: 900, margin: '3rem auto' }}>
          <h2>Latest News</h2>
          <ul>
            <li><b>[2025-05]</b> Started a new role at [Company Name] as [Position].</li>
            <li><b>[2024-11]</b> Published an article on [Tech Blog].</li>
            <li><b>[2024-06]</b> Won the [Award Name] for [Achievement].</li>
          </ul>
        </section>

        <section style={{ width: '100%', maxWidth: 900, margin: '3rem auto' }}>
          <h2>Interests</h2>
          <ul style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
            <li>Artificial Intelligence</li>
            <li>Open Source</li>
            <li>Photography</li>
            <li>Traveling</li>
            <li>UI/UX Design</li>
            <li>Robotics</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
