import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"
import { Post } from "./Post"

type DataProps = {
  data?: {
    page: {
      title: string
      content: string
    }
    posts: {
      edges: { node: Post }[]
    }
    customPosts: {
      edges: { node: Post }[]
    }
  }
}

const Template = ({ data }: Readonly<DataProps>): React.ReactNode => {
  console.log(data)
  return (
    <Layout>
      {data && data.page ? (
        <section>
          <Seo title={data.page.title} />
          <h1>{data.page.title}</h1>

          <section
            dangerouslySetInnerHTML={{
              __html: data.page.content,
            }}
          ></section>
        </section>
      ) : (
        "No Page data returned."
      )}

      <section>
        <h2>Posts</h2>
        {data && data.posts.edges.length > 0 ? (
          <p>Posts go here...</p>
        ) : (
          "No Post data returned."
        )}
      </section>

      <section>
        <h2>Custom Posts:</h2>
        {data && data.customPosts.edges.length > 0 ? (
          <p>Custom Posts go here...</p>
        ) : (
          "No Custom Post data returned."
        )}
      </section>
    </Layout>
  )
}

export const IndexQuery: void = graphql`
  query IndexPage($id: Int) {
    site {
      siteMetadata {
        title
      }
    }
    page: wpPage(databaseId: { eq: $id }) {
      content
      title
    }
    posts: allWpPost(filter: { status: { eq: "publish" } }) {
      edges {
        node {
          content
          databaseId
          excerpt
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              title
            }
          }
          slug
          title
        }
      }
    }
    customPosts: allWpCustomPost(filter: { status: { eq: "publish" } }) {
      edges {
        node {
          content
          databaseId
          excerpt
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
              title
            }
          }
          slug
          title
        }
      }
    }
  }
`

export default Template
