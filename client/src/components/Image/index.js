import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = props => (
    <StaticQuery
        query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid  (
                maxWidth: 2048
                quality: 100
                ) {
                  aspectRatio
                  originalName
                  sizes
                  src
                  srcSet
                  srcWebp
                  tracedSVG
                  ...GatsbyImageSharpFluid_tracedSVG
                }
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
            return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
        }}
    />
);

export default Image;