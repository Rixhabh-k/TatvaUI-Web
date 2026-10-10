import {
  MagneticButton,
  FlipButton,
  FillButton,
  ThreeDButton,
  SubmitButton,
  PositionAwareButton,
  UploadButton,
  TypewriterText,
  TextScramble,
  ShadowText,
  WaveText,
  MagicText,
} from "tatva-ui";

/*
  props[] schema (ControlPanel isse chalta hai):
    type: "range" | "text" | "color" | "array"
    range ke liye: min, max, step
    array ke liye: comma-separated input, value array ban jati hai
    default: sirf docs table mein dikhane ke liye (string)
*/

const docs = {
  installation: {
    title: "Tatva UI Installation",
    description:
      "A reusable animation and interaction library for building modern, expressive web interfaces with ready-to-use React components and customizable effects.",

    css: {
      title: "CSS Styling",
      description: "Import the css file from the library.",
      language: "css",
      code: `@import "tatva-ui/style.css";`,
    },

    sections: [
      {
        title: "Installation",

        paragraphs: [
          "Install tatva-ui using npm.",
          "Import the tatva-ui stylesheet.",
          "Import the components you need.",
        ],

        codeBlocks: [
          {
            language: "bash",
            code: "npm install tatva-ui",
          },
          {
            language: "jsx",
            code: `import "tatva-ui/style.css";`,
          },
          {
            language: "jsx",
            code: `import {
  MagneticButton,
  FlipButton,
  FillButton,
  ThreeDButton,
  SubmitButton,
  PositionAwareButton,
  UploadButton,
  TypewriterText,
  TextScramble,
  ShadowText,
  WaveText,
  MagicText
} from "tatva-ui";`,
          },
        ],
      },

      {
        title: "Basic Usage",

        codeBlocks: [
          {
            language: "jsx",
            code: `import {
  MagneticButton,
  FlipButton,
  FillButton,
  ThreeDButton,
  SubmitButton,
  PositionAwareButton,
  UploadButton,
  TypewriterText,
  TextScramble,
  ShadowText,
  WaveText,
  MagicText
} from "tatva-ui";

import "tatva-ui/style.css";

function App() {
  return (
    <div>
      <MagneticButton>Magnetic</MagneticButton>

      <FlipButton front="FRONT" back="BACK" />

      <FillButton>Hover Me</FillButton>

      <ThreeDButton front="FRONT" back="BACK" />

      <SubmitButton />

      <PositionAwareButton>
        Position Aware
      </PositionAwareButton>

      <UploadButton />

      <TypewriterText
        words={["Hello", "World", "tatva-ui"]}
      />

      <TextScramble
        phrases={["Build", "Create", "Animate"]}
      />

      <ShadowText>
        COLORS
      </ShadowText>

      <WaveText>
        WAVES
      </WaveText>

      <MagicText
        beforeText="Sometimes I'll start a line of code and I"
        magicText="don't even know"
        afterText="where it's going."
      />
    </div>
  );
}

export default App;`,
          },
        ],
      },

      {
        title: "Custom Styling",

        paragraphs: [
          "tatva-ui provides the animation behavior while users remain in control of the visual design through className.",
          "Colors, durations and motion values are passed as props. Everything else - size, spacing, typography, borders and radius - is yours to control with CSS.",
        ],

        codeBlocks: [
          {
            language: "jsx",
            code: `<MagneticButton className="my-button">
  Magnetic
</MagneticButton>`,
          },
          {
            language: "css",
            code: `.my-button {
  width: 220px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid black;
  background: purple;
  color: white;
  font-size: 18px;
}`,
          },
        ],
      },
    ],
  },

  "magnetic-button": {
    title: "Magnetic Button",
    description:
      "A magnetic interaction where the button follows the cursor within a specified radius.",

    preview: MagneticButton,

    previewProps: {
      children: "Magnetic",
      strength: 0.35,
      radius: 150,
      ease: 0.15,
      className: "magnetic-button",
    },

    usage: {
      language: "jsx",
      code: `import { MagneticButton } from "tatva-ui"

export function MagneticButtonDemo() {
  return (
    <MagneticButton
      strength={0.35}
      radius={150}
      ease={0.15}
      className="magnetic-button"
    >
      Magnetic
    </MagneticButton>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "The magnetic movement is handled by the component. Size, shape and colors come from your own class.",
      language: "css",
      code: `.magnetic-button {
  width: 220px;
  height: 60px;
  border: 2px solid #38146a;
  border-radius: 30px;
  background: #38146a;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
}`,
    },

    props: [
      { name: "children", type: "text", default: '"Hover Me"', description: "Button content" },
      { name: "strength", type: "range", min: 0, max: 1, step: 0.01, default: "0.35", description: "Magnetic strength" },
      { name: "radius", type: "range", min: 0, max: 500, step: 1, default: "150", description: "Activation radius" },
      { name: "ease", type: "range", min: 0.01, max: 1, step: 0.01, default: "0.15", description: "Movement smoothness" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "flip-button": {
    title: "Flip Button",
    description: "A 3D-style text flip effect.",

    preview: FlipButton,

    previewProps: {
      front: "FRONT",
      back: "BACK",
      duration: 500,
      frontColor: "#323237",
      backColor: "#adadaf",
      textColor: "#adadaf",
      backTextColor: "#323237",
      className: "flip-button",
    },

    usage: {
      language: "jsx",
      code: `import { FlipButton } from "tatva-ui"

export function FlipButtonDemo() {
  return (
    <FlipButton
      front="FRONT"
      back="BACK"
      duration={500}
      frontColor="#323237"
      backColor="#adadaf"
      textColor="#adadaf"
      backTextColor="#323237"
      className="flip-button"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Face colors are controlled by props. Use CSS for the size, radius and typography of both faces.",
      language: "css",
      code: `.flip-button {
  width: 200px;
  height: 56px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}`,
    },

    props: [
      { name: "front", type: "text", default: '"Front"', description: "Front text" },
      { name: "back", type: "text", default: '"Back"', description: "Back text" },
      { name: "duration", type: "range", min: 100, max: 2000, step: 50, default: "500", description: "Animation duration in ms" },
      { name: "frontColor", type: "color", default: '"#323237"', description: "Front background" },
      { name: "backColor", type: "color", default: '"#adadaf"', description: "Back background" },
      { name: "textColor", type: "color", default: '"#adadaf"', description: "Front text color" },
      { name: "backTextColor", type: "color", default: '"#323237"', description: "Back text color" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "fill-button": {
    title: "Fill Button",
    description: "An expanding fill effect that fills the button on hover.",

    preview: FillButton,

    previewProps: {
      children: "Hover Me",
      fillColor: "#38146a",
      textColor: "#fff",
      hoverTextColor: "#fff",
      duration: 350,
      className: "fill-button",
    },

    usage: {
      language: "jsx",
      code: `import { FillButton } from "tatva-ui"

export function FillButtonDemo() {
  return (
    <FillButton
      fillColor="#38146a"
      textColor="#fff"
      hoverTextColor="#fff"
      duration={350}
      className="fill-button"
    >
      Hover Me
    </FillButton>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "The fill layer is generated by the component. Your class sets the padding, border and base background it fills over.",
      language: "css",
      code: `.fill-button {
  padding: 16px 40px;
  border: 2px solid #38146a;
  border-radius: 6px;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
}`,
    },

    props: [
      { name: "children", type: "text", default: '"Hover Me!"', description: "Button content" },
      { name: "fillColor", type: "color", default: '"#38146a"', description: "Fill color" },
      { name: "textColor", type: "color", default: '"#fff"', description: "Default text color" },
      { name: "hoverTextColor", type: "color", default: '"#fff"', description: "Hover text color" },
      { name: "duration", type: "range", min: 100, max: 2000, step: 50, default: "350", description: "Fill duration in ms" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "3d-button": {
    title: "3D Button",
    description:
      "A 3D box-style button that rotates around its axis to reveal another face.",

    preview: ThreeDButton,

    previewProps: {
      front: "FRONT",
      back: "BACK",
      duration: 500,
      frontColor: "#323237",
      backColor: "#adadaf",
      textColor: "#adadaf",
      backTextColor: "#323237",
      className: "three-d-button",
    },

    usage: {
      language: "jsx",
      code: `import { ThreeDButton } from "tatva-ui"

export function ThreeDButtonDemo() {
  return (
    <ThreeDButton
      front="FRONT"
      back="BACK"
      duration={500}
      frontColor="#323237"
      backColor="#adadaf"
      textColor="#adadaf"
      backTextColor="#323237"
      className="three-d-button"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Keep a fixed width and height so both faces of the box line up correctly while rotating.",
      language: "css",
      code: `.three-d-button {
  width: 200px;
  height: 56px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}`,
    },

    props: [
      { name: "front", type: "text", default: '"Front"', description: "Front face content" },
      { name: "back", type: "text", default: '"Back"', description: "Back face content" },
      { name: "duration", type: "range", min: 100, max: 2000, step: 50, default: "500", description: "Rotation duration" },
      { name: "frontColor", type: "color", default: '"#323237"', description: "Front background" },
      { name: "backColor", type: "color", default: '"#adadaf"', description: "Back background" },
      { name: "textColor", type: "color", default: '"#adadaf"', description: "Front text color" },
      { name: "backTextColor", type: "color", default: '"#323237"', description: "Back text color" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "submit-button": {
    title: "Submit Button",
    description: "A submit interaction with idle, loading, and success states.",

    preview: SubmitButton,

    previewProps: {
      idleText: "SUBMIT",
      loadingText: "SENDING...",
      successText: "SUBMITTED",
      duration: 2250,
      successDuration: 1250,
      color: "#1ECD97",
      loadingColor: "#bbbbbb",
      successColor: "#471ecd",
      className: "submit-button",
    },

    usage: {
      language: "jsx",
      code: `import { SubmitButton } from "tatva-ui"

export function SubmitButtonDemo() {
  return (
    <SubmitButton
      idleText="SUBMIT"
      loadingText="SENDING..."
      successText="SUBMITTED"
      duration={2250}
      successDuration={1250}
      color="#1ECD97"
      loadingColor="#bbbbbb"
      successColor="#471ecd"
      className="submit-button"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "State colors come from props. A fixed width keeps the button from jumping when the label changes between states.",
      language: "css",
      code: `.submit-button {
  width: 220px;
  height: 56px;
  border: none;
  border-radius: 28px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
}`,
    },

    props: [
      { name: "idleText", type: "text", default: '"SUBMIT"', description: "Initial text" },
      { name: "loadingText", type: "text", default: '"SENDING..."', description: "Loading label/API value" },
      { name: "successText", type: "text", default: '"SUBMITTED"', description: "Success label/API value" },
      { name: "duration", type: "range", min: 500, max: 6000, step: 50, default: "2250", description: "Loading duration" },
      { name: "successDuration", type: "range", min: 500, max: 4000, step: 50, default: "1250", description: "Success duration" },
      { name: "color", type: "color", default: '"#1ECD97"', description: "Primary color" },
      { name: "loadingColor", type: "color", default: '"#bbbbbb"', description: "Spinner color" },
      { name: "successColor", type: "color", default: '"#471ecd"', description: "Success color" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "position-aware-button": {
    title: "Position Aware Button",
    description:
      "A cursor-position-aware circular fill effect. The fill originates from the cursor position.",

    preview: PositionAwareButton,

    previewProps: {
      children: "Position Aware",
      fillColor: "#38146a",
      textColor: "#38146a",
      hoverTextColor: "#fff",
      duration: 400,
      className: "position-button",
    },

    usage: {
      language: "jsx",
      code: `import { PositionAwareButton } from "tatva-ui"

export function PositionAwareButtonDemo() {
  return (
    <PositionAwareButton
      fillColor="#38146a"
      textColor="#38146a"
      hoverTextColor="#fff"
      duration={400}
      className="position-button"
    >
      Position Aware
    </PositionAwareButton>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "The circular fill is clipped to the button box, so any border-radius you set is respected.",
      language: "css",
      code: `.position-button {
  padding: 16px 40px;
  border: 2px solid #38146a;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
}`,
    },

    props: [
      { name: "children", type: "text", default: '"POSITION AWARE"', description: "Button content" },
      { name: "fillColor", type: "color", default: '"#333"', description: "Circular fill color" },
      { name: "textColor", type: "color", default: '"#fff"', description: "Default text color" },
      { name: "hoverTextColor", type: "color", default: '"#fff"', description: "Hover text color" },
      { name: "duration", type: "range", min: 100, max: 2000, step: 50, default: "400", description: "Fill duration in ms" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "upload-button": {
    title: "Upload Button",
    description:
      "An animated upload interaction with uploading progress and completion states.",

    preview: UploadButton,

    previewProps: {
      filename: "Document.pdf",
      buttonText: "Upload",
      uploadingText: "Uploading...",
      completedText: "Completed",
      uploadDuration: 3000,
      completeDuration: 2000,
      buttonColor: "#3bafda",
      progressColor: "#2d334c",
      className: "my-upload",
    },

    usage: {
      language: "jsx",
      code: `import { UploadButton } from "tatva-ui"

export function UploadButtonDemo() {
  return (
    <UploadButton
      filename="Document.pdf"
      buttonText="Upload"
      uploadingText="Uploading..."
      completedText="Completed"
      uploadDuration={3000}
      completeDuration={2000}
      buttonColor="#3bafda"
      progressColor="#2d334c"
      className="my-upload"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Your class styles the outer card. Give it a fixed width so the progress bar has a stable track to fill.",
      language: "css",
      code: `.my-upload {
  width: 320px;
  padding: 18px 20px;
  border: 1px solid #e3e6ea;
  border-radius: 12px;
  background: #fff;
  font-size: 15px;
  font-family: inherit;
}`,
    },

    props: [
      { name: "filename", type: "text", default: '"File.pdf"', description: "File name displayed by the button" },
      { name: "buttonText", type: "text", default: '"Upload"', description: "Initial button label" },
      { name: "uploadingText", type: "text", default: '"Uploading..."', description: "Label shown during upload" },
      { name: "completedText", type: "text", default: '"Completed"', description: "Label shown after upload completes" },
      { name: "uploadDuration", type: "range", min: 500, max: 8000, step: 100, default: "3000", description: "Upload animation duration" },
      { name: "completeDuration", type: "range", min: 500, max: 5000, step: 100, default: "2000", description: "Completion state duration" },
      { name: "buttonColor", type: "color", default: '"#3bafda"', description: "Button background color" },
      { name: "progressColor", type: "color", default: '"#2d334c"', description: "Upload progress color" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "typewriter-text": {
    title: "TypeWriter Text",
    description:
      "A typewriter-style text animation that types, pauses, and deletes phrases before moving to the next phrase.",

    preview: TypewriterText,

    previewProps: {
      words: ["Hello", "World", "tatva-ui"],
      typingSpeed: 100,
      deletingSpeed: 50,
      pauseDuration: 1000,
      className: "typewriter-text",
    },

    usage: {
      language: "jsx",
      code: `import { TypewriterText } from "tatva-ui"

export function TypewriterTextDemo() {
  return (
    <TypewriterText
      words={["Hello", "World", "tatva-ui"]}
      typingSpeed={100}
      deletingSpeed={50}
      pauseDuration={1000}
      className="typewriter-text"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Because the text length changes while typing, a min-height or fixed line-height stops the layout from shifting.",
      language: "css",
      code: `.typewriter-text {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;
  min-height: 45px;
  color: #38146a;
  font-family: "Fira Code", monospace;
}`,
    },

    props: [
      { name: "words", type: "array", default: "[]", description: "Array of phrases to type and delete (comma separated)" },
      { name: "typingSpeed", type: "range", min: 20, max: 300, step: 5, default: "100", description: "Typing speed in milliseconds" },
      { name: "deletingSpeed", type: "range", min: 10, max: 200, step: 5, default: "50", description: "Deleting speed in milliseconds" },
      { name: "pauseDuration", type: "range", min: 200, max: 3000, step: 50, default: "1000", description: "Pause duration between phrases in milliseconds" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "text-scramble": {
    title: "Text Scramble",
    description:
      "A text scrambling effect that transitions between phrases using randomized characters.",

    preview: TextScramble,

    previewProps: {
      phrases: ["Build", "Create", "Animate"],
      pauseDuration: 800,
      className: "scramble-text",
    },

    usage: {
      language: "jsx",
      code: `import { TextScramble } from "tatva-ui"

export function TextScrambleDemo() {
  return (
    <TextScramble
      phrases={["Build", "Create", "Animate"]}
      pauseDuration={800}
      className="scramble-text"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "A monospace font keeps the width steady while random characters cycle through.",
      language: "css",
      code: `.scramble-text {
  font-family: "Fira Code", monospace;
  font-size: 34px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #38146a;
}`,
    },

    props: [
      { name: "phrases", type: "array", default: "[]", description: "Array of phrases to scramble between (comma separated)" },
      { name: "pauseDuration", type: "range", min: 200, max: 3000, step: 50, default: "800", description: "Pause duration between phrases in milliseconds" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "shadow-text": {
    title: "Shadow Text",
    description:
      "A mouse-reactive text effect where the shadow follows the cursor with smooth movement and dynamic color.",

    preview: ShadowText,

    previewProps: {
      children: "COLORS",
      shadowOffset: 100,
      shadowOpacity: 0.5,
      shadowSaturation: 50,
      shadowLightness: 50,
      smoothing: 0.08,
      className: "shadow-text",
    },

    usage: {
      language: "jsx",
      code: `import { ShadowText } from "tatva-ui"

export function ShadowTextDemo() {
  return (
    <ShadowText
      shadowOffset={100}
      shadowOpacity={0.5}
      shadowSaturation={50}
      shadowLightness={50}
      smoothing={0.08}
      className="shadow-text"
    >
      COLORS
    </ShadowText>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "The shadow is driven by props, so avoid setting text-shadow here. Large, heavy type shows the effect best.",
      language: "css",
      code: `.shadow-text {
  font-size: 90px;
  font-weight: 900;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #1a1a1a;
}`,
    },

    props: [
      { name: "children", type: "text", default: '"COLORS"', description: "Text content" },
      { name: "shadowOffset", type: "range", min: 0, max: 300, step: 1, default: "100", description: "Shadow offset" },
      { name: "shadowOpacity", type: "range", min: 0, max: 1, step: 0.01, default: "0.5", description: "Shadow opacity" },
      { name: "shadowSaturation", type: "range", min: 0, max: 100, step: 1, default: "50", description: "Shadow color saturation" },
      { name: "shadowLightness", type: "range", min: 0, max: 100, step: 1, default: "50", description: "Shadow color lightness" },
      { name: "smoothing", type: "range", min: 0.01, max: 1, step: 0.01, default: "0.08", description: "Cursor movement smoothing" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "wave-text": {
    title: "Wave Text",
    description:
      "A layered 3D text effect with multiple colored text copies that react smoothly to cursor movement.",

    preview: WaveText,

    previewProps: {
      children: "WAVES",
      colors: ["#f24c00", "#9792e3", "#fc7a1e", "#eda96d"],
      depth: 12,
      rotate: 3,
      skew: 3,
      perspective: 500,
      smoothing: 0.2,
      className: "wave-text",
    },

    usage: {
      language: "jsx",
      code: `import { WaveText } from "tatva-ui"

export function WaveTextDemo() {
  return (
    <WaveText
      colors={[
        "#f24c00",
        "#9792e3",
        "#fc7a1e",
        "#eda96d"
      ]}
      depth={12}
      rotate={3}
      skew={3}
      perspective={500}
      smoothing={0.2}
      className="wave-text"
    >
      WAVES
    </WaveText>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Layer colors come from the colors prop, so set only type and spacing here. Leave room around the text for the layers to spread.",
      language: "css",
      code: `.wave-text {
  font-size: 96px;
  font-weight: 900;
  letter-spacing: 8px;
  text-transform: uppercase;
  padding: 40px;
}`,
    },

    props: [
      { name: "children", type: "text", default: '"WAVES"', description: "Text content" },
      { name: "colors", type: "array", default: '["#f24c00", "#9792e3", "#fc7a1e", "#eda96d"]', description: "Colors used for the layered text effect (comma separated)" },
      { name: "depth", type: "range", min: 0, max: 40, step: 1, default: "12", description: "3D layer depth" },
      { name: "rotate", type: "range", min: 0, max: 20, step: 0.5, default: "3", description: "Rotation amount" },
      { name: "skew", type: "range", min: 0, max: 20, step: 0.5, default: "3", description: "Skew amount" },
      { name: "perspective", type: "range", min: 100, max: 1500, step: 10, default: "500", description: "3D perspective value" },
      { name: "smoothing", type: "range", min: 0.01, max: 1, step: 0.01, default: "0.2", description: "Cursor movement smoothing" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },

  "magic-text": {
    title: "Magic Text",
    description:
      "A highlighted text effect with animated gradient colors and randomly appearing decorative stars.",

    preview: MagicText,

    previewProps: {
      beforeText: "Sometimes I'll start a line of code and I",
      magicText: "don't even know",
      afterText: "where it's going.",
      colors: ["#7b1fa2", "#673ab7", "#f48fb1"],
      starCount: 3,
      starInterval: 1000,
      starSize: 24,
      className: "magic-text",
    },

    usage: {
      language: "jsx",
      code: `import { MagicText } from "tatva-ui"

export function MagicTextDemo() {
  return (
    <MagicText
      beforeText="Sometimes I'll start a line of code and I"
      magicText="don't even know"
      afterText="where it's going."
      colors={[
        "#7b1fa2",
        "#673ab7",
        "#f48fb1"
      ]}
      starCount={3}
      starInterval={1000}
      starSize={24}
      className="magic-text"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Your class styles the full sentence. The gradient on the highlighted part is controlled by the colors prop, not by CSS color.",
      language: "css",
      code: `.magic-text {
  max-width: 640px;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.5;
  color: #1a1a1a;
}`,
    },

    props: [
      { name: "beforeText", type: "text", default: `"Sometimes I'll start a line of code and I"`, description: "Text displayed before the highlighted text" },
      { name: "magicText", type: "text", default: `"don't even know"`, description: "Highlighted animated text" },
      { name: "afterText", type: "text", default: `"where it's going."`, description: "Text displayed after the highlighted text" },
      { name: "colors", type: "array", default: '["#7b1fa2", "#673ab7", "#f48fb1"]', description: "Gradient colors for the magic text (comma separated)" },
      { name: "starCount", type: "range", min: 0, max: 10, step: 1, default: "3", description: "Number of decorative stars" },
      { name: "starInterval", type: "range", min: 200, max: 3000, step: 50, default: "1000", description: "Interval between star appearances in milliseconds" },
      { name: "starSize", type: "range", min: 8, max: 60, step: 1, default: "24", description: "Decorative star size" },
      { name: "className", type: "text", default: '""', description: "Custom CSS class" },
    ],
  },
};

export default docs;
