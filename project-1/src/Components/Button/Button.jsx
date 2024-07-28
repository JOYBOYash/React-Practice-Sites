import React from "react";
import "./Button.css";

function Button(props) {
  const label = props.label;
  return <button className="btn">{label}</button>;
}

export default Button;
