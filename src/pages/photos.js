import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Photos = ({ data }) => {
  const [bigPhoto, setBigPhoto] = useState(null)

  function updateBigPhoto(id) {
    setBigPhoto(curId => (curId === id ? null : id))
  }

  return (
    <Layout title="Photos">
      <h1>Photos</h1>
      <div className="pure-g">
        {data.allFile.edges.map(({ node }) => (
          <div
            key={node.id}
            className={
              bigPhoto === node.id
                ? "pure-u-1"
                : "pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-4"
            }
            onClick={() => updateBigPhoto(node.id)}
            onKeyDown={() => updateBigPhoto(node.id)}
            role="button"
            tabIndex={0}
          >
            <Img fluid={node.childImageSharp.fluid} alt={node.name} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

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
