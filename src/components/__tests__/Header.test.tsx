import React from "react"
import { render } from "@testing-library/react"

import Header from "../Header/Header"
import { DataProps as LayoutDataProps } from "../Layout/Layout"

const data: LayoutDataProps = {
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

describe("Header", () => {
  it("renders correctly", () => {
    const component = <Header data={data} />

    const { container } = render(component)

    expect(container.firstElementChild).toMatchSnapshot()
  })
})
