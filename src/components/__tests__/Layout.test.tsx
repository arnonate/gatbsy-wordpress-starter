import React from "react"
import { render } from "@testing-library/react"

import { LayoutComponent as Layout, DataProps } from "../Layout/Layout"

const data: DataProps = {
  logo: {
    childImageSharp: {
      fluid: {
        aspectRatio: 1,
        src: "img src",
        srcSet: "img srcSet",
        sizes: "img sizes",
      },
    },
  },
  site: {
    siteMetadata: {
      title: "Headless",
    },
  },
}

describe("Layout", () => {
  it("renders correctly with children", () => {
    const component = (
      <Layout data={data}>
        <span>This is the Page Content</span>
      </Layout>
    )

    const { container } = render(component)

    expect(container.firstElementChild).toMatchSnapshot()
  })
})
