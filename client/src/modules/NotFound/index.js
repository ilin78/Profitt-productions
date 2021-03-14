import React from "react";

const NotFound = (props) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>{props.notfound.title}</h1>
        <h1>{props.notfound.body}</h1>
        <p>{props.notfound.notfound}</p>
      </div>
    </div>
  )
}

export default NotFound;
