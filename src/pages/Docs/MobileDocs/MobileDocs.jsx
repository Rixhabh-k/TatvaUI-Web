import React from "react";
import {
  Sun,
  Menu,
  ArrowUpRight,
  MessageSquarePlus,
  Sparkles,
  MousePointer2,
} from "lucide-react";
import "./mobileDocs.css";

const MobileDocs = () => {
  return (
    <main className="mobile-docs-page">

      {/* Content */}
      <section className="mobile-docs-content">
        {/* Badge */}
        <div className="mobile-docs-badge">
          <Sparkles size={17} />
          <span>Component catalog</span>
        </div>

        {/* Hero */}
        <h1>
          Browse the
          <br />
          Tatva UI
          <br />
          Component Library.
        </h1>

        <p className="mobile-docs-description">
          Pick a category, open a component, preview the demo, then copy the
          install command or manual source from the docs.
        </p>

        {/* Actions */}
        <div className="mobile-docs-actions">
          <button className="mobile-docs-primary">
            <span>Start with buttons</span>
            <ArrowUpRight size={19} />
          </button>

          <button>CLI install</button>

          <button>
            <MessageSquarePlus size={19} />
            <span>Request a component</span>
          </button>
        </div>

        {/* Stats */}
        <div className="mobile-docs-stats">
          <div className="mobile-docs-stat">
            <strong>15</strong>
            <span>COMPONENTS</span>
          </div>

          <div className="mobile-docs-stat">
            <strong>13</strong>
            <span>NEW</span>
          </div>

          <div className="mobile-docs-stat-description">
            <Sparkles size={18} />

            <span>Live demos, usage snippets, and prop notes.</span>
          </div>
        </div>

        {/* Buttons category */}
        <section className="mobile-docs-category">
          <div className="mobile-docs-category-header">
            <div className="mobile-docs-category-icon">
              <MousePointer2 size={27} />
            </div>

            <div>
              <h2>Buttons</h2>
              <p>9 components</p>
            </div>
          </div>

          <div className="mobile-docs-component">Animated Button</div>

          <div className="mobile-docs-component">Magnetic Button</div>

          <div className="mobile-docs-component">Flip Button</div>
        </section>
      </section>
    </main>
  );
};

export default MobileDocs;
