import React from "react"
import { graphql, Link } from "gatsby"
import moment from "moment"

import { Layout, Seo } from "../components"
import { Post } from "./Post"

type DataProps = {
  data?: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    page: {
      title: string
      content: string
    }
    posts: {
      edges: { node: Post }[]
    }
    customPosts: {
      edges: { node: Post }[]
    }
  }
}

export const RenderPosts = (posts: { node: Post }[] = []): React.ReactNode =>
  posts
    .sort(
      (a, b): number =>
        moment(a.node.date).valueOf() - moment(b.node.date).valueOf()
    )
    .map(edge => (
      <li key={edge.node.databaseId}>
        {moment(edge.node.date).format("MM/YY")} -{" "}
        <Link to={`/posts/${edge.node.slug}/`}>{edge.node.title}</Link>
      </li>
    ))

const Template = ({ data }: Readonly<DataProps>): React.ReactNode => (
  <Layout>
    <article>
      {data && data.page ? (
        <>
          <Seo title={data.page.title} />
          <h1 className="sr-only">{data.site.siteMetadata.title}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: data.page.content,
            }}
          />
        </>
      ) : (
        <>No Page content returned.</>
      )}

      <h2>Posts</h2>

      <ul className="posts">
        {data && data.posts.edges.length > 0 ? (
          RenderPosts(data.posts.edges)
        ) : (
          <li>No Posts returned.</li>
        )}
      </ul>

      <h2>Custom Posts:</h2>

      <ul className="posts">
        {data && data.customPosts.edges.length > 0 ? (
          RenderPosts(data.customPosts.edges)
        ) : (
          <li>No Custom Posts returned.</li>
        )}
      </ul>
    </article>
  </Layout>
)

export const IndexQuery: void = graphql`
  query IndexPage($id: Int) {
    site {
      siteMetadata {
        title
      }
    }
    page: wpPage(databaseId: { eq: $id }) {
      content
      title
    }
    posts: allWpPost(filter: { status: { eq: "publish" } }) {
      edges {
        node {
          databaseId
          date
          excerpt
          slug
          title
        }
      }
    }
    customPosts: allWpCustomPost(filter: { status: { eq: "publish" } }) {
      edges {
        node {
          databaseId
          date
          excerpt
          slug
          title
        }
      }
    }
  }
`

export default Template
