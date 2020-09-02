import React from "react"

import { Footer, Header } from "../index"
import "../../styles/reset.css"
import "../../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
