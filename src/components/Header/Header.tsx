import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            alt="Wanna"
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
}

export default Header
