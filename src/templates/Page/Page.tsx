import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../../components"

export type DataProps = {
  data?: {
    page: {
      title: string
      content: string
    }
  }
}

const PageTemplate = ({ data }: Readonly<DataProps>): JSX.Element => {
  return (
    <Layout>
      <article>
        {data && data.page ? (
          <>
            <Seo title={data.page.title} />
            <h1>{data.page.title}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: data.page.content,
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

export const PageQuery: void = graphql`
  query Page($id: Int) {
    page: wpPage(databaseId: { eq: $id }) {
      content
      title
    }
  }
`

export default PageTemplate
