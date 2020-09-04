import React from "react"
import { render, waitFor } from "@testing-library/react"
import Helmet from "react-helmet"

import { SeoComponent as Seo, DataProps } from "../Seo/Seo"

const data: DataProps = {
  site: {
    siteMetadata: {
      title: "Headless",
      description: "This is the description of Headless.",
      author: "@arnonate",
    },
  },
  image: {
    childImageSharp: {
      fixed: {
        width: 1200,
        height: 650,
        src: "og:image",
        srcSet: "og:image srcSet",
      },
    },
  },
}

describe("Seo", () => {
  it("renders title correctly with default site description and author", async () => {
    render(<Seo title="Headless Page" data={data} />)

    await waitFor(() => {
      const headData = Helmet.peek()
      return expect(headData).toMatchSnapshot()
    })
  })

  it("renders description correctly", async () => {
    render(
      <Seo
        title="Headless Page"
        description="This is a description of Headless Page"
        data={data}
      />
    )

    await waitFor(() => {
      const headData = Helmet.peek()
      return expect(headData).toMatchSnapshot()
    })
  })

  it("renders metadata correctly", async () => {
    render(
      <Seo
        title="Headless Page"
        meta={[
          { name: "meta", content: "content" },
          { property: "meta", content: "content" },
        ]}
        data={data}
      />
    )

    await waitFor(() => {
      const headData = Helmet.peek()
      return expect(headData).toMatchSnapshot()
    })
  })
})
