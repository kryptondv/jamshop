import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
            name
          }
          excerpt
        }
      }
    }
  `)

  const products = data.allMarkdownRemark.nodes.filter(
    ({ frontmatter }) => !frontmatter.lead
  )

  const { title, lead } = heading
  return (
    <div>
      <h2>{title}</h2>
      <p>{lead}</p>
    </div>
  )
}
