// import React from 'react'
// import App from "../app/App"
// import "../assets/style.scss"

// export default function index() { 

//   return(
//     <App />
//   )
// }

// // 

import React from "react";
import Image from './Image';

function Index() {
  const a = "yes/0"
  const b = "1"
  const c = "2"
  const d = "3"
  // const c = "4"
  const e = "5"
  const f = "6"
  const m = "7"
  const i = "8"
  const g = "9"
  return (
    <div style={{ maxWidth: `300px` }}>
      <Image alt="Gatsby in Space" filename={`${a}.jpg`} />
      <Image alt="Gatsby in Space" filename={`${b}.jpg`} />
      {/* <Image alt="Gatsby in Space" filename={`${c}.jpg`} /> */}
      <Image alt="Gatsby in Space" filename={`${d}.jpg`} />
      <Image alt="Gatsby in Space" filename={`${e}.jpg`} />
      <Image alt="Gatsby in Space" filename={`${f}.jpg`} />
      <Image alt="Gatsby in Space" filename={`${m}.jpg`} />
      <Image alt="Gatsby in Space" filename={`${i}.jpg`} />
      <Image alt="Gatsby in Space" filename={`${g}.jpg`} />
    </div>
  );
}


export default Index;



/*
// WORK IT
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Image from './Image';
class Index extends React.Component {
  render() {


    const data = this.props.data;

    const fluid = data.fluidImages.childImageSharp.fluid;
    const a = "log.jpg"
    return (
      <div>
        <Img fluid={fluid} />


      <div style={{ maxWidth: `300px` }}>
          <Image alt="Gatsby in Space" filename={`${a}`} />
      </div>
      </div>
    );
  }
}

export default Index;


export const pageQuery = graphql`
  query {
    fluidImages: file(
      relativePath: { eq: "log.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;


*/