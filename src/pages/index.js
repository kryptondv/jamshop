import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import ProductList from "../components/HomePage/ProductList"

export default function IndexPage({ data }) {
  const productListHeading = data.markdownRemark.frontmatter
  
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ProductList heading={productListHeading} />
    </Layout>
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
