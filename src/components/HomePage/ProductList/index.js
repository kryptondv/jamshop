import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProductCard from "../ProductCard"

import { StyledHeading, StyledLead, Container } from "./styles"

export default function ProductList({ heading }) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            image {
              publicURL
            }
            slug
            price
            name
            excerpt
          }
          id
        }
      }
    }
  `)

  const products = data.allMarkdownRemark.nodes.filter(
    ({ frontmatter }) => frontmatter.slug
  )

  const { title, lead } = heading
  return (
    <div>
      <Container>
        <StyledHeading>{title}</StyledHeading>
        <StyledLead>{lead}</StyledLead>
      </Container>
      {products.map(({ frontmatter, id }) => (
        <ProductCard key={id} product={frontmatter} />
      ))}
    </div>
  )
}
