import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import { DataProps as LayoutDataProps } from "../Layout/Layout"

type ComponentProps = {
  data?: LayoutDataProps
}

const Header = ({ data }: Readonly<ComponentProps>): JSX.Element => (
  <header>
    <div className="girdle flex flex-column flex-center">
      <div className="logo">
        <Link to="/">
          {data && (
            <Img
              fluid={data.logo.childImageSharp.fluid}
              alt={data.site.siteMetadata.title}
              loading="eager"
            />
          )}
        </Link>
      </div>
      <nav>
        <ul className="nav flex flex-between">
          <li>
            <Link to="/" activeClassName="active">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName="active">
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
