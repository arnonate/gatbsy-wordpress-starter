import React from "react"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import { Layout, Seo } from "../components"

export type Post = {
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

const Template = ({ data }: Readonly<DataProps>): React.ReactNode => {
  return (
    <Layout>
      <article>
        {data && data.post ? (
          <>
            <Seo title={data.post.title} />
            <h1>{data.post.title}</h1>

            {data && (
              <Img
                fluid={
                  data.post.featuredImage.node.localFile.childImageSharp.fluid
                }
                alt={data.post.featuredImage.node.altText}
                loading="eager"
              />
            )}

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

export const PostQuery: void = graphql`
  query Post($id: Int) {
    post: wpPost(databaseId: { eq: $id }) {
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
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
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
