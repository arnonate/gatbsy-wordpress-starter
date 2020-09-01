import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"

const Template = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo title="About Page" />

      <h1>About Page</h1>
    </Layout>
  )
}

export const Query = graphql`
  query {
    page: wpPage(slug: { eq: "about" }) {
      id
    }
  }
`

export default Template
