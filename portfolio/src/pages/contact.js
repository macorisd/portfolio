import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/contact.module.css';

// Contact information
const contacts = [
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/macorisd',
    url: 'https://linkedin.com/in/macorisd',
    icon: 'linkedin',
    description: 'Connect with me professionally',
    color: '#0077b5'
  },  {
    type: 'Email',
    value: 'macorisd@gmail.com',
    url: 'mailto:macorisd@gmail.com',
    icon: 'gmail',
    description: 'Send me a message',
    color: '#ea4335'
  }
];

export default function Contact() {
  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Layout title="Contact">
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Contact Me</h1>
        
        <div className={styles.grid}>
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => handleCardClick(contact.url)}
            >              <div className={styles.cardContent}>                <div className={styles.iconContainer}>
                  {contact.icon === 'linkedin' ? (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ) : contact.icon === 'gmail' ? (
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="white">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                  ) : (
                    <span className={styles.icon}>{contact.icon}</span>
                  )}
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.type}>{contact.type}</h3>
                  <p className={styles.value}>{contact.value}</p>
                  <p className={styles.description}>{contact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.messageSection}>
          <p className={styles.message}>
            Feel free to reach out to me through any of the above channels. I look forward to connecting with you!
          </p>
        </div>
      </main>
    </Layout>
  );
}
