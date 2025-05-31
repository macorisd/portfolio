import React from 'react';
import Layout from '@theme/Layout';

export default function Awards() {
  return (
    <Layout title="Awards and Achievements">
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <h1>Awards and Achievements</h1>
        <ul>
          <li>
            <strong>Best Innovation Award</strong> – Tech Conference 2024<br />
            <span style={{ color: '#888' }}>Awarded for designing an AI-powered recommendation engine.</span>
          </li>
          <li>
            <strong>First Place</strong> – National Robotics Challenge 2023<br />
            <span style={{ color: '#888' }}>Team leader in a robotics hackathon.</span>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
