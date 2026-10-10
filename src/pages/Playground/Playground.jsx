import React, { useState } from "react";
import { useParams } from "react-router";

import docs from "../../data/doc";

import ElementInfo from "./components/ElementInfo/ElementInfo";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Preview from "./Components/Preview/Preview";

import "./playground.css";

const PlaygroundContent = ({ selected }) => {
  const [componentProps, setComponentProps] = useState(selected.previewProps);

  const handlePropChange = (name, value) => {
    setComponentProps((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="playground">
      <ElementInfo
        title={selected.title}
        description={selected.description}
      />

      <Preview
        component={selected.preview}
        componentProps={componentProps}
      />

      <ControlPanel
        props={selected.props}
        values={componentProps}
        onChange={handlePropChange}
      />

      <section className="playground-code">
        <div className="playground-section-top">
          <span>Configuration</span>
        </div>

        <pre>
          <code>{selected.usage?.code}</code>
        </pre>
      </section>
    </main>
  );
};

const Playground = () => {
  const { slug = "magnetic-button" } = useParams();
  const selected = docs[slug];

  // galat slug ya installation page (jisme preview nahi hota)
  if (!selected || !selected.preview) {
    return <main className="playground">Component not found</main>;
  }

  return <PlaygroundContent key={slug} selected={selected} />;
};

export default Playground;