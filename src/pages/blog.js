import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import "./blog.css"

const Blog = ({ data }) => {
  return (
    <Layout title="Blog">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3 className="blog-li-title">{`${node.frontmatter.title} ${node.frontmatter.date}`}</h3>
            <p className="blog-li-desc">{node.frontmatter.briefDescription}</p>
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
