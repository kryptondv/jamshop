import React from "react"
import { useStaticQuery, graphql } from "gatsby"


import { StyledHeading, StyledLead, Container } from "./styles"
import ProductCarousel from "../ProductCarousel"

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
      <ProductCarousel products={products}/>
    </div>
  )
}
