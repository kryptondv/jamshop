import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductCard from "../ProductCard"

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
      <h2>{title}</h2>
      <p>{lead}</p>
      {products.map(({frontmatter, id}) => <ProductCard key={id} product={frontmatter}/>)}
    </div>
  )
}
