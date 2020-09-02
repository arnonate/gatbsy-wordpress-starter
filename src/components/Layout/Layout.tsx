import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import { Footer, Header } from "../../components"
import "../../styles/reset.css"
import "../../styles/global.css"

export type DataProps = {
  logo: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  site: {
    siteMetadata: {
      title: string
    }
  }
}

type ComponentProps = {
  children: JSX.Element
  data: Readonly<DataProps>
}

export const LayoutComponent = ({
  data,
  children,
}: Readonly<ComponentProps>): JSX.Element => (
  <>
    <Header data={data} />
    <main>{children}</main>
    <Footer data={data} />
  </>
)

const Layout = ({ children }: ComponentProps) => {
  const data = useStaticQuery<DataProps>(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <LayoutComponent data={data}>{children}</LayoutComponent>
}

export default Layout
