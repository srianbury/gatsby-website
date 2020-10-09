import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import "./photos.css"

const Photos = ({ data }) => (
  <Layout title="Photos">
    <h1>Photos</h1>
    <div className="grid-container">
      {data.allFile.edges.map(({ node }) => (
        <div key={node.id} className="grid-item">
          <Img fluid={node.childImageSharp.fluid} alt={node.name} />
        </div>
      ))}
    </div>
  </Layout>
)

export default Photos
export const query = graphql`
  query {
    allFile(filter: { fields: { useInGallery: { eq: true } } }) {
      edges {
        node {
          id
          name
          relativePath
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
