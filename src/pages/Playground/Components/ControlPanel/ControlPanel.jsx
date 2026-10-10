import React, { useState } from "react";
import "./controlPanel.css";

/* "#fff" -> "#ffffff" (input type=color sirf 6-digit hex leta hai) */
const toHex6 = (v) => {
  if (typeof v !== "string") return "#000000";
  const s = v.trim();
  if (/^#[0-9a-f]{6}$/i.test(s)) return s;
  if (/^#[0-9a-f]{3}$/i.test(s)) {
    return "#" + s.slice(1).split("").map((c) => c + c).join("");
  }
  return "#000000";
};

/* Comma separated input. Local text state rakhi hai taaki typing na toote */
const ArrayInput = ({ value, onChange }) => {
  const [text, setText] = useState(
    Array.isArray(value) ? value.join(", ") : ""
  );

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        onChange(
          e.target.value
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        );
      }}
    />
  );
};

const ControlPanel = ({ props = [], values = {}, onChange }) => {
  return (
    <section className="playground-controls">
      <div className="playground-section-top">
        <span>Controls</span>
      </div>

      <div className="controls-content">
        {props.map((prop) => {
          const value = values[prop.name];

          const label = Array.isArray(value)
            ? value.join(", ")
            : String(value ?? "");

          return (
            <div className="control-item" key={prop.name}>
              <div className="control-header">
                <label>{prop.name}</label>
                <span title={label}>{label}</span>
              </div>

              <p>{prop.description}</p>

              {prop.type === "range" && (() => {
                const min = Number(prop.min ?? 0);
                const max = Number(prop.max ?? 100);
                const step = Number(prop.step ?? 1);
                const num = Math.min(Math.max(Number(value ?? min), min), max);
                const progress = max === min ? 0 : ((num - min) / (max - min)) * 100;

                return (
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={num}
                    style={{ "--progress": `${progress}%` }}
                    onChange={(e) =>
                      onChange(prop.name, Number(e.target.value))
                    }
                  />
                );
              })()}

              {prop.type === "color" && (
                <div className="color-row">
                  <input
                    type="color"
                    value={toHex6(value)}
                    onChange={(e) => onChange(prop.name, e.target.value)}
                  />
                  <code>{toHex6(value)}</code>
                </div>
              )}

              {prop.type === "array" && (
                <ArrayInput
                  value={value}
                  onChange={(arr) => onChange(prop.name, arr)}
                />
              )}

              {(prop.type === "text" || !prop.type) && (
                <input
                  type="text"
                  value={value ?? ""}
                  onChange={(e) => onChange(prop.name, e.target.value)}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ControlPanel;