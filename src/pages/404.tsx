import React from "react"
import { Layout, Seo, Theme } from "../components"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Theme.Wrap size="wide">
      <div style={{ padding: "200px 0", textAlign: "center" }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Theme.Wrap>
  </Layout>
)

export default NotFoundPage
