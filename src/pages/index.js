import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import ProductList from "../components/HomePage/ProductList"

export default function IndexPage({ data }) {
  const productListHeading = data.markdownRemark.frontmatter

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
    markdownRemark(
      frontmatter: { title: { eq: "Explore community choices" } }
    ) {
      frontmatter {
        title
        lead
      }
    }
  }
`
