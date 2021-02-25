import React from "react";

export default function Device (props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.task}</p>
            <p>{props.options}</p>
        </div>
    )
} 