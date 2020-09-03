const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const query = await graphql(`
    {
      allWpPage {
        edges {
          node {
            databaseId
            slug
            status
          }
        }
      }
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

  // Build Pages from published Posts
  const { allWpPost } = query.data
  const publishedPosts = allWpPost.edges.filter(
    edge => edge.node.status === "publish"
  )

  publishedPosts.forEach(edge => {
    createPage({
      path: `/posts/${edge.node.slug}/`,
      component: path.resolve("./src/templates/Post.tsx"),
      context: {
        id: edge.node.databaseId,
      },
    })
  })

  // Build Pages from published Custom Post Type
  const { allWpCustomPost } = query.data
  const publishedCustomPosts = allWpCustomPost.edges.filter(
    edge => edge.node.status === "publish"
  )

  publishedCustomPosts.forEach(edge => {
    createPage({
      path: `/custom-posts/${edge.node.slug}/`,
      component: path.resolve("./src/templates/Post.tsx"),
      context: {
        id: edge.node.databaseId,
      },
    })
  })

  // Build Pages with Custom Templates
  const manualPages = [
    {
      path: "/",
      databaseId: 38,
      template: path.resolve("./src/templates/Index.tsx"),
    },
  ]

  manualPages.forEach(page => {
    createPage({
      path: page.path,
      component: page.template,
      context: {
        id: page.databaseId,
      },
    })
  })

  // Build Pages from published Pages with generic Page Template
  const { allWpPage } = query.data
  const publishedPages = allWpPage.edges.filter(
    edge =>
      edge.node.status === "publish" &&
      !manualPages.some(page => page.databaseId === edge.node.databaseId)
  )

  publishedPages.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: path.resolve("./src/templates/Page.tsx"),
      context: {
        id: edge.node.databaseId,
      },
    })
  })
}
