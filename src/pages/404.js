import React from "react"

import Layout from "~/layouts"
import { SEO } from "components"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
