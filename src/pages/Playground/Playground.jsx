import React, { useState } from "react";
import { useParams } from "react-router";

import docs from "../../data/doc";

import ElementInfo from "./Components/ElementInfo/ElementInfo";
import ControlPanel from "./Components/ControlPanel/ControlPanel";
import Preview from "./Components/Preview/Preview";

import "./playground.css";
import ConfiguredCode from "./Components/ConfiguredCode/ConfiguredCode";

const PlaygroundContent = ({ selected }) => {
  const [componentProps, setComponentProps] = useState(selected.previewProps);

  const handlePropChange = (name, value) => {
    setComponentProps((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
  setComponentProps(selected.previewProps);
};

  return (
    <main className="playground">
      <ElementInfo title={selected.title} description={selected.description} />

      <Preview component={selected.preview} componentProps={componentProps} />

      <ControlPanel
        props={selected.props}
        values={componentProps}
        onChange={handlePropChange}
        onReset={handleReset}
      />

      <ConfiguredCode code={selected.usage?.code} values={componentProps} />
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
