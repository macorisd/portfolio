import React from 'react';
import Layout from '@theme/Layout';

export default function Certifications() {
  return (
    <Layout title="Certifications">
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <h1>Certifications</h1>
        <ul>
          <li>
            <strong>AWS Certified Solutions Architect</strong><br />
            <span style={{ color: '#888' }}>Amazon Web Services, 2024</span>
          </li>
          <li>
            <strong>Google Professional Data Engineer</strong><br />
            <span style={{ color: '#888' }}>Google Cloud, 2023</span>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
