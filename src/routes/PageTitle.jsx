import { useEffect } from "react";
import { useLocation } from "react-router";

const pageTitles = {
  installation: "Installation",
  "magnetic-button": "Magnetic Button",
  "flip-button": "Flip Button",
  "fill-button": "Fill Button",
  "3d-button": "3D Button",
  "submit-button": "Submit Button",
  "position-aware-button": "Position Aware Button",
  "upload-button": "Upload Button",
  "typewriter-text": "TypeWriter Text",
  "text-scramble": "Text Scramble",
  "shadow-text": "Shadow Text",
  "wave-text": "Wave Text",
  "magic-text": "Magic Text",
  "three-d-card": "3D Card",
  "gliter-card": "Gliter Card",
  "pixel-card": "Pixel Card",
  "animated-border-card": "Animated Border Card",
};

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const slug = location.pathname.split("/").filter(Boolean).at(-1);

    if (location.pathname.startsWith("/playground")) {
      const name = pageTitles[slug] ?? "Playground";
      document.title = `${name} Playground | Tatva UI`;
      return;
    }

    const title = pageTitles[slug];

    document.title = title
      ? `${title} | Tatva UI`
      : "Tatva UI — Animated UI Components";
  }, [location.pathname]);

  return null;
};

export default PageTitle;
