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
      author: "@arnonate",
    },
  },
}

describe("Layout", () => {
  it("renders a header and footer", () => {
    const component = (
      <Layout data={data}>
        <span>This is the Page Content</span>
      </Layout>
    )

    const { container } = render(component)

    expect(container.querySelector("header")).toBeInTheDocument()
    expect(container.querySelector("footer")).toBeInTheDocument()
  })

  it("renders correctly with children", () => {
    const component = (
      <Layout data={data}>
        <span>This is the Page Content</span>
      </Layout>
    )

    const { container } = render(component)

    expect(container.querySelector("main")).toMatchInlineSnapshot(`
      <main>
        <div
          class="girdle"
        >
          <span>
            This is the Page Content
          </span>
        </div>
      </main>
    `)
  })
})
