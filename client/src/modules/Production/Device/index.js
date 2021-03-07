import React from "react"

export default function Device(props) {


  return (
    <div className="blocks">
      <div>

      </div>
      <div className="blocks__devices">
        <div className="blocks__devices_name">{props.name}</div>
        <div className="blocks__devices_discription">
          <div className="blocks__devices_discription-task">{props.task}</div>
          <div className="blocks__devices_discription-options">
            {props.options}
          </div>
          <div className="blocks__devices_discription-other">{props.other}</div>
          <div className="blocks__devices_discription-img_A">{props.img_A}</div>
          <div className="blocks__devices_discription-img_B">{props.img_B}</div>
          <div className="blocks__devices_discription-img_C">{props.img_C}</div>
          <div className="blocks__devices_discription-link">{props.link}</div>
        </div>
      </div>
    </div>
  )
}


export const query = graphql`
  query {
    fluidImages: file(
      relativePath: { regex: "/logo.jpg/" }
    ) {
      childImageSharp {
        fluid(
          traceSVG: {
            color: "#f00e2e"
            turnPolicy: TURNPOLICY_MINORITY
            blackOnWhite: false
          }
          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;