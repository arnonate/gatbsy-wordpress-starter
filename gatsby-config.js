module.exports = {
  siteMetadata: {
    title: `gatsby-wordpress-stater`,
    description: `A Gatsby/Wordpress TypeScript Starter.`,
    author: `@arnonate`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://gatsbywordpressstarter.local/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        schema: {
          timeout: 30000,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: ["300", "400", "700", "900"],
          },
        ],
      },
    },
  ],
}
