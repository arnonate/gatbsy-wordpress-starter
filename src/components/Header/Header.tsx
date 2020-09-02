import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import { DataProps as LayoutDataProps } from "../Layout/Layout"

type ComponentProps = {
  data: LayoutDataProps
}

const Header = ({ data }: Readonly<ComponentProps>) => (
  <header>
    <div className="logo">
      <Link to="/">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          alt={data.site.siteMetadata.title}
          loading="eager"
        />
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about/">ABOUT</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
