
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./configuredCode.css";

const escapeRegex = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const serializeValue = (value) => {
  if (value === undefined || typeof value === "function") return null;
  if (typeof value === "string") return `{${JSON.stringify(value)}}`;
  if (typeof value === "number" || typeof value === "boolean") {
    return `{${String(value)}}`;
  }
  if (value === null) return "{null}";

  try {
    return `{${JSON.stringify(value)}}`;
  } catch {
    return null;
  }
};

const updateComponentProps = (source, values) => {
  // Find the first component opening tag in the usage example.
  const tagRegex = /<([A-Z][A-Za-z0-9_.]*)\b([^<>]*?)(\/?>)/s;
  const match = source.match(tagRegex);

  if (!match) return source;

  let openingTag = match[0];

  Object.entries(values).forEach(([name, value]) => {
    if (name === "className") return;

    const serialized = serializeValue(value);
    if (serialized === null) return;

    const attributeRegex = new RegExp(
      `(^|\\s)${escapeRegex(name)}\\s*=\\s*` +
        `(?:"[^"]*"|'[^']*'|\\{(?:[^{}]|\\{[^{}]*\\})*\\}|[^\\s/>]+)`,
      "m"
    );

    const attribute = `${name}=${serialized}`;

    if (attributeRegex.test(openingTag)) {
      openingTag = openingTag.replace(
        attributeRegex,
        (_full, prefix) => `${prefix}${attribute}`
      );
    } else {
      openingTag = openingTag.replace(
        /\s*(\/?>)$/,
        ` ${attribute}$1`
      );
    }
  });

  return source.replace(match[0], openingTag);
};

const ConfiguredCode = ({ code, values = {} }) => {
  const [copied, setCopied] = useState(false);

  const configuredCode = updateComponentProps(code || "", values);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(configuredCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <section className="configured-code">
      <div className="configured-code-header">
        <div className="code-language">
          <span className="code-dot" />
          <span>jsx</span>
        </div>

        <button
          type="button"
          className="copy-code"
          onClick={handleCopy}
          title={copied ? "Copied" : "Copy code"}
        >
          {copied ? "✓" : "▣"}
        </button>
      </div>

      <div className="configured-code-editor">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers
          wrapLongLines
          customStyle={{
            margin: 0,
            padding: "22px 24px",
            background: "#050505",
            fontSize: "13px",
            lineHeight: "1.7",
            border: "none",
          }}
          lineNumberStyle={{
            color: "#555",
            minWidth: "28px",
            paddingRight: "18px",
            userSelect: "none",
          }}
        >
          {configuredCode}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default ConfiguredCode;
