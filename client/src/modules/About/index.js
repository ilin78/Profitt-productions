import React from "react";

export default function About(props) {
  return (
    <div className="wrapper">
       <h2>{props.navigate.about}</h2>

       <p>
       Компания “Профитт” специализируется на разработке высококачественного профессионального телевизионного и оптического оборудования.
Наше оборудование работает в ведущих телецентрах и телестудиях России и СНГ.
       </p>
    </div>
  )
}
