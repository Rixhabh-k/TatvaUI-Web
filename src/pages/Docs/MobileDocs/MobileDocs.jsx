import React, { useEffect } from "react";
import {
  ArrowUpRight,
  Sparkles,
  MousePointer2,
  Type,
  PlayingCardsFan,
  ToggleLeft
} from "lucide-react";
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
    {
      title: "Cards",
      icon: PlayingCardsFan,
      items: [
        {
          label: "Show Card",
          slug: "show-card",
          description:
            "Expandable project showcase card with customizable content.",
        },
        {
          label: "Side Reveal Card",
          slug: "side-reveal-card",
          description: "Interactive two-sided card with profile details.",
        },
        {
          label: "Circle Expand",
          slug: "circle-expand",
          description:
            "Image card with an expanding circular overlay animation.",
        },
        {
          label: "Pixel Hover",
          slug: "pixel-hover",
          description: "Product card with a pixelated image hover effect.",
        },
        {
          label: "Folder Card",
          slug: "folder-card",
          description: "Folder-style card with a rising image hover animation.",
        },
        {
          label: "Neo Brutalism",
          slug: "neo-brutalism",
          description:
            "Bold card design with thick borders and offset shadows.",
        },
        {
          label: "Pixel Card",
          slug: "pixel-card",
          description: "Interactive card with customizable pixel effects.",
        },
        {
          label: "Animated Border Card",
          slug: "animated-border-card",
          description:
            "Card with an animated gradient border and glowing effects.",
        },
        {
          label: "Gliter Card",
          slug: "gliter-card",
          description: "Stylish card with a glitter-inspired visual effect.",
        },
        {
          label: "3D Card",
          slug: "three-d-card",
          description: "Interactive card with depth and 3D tilt effects.",
        },
      ],
    },
    {
      title: "Toggles",
      icon: ToggleLeft,
      items: [
        {
          label: "Day Night Toggle",
          slug: "day-night-toggle",
          description:
            "Animated toggle that transitions between day and night modes.",
        },
        {
          label: "Mood Toggle",
          slug: "mood-toggle",
          description:
            "Interactive toggle with expressive mood-based animations.",
        },
        {
          label: "Sleepy Cat",
          slug: "sleepy-cat",
          description: "Cute animated cat toggle with sleepy and awake states.",
        },
        {
          label: "Rocker Switch",
          slug: "rocker-switch",
          description:
            "Classic rocker-style switch with an interactive 3D effect.",
        },
        {
          label: "Eye Toggle",
          slug: "eye-toggle",
          description:
            "Animated eye toggle with interactive open and closed states.",
        },
        {
          label: "Padlock Toggle",
          slug: "padlock-toggle",
          description:
            "Animated padlock switch with locking and unlocking effects.",
        },
        {
          label: "Bell Toggle",
          slug: "bell-toggle",
          description:
            "Interactive notification toggle with a ringing bell animation.",
        },
        {
          label: "Candle Toggle",
          slug: "candle-toggle",
          description: "Animated candle switch with glowing flame effects.",
        },
        {
          label: "Firefly Jar",
          slug: "firefly-jar",
          description:
            "Magical toggle featuring glowing fireflies inside a jar.",
        },
        {
          label: "Lava Lamp",
          slug: "lava-lamp",
          description:
            "Fluid animated toggle inspired by the movement of a lava lamp.",
        },
        {
          label: "Record Player",
          slug: "record-player",
          description:
            "Retro record player toggle with spinning vinyl animations.",
        },
        {
          label: "Rocket Toggle",
          slug: "rocket-toggle",
          description:
            "Animated rocket switch with a launch-inspired interaction.",
        },
        {
          label: "Neon Sign",
          slug: "neon-sign",
          description:
            "Neon-inspired toggle with glowing light and flickering effects.",
        },
        {
          label: "Flower Bloom",
          slug: "flower-bloom",
          description: "Animated flower toggle that blooms when activated.",
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
