import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  return (
    <Layout title="Blog">
      <h1>Blog Page</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{`${node.frontmatter.title} ${node.frontmatter.date}`}</h3>
            <p>{node.frontmatter.briefDescription}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default Blog
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            dateTime: date
            date(formatString: "MMM. DD, YYYY")
            briefDescription
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
