import React from "react"
import { render } from "@testing-library/react"

import Footer from "../Footer/Footer"
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
      author: "@arnonate",
    },
  },
}

describe("Footer", () => {
  it("renders correctly", () => {
    const component = <Footer data={data} />

    const { container } = render(component)

    expect(container.firstElementChild).toMatchInlineSnapshot(`
      <footer>
        <p>
          © 
          2020
           
          Headless
          . A Gatsby/WP starter by
           
          <a
            href="https://twitter.com/arnonate"
          >
            @arnonate
            .
          </a>
        </p>
        <p>
          <a
            href="https://github.com/arnonate/gatbsy-wordpress-starter"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    `)
  })
})
