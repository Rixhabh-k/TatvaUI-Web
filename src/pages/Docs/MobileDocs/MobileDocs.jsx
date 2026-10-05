import React, { useEffect } from "react";
import { ArrowUpRight, Sparkles, MousePointer2, Type } from "lucide-react";
import { useNavigate } from "react-router";
import "./mobileDocs.css";

const MobileDocs = () => {
  const navigation = [
    {
      title: "Buttons",
      icon: MousePointer2,
      items: [
        {
          label: "Magnetic Button",
          slug: "magnetic-button",
          description: "Button with magnetic cursor interaction",
        },
        {
          label: "Flip Button",
          slug: "flip-button",
          description: "Animated button with a 3D flip interaction",
        },
        {
          label: "Fill Button",
          slug: "fill-button",
          description: "Button with an animated fill effect",
        },
        {
          label: "3D Button",
          slug: "3d-button",
          description: "Interactive button with a 3D effect",
        },
        {
          label: "Submit Button",
          slug: "submit-button",
          description: "Animated button designed for form submission",
        },
        {
          label: "Position Aware Button",
          slug: "position-aware-button",
          description: "Button that reacts to pointer position",
        },
        {
          label: "Upload Button",
          slug: "upload-button",
          description: "Animated button for file uploads",
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
          description: "Animated typewriter text effect",
        },
        {
          label: "Text Scramble",
          slug: "text-scramble",
          description: "Text animation with a scrambling effect",
        },
        {
          label: "Shadow Text",
          slug: "shadow-text",
          description: "Text with animated shadow styling",
        },
        {
          label: "Wave Text",
          slug: "wave-text",
          description: "Text animation with a smooth wave effect",
        },
        {
          label: "Magic Text",
          slug: "magic-text",
          description: "Animated text effect with a magical reveal",
        },
      ],
    },
  ];

  useEffect(() => {
    const docsContainer = document.querySelector(".mobile-docs-home");

    if (!docsContainer) return;

    const savedScroll = sessionStorage.getItem("mobileDocsScroll");

    if (savedScroll !== null) {
      requestAnimationFrame(() => {
        docsContainer.scrollTop = Number(savedScroll);
      });
    }

    const handleScroll = () => {
      sessionStorage.setItem(
        "mobileDocsScroll",
        String(docsContainer.scrollTop),
      );
    };

    docsContainer.addEventListener("scroll", handleScroll);

    return () => {
      docsContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const componentsCount = navigation.reduce(
    (acc, section) => acc + section.items.length,
    0,
  );

  const navigate = useNavigate();

  return (
    <main className="mobile-docs-page">
      <section className="mobile-docs-content">
        <div className="mobile-docs-badge">
          <Sparkles size={17} />
          <span>Component catalog</span>
        </div>
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

        <div className="mobile-docs-actions">
          <button
            className="mobile-docs-primary"
            onClick={() => navigate("/docs/installation")}>
            <span>Start with installation</span>
            <ArrowUpRight size={19} />
          </button>
        </div>

        <div className="mobile-docs-stats">
          <div className="mobile-docs-stat">
            <strong>{componentsCount}</strong>
            <span>COMPONENTS</span>
          </div>

          <div className="mobile-docs-stat-description">
            <Sparkles size={18} />

            <span>Live demos, usage snippets, and prop notes.</span>
          </div>
        </div>

        <section className="mobile-docs-categories">
          {navigation.map((section) => {
            const Icon = section.icon;

            return (
              <section className="mobile-docs-category" key={section.title}>
                <div className="mobile-docs-category-header">
                  <div className="mobile-docs-category-icon">
                    <Icon size={28} />
                  </div>

                  <div className="mobile-docs-category-info">
                    <h2>{section.title}</h2>

                    <p>{section.items.length} components</p>
                  </div>
                </div>

                <div className="mobile-docs-component-list">
                  {section.items.map((item) => (
                    <button
                      key={item.slug}
                      className="mobile-docs-component"
                      onClick={() => {
                        const docsContainer =
                          document.querySelector(".mobile-docs-home");

                        if (docsContainer) {
                          sessionStorage.setItem(
                            "mobileDocsScroll",
                            String(docsContainer.scrollTop),
                          );
                        }
                        navigate(`/docs/${item.slug}`);
                      }}>
                      <div className="mobile-docs-component-content">
                        <span className="mobile-docs-component-title">
                          {item.label}
                        </span>

                        <span className="mobile-docs-component-description">
                          {item.description}
                        </span>
                      </div>

                      <ArrowUpRight
                        className="mobile-docs-component-arrow"
                        size={21}
                      />
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default MobileDocs;
