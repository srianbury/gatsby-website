const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    actions.createNodeField({
      node,
      name: "slug",
      value: `/blog${createFilePath({ node, getNode, basePath: "blogs" })}`,
    })
  }
  if (
    ["jpg", "png"].includes(node.extension) &&
    node.relativePath.split("/")[0] === "photos"
  ) {
    actions.createNodeField({
      node,
      name: "useInGallery",
      value: true,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: `${node.fields.slug}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        slug: `${node.fields.slug}`,
      },
    })
  })
}
