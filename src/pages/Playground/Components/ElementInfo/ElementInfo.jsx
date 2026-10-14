import React from "react";
import "./elementInfo.css";

const ElementInfo = ({ title, description }) => {
  return (
    <section className="element-info">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default ElementInfo;