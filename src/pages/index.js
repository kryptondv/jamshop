import React from "react"
import { graphql } from "gatsby"

import { SEO, Hero, ProductList } from "components"

export default function IndexPage({ data }) {
  const productListHeading = data.file.childMarkdownRemark.frontmatter

  return (
    <>
      <SEO title="Home" />
      <Hero />
      <ProductList heading={productListHeading} />
    </>
  )
}

export const query = graphql`
  {
    ...HeadingQuery
  }
`
