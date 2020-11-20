import React from "react"
import { graphql } from "gatsby"

import { Product, SEO } from "components"

export default function ProductPage({ data }) {
  const product = data.markdownRemark.frontmatter
  return (
    <div>
      <SEO title={product.name} />
      <Product product={product} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    ...ProductPageQuery
  }
`
