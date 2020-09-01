import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"

const Template = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo title="Home Page" />

      <h1>Home Page</h1>
    </Layout>
  )
}

export const Query = graphql`
  query {
    page: wpPage(slug: { eq: "home" }) {
      id
    }
  }
`

export default Template
