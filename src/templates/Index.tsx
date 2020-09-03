import React from "react"
import { graphql, Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import { Layout, Seo } from "../components"
import { Post } from "./Post"

type DataProps = {
  data?: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    page: {
      title: string
      content: string
      featuredImage: {
        node: {
          altText: string
          localFile: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
          title: string
        }
      }
    }
    posts: {
      edges: { node: Post }[]
    }
    customPosts: {
      edges: { node: Post }[]
    }
  }
}

const Template = ({ data }: Readonly<DataProps>): React.ReactNode => (
  <Layout>
    {data && data.page ? (
      <section>
        <Seo title={data.page.title} />

        <h1 className="visually-hidden">{data.site.siteMetadata.title}</h1>

        {data.page.featuredImage ? (
          <Img
            fluid={data.page.featuredImage.node.localFile.childImageSharp.fluid}
            alt={data.page.featuredImage.node.altText}
            loading="lazy"
          />
        ) : null}

        <div
          dangerouslySetInnerHTML={{
            __html: data.page.content,
          }}
        />
      </section>
    ) : (
      "No Page data returned."
    )}

    <section>
      <h2>Posts</h2>

      <ul>
        {data && data.posts.edges.length > 0 ? (
          data.posts.edges.map(edge => (
            <li>
              <Link to={`/posts/${edge.node.slug}/`}>{edge.node.title}</Link>
            </li>
          ))
        ) : (
          <li>No Posts returned.</li>
        )}
      </ul>
    </section>

    <section>
      <h2>Custom Posts:</h2>

      <ul>
        {data && data.customPosts.edges.length > 0 ? (
          data.customPosts.edges.map(edge => (
            <li>
              <Link to={`/custom-posts/${edge.node.slug}/`}>
                {edge.node.title}
              </Link>
            </li>
          ))
        ) : (
          <li>No Custom Posts returned.</li>
        )}
      </ul>
    </section>
  </Layout>
)

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
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          title
        }
      }
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
