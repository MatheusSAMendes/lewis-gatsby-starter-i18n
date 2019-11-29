module.exports = {
  siteMetadata: {
    title: `Lewis Gatsby Starter i18n`,
    description: `A custom Gatsby starter template to start a multilanguage website.`,
    author: `Lewis Llobera`,
    twitter: `@lewislbr`,
    email: `billobera@gmail.com`,
    siteUrl: `https://www.lewis-gatsby-starter-i18n.firebaseapp.com`,
    gitUrl: `https://github.com/lewislbr/lewis-gatsby-starter-i18n`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`es`, `en`],
        defaultLanguage: `es`,
        redirect: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
