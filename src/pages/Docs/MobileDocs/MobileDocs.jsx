import React, { useState } from "react";
import {
  Sun,
  Menu,
  ArrowUpRight,
  MessageSquarePlus,
  Sparkles,
  MousePointer2,
  Download,
  Type,
  ChevronUp
} from "lucide-react";
import "./mobileDocs.css";
import { useNavigate } from "react-router";

const MobileDocs = () => {
  const navigation = [
    {
      title: "Buttons",
      icon: MousePointer2,
      items: [
        {
          label: "Magnetic Button",
          slug: "magnetic-button",
        },
        {
          label: "Flip Button",
          slug: "flip-button",
        },
        {
          label: "Fill Button",
          slug: "fill-button",
        },
        {
          label: "3D Button",
          slug: "3d-button",
        },
        {
          label: "Submit Button",
          slug: "submit-button",
        },
        {
          label: "Position Aware Button",
          slug: "position-aware-button",
        },
        {
          label: "Upload Button",
          slug: "upload-button",
        },
      ],
    },

    {
      title: "Text",
      icon: Type,
      items: [
        {
          label: "TypeWriter Text",
          slug: "typewriter-text",
        },
        {
          label: "Text Scramble",
          slug: "text-scramble",
        },
        {
          label: "Shadow Text",
          slug: "shadow-text",
        },
        {
          label: "Wave Text",
          slug: "wave-text",
        },
        {
          label: "Magic Text",
          slug: "magic-text",
        },
      ],
    },
  ];

  const [openSections, setOpenSections] = useState({
    Text: true,
    Buttons: true,
  });

  const toggleSection = (sectionTitle) => {
    setOpenSections((previousSections) => ({
      ...previousSections,
      [sectionTitle]: !previousSections[sectionTitle],
    }));
  };

  const componentsCount = navigation.reduce((acc, nav) => acc + nav.items.length, 0);

  const navigate = useNavigate();
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
          <button
            onClick={() => navigate("/docs/installation")}
            className="mobile-docs-primary">
            <span>Start with installation</span>
            <ArrowUpRight size={19} />
          </button>

          <button>CLI install</button>
        </div>

        {/* Stats */}
        <div className="mobile-docs-stats">
          <div className="mobile-docs-stat">
            <strong>{componentsCount}</strong>
            <span>COMPONENTS</span>
          </div>

          {/* <div className="mobile-docs-stat">
            <strong>idhar kya daale?</strong>
            <span>NEW</span>
          </div> */}

          <div className="mobile-docs-stat-description">
            <Sparkles size={18} />

            <span>Live demos, usage snippets, and prop notes.</span>
          </div>
        </div>

        {/* Buttons category */}
        <section className="mobile-docs-category">

          {navigation.map((section) => {
            const Icon = section.icon;
            const isOpen = openSections[section.title];

            return (
              <div className="sidebar-group" key={section.title}>
                <button
                  type="button"
                  className="sidebar-section-header"
                  onClick={() => toggleSection(section.title)}
                  aria-expanded={isOpen}>
                  <span className="header-left">
                    <Icon size={19} strokeWidth={1.8} />
                    <span>{section.title}</span>
                  </span>

                  <ChevronUp
                    size={16}
                    strokeWidth={1.8}
                    className={`chevron ${isOpen ? "open" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="sidebar-items">
                    {section.items.map((item) => (
                      <button
                        key={item.slug}
                        className={`sidebar-item ${
                          location.pathname === `/docs/${item.slug}`
                            ? "active"
                            : ""
                        }`}
                        onClick={() => navigate(`/docs/${item.slug}`)}>
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default MobileDocs;
