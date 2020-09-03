import React from "react"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import { Layout, Seo } from "../components"

type DataProps = {
  data?: {
    page: {
      title: string
      content: string
    }
  }
}

const Template = ({ data }: Readonly<DataProps>): React.ReactNode => {
  return (
    <Layout>
      {data && data.page ? (
        <section>
          <Seo title={data.page.title} />

          <h1>{data.page.title}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: data.page.content,
            }}
          />
        </section>
      ) : (
        "No Page data returned."
      )}
    </Layout>
  )
}

export const PageQuery: void = graphql`
  query Page($id: Int) {
    page: wpPage(databaseId: { eq: $id }) {
      content
      title
    }
  }
`

export default Template
