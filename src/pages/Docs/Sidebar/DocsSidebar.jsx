import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import BranchedMenu from "../../../effects/BranchedMenu/BranchedMenu";
import {
  Download04Icon,
  CursorMagicSelection04Icon,
  TextFontIcon,
  Layers01Icon,
} from "@hugeicons/core-free-icons";
import "./docsSidebar.css";

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
  buttons: CursorMagicSelection04Icon,
  text: TextFontIcon,
  cards: Layers01Icon,
};

const DocsSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isPlayground = location.pathname.startsWith("/playground");

  const currentSlug = location.pathname
    .replace(/^\/(docs|playground)\/?/, "")
    .replace(/\/$/, "");

  const menuItems = useMemo(
    () =>
      navigation.flatMap((section) => {
        const children = section.children ?? [];

        if (children.some((item) => item.children)) {
          return children.map((category) => {
            return {
              label: category.label,
              children: (category.children ?? []).map((item) => ({
                ...item,
                icon: iconMap[category.value],
              })),
            };
          });
        }

        return [
          {
            label: section.label,
            children: children.map((item) => ({
              ...item,
              icon: Download04Icon,
            })),
          },
        ];
      }),
    [],
  );

  const activeSection = Math.max(
    0,
    menuItems.findIndex((section) =>
      section.children.some((item) => item.value === currentSlug),
    ),
  );

  return (
    <aside className="docs-sidebar">
      <BranchedMenu
        items={menuItems}
        defaultOpen={[1, 2]}
        defaultActive={currentSlug}
        onSelect={(value) => {
          navigate(`/${isPlayground ? "playground" : "docs"}/${value}`);
        }}
        color="#f5f5f5"
        accentColor="#f5f5f7"
        lineColor="#3f3f46"
        width={240}
        rowHeight={36}
        indent={40}
        trunk={14}
        radius={10}
        lineWidth={1.5}
        fontSize={14}
        drawDuration={400}
        foldDuration={300}
      />
    </aside>
  );
};

export default DocsSidebar;
