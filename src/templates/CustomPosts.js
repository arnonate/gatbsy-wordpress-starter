import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"

const BlogTemplate = ({ data, pageContext }) => {
  // const { acf } = data.page
  // const metadata = acf.metadata.find(
  //   variant => variant.language_value.slug === pageContext.lang
  // )
  // const hero = acf.section_hero.find(
  //   variant => variant.language_value.slug === pageContext.lang
  // )

  return (
    <Layout>
      <Seo title="Blog Page" />
    </Layout>
  )
}

// export const Query = graphql`
//   query {
//     page: wpPage(slug: { eq: "wanna-buck" }) {
//       id
//     }
//   }
// `

export default BlogTemplate
