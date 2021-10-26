import React from "react";
import "./styles.css";

function Drawer(props) {
  return (
    <div>
      <div className="card2 transition">
        <h2 className="transition d-heading">{props.title}</h2>
        <p className="drawerpara">{props.desc}</p>
        <div className="cta-container transition">
          <a href={props.link} className="cta">
            Open drawer
          </a>
        </div>
        <div className="card2_circle transition"></div>
      </div>
    </div>
  );
}

export default Drawer;
