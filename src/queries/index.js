import { graphql } from "gatsby"

export const headingQuery = graphql`
  fragment HeadingQuery on Query {
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

export const productQuery = graphql`
  fragment ProductQuery on Query {
    allFile(filter: { name: { ne: "index" }, extension: { eq: "md" } }) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            lead
            title
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
  }
`

export const productPageQuery = graphql`
  fragment ProductPageQuery on Query {
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
      id
    }
  }
`
