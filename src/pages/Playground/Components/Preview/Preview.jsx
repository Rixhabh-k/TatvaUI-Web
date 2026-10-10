import React from "react";
import "./preview.css";

const Preview = ({ component: Component, componentProps }) => {
  return (
    <section className="playground-preview">
      <div className="playground-section-top">
        <span>Preview</span>
      </div>

      <div className="preview-stage">
        <Component {...componentProps} />
      </div>
    </section>
  );
};

export default Preview;