import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Download, MousePointer2, Type, Layers } from "lucide-react";
import "./docsSidebar.css";

// Keep your existing navigation array and iconMap here.

const navigation = [
  {
    label: "Getting started",
    children: [
      {
        value: "installation",
        label: "Installation",
      },
    ],
  },
  {
    label: "Components",
    children: [
      {
        value: "buttons",
        label: "Buttons",
        children: [
          { value: "magnetic-button", label: "Magnetic Button" },
          { value: "flip-button", label: "Flip Button" },
          { value: "fill-button", label: "Fill Button" },
          { value: "3d-button", label: "3D Button" },
          { value: "submit-button", label: "Submit Button" },
          { value: "position-aware-button", label: "Position Aware Button" },
          { value: "upload-button", label: "Upload Button" },
        ],
      },
      {
        value: "text",
        label: "Text",
        children: [
          { value: "typewriter-text", label: "TypeWriter Text" },
          { value: "text-scramble", label: "Text Scramble" },
          { value: "shadow-text", label: "Shadow Text" },
          { value: "wave-text", label: "Wave Text" },
          { value: "magic-text", label: "Magic Text" },
        ],
      },
      {
        value: "cards",
        label: "Cards",
        children: [
          { value: "show-card", label: "Show Card" },
          { value: "side-reveal-card", label: "Side Reveal Card" },
          { value: "circle-expand", label: "Circle Expand" },
          { value: "pixel-hover", label: "Pixel Hover" },
          { value: "folder-card", label: "Folder Card" },
          { value: "neo-brutalism", label: "Neo Brutalism" },
          { value: "pixel-card", label: "Pixel Card" },
          { value: "animated-border-card", label: "Animated Border Card" },
          { value: "gliter-card", label: "Gliter Card" },
          { value: "three-d-card", label: "3D Card" },
        ],
      },
    ],
  },
];

// ek category ke ek icon yaha daale ↓
const iconMap = {
  buttons: MousePointer2,
  text: Type,
  cards: Layers,
};

const DocsSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const itemRefs = useRef(new Map());

  const [hoveredSlug, setHoveredSlug] = useState(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    top: 0,
    height: 0,
    visible: false,
  });

  const isPlayground = location.pathname.startsWith("/playground");

  const currentSlug = location.pathname
    .replace(/^\/(docs|playground)\/?/, "")
    .replace(/\/$/, "");

  const menuItems = useMemo(
    () =>
      navigation.flatMap((section) => {
        const children = section.children ?? [];

        if (children.some((item) => item.children)) {
          return children.map((category) => ({
            label: category.label,
            children: (category.children ?? []).map((item) => ({
              ...item,
              icon: iconMap[category.value],
            })),
          }));
        }

        return [
          {
            label: section.label,
            children: children.map((item) => ({
              ...item,
              icon: Download,
            })),
          },
        ];
      }),
    [],
  );

  const findItem = useCallback(
    (slug) =>
      menuItems
        .flatMap((section) => section.children)
        .find((item) => item.value === slug),
    [menuItems],
  );

  const moveIndicator = useCallback((slug) => {
    const sidebar = sidebarRef.current;
    const element = itemRefs.current.get(slug);

    if (!sidebar || !element) return;

    const sidebarRect = sidebar.getBoundingClientRect();
    const itemRect = element.getBoundingClientRect();

    const itemsContainer = element.closest(".docs-sidebar__items");

    if (!itemsContainer) return;

    const itemsRect = itemsContainer.getBoundingClientRect();

    setIndicator({
      top: itemRect.top - sidebarRect.top + sidebar.scrollTop,
      left: itemsRect.left - sidebarRect.left + sidebar.scrollLeft,
      height: itemRect.height,
      visible: true,
    });
  }, []);

  const restoreActiveIndicator = useCallback(() => {
    if (itemRefs.current.has(currentSlug)) {
      moveIndicator(currentSlug);
    } else {
      setIndicator((previous) => ({
        ...previous,
        visible: false,
      }));
    }
  }, [currentSlug, moveIndicator]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      moveIndicator(hoveredSlug ?? currentSlug);
    });

    return () => cancelAnimationFrame(frame);
  }, [currentSlug, hoveredSlug, moveIndicator]);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const observer = new ResizeObserver(() => {
      moveIndicator(hoveredSlug ?? currentSlug);
    });

    observer.observe(sidebar);

    return () => observer.disconnect();
  }, [currentSlug, hoveredSlug, moveIndicator]);

  const handleNavigate = (slug) => {
    const item = findItem(slug);
    if (!item) return;

    const prefix = isPlayground ? "/playground" : "/docs";
    navigate(item.href ?? `${prefix}/${slug}`);
  };

  return (
    <aside className="docs-sidebar">
      <nav
        ref={sidebarRef}
        className="docs-sidebar__nav"
        aria-label="Documentation navigation"
        onMouseLeave={() => {
          setHoveredSlug(null);
          restoreActiveIndicator();
        }}>
        <span
          className={`docs-sidebar__indicator ${
            indicator.visible ? "is-visible" : ""
          }`}
          style={{
            transform: `translate(${indicator.left ?? 0}px, ${indicator.top}px)`,
            height: `${indicator.height}px`,
          }}
          aria-hidden="true"
        />

        {menuItems.map((section, sectionIndex) => (
          <div className="docs-sidebar__section" key={section.label}>
            <h3 className="docs-sidebar__heading">{section.label}</h3>

            <div className="docs-sidebar__items">
              {section.children.map((item) => {
                const Icon = item.icon;
                const hasChildren = Boolean(item.children?.length);

                return (
                  <div className="docs-sidebar__group" key={item.value}>
                    {hasChildren ? (
                      <>
                        <div className="docs-sidebar__category">
                          {Icon && <Icon className="docs-sidebar__icon" />}
                          <span>{item.label}</span>
                        </div>

                        <div className="docs-sidebar__nested">
                          {item.children.map((child) => {
                            const ChildIcon = child.icon;
                            const isActive = child.value === currentSlug;

                            return (
                              <button
                                key={child.value}
                                ref={(element) => {
                                  if (element) {
                                    itemRefs.current.set(child.value, element);
                                  } else {
                                    itemRefs.current.delete(child.value);
                                  }
                                }}
                                type="button"
                                className={`docs-sidebar__link ${
                                  isActive ? "is-active" : ""
                                }`}
                                aria-current={isActive ? "page" : undefined}
                                onMouseEnter={() => {
                                  setHoveredSlug(child.value);
                                  moveIndicator(child.value);
                                }}
                                onFocus={() => {
                                  setHoveredSlug(child.value);
                                  moveIndicator(child.value);
                                }}
                                onBlur={(event) => {
                                  if (
                                    !event.currentTarget.parentElement?.contains(
                                      event.relatedTarget,
                                    )
                                  ) {
                                    setHoveredSlug(null);
                                    restoreActiveIndicator();
                                  }
                                }}
                                onClick={() => handleNavigate(child.value)}>
                                {ChildIcon && (
                                  <ChildIcon className="docs-sidebar__icon" />
                                )}
                                <span>{child.label}</span>
                                {child.badge && (
                                  <span className="docs-sidebar__badge">
                                    {child.badge}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <button
                        ref={(element) => {
                          if (element) {
                            itemRefs.current.set(item.value, element);
                          } else {
                            itemRefs.current.delete(item.value);
                          }
                        }}
                        type="button"
                        className={`docs-sidebar__link ${
                          item.value === currentSlug ? "is-active" : ""
                        }`}
                        aria-current={
                          item.value === currentSlug ? "page" : undefined
                        }
                        onMouseEnter={() => {
                          setHoveredSlug(item.value);
                          moveIndicator(item.value);
                        }}
                        onFocus={() => {
                          setHoveredSlug(item.value);
                          moveIndicator(item.value);
                        }}
                        onClick={() => handleNavigate(item.value)}>
                        {Icon && <Icon className="docs-sidebar__icon" />}
                        <span>{item.label}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default DocsSidebar;
