import React from 'react';

import Product from '../../components/Product';
import SEO from '../../components/SEO';

export default function ProductPage({ data }) {
  const product = data.markdownRemark.frontmatter; 
  return <div>
    <SEO title = {name} />
    <Product product={product}/>
  </div>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        name
        description
        price
        tag
        image {
          publicURL
        }
      }
    }
  }
`