import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {
  StyledProductList,
  StyledHeading,
  StyledLead,
  Container,
} from "./styles"
import ProductCarousel from "components/HomePage/ProductCarousel"

export default function ProductList({ heading }) {
  const data = useStaticQuery(graphql`
    {
      ...ProductQuery
    }
  `)

  const products = data.allFile.nodes
  const { title, lead } = heading

  return (
    <StyledProductList>
      <Container>
        <StyledHeading>{title}</StyledHeading>
        <StyledLead>{lead}</StyledLead>
      </Container>
      <ProductCarousel products={products} />
    </StyledProductList>
  )
}

ProductList.propTypes = {
  heading: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired,
  }),
}
