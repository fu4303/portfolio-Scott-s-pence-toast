export const SiteMetadata = {
  siteTitle: `Scott Spence`,
  siteDescription: `A site made with Toast`,
  siteLastBuildDate: new Date(Date.now()).toISOString(),
  siteUrl: `https://scottspence.com`,
  siteAuthorName: `Scott Spence`,
  siteTwitter: `@spences10`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
}

export const PORTFOLIO_PROJECTS = [
  {
    title: 'MDX Embed',
    repo: 'https://github.com/PaulieScanlon/mdx-embed/',
    demo: 'https://www.mdx-embed.com/',
    tags: ['gatsby', 'mdx', 'typescript'],
    image: '/mdx-embed.png',
    copy: ['Embed popular 3rd party media content into your .mdx'],
  },
  {
    title: 'GitHub Charts',
    repo: 'https://github.com/spences10/github-user-information/',
    demo:
      'https://github-user-information.vercel.app/heat.png?username=spences10&year=2020&interactive=true',
    tags: ['typescript', 'serverless', 'vercel'],
    image: '/gh-charts.jpg',
    copy: [
      'Serverless function to display GitHub user information as images',
    ],
  },
  {
    title: 'City 2 Sea',
    repo: '',
    demo: 'https://beagoodasshole.com/',
    tags: ['gatsby', 'styled-components', 'lottie'],
    image: '/city-to-sea.png',
    copy: [
      'A playful landing page featuring the voice of Andy Serkis',
    ],
  },
  {
    title: 'Cheat Sheets',
    repo: 'https://github.com/spences10/cheat-sheets/',
    demo: 'https://cheatsheets.xyz/',
    tags: ['gatsby', 'chakra', 'mdx'],
    image: '/cheat-sheets.jpg',
    copy: ['A collection of hints and tips for web development'],
  },
]

export const POPULAR_POSTS = [
  {
    title: `Add a Table of Contents using Gatsby and MDX`,
    slug: `2020/02/13/smooth-scroll-toc-gatsby/`,
    views: `7.9k`,
  },
  {
    title: `Chakra UI and Gatsby - Getting Started`,
    slug: `2020/11/21/getting-started-chakra-ui-gatsby/`,
    views: `2k`,
  },
  {
    title: `Use Chrome in Ubuntu on Windows Subsystem Linux`,
    slug: `2021/01/05/use-chrome-in-ubuntu-wsl/`,
    views: `1.2k`,
  },
  {
    title: `Enable GUIs on Windows Subsystem Linux (WSL)`,
    slug: `2020/12/09/gui-with-wsl/`,
    views: `6.1k`,
  },
]

export const SITE_LINKS = [
  {
    title: `Writing`,
    slug: `garden/`,
    id: `FJDJRF2N`,
  },
  {
    title: `About`,
    slug: `about/`,
    id: `2DRIXVSS`,
  },
  {
    title: `Now`,
    slug: `now/`,
    id: `Z8N5C2XV`,
  },
  {
    title: `Portfolio`,
    slug: `portfolio/`,
    id: `NE5JFD1S`,
  },
  {
    title: `Speaking`,
    slug: `speaking/`,
    id: `FYDDOCX1`,
  },
  {
    title: `Uses`,
    slug: `uses/`,
    id: `AALDN3U2`,
  },
  {
    title: `Newsletter`,
    slug: `newsletter/`,
    id: `4RFXKMAJ`,
  },
]
