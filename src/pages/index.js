import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import ProductList from "../components/HomePage/ProductList"

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
    file(name: { eq: "index" }) {
      childMarkdownRemark {
        frontmatter {
          title
          lead
        }
      }
    }
  }
`
