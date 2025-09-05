import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/portfolio/__docusaurus/debug',
    component: ComponentCreator('/portfolio/__docusaurus/debug', '040'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/portfolio/__docusaurus/debug/config', '9ca'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/portfolio/__docusaurus/debug/content', 'da5'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/portfolio/__docusaurus/debug/globalData', '46a'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/portfolio/__docusaurus/debug/metadata', '138'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/portfolio/__docusaurus/debug/registry', '3df'),
    exact: true
  },
  {
    path: '/portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/portfolio/__docusaurus/debug/routes', 'dd6'),
    exact: true
  },
  {
    path: '/portfolio/awards',
    component: ComponentCreator('/portfolio/awards', '181'),
    exact: true
  },
  {
    path: '/portfolio/blog',
    component: ComponentCreator('/portfolio/blog', 'fce'),
    exact: true
  },
  {
    path: '/portfolio/blog/archive',
    component: ComponentCreator('/portfolio/blog/archive', '5f2'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors',
    component: ComponentCreator('/portfolio/blog/authors', '569'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/portfolio/blog/authors/all-sebastien-lorber-articles', '108'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors/yangshun',
    component: ComponentCreator('/portfolio/blog/authors/yangshun', '5d5'),
    exact: true
  },
  {
    path: '/portfolio/blog/first-blog-post',
    component: ComponentCreator('/portfolio/blog/first-blog-post', '1a5'),
    exact: true
  },
  {
    path: '/portfolio/blog/long-blog-post',
    component: ComponentCreator('/portfolio/blog/long-blog-post', '946'),
    exact: true
  },
  {
    path: '/portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/portfolio/blog/mdx-blog-post', 'dbe'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags',
    component: ComponentCreator('/portfolio/blog/tags', '921'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/portfolio/blog/tags/docusaurus', '972'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/facebook',
    component: ComponentCreator('/portfolio/blog/tags/facebook', '66a'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/hello',
    component: ComponentCreator('/portfolio/blog/tags/hello', 'a5e'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/hola',
    component: ComponentCreator('/portfolio/blog/tags/hola', '372'),
    exact: true
  },
  {
    path: '/portfolio/blog/welcome',
    component: ComponentCreator('/portfolio/blog/welcome', 'f8c'),
    exact: true
  },
  {
    path: '/portfolio/certifications',
    component: ComponentCreator('/portfolio/certifications', 'ed4'),
    exact: true
  },
  {
    path: '/portfolio/contact',
    component: ComponentCreator('/portfolio/contact', '698'),
    exact: true
  },
  {
    path: '/portfolio/education',
    component: ComponentCreator('/portfolio/education', 'df8'),
    exact: true
  },
  {
    path: '/portfolio/papers',
    component: ComponentCreator('/portfolio/papers', '477'),
    exact: true
  },
  {
    path: '/portfolio/projects',
    component: ComponentCreator('/portfolio/projects', '9f7'),
    exact: true
  },
  {
    path: '/portfolio/skills',
    component: ComponentCreator('/portfolio/skills', '4f5'),
    exact: true
  },
  {
    path: '/portfolio/work-experience',
    component: ComponentCreator('/portfolio/work-experience', '304'),
    exact: true
  },
  {
    path: '/portfolio/docs',
    component: ComponentCreator('/portfolio/docs', 'cfa'),
    routes: [
      {
        path: '/portfolio/docs',
        component: ComponentCreator('/portfolio/docs', '259'),
        routes: [
          {
            path: '/portfolio/docs',
            component: ComponentCreator('/portfolio/docs', '457'),
            routes: [
              {
                path: '/portfolio/docs/category/tutorial---basics',
                component: ComponentCreator('/portfolio/docs/category/tutorial---basics', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/category/tutorial---extras',
                component: ComponentCreator('/portfolio/docs/category/tutorial---extras', 'e1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/intro',
                component: ComponentCreator('/portfolio/docs/intro', 'dcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/congratulations', '513'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-blog-post', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-document', 'e33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-page', 'f2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/deploy-your-site', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/markdown-features', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/portfolio/docs/tutorial-extras/manage-docs-versions', '07f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/portfolio/docs/tutorial-extras/translate-your-site', 'fb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/portfolio/',
    component: ComponentCreator('/portfolio/', 'acb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
