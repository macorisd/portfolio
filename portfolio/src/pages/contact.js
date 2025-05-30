import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact">
      <main style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
        <h1>Contact</h1>
        <p>You can reach me at:</p>
        <ul>
          <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener">linkedin.com/in/yourprofile</a></li>
          <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener">github.com/yourusername</a></li>
        </ul>
        <p>
          I am always open to new opportunities, collaborations, or just a friendly chat!
        </p>
      </main>
    </Layout>
  );
}
