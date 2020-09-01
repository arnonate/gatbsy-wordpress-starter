import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"

const Template = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo title="Posts Page" />

      <h1>Posts Page</h1>
    </Layout>
  )
}

export const Query = graphql`
  query {
    page: wpPage(slug: { eq: "posts" }) {
      id
    }
  }
`

export default Template
