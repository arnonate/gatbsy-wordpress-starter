import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"

const Template = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.page.title} />

      <h1>{data.page.title}</h1>
    </Layout>
  )
}

export const Query = graphql`
  query Page($databaseId: Int) {
    page: wpPage(databaseId: { eq: $databaseId }) {
      title
      content
    }
  }
`

export default Template
