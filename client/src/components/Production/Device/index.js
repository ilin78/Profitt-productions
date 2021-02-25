import React from "react";
import './index.scss'

export default function Device (props) {

    return(
        <div className={"style__"+`${props.id__style}`}> 
            <h1>{props.name}</h1>
            <p>{props.task}</p>
            <p>{props.options}</p>
        </div> 
    )
}