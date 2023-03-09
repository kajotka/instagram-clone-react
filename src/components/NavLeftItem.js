import React from "react";


function NavLeftItem(props) {
  return (
    <div className="nav-item">
      <span>
        <img src={props.svg} alt="" className={`h30 ${props.classes}`}/>
      </span>
      <span className="h30 nav-left-label" style={props.elementStyle}>
        {props.name}
      </span>
    </div>
  );
}

export default NavLeftItem;
