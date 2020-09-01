const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const query = await graphql(`
    {
      allWpPost {
        edges {
          node {
            databaseId
            slug
            status
          }
        }
      }
      allWpCustomPost {
        edges {
          node {
            databaseId
            slug
            status
          }
        }
      }
    }
  `)

  if (query.errors) {
    throw new Error(query.errors)
  }

  // Build pages from published Posts
  const { allWpPost } = query.data
  const publishedPosts = allWpPost.edges.filter(
    edge => edge.node.status === "publish"
  )

  publishedPosts.forEach(edge => {
    createPage({
      path: `/posts/${edge.node.slug}/`,
      component: path.resolve("./src/templates/PostSingle.js"),
      context: {
        id: edge.node.databasId,
      },
    })
  })

  // Build pages from published Custom Post Type
  const { allWpCustomPost } = query.data
  const publishedCustomPosts = allWpCustomPost.edges.filter(
    edge => edge.node.status === "publish"
  )

  publishedCustomPosts.forEach(edge => {
    createPage({
      path: `/custom-post/${edge.node.slug}/`,
      component: path.resolve("./src/templates/CustomPostSingle.js"),
      context: {
        id: edge.node.databasId,
      },
    })
  })

  // Build static Pages
  const pages = [
    {
      path: "/",
      databaseId: 4,
      template: path.resolve("./src/templates/Index.tsx"),
    },
    {
      path: "/about/",
      databaseId: 4,
      template: path.resolve("./src/templates/About.tsx"),
    },
    {
      path: "/contact/",
      databaseId: 4,
      template: path.resolve("./src/templates/Contact.tsx"),
    },
    {
      path: "/thanks/",
      databaseId: 4,
      template: path.resolve("./src/templates/Thanks.tsx"),
    },
  ]

  pages.forEach(page => {
    createPage({
      path: page.path,
      component: page.template,
      context: {
        id: page.databaseId,
      },
    })
  })
}
