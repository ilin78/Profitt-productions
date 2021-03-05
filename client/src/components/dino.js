// import React from "react"
// import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

// export default function Dino({ data }) {
//   const image = getImage(data.Dino.avatar)
//   return (
//      <section>
//       <h2>{data.Dino.title}</h2>
//       <GatsbyImage image={image} alt={data.Dino.author} />
//       <p>{data.Dino.body}</p>
//     </section>
//   ) 
// }

// export const pageQuery = graphql`
//   query {
//     Dino(id: { eq: "../images/logo.jpg" }) {
//       title
//       body
//       author
//       avatar {
//         childImageSharp {
//           gatsbyImageData(
//             width: 200
//             placeholder: BLURRED
//             formats: [AUTO, WEBP, AVIF]
//           )
//         }
//       }
//     }
//   }
// `