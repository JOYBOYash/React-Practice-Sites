import React from "react";
import "./Desc.css";

function Desc(props) {
  const op = props.op;
  const size = props.size;
  const name = props.name;
  const title = props.title;
  const domain = props.domain;
  const desc = props.desc;
  return (
    <div className="description">
      <h1 className="name h1">
        Hey, it's <span>{name}</span>.
      </h1>
      <h1 className="title h1">I'm a {title} </h1>
      <h2 className="mainn h2">{domain}</h2>
      <h3 className="desc h3">{desc}</h3>
      <img src={op} alt="" className="block" />
    </div>
  );
}

export default Desc;
