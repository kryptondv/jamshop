const path = require("path")
exports.createPages = async({ actions, graphql }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("src/templates/productPage/index.js")
  const { data } = await graphql(`
    query {
      allFile(filter: { name: { ne: "index" }, extension: { eq: "md" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  data.allFile.nodes.forEach(({ childMarkdownRemark }) => {
    const slug = childMarkdownRemark.frontmatter.slug
    createPage({
      path: `/products/${slug}`,
      component: productTemplate,
      context: { slug: slug },
    })
  })
}
