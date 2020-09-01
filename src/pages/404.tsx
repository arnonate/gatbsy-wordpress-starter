import React from "react"
import { Layout, Seo } from "../components"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div style={{ padding: "200px 0", textAlign: "center" }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
