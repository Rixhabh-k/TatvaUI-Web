import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./configuredCode.css";

const ConfiguredCode = ({ code, values }) => {
  const [copied, setCopied] = useState(false);

  let configuredCode = code || "";

  Object.entries(values || {}).forEach(([name, value]) => {
    const regex = new RegExp(
      `(${name}\\s*=\\s*\\{)[^}]+(\\})`,
      "g"
    );

    configuredCode = configuredCode.replace(
      regex,
      `$1${value}$2`
    );
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(configuredCode);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <section className="configured-code">

      <div className="configured-code-header">

        <div className="code-language">
          <span className="code-dot"></span>
          <span>jsx</span>
        </div>

        <button
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