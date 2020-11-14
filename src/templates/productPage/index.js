import React from 'react';

export default function ProductPage({ data }) {
  const { name, description, image, price, tag } = data.markdownRemark.frontmatter; 
  return <div>
    
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
