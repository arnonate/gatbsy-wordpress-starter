# 🚀 Gatbsy/Wordpress Starter

An unopinionated starter for Gatsby and WordPress.

Associated Blog Post:

## Install Flywheel Local and set up a new Wordpress site

1. Download [Flywheel Local](https://localwp.com/) and spin up a new local Wordpress Site.

2. Install the Headless Wordpress theme in the `wp` directory of this repo.

3. Install the following plugins:

- [WP Gatsby](https://github.com/gatsbyjs/wp-gatsby)
- [WP GraphQL](https://github.com/wp-graphql/wp-graphql)

* Current versions of these plugins (at the time of writing the associated blog post) are available in the `wp` directory.

4. Import sample `.xml` content from the `wp` directory using the "Wordpress Importer" plugin which is available by going to "Tools > Import". If you don't want to import content then you can simply publish the required Pages (Home, About, Contact, Thanks), Posts and Custom Posts yourself. You will also need to add "Featured Images" to your pages and posts if you want that to show

## Configure Gatsby Source Wordpress

1. Add your Wordpress website url to `gatbsy-config.ts`.

2. Open the Gatsby project and run the following command: `yarn && yarn develop` (or the npm alternative).

## Start Developing

1. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```shell
   cd my-default-starter/
   gatsby develop
   ```

2. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

   Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/arnonate/gatbsy-wordpress-starter)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/arnonate/gatbsy-wordpress-starter)
