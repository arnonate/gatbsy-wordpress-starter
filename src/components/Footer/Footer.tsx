import React from "react"

import { DataProps as LayoutDataProps } from "../Layout/Layout"

type ComponentProps = {
  data?: LayoutDataProps
}

const Footer = ({ data }: ComponentProps): JSX.Element => (
  <footer>
    <p>
      &copy; {new Date().getFullYear()} {data?.site.siteMetadata.title}. A
      starter repo by{" "}
      <a href="https://twitter.com/arnonate">
        {data?.site.siteMetadata.author}.
      </a>
    </p>
    <p>
      <a href="https://github.com/arnonate/gatbsy-wordpress-starter">
        View on GitHub
      </a>
    </p>
  </footer>
)

export default Footer
