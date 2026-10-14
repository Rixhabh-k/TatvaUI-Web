import React from "react";
import "./WhyTatvaUI.css";

const features = [
  {
    number: "01",
    icon: "ϟ",
    title: "Fast UI Components",
    description:
      "Pre-built, high performance components that are production ready.",
  },
  {
    number: "02",
    icon: "∿",
    title: "Smooth Animations",
    description:
      "Thoughtful crafted motion system that brings your interface to life.",
  },
  {
    number: "03",
    icon: "♧",
    title: "Easy Customization",
    description:
      "Flexible, theme-friendly architecture that adapts to your design system.",
  },
  {
    number: "04",
    icon: "⚙",
    title: "Developer First",
    description:
      "Built with clean code, detailed docs, and DX that just makes sense.",
  },
];

const WhyTatvaUI = () => {
  return (
    <section className="tatva-section-frame">
      <div className="tatva-section-glow tatva-section-glow-left" />
      <div className="tatva-section-glow tatva-section-glow-right" />

      <div className="why-tatva-section">
        <div className="why-tatva-heading">
          <h2>
            Why <span>Tatva</span> UI ?
          </h2>

          <p>
            Tatva UI is built to explore unique interaction patterns from
            displacement
            <br className="desktop-break" />
            hover effects to animated tooltips and scroll-driven components.
          </p>
        </div>

        <div className="why-tatva-grid">
          {features.map((feature) => (
            <div className="why-tatva-card" key={feature.number}>
              <span className="why-tatva-number">{feature.number}</span>

              <div className="why-tatva-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTatvaUI;