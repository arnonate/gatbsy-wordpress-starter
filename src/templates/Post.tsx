import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import { Layout, Seo } from "../components"

export type Post = {
  content: string
  databaseId: number
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

const Template = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo title="Post Page" />

      <h1>Post Page</h1>
    </Layout>
  )
}

export const Query = graphql`
  query {
    page: wpPage(slug: { eq: "post" }) {
      id
    }
  }
`

export default Template
