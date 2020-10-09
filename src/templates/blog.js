import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Blog = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout title={frontmatter.title}>
      {frontmatter.featuredImages ? (
        <div className="pure-g">
          {frontmatter.featuredImages.map(image => (
            <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-4">
              <Img
                key={image.id}
                fluid={image.childImageSharp.fluid}
                alt={image.name}
              />
            </div>
          ))}
        </div>
      ) : null}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export default Blog
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImages {
          id
          name
          childImageSharp {
            fluid {
              src
              presentationWidth
              presentationHeight
              aspectRatio
            }
          }
        }
      }
    }
  }
`
