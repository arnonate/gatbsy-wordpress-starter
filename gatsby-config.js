module.exports = {
  siteMetadata: {
    title: `Headless`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Headless`,
        short_name: `Headless`,
        start_url: `/`,
        background_color: `#074761`,
        theme_color: `#3E9F88`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
