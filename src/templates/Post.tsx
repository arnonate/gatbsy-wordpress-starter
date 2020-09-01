import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"

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
