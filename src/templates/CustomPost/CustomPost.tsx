import React from "react"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import moment from "moment"

import { Layout, Seo } from "../../components"

export type Post = {
  author: {
    node: {
      name: string
    }
  }
  content: string
  databaseId: number
  date: string
  excerpt: string
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
  slug: string
  title: string
}

type DataProps = {
  data?: {
    post: Post
  }
}

const Template = ({ data }: Readonly<DataProps>): JSX.Element => {
  return (
    <Layout>
      <article>
        {data && data.post ? (
          <>
            <Seo title={data.post.title} />

            {data && (
              <Img
                alt={data.post.featuredImage.node.altText}
                className="gatsby-image"
                fluid={
                  data.post.featuredImage.node.localFile.childImageSharp.fluid
                }
              />
            )}

            <h1>{data.post.title}</h1>
            <p>
              Published: {moment(data.post.date).format("MMMM DD, YYYY")}
              <br />
              By: {data.post.author.node.name}
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: data.post.content,
              }}
            />
          </>
        ) : (
          <>No Page content returned.</>
        )}
      </article>
    </Layout>
  )
}

export const CustomPostQuery: void = graphql`
  query CustomPost($id: Int) {
    post: wpCustomPost(databaseId: { eq: $id }) {
      author {
        node {
          name
        }
      }
      content
      databaseId
      date
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
`

export default Template
