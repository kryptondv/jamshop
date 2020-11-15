const path = require("path")
exports.createPages = async({ actions, graphql }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("./src/templates/productPage/index.js")
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { ne: "Explore community choices" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.frontmatter.slug
    createPage({
      path: `/products/${slug}`,
      component: productTemplate,
      context: { slug: slug },
    })
  })
}
