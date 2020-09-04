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
      author: "arnonate",
    },
  },
}

describe("Header", () => {
  it("renders logo with correct source and alt text", () => {
    const component = <Header data={data} />

    const { container } = render(component)

    expect(container.querySelector("img")).toMatchInlineSnapshot(`
      <img
        alt="Headless"
        loading="lazy"
        sizes="img sizes"
        src="img src"
        srcset="img srcSet"
        style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
      />
    `)
  })

  it("renders nav correctly", () => {
    const component = <Header data={data} />

    const { container } = render(component)

    expect(container.querySelector("nav")).toMatchInlineSnapshot(`
      <nav
        aria-label="Primary"
      >
        <ul
          class="nav flex flex-between"
        >
          <li>
            <a
              href="/"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/about/"
            >
              ABOUT
            </a>
          </li>
        </ul>
      </nav>
    `)
  })
})
