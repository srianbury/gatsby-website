import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Photos = ({ data }) => {
  console.log({ data })
  return (
    <Layout title="Photos">
      <div className="pure-g">
        {data.allImageSharp.edges.map(({ node }) => (
          <div key={node.id} className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-4">
            <Img fluid={node.fluid} alt={"from my life"} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Photos
export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
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
`
