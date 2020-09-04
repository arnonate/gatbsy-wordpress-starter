import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import { DataProps as LayoutDataProps } from "../Layout/Layout"

type ComponentProps = {
  data?: LayoutDataProps
}

const Header = ({ data }: Readonly<ComponentProps>): JSX.Element => (
  <header>
    <div className="styled-header">
      <div className="girdle flex flex-column flex-center">
        <div className="logo">
          <Link to="/" title="Go to Home Page">
            {data && (
              <Img
                alt={data.site.siteMetadata.title}
                fluid={data.logo.childImageSharp.fluid}
              />
            )}
          </Link>
        </div>

        <nav aria-label="Primary">
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
    </div>
  </header>
)

export default Header
