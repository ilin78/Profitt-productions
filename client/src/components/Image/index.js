import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const Image = props => (
    <StaticQuery
        query={graphql`{
  images: allFile {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
}
`}

        render={data => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename);
            });
            if (!image) {
                return null;
            }
            return <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt={props.alt} />;
        }}
    />
);

export default Image;