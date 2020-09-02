import React from "react"
import { render, waitFor } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

import Seo from "../Seo/Seo"

describe(`Seo`, () => {
  beforeEach(() => {
    ;(useStaticQuery as jest.Mock).mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: "My Test Site",
          description: "This is the Test Site description.",
          author: "@arnonate",
        },
      },
    }))
  })

  it(`renders title correctly with default site description and author`, async () => {
    render(<Seo title="Hello World" />)

    await waitFor(() => {
      const headData = Helmet.peek()

      return expect(headData).toMatchSnapshot()
    })
  })

  it(`renders description correctly`, async () => {
    render(
      <Seo
        title="Hello World"
        description="This is a description of Hello World"
      />
    )

    await waitFor(() => {
      const headData = Helmet.peek()

      return expect(headData).toMatchSnapshot()
    })
  })

  it(`renders metadata correctly`, async () => {
    render(
      <Seo
        title="Hello World"
        meta={[
          { name: "meta", content: "content" },
          { property: "meta", content: "content" },
        ]}
      />
    )

    await waitFor(() => {
      const headData = Helmet.peek()

      return expect(headData).toMatchSnapshot()
    })
  })
})
