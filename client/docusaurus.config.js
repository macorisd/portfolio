// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Macorís Decena',
  tagline: 'My Portfolio',
  favicon: 'https://res.cloudinary.com/dxkdg3b2l/image/upload/v1757251914/favicon_jtjl3z.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://macorisd.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/portfolio/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'macorisd', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/profile.jpg',
      navbar: {
        title: 'Macorís Decena',
        logo: {
          alt: 'Your Logo',
          src: 'img/profile.jpg',
        },
        items: [
          { to: '/education', label: 'Education', position: 'left' },
          { to: '/work-experience', label: 'Work Experience', position: 'left' },
          { to: '/papers', label: 'Published Papers', position: 'left' },
          { to: '/skills', label: 'Skills', position: 'left' },
          { to: '/projects', label: 'Featured Projects', position: 'left' },
          { to: '/awards', label: 'Awards and Achievements', position: 'left' },
          { to: '/certifications', label: 'Certifications', position: 'left' },

          // Right
          { to: '/contact', label: 'Contact', position: 'right' },
          {
            href: 'https://github.com/macorisd',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/macorisd',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Education & Experience',
            items: [
              { label: 'Home', to: '/' },
              { label: 'Education', to: '/education' },
              { label: 'Work Experience', to: '/work-experience' },
              { label: 'Published Papers', to: '/papers' },
            ],
          },
          {
            title: 'Projects & Expertise',
            items: [
              { label: 'Skills', to: '/skills' },
              { label: 'Featured Projects', to: '/projects' },
              { label: 'Awards and Achievements', to: '/awards' },
              { label: 'Certifications', to: '/certifications' },
            ],
          },
          {
            title: 'Social & Contact',
            items: [
              { label: 'GitHub', href: 'https://github.com/macorisd' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/macorisd' },
              { label: 'Email', href: 'mailto:macorisd@gmail.com' },
            ],
          },
        ],
        copyright: `Thanks for visiting my portfolio!`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: 'light',
      },
    }),
};

export default config;
