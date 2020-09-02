import React from "react"

import { DataProps as LayoutDataProps } from "../Layout/Layout"

type ComponentProps = {
  data: LayoutDataProps
}

const Footer = ({ data }: ComponentProps) => (
  <footer>
    &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}. A
    Gatsby/WP starter by <a href="https://twitter.com/arnonate">arnonate</a>
  </footer>
)

export default Footer
