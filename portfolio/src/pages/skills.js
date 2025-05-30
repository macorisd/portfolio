import React from 'react';
import Layout from '@theme/Layout';

const skills = [
  { category: 'Programming Languages', items: ['JavaScript', 'Python', 'C++'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'Express'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Jest', 'AWS'] },
  { category: 'Soft Skills', items: ['Team Leadership', 'Public Speaking', 'Project Management'] },
];

export default function Skills() {
  return (
    <Layout title="Skills">
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <h1>Skills</h1>
        {skills.map((group) => (
          <section key={group.category} style={{ marginBottom: '2rem' }}>
            <h2>{group.category}</h2>
            <ul>
              {group.items.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </section>
        ))}
      </main>
    </Layout>
  );
}
