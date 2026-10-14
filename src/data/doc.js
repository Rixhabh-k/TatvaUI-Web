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
  ThreeDCard,
  GliterCard,
  PixelCard,
  AnimatedBorderCard,
  ShowCard,
  SideRevealCard,
  PixelHover,
  NeoBrutalism,
  CircleExpand,
  FolderCard
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
      {
        name: "children",
        type: "text",
        default: '"Hover Me"',
        description: "Button content",
      },
      {
        name: "strength",
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
        default: "0.35",
        description: "Magnetic strength",
      },
      {
        name: "radius",
        type: "range",
        min: 0,
        max: 500,
        step: 1,
        default: "150",
        description: "Activation radius",
      },
      {
        name: "ease",
        type: "range",
        min: 0.01,
        max: 1,
        step: 0.01,
        default: "0.15",
        description: "Movement smoothness",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "front",
        type: "text",
        default: '"Front"',
        description: "Front text",
      },
      {
        name: "back",
        type: "text",
        default: '"Back"',
        description: "Back text",
      },
      {
        name: "duration",
        type: "range",
        min: 100,
        max: 2000,
        step: 50,
        default: "500",
        description: "Animation duration in ms",
      },
      {
        name: "frontColor",
        type: "color",
        default: '"#323237"',
        description: "Front background",
      },
      {
        name: "backColor",
        type: "color",
        default: '"#adadaf"',
        description: "Back background",
      },
      {
        name: "textColor",
        type: "color",
        default: '"#adadaf"',
        description: "Front text color",
      },
      {
        name: "backTextColor",
        type: "color",
        default: '"#323237"',
        description: "Back text color",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "children",
        type: "text",
        default: '"Hover Me!"',
        description: "Button content",
      },
      {
        name: "fillColor",
        type: "color",
        default: '"#38146a"',
        description: "Fill color",
      },
      {
        name: "textColor",
        type: "color",
        default: '"#fff"',
        description: "Default text color",
      },
      {
        name: "hoverTextColor",
        type: "color",
        default: '"#fff"',
        description: "Hover text color",
      },
      {
        name: "duration",
        type: "range",
        min: 100,
        max: 2000,
        step: 50,
        default: "350",
        description: "Fill duration in ms",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "front",
        type: "text",
        default: '"Front"',
        description: "Front face content",
      },
      {
        name: "back",
        type: "text",
        default: '"Back"',
        description: "Back face content",
      },
      {
        name: "duration",
        type: "range",
        min: 100,
        max: 2000,
        step: 50,
        default: "500",
        description: "Rotation duration",
      },
      {
        name: "frontColor",
        type: "color",
        default: '"#323237"',
        description: "Front background",
      },
      {
        name: "backColor",
        type: "color",
        default: '"#adadaf"',
        description: "Back background",
      },
      {
        name: "textColor",
        type: "color",
        default: '"#adadaf"',
        description: "Front text color",
      },
      {
        name: "backTextColor",
        type: "color",
        default: '"#323237"',
        description: "Back text color",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "idleText",
        type: "text",
        default: '"SUBMIT"',
        description: "Initial text",
      },
      {
        name: "loadingText",
        type: "text",
        default: '"SENDING..."',
        description: "Loading label/API value",
      },
      {
        name: "successText",
        type: "text",
        default: '"SUBMITTED"',
        description: "Success label/API value",
      },
      {
        name: "duration",
        type: "range",
        min: 500,
        max: 6000,
        step: 50,
        default: "2250",
        description: "Loading duration",
      },
      {
        name: "successDuration",
        type: "range",
        min: 500,
        max: 4000,
        step: 50,
        default: "1250",
        description: "Success duration",
      },
      {
        name: "color",
        type: "color",
        default: '"#1ECD97"',
        description: "Primary color",
      },
      {
        name: "loadingColor",
        type: "color",
        default: '"#bbbbbb"',
        description: "Spinner color",
      },
      {
        name: "successColor",
        type: "color",
        default: '"#471ecd"',
        description: "Success color",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "children",
        type: "text",
        default: '"POSITION AWARE"',
        description: "Button content",
      },
      {
        name: "fillColor",
        type: "color",
        default: '"#333"',
        description: "Circular fill color",
      },
      {
        name: "textColor",
        type: "color",
        default: '"#fff"',
        description: "Default text color",
      },
      {
        name: "hoverTextColor",
        type: "color",
        default: '"#fff"',
        description: "Hover text color",
      },
      {
        name: "duration",
        type: "range",
        min: 100,
        max: 2000,
        step: 50,
        default: "400",
        description: "Fill duration in ms",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "filename",
        type: "text",
        default: '"File.pdf"',
        description: "File name displayed by the button",
      },
      {
        name: "buttonText",
        type: "text",
        default: '"Upload"',
        description: "Initial button label",
      },
      {
        name: "uploadingText",
        type: "text",
        default: '"Uploading..."',
        description: "Label shown during upload",
      },
      {
        name: "completedText",
        type: "text",
        default: '"Completed"',
        description: "Label shown after upload completes",
      },
      {
        name: "uploadDuration",
        type: "range",
        min: 500,
        max: 8000,
        step: 100,
        default: "3000",
        description: "Upload animation duration",
      },
      {
        name: "completeDuration",
        type: "range",
        min: 500,
        max: 5000,
        step: 100,
        default: "2000",
        description: "Completion state duration",
      },
      {
        name: "buttonColor",
        type: "color",
        default: '"#3bafda"',
        description: "Button background color",
      },
      {
        name: "progressColor",
        type: "color",
        default: '"#2d334c"',
        description: "Upload progress color",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "words",
        type: "array",
        default: "[]",
        description: "Array of phrases to type and delete (comma separated)",
      },
      {
        name: "typingSpeed",
        type: "range",
        min: 20,
        max: 300,
        step: 5,
        default: "100",
        description: "Typing speed in milliseconds",
      },
      {
        name: "deletingSpeed",
        type: "range",
        min: 10,
        max: 200,
        step: 5,
        default: "50",
        description: "Deleting speed in milliseconds",
      },
      {
        name: "pauseDuration",
        type: "range",
        min: 200,
        max: 3000,
        step: 50,
        default: "1000",
        description: "Pause duration between phrases in milliseconds",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "phrases",
        type: "array",
        default: "[]",
        description: "Array of phrases to scramble between (comma separated)",
      },
      {
        name: "pauseDuration",
        type: "range",
        min: 200,
        max: 3000,
        step: 50,
        default: "800",
        description: "Pause duration between phrases in milliseconds",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "children",
        type: "text",
        default: '"COLORS"',
        description: "Text content",
      },
      {
        name: "shadowOffset",
        type: "range",
        min: 0,
        max: 300,
        step: 1,
        default: "100",
        description: "Shadow offset",
      },
      {
        name: "shadowOpacity",
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
        default: "0.5",
        description: "Shadow opacity",
      },
      {
        name: "shadowSaturation",
        type: "range",
        min: 0,
        max: 100,
        step: 1,
        default: "50",
        description: "Shadow color saturation",
      },
      {
        name: "shadowLightness",
        type: "range",
        min: 0,
        max: 100,
        step: 1,
        default: "50",
        description: "Shadow color lightness",
      },
      {
        name: "smoothing",
        type: "range",
        min: 0.01,
        max: 1,
        step: 0.01,
        default: "0.08",
        description: "Cursor movement smoothing",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "children",
        type: "text",
        default: '"WAVES"',
        description: "Text content",
      },
      {
        name: "colors",
        type: "array",
        default: '["#f24c00", "#9792e3", "#fc7a1e", "#eda96d"]',
        description:
          "Colors used for the layered text effect (comma separated)",
      },
      {
        name: "depth",
        type: "range",
        min: 0,
        max: 40,
        step: 1,
        default: "12",
        description: "3D layer depth",
      },
      {
        name: "rotate",
        type: "range",
        min: 0,
        max: 20,
        step: 0.5,
        default: "3",
        description: "Rotation amount",
      },
      {
        name: "skew",
        type: "range",
        min: 0,
        max: 20,
        step: 0.5,
        default: "3",
        description: "Skew amount",
      },
      {
        name: "perspective",
        type: "range",
        min: 100,
        max: 1500,
        step: 10,
        default: "500",
        description: "3D perspective value",
      },
      {
        name: "smoothing",
        type: "range",
        min: 0.01,
        max: 1,
        step: 0.01,
        default: "0.2",
        description: "Cursor movement smoothing",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
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
      {
        name: "beforeText",
        type: "text",
        default: `"Sometimes I'll start a line of code and I"`,
        description: "Text displayed before the highlighted text",
      },
      {
        name: "magicText",
        type: "text",
        default: `"don't even know"`,
        description: "Highlighted animated text",
      },
      {
        name: "afterText",
        type: "text",
        default: `"where it's going."`,
        description: "Text displayed after the highlighted text",
      },
      {
        name: "colors",
        type: "array",
        default: '["#7b1fa2", "#673ab7", "#f48fb1"]',
        description: "Gradient colors for the magic text (comma separated)",
      },
      {
        name: "starCount",
        type: "range",
        min: 0,
        max: 10,
        step: 1,
        default: "3",
        description: "Number of decorative stars",
      },
      {
        name: "starInterval",
        type: "range",
        min: 200,
        max: 3000,
        step: 50,
        default: "1000",
        description: "Interval between star appearances in milliseconds",
      },
      {
        name: "starSize",
        type: "range",
        min: 8,
        max: 60,
        step: 1,
        default: "24",
        description: "Decorative star size",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class",
      },
    ],
  },

  "three-d-card": {
    title: "3D Card",
    description:
      "A 3D interactive card with a background image, dynamic tilt effect, perspective, and optional glow.",

    preview: ThreeDCard,

    previewProps: {
      image:
        "https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      glow: true,
      glowColor: "#ffffff",
      glowIntensity: 0.35,
      tiltIntensity: 1,
      perspective: 1500,
      className: "three-d-card",
      children: "3D Card",
    },

    usage: {
      language: "jsx",
      code: `import { ThreeDCard } from "tatva-ui"

export function ThreeDCardDemo() {
  return (
    <ThreeDCard
      image="https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
      glow={true}
      glowColor="#ffffff"
      glowIntensity={0.35}
      tiltIntensity={1}
      perspective={1500}
      className="three-d-card"
    >
      3D Card
    </ThreeDCard>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Customize the card size, typography, border, background image positioning, and overall appearance using your custom class.",
      language: "css",
      code: `.three-d-card {
  width: 320px;
  height: 420px;
  border-radius: 20px;
  padding: 24px;

  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-align: right;

  background-size: cover;
  background-position: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}`,
    },

    props: [
      {
        name: "children",
        type: "text",
        default: `"3D Card"`,
        description: "Content displayed inside the card",
      },
      {
        name: "image",
        type: "text",
        default: `"https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"`,
        description: "Background image for the card",
      },
      {
        name: "glow",
        type: "boolean",
        default: "true",
        description: "Enable or disable the card glow effect",
      },
      {
        name: "glowColor",
        type: "color",
        default: `"#ffffff"`,
        description: "Color of the card glow",
      },
      {
        name: "glowIntensity",
        type: "range",
        min: 0,
        max: 1,
        step: 0.05,
        default: "0.35",
        description: "Intensity of the glow effect",
      },
      {
        name: "tiltIntensity",
        type: "range",
        min: 0,
        max: 3,
        step: 0.1,
        default: "1",
        description: "Strength of the 3D tilt effect",
      },
      {
        name: "perspective",
        type: "range",
        min: 500,
        max: 3000,
        step: 50,
        default: "1500",
        description: "Perspective distance used for the 3D effect",
      },
      {
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class",
      },
    ],
  },

  "gliter-card": {
    title: "Gliter Card",
    description:
      "An interactive card with a smooth glitter and light movement effect that follows the user's interaction.",

    preview: GliterCard,

    previewProps: {
      ease: 0.12,
      className: "gliter-card",
      children: "Gliter Card",
    },

    usage: {
      language: "jsx",
      code: `import { GliterCard } from "tatva-ui"

export function GliterCardDemo() {
  return (
    <GliterCard
      ease={0.12}
      className="gliter-card"
    >
      <h2>Premium Card</h2>
      <p>You can put anything inside this card.</p>
    </GliterCard>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Customize the card dimensions, spacing, typography, and content styling using your custom class.",
      language: "css",
      code: `.gliter-card {
  width: 400px;
  height: 300px;
  padding: 30px;

  font-family: sans-serif;
}

.gliter-card h2 {
  margin: 0 0 8px;
  font-size: 28px;
}

.gliter-card p {
  margin: 0;
  font-size: 16px;
}`,
    },

    props: [
      {
        name: "children",
        type: "text",
        default: `"Gliter Card"`,
        description: "Content displayed inside the card",
      },
      {
        name: "ease",
        type: "range",
        min: 0.01,
        max: 1,
        step: 0.01,
        default: "0.12",
        description:
          "Controls the smoothness of the glitter and light movement",
      },
      {
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class",
      },
    ],
  },

  "pixel-card": {
    title: "Pixel Card",
    description:
      "An interactive card with animated pixel effects that appear around the card when the user interacts with it.",

    preview: PixelCard,

    previewProps: {
      effect: 2,
      className: "pixel-card",
      children: "Pixel Card",
    },

    usage: {
      language: "jsx",
      code: `import { PixelCard } from "tatva-ui"

export function PixelCardDemo() {
  return (
    <PixelCard
      effect={2}
      className="pixel-card"
    >
      <h2>Code</h2>
      <p>Build something amazing.</p>
    </PixelCard>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Customize the card dimensions, border, background, typography, spacing, and content alignment using your custom class.",
      language: "css",
      code: `.pixel-card {
  width: 280px;
  height: 350px;
  border-radius: 18px;
  border: 1px solid #3f3f46;
  background: #111113;
  padding: 24px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.pixel-card h2 {
  margin: 0 0 8px;
}

.pixel-card p {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
}`,
    },

    props: [
      {
        name: "children",
        type: "text",
        default: `"Pixel Card"`,
        description: "Content displayed inside the card",
      },
      {
        name: "effect",
        type: "range",
        min: 1,
        max: 4,
        step: 1,
        default: "1",
        description: "Selects the pixel effect from 1 to 4",
      },
      {
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class",
      },
    ],

    effects: [
      {
        name: "1",
        description: "White / grey pixels",
      },
      {
        name: "2",
        description: "Cyan / blue pixels",
      },
      {
        name: "3",
        description: "Yellow / gold pixels",
      },
      {
        name: "4",
        description: "Pink / red pixels",
      },
    ],
  },

  "animated-border-card": {
    title: "Animated Border Card",
    description:
      "A card with a smoothly rotating multi-color gradient border and an optional soft glow.",

    preview: AnimatedBorderCard,

    previewProps: {
      color1: "#22d3ee",
      color2: "#facc15",
      color3: "#ec4899",
      radius: 20,
      borderWidth: 1.5,
      direction: "clockwise",
      trigger: "always",
      duration: 5,
      glow: true,
      className: "animated-border-card",
      children: "Animated Border Card",
    },

    usage: {
      language: "jsx",
      code: `import { AnimatedBorderCard } from "tatva-ui"

export function AnimatedBorderCardDemo() {
  return (
    <AnimatedBorderCard
      color1="#22d3ee"
      color2="#facc15"
      color3="#ec4899"
      radius={20}
      borderWidth={1.5}
      direction="clockwise"
      trigger="always"
      duration={5}
      glow={true}
      className="animated-border-card"
    >
      Animated Border Card
    </AnimatedBorderCard>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Customize the card size, content spacing, alignment, and typography using your custom class.",
      language: "css",
      code: `.animated-border-card {
  width: 360px;
  height: 280px;
}

.animated-border-card .tattva-animated-border-card__content {
  padding: 24px;
  text-align: center;
}`,
    },

    props: [
      {
        name: "children",
        type: "text",
        default: `"Animated Border Card"`,
        description: "Content displayed inside the card",
      },
      {
        name: "color1",
        type: "color",
        default: `"#22d3ee"`,
        description: "First gradient color",
      },
      {
        name: "color2",
        type: "color",
        default: `"#facc15"`,
        description: "Second gradient color",
      },
      {
        name: "color3",
        type: "color",
        default: `"#ec4899"`,
        description: "Third gradient color",
      },
      {
        name: "radius",
        type: "range",
        min: 0,
        max: 50,
        step: 1,
        default: "20",
        description: "Border radius of the card",
      },
      {
        name: "borderWidth",
        type: "range",
        min: 0.5,
        max: 5,
        step: 0.5,
        default: "1.5",
        description: "Thickness of the animated border",
      },
      {
        name: "direction",
        type: "select",
        options: ["clockwise", "counterclockwise"],
        default: `"clockwise"`,
        description: "Rotation direction of the animated border",
      },
      {
        name: "trigger",
        type: "select",
        options: ["always", "hover"],
        default: `"always"`,
        description:
          "Controls whether the animation runs continuously or only on hover/focus",
      },
      {
        name: "duration",
        type: "range",
        min: 1,
        max: 15,
        step: 0.5,
        default: "5",
        description: "Time in seconds for one complete border rotation",
      },
      {
        name: "glow",
        type: "boolean",
        default: "true",
        description: "Enable or disable the soft glow effect",
      },
      {
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class",
      },
      {
        name: "style",
        type: "object",
        default: "undefined",
        description: "Inline styles for the card root element",
      },
    ],
  },

  "show-card": {
    title: "Show Card",
    description:
      "An expandable project showcase card with an image, project details, tags, a preview button, and customizable colors.",

    preview: ShowCard,

    previewProps: {
      className: "project-card",
      image: "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/batman.jpg",
      imageAlt: "Man are brave",
      title: "Batman",
      subtitle: "Do you bleed",
      showPreview: true,
      previewLabel: "Live Link",
      previewHref: "https://me.rixhabh.in",
      heading: "How to become Batman",
      tags: [
        "Rich",
        "intelligence",
        { label: "TatvaUI", href: "https://react.dev" },
      ],
      description: "Short story about the project...",
      openLabel: "View",
      closeLabel: "Close",
      defaultOpen: false,
      cardColor: "#faf8f7",
      panelColor: "#ececec",
      textColor: "#0a0a0a",
      mutedTextColor: "#1c1c1c",
      titleColor: "#ffffff",
      subtitleColor: "#cbd5e1",
      tagColor: "#959595",
      tagTextColor: "#000000",
    },

    usage: {
      language: "jsx",
      code: `import { ShowCard } from "tatva-ui"

export function ShowCardDemo() {
  return (
    <ShowCard
      className="my-project-card"
      image="/projects/nova.jpg"
      imageAlt="Nova CRM project preview"
      title="Nova CRM"
      subtitle="Web App"
      imageHref="https://example.com/nova"
      showPreview={true}
      previewLabel="Preview Project"
      previewHref="https://example.com/nova"
      heading="How Nova CRM came together"
      tags={[
        "Nova Labs",
        "6 Weeks",
        { label: "React", href: "https://react.dev" }
      ]}
      description="Short story about the project..."
      cardColor="#0f172a"
      panelColor="#1e293b"
      textColor="#f8fafc"
      mutedTextColor="#94a3b8"
      titleColor="#ffffff"
      subtitleColor="#cbd5e1"
      tagColor="#334155"
      tagTextColor="#e2e8f0"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Use your custom class to position the card and control its placement on the page.",
      language: "css",
      code: `.my-project-card {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}`,
    },

    props: [
      {
        name: "image",
        type: "text",
        default: `"gradient placeholder"`,
        description: "URL of the project image",
      },
      {
        name: "imageAlt",
        type: "text",
        default: `"title"`,
        description: "Accessible alt text for the image",
      },
      {
        name: "title",
        type: "text",
        default: `"Adella AI"`,
        description: "Title displayed over the image",
      },
      {
        name: "subtitle",
        type: "text",
        default: `"Product Design"`,
        description: "Subtitle displayed over the image",
      },
      {
        name: "imageHref",
        type: "text",
        default: `"undefined"`,
        description: "Optional link that makes the image clickable",
      },
      {
        name: "imageTarget",
        type: "select",
        options: ["_self", "_blank"],
        default: `"undefined"`,
        description: "Target for the image link",
      },
      {
        name: "showPreview",
        type: "boolean",
        default: "true",
        description: "Show or hide the preview button",
      },
      {
        name: "previewLabel",
        type: "text",
        default: `"Preview Project"`,
        description: "Text displayed on the preview button",
      },
      {
        name: "previewHref",
        type: "text",
        default: `"undefined"`,
        description: "Optional URL opened by the preview button",
      },
      {
        name: "previewTarget",
        type: "select",
        options: ["_self", "_blank"],
        default: `"_blank"`,
        description: "Target for the preview link",
      },
      {
        name: "onPreview",
        type: "text",
        default: `"undefined"`,
        description: "Click handler used when previewHref is not provided",
      },
      {
        name: "heading",
        type: "text",
        default: `"The Thought process behind Adella AI."`,
        description: "Heading displayed in the expanded panel",
      },
      {
        name: "tags",
        type: "array",
        default: "3 default tags",
        description:
          "Array of tag strings or objects with label, href, and target",
      },
      {
        name: "description",
        type: "text",
        default: `"Default paragraph"`,
        description: "Description displayed in the expanded panel",
      },
      {
        name: "children",
        type: "text",
        default: `"undefined"`,
        description: "Custom content replacing the default panel details",
      },
      {
        name: "openLabel",
        type: "text",
        default: `"View"`,
        description: "Label for opening the expanded panel",
      },
      {
        name: "closeLabel",
        type: "text",
        default: `"Close"`,
        description: "Label for closing the expanded panel",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Sets the initial expanded state in uncontrolled mode",
      },
      {
        name: "open",
        type: "boolean",
        default: `"undefined"`,
        description: "Controls the expanded state when using controlled mode",
      },
      {
        name: "onToggle",
        type: "text",
        default: `"undefined"`,
        description: "Callback receiving the next expanded state",
      },
      {
        name: "cardColor",
        type: "color",
        default: `"component default"`,
        description: "Background color of the main card",
      },
      {
        name: "panelColor",
        type: "color",
        default: `"component default"`,
        description: "Background color of the expanded panel",
      },
      {
        name: "textColor",
        type: "color",
        default: `"component default"`,
        description: "Color of the panel heading and chevron",
      },
      {
        name: "mutedTextColor",
        type: "color",
        default: `"component default"`,
        description: "Color of the description and toggle label",
      },
      {
        name: "titleColor",
        type: "color",
        default: `"component default"`,
        description: "Color of the image title",
      },
      {
        name: "subtitleColor",
        type: "color",
        default: `"component default"`,
        description: "Color of the image subtitle",
      },
      {
        name: "tagColor",
        type: "color",
        default: `"component default"`,
        description: "Background color of tag chips",
      },
      {
        name: "tagTextColor",
        type: "color",
        default: `"component default"`,
        description: "Text color of tag chips",
      },
      {
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class for the root element",
      },
      {
        name: "style",
        type: "object",
        default: `"undefined"`,
        description: "Inline styles for the root element",
      },
    ],
  },

  "side-reveal-card": {
    title: "Side Reveal Card",
    description:
      "A two-sided interactive card that reveals profile details with a smooth transition and customizable arrow controls.",

    preview: SideRevealCard,

    previewProps: {
      className: "team-card",
      image: "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/sideReveal?updatedAt=1791959791151",
      imageAlt: "Aya Takahashi",
      thumbnail: "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/sideReveal?updatedAt=1791959791151",
      title: "Aya Takahashi",
      subtitle: "(Founder, Studio)",
      description: "Studio is a digital marketing agency building powerful brands and strengthening digital presence through creative strategies, impactful design, and result-driven marketing.",
      arrowColor: "#ffffff",
      arrowHoverColor: "#facc15",
      arrowIconColor: "#000000",
      titleColor: "#ffffff",
      subtitleColor: "#d1d5db",
      backColor: "#fef3c7",
      descriptionColor: "#374151",
      backTitleColor: "#111827",
      backSubtitleColor: "#111827",
      backArrowColor: "#000000",
      backArrowIconColor: "#ffffff",
      quoteColor: "#d1d5db",
      defaultOpen: false,
      openLabel: "Show details",
      closeLabel: "Go back",
    },

    usage: {
      language: "jsx",
      code: `import { SideRevealCard } from "tatva-ui"

export function SideRevealCardDemo() {
  return (
    <SideRevealCard
      className="team-card"
      image="/team/aya.jpg"
      imageAlt="Aya Takahashi"
      thumbnail="/team/aya.jpg"
      title="Aya Takahashi"
      subtitle="(Founder, Studio)"
      description="Short bio goes here..."
      arrowColor="#ffffff"
      arrowHoverColor="#facc15"
      arrowIconColor="#000000"
      titleColor="#ffffff"
      subtitleColor="#d1d5db"
      backColor="#fef3c7"
      descriptionColor="#374151"
      backTitleColor="#111827"
      backSubtitleColor="#111827"
      backArrowColor="#000000"
      backArrowIconColor="#ffffff"
      quoteColor="#d1d5db"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Customize the card dimensions, positioning, and responsive layout using your custom class.",
      language: "css",
      code: `.team-card {
  width: 100%;
  max-width: 340px;
  min-height: 420px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  font-family: sans-serif;
}

/* Responsive sizing */
@media (max-width: 480px) {
  .team-card {
    max-width: 100%;
    min-height: 380px;
  }
}`,
    },

    props: [
      {
        name: "image",
        type: "text",
        default: `"gradient placeholder"`,
        description: "Background image displayed on the front card",
      },
      {
        name: "imageAlt",
        type: "text",
        default: `"title"`,
        description: "Accessible alt text for the background image",
      },
      {
        name: "thumbnail",
        type: "text",
        default: `"same as image"`,
        description: "Thumbnail image displayed on the second card",
      },
      {
        name: "title",
        type: "text",
        default: `"Takahashi Aya"`,
        description: "Profile title displayed on both cards",
      },
      {
        name: "subtitle",
        type: "text",
        default: `"(CEO, Pentaclay)"`,
        description: "Profile subtitle displayed on both cards",
      },
      {
        name: "description",
        type: "text",
        default: `"Default paragraph"`,
        description: "Description displayed on the back card",
      },
      {
        name: "children",
        type: "text",
        default: `"undefined"`,
        description: "Custom content replacing the default description",
      },
      {
        name: "arrowColor",
        type: "color",
        default: `"#ffffff"`,
        description: "Initial background color of the front arrow button",
      },
      {
        name: "arrowHoverColor",
        type: "color",
        default: `"#eaff4d"`,
        description: "Hover background color of the front arrow button",
      },
      {
        name: "arrowIconColor",
        type: "color",
        default: `"#000000"`,
        description: "Icon color of the front arrow button",
      },
      {
        name: "titleColor",
        type: "color",
        default: `"#ffffff"`,
        description: "Title color on the front card",
      },
      {
        name: "subtitleColor",
        type: "color",
        default: `"light white"`,
        description: "Subtitle color on the front card",
      },
      {
        name: "backColor",
        type: "color",
        default: `"#ffffff"`,
        description: "Background color of the back card",
      },
      {
        name: "descriptionColor",
        type: "color",
        default: `"grey"`,
        description: "Description text color on the back card",
      },
      {
        name: "backTitleColor",
        type: "color",
        default: `"#000000"`,
        description: "Title color on the back card",
      },
      {
        name: "backSubtitleColor",
        type: "color",
        default: `"#000000"`,
        description: "Subtitle color on the back card",
      },
      {
        name: "backArrowColor",
        type: "color",
        default: `"#000000"`,
        description: "Background color of the back arrow button",
      },
      {
        name: "backArrowIconColor",
        type: "color",
        default: `"#ffffff"`,
        description: "Icon color of the back arrow button",
      },
      {
        name: "quoteColor",
        type: "color",
        default: `"light grey"`,
        description: "Color of the quote icon on the back card",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "Initial expanded state in uncontrolled mode",
      },
      {
        name: "open",
        type: "boolean",
        default: `"undefined"`,
        description: "Controls the card state in controlled mode",
      },
      {
        name: "onToggle",
        type: "text",
        default: `"undefined"`,
        description: "Callback receiving the next open state",
      },
      {
        name: "openLabel",
        type: "text",
        default: `"Show details"`,
        description: "Accessible label for opening the details card",
      },
      {
        name: "closeLabel",
        type: "text",
        default: `"Go back"`,
        description: "Accessible label for returning to the front card",
      },
      {
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class for the root element",
      },
      {
        name: "style",
        type: "object",
        default: `"undefined"`,
        description: "Inline styles for the root element",
      },
    ],
  },

  "pixel-hover": {
    title: "Pixel Hover",
    description:
      "An interactive product card that transitions between images using a pixelated hover effect, with customizable product details and styling.",

    preview: PixelHover,

    previewProps: {
      className: "product-card",
      image: "https://cdn.example.com/flat-lay.jpg",
      hoverImage: "https://cdn.example.com/model.jpg",
      imageAlt: "Atlas Knit Cardigan",
      title: "Atlas Knit Cardigan",
      description: "Chunky merino knit in burnt sienna.",
      priceLabel: "Price",
      price: "€129",
      buttonText: "Add to Cart",
      buttonHref: "/products/atlas",
      cardColor: "#ffffff",
      titleColor: "#292524",
      descriptionColor: "#78716c",
      priceLabelColor: "#78716c",
      priceColor: "#1c1917",
      buttonColor: "#7c3aed",
      buttonHoverColor: "#4c1d95",
      buttonTextColor: "#ffffff",
      pixelSize: 4,
      duration: 0.9,
      showGrid: false,
      gridColor: "#d6d3d1",
      imageHeight: 260,
      imageFit: "cover",
      imagePosition: "center top",
      imageBackground: "#e7e5e0",
    },

    usage: {
      language: "jsx",
      code: `import { PixelHover } from "tatva-ui"

export function PixelHoverDemo() {
  return (
    <PixelHover
      className="product-card"
      image="https://cdn.example.com/flat-lay.jpg"
      hoverImage="https://cdn.example.com/model.jpg"
      imageAlt="Atlas Knit Cardigan"
      title="Atlas Knit Cardigan"
      description="Chunky merino knit in burnt sienna."
      priceLabel="Price"
      price="€129"
      buttonText="Add to Cart"
      buttonHref="/products/atlas"
      cardColor="#ffffff"
      imageHeight={260}
      imageFit="cover"
      imagePosition="center top"
      buttonColor="#7c3aed"
      buttonHoverColor="#4c1d95"
      pixelSize={4}
      duration={0.9}
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Customize the card width, spacing, typography, and rounded corners.",
      language: "css",
      code: `.product-card {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  font-family: sans-serif;
}`,
    },

    props: [
      {
        name: "image",
        type: "text",
        default: `"gradient placeholder"`,
        description: "Default product image URL",
      },
      {
        name: "hoverImage",
        type: "text",
        default: `"gradient placeholder"`,
        description: "Image revealed by the pixel hover effect",
      },
      {
        name: "imageAlt",
        type: "text",
        default: `"title"`,
        description: "Accessible alt text for the product image",
      },
      {
        name: "title",
        type: "text",
        default: `"Atlas Knit Cardigan"`,
        description: "Product title",
      },
      {
        name: "description",
        type: "text",
        default: `"Chunky merino knit in burnt sienna."`,
        description: "Short product description",
      },
      {
        name: "priceLabel",
        type: "text",
        default: `"Price"`,
        description: "Label displayed above or beside the price",
      },
      {
        name: "price",
        type: "text",
        default: `"€129"`,
        description: "Product price",
      },
      {
        name: "buttonText",
        type: "text",
        default: `"Buy Now"`,
        description: "Text displayed on the action button",
      },
      {
        name: "buttonHref",
        type: "text",
        default: `"undefined"`,
        description: "Optional URL for the action button",
      },
      {
        name: "buttonTarget",
        type: "select",
        options: ["_self", "_blank"],
        default: `"undefined"`,
        description: "Target for the button link",
      },
      {
        name: "onButtonClick",
        type: "text",
        default: `"undefined"`,
        description:
          "Click handler when using a button action instead of a link",
      },
      {
        name: "cardColor",
        type: "color",
        default: `"#ffffff"`,
        description: "Card background color",
      },
      {
        name: "titleColor",
        type: "color",
        default: `"component default"`,
        description: "Product title color",
      },
      {
        name: "descriptionColor",
        type: "color",
        default: `"component default"`,
        description: "Product description color",
      },
      {
        name: "priceLabelColor",
        type: "color",
        default: `"component default"`,
        description: "Price label color",
      },
      {
        name: "priceColor",
        type: "color",
        default: `"component default"`,
        description: "Price text color",
      },
      {
        name: "buttonColor",
        type: "color",
        default: `"#2b1810"`,
        description: "Action button background color",
      },
      {
        name: "buttonHoverColor",
        type: "color",
        default: `"#b5502a"`,
        description: "Action button hover background color",
      },
      {
        name: "buttonTextColor",
        type: "color",
        default: `"#ffffff"`,
        description: "Action button text color",
      },
      {
        name: "pixelSize",
        type: "range",
        min: 2,
        max: 5,
        step: 1,
        default: "3",
        description: "Size of pixels used in the transition effect",
      },
      {
        name: "duration",
        type: "range",
        min: 0.1,
        max: 5,
        step: 0.1,
        default: "0.7",
        description: "Duration of the pixel transition in seconds",
      },
      {
        name: "showGrid",
        type: "boolean",
        default: "false",
        description: "Show subtle pixel grid lines",
      },
      {
        name: "gridColor",
        type: "color",
        default: `"component default"`,
        description: "Color of the pixel grid lines",
      },
      {
        name: "imageHeight",
        type: "text",
        default: `"auto"`,
        description: "Fixed image height in pixels or a CSS length",
      },
      {
        name: "imageAspectRatio",
        type: "text",
        default: `"6 / 5"`,
        description: "Image aspect ratio when imageHeight is not specified",
      },
      {
        name: "imageFit",
        type: "select",
        options: ["cover", "contain"],
        default: `"cover"`,
        description: "Controls how the image fits its container",
      },
      {
        name: "imagePosition",
        type: "text",
        default: `"center"`,
        description: "Controls the image crop focus",
      },
      {
        name: "imageBackground",
        type: "color",
        default: `"#e7e5e0"`,
        description: "Background behind images when using contain",
      },
      {
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class for the card",
      },
      {
        name: "style",
        type: "object",
        default: `"undefined"`,
        description: "Inline styles for the root element",
      },
    ],
  },

  "neo-brutalism": {
    title: "Neo Brutalism",
    description:
      "A responsive neo-brutalist card with bold typography, a customizable header, offset shadow, and subtle hover animation.",

    preview: NeoBrutalism,

    previewProps: {
      headerText: "NEWS",
      date: "05/11/26",
      title: "SHIP FASTER, LOOK BETTER, EASY CUSTOMIZATION",
      description:
        "Drop this card into any project and go. Bold by default, customizable in seconds.",
      linkText: "Learn more",
      href: "/news",
      width: "320px",
      height: "auto",
      minHeight: "350px",
      headerColor: "#f078f2",
      cardColor: "#ffffff",
      borderColor: "#171717",
      shadowColor: "#171717",
      headerTextColor: "#000000",
      dateColor: "#737373",
      titleColor: "#171717",
      descriptionColor: "#404040",
      linkColor: "#171717",
      borderWidth: 3,
      shadowOffset: 5,
      hoverOffset: 3,
      className: "news-card",
    },

    usage: {
      language: "jsx",
      code: `import { NeoBrutalism } from "tatva-ui"

export function NeoBrutalismDemo() {
  return (
    <NeoBrutalism
      headerText="NEWS"
      date="05/11/26"
      title="SHIP FASTER, LOOK BETTER, EASY CUSTOMIZATION"
      description="Drop this card into any project and go. Bold by default, customizable in seconds."
      linkText="Learn more"
      href="/news"
      width="320px"
      minHeight="350px"
      headerColor="#f078f2"
      cardColor="#ffffff"
      borderColor="#171717"
      shadowColor="#171717"
      titleColor="#171717"
      descriptionColor="#404040"
      linkColor="#171717"
      borderWidth={3}
      shadowOffset={5}
      hoverOffset={3}
      className="news-card"
    />
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Customize the card width, typography, and heading appearance using your custom class.",
      language: "css",
      code: `.news-card {
  width: 320px;
  min-height: 350px;
  font-family: Arial, sans-serif;
}

.news-card h2 {
  letter-spacing: -0.5px;
}`,
    },

    props: [
      {
        name: "headerText",
        type: "text",
        default: `"NEWS"`,
        description: "Label displayed in the card header",
      },
      {
        name: "date",
        type: "text",
        default: `"05/11/26"`,
        description: "Date displayed on the card",
      },
      {
        name: "title",
        type: "text",
        default: `"Example headline"`,
        description: "Main card heading",
      },
      {
        name: "description",
        type: "text",
        default: `"Example description"`,
        description: "Supporting text displayed below the heading",
      },
      {
        name: "linkText",
        type: "text",
        default: `"Learn more"`,
        description: "Text displayed for the card link",
      },
      {
        name: "href",
        type: "text",
        default: `"#"`,
        description: "Link destination for standard anchor navigation",
      },
      {
        name: "to",
        type: "text",
        default: `"undefined"`,
        description: "Route path for router-based navigation",
      },
      {
        name: "LinkComponent",
        type: "text",
        default: `"a"`,
        description: "Custom link component, such as React Router Link",
      },
      {
        name: "width",
        type: "text",
        default: `"290px"`,
        description: "Card width as a CSS length",
      },
      {
        name: "height",
        type: "text",
        default: `"auto"`,
        description: "Card height as a CSS length",
      },
      {
        name: "minHeight",
        type: "text",
        default: `"330px"`,
        description: "Minimum card height",
      },
      {
        name: "headerColor",
        type: "color",
        default: `"#f078f2"`,
        description: "Header background color",
      },
      {
        name: "cardColor",
        type: "color",
        default: `"#ffffff"`,
        description: "Main card background color",
      },
      {
        name: "borderColor",
        type: "color",
        default: `"#171717"`,
        description: "Card border color",
      },
      {
        name: "shadowColor",
        type: "color",
        default: `"#171717"`,
        description: "Offset shadow color",
      },
      {
        name: "headerTextColor",
        type: "color",
        default: `"#000000"`,
        description: "Header label text color",
      },
      {
        name: "dateColor",
        type: "color",
        default: `"#737373"`,
        description: "Date text color",
      },
      {
        name: "titleColor",
        type: "color",
        default: `"#171717"`,
        description: "Main heading color",
      },
      {
        name: "descriptionColor",
        type: "color",
        default: `"#404040"`,
        description: "Description text color",
      },
      {
        name: "linkColor",
        type: "color",
        default: `"#171717"`,
        description: "Link text and arrow color",
      },
      {
        name: "borderWidth",
        type: "range",
        min: 1,
        max: 8,
        step: 1,
        default: "3",
        description: "Thickness of the card border in pixels",
      },
      {
        name: "shadowOffset",
        type: "range",
        min: 0,
        max: 15,
        step: 1,
        default: "5",
        description: "Offset distance of the card shadow in pixels",
      },
      {
        name: "hoverOffset",
        type: "range",
        min: 0,
        max: 10,
        step: 1,
        default: "3",
        description: "Card movement distance on hover in pixels",
      },
      {
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class",
      },
    ],
  },

  "circle-expand": {
    title: "Circle Expand",
    description:
      "An interactive image card with an expanding circular overlay, customizable text, arrow styling, and smooth hover transitions.",
    preview: CircleExpand,
    previewProps: {
      image: "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/space.jpg?updatedAt=1791986900603",
      imageAlt: "Rain on fern leaves",
      imagePosition: "50% 30%",
      imageScale: 1.12,
      topText: "Dreamscape",
      title: "Beyond Reality",
      description: "Where dreams take shape",
      width: "100%",
      minWidth: 400,
      maxWidth: 400,
      height: 500,
      borderRadius: 28,
      circleSize: 56,
      circleColor: "#002463",
      overlayColor: "#002463",
      arrowColor: "#ffffff",
      arrowHoverColor: "#ffffff",
      arrow: "--",
      arrowRotation: -45,
      topTextColor: "#fff",
      hoverTopTextColor: "#fff",
      titleColor: "#fff",
      hoverTitleColor: "#fff",
      descriptionColor: "#ddd",
      hoverDescriptionColor: "#fff",
      transitionDuration: 900,
      easing: "cubic-bezier(0.65, 0, 0.35, 1)",
    },
    usage: {
      language: "jsx",
      code: `import { CircleExpand } from "tattva-ui";

export default function Example() {
  return (
    <CircleExpand
      image="/img/forest.jpg"
      imageAlt="Rain on fern leaves"
      topText="Nature"
      title="OverSpace"
      description="Explore the canopy"
      width="100%"
      maxWidth={400}
      height={500}
      circleColor="#ffd166"
      overlayColor="#ef476f"
      arrow="→"
    />
  );
}`,
    },
    css: {
      title: "CSS Styling",
      description:
        "Customize the card dimensions and appearance using a wrapper class.",
      language: "css",
      code: `.circle-expand-demo {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}`,
    },
    props: [
      {
        name: "image",
        type: "string",
        default: "Unsplash URL",
        description: "Background image URL for the card.",
      },
      {
        name: "imageAlt",
        type: "string",
        default: '""',
        description:
          "Alternative text for the image. An empty string marks it as decorative.",
      },
      {
        name: "imagePosition",
        type: "string",
        default: '"center"',
        description: "Controls the image position, such as '50% 30%'.",
      },
      {
        name: "imageScale",
        type: "number",
        default: 1.08,
        description: "Controls the image scale.",
        min: 1,
        max: 2,
        step: 0.01,
      },
      {
        name: "topText",
        type: "string",
        default: '"Top Text"',
        description:
          "Small text displayed above the title. Empty string hides it.",
      },
      {
        name: "title",
        type: "string",
        default: '"Card Title"',
        description: "Main heading displayed on the card.",
      },
      {
        name: "description",
        type: "string",
        default: '"Card subtitle"',
        description: "Supporting text displayed below the title.",
      },
      {
        name: "width",
        type: "string | number",
        default: '"285px"',
        description: "Card width. Numbers are interpreted as pixels.",
      },
      {
        name: "height",
        type: "string | number",
        default: '"336px"',
        description: "Card height. Numbers are interpreted as pixels.",
      },
      {
        name: "minWidth",
        type: "string | number",
        default: "none",
        description: "Optional minimum card width.",
      },
      {
        name: "maxWidth",
        type: "string | number",
        default: '"100%"',
        description: "Optional maximum card width.",
      },
      {
        name: "borderRadius",
        type: "string | number",
        default: "20",
        description: "Controls the card corner radius.",
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Custom CSS class applied to the card.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline CSS styles for the card.",
      },
      {
        name: "topTextColor",
        type: "color",
        default: '"#ffffff"',
        description: "Top text color before expansion.",
      },
      {
        name: "hoverTopTextColor",
        type: "color",
        default: '"#0f3d22"',
        description: "Top text color during expansion.",
      },
      {
        name: "titleColor",
        type: "color",
        default: '"#ffffff"',
        description: "Title color before expansion.",
      },
      {
        name: "hoverTitleColor",
        type: "color",
        default: '"#0f3d22"',
        description: "Title color during expansion.",
      },
      {
        name: "descriptionColor",
        type: "color",
        default: '"rgba(255,255,255,0.85)"',
        description: "Description color before expansion.",
      },
      {
        name: "hoverDescriptionColor",
        type: "color",
        default: '"#1d5a36"',
        description: "Description color during expansion.",
      },
      {
        name: "circleColor",
        type: "color",
        default: '"#b9f0c4"',
        description: "Color of the circle in its resting state.",
      },
      {
        name: "overlayColor",
        type: "color",
        default: "circleColor",
        description: "Color of the expanded circular overlay.",
      },
      {
        name: "arrowColor",
        type: "color",
        default: '"#0f3d22"',
        description: "Arrow color in its resting state.",
      },
      {
        name: "arrowHoverColor",
        type: "color",
        default: "arrowColor",
        description: "Arrow color during hover.",
      },
      {
        name: "arrow",
        type: "string | ReactNode",
        default: '"↗"',
        description: "Arrow content; accepts text or a React node.",
      },
      {
        name: "showArrow",
        type: "boolean",
        default: true,
        description: "Controls whether the arrow is displayed.",
      },
      {
        name: "circleSize",
        type: "string | number",
        default: "44",
        description: "Size of the expanding circle.",
      },
      {
        name: "arrowRotation",
        type: "number",
        default: 45,
        description: "Arrow rotation angle in degrees.",
        min: -360,
        max: 360,
        step: 1,
      },
      {
        name: "transitionDuration",
        type: "number",
        default: 750,
        description: "Animation duration in milliseconds.",
        min: 100,
        max: 2000,
        step: 50,
      },
      {
        name: "easing",
        type: "string",
        default: '"cubic-bezier(0.22,1,0.36,1)"',
        description: "CSS easing function for the transition.",
      },
      {
        name: "hoverScale",
        type: "number | string",
        default: '"auto"',
        description: "Advanced override for the hover scale.",
      },
      {
        name: "enableHover",
        type: "boolean",
        default: true,
        description: "Enables hover interactions.",
      },
      {
        name: "tapToToggle",
        type: "boolean",
        default: true,
        description: "Allows tapping or clicking to toggle the expanded state.",
      },
      {
        name: "onClick",
        type: "function",
        default: "none",
        description: "Callback invoked when the card is clicked.",
      },
      {
        name: "onMouseEnter",
        type: "function",
        default: "none",
        description: "Callback invoked when the pointer enters the card.",
      },
      {
        name: "onMouseLeave",
        type: "function",
        default: "none",
        description: "Callback invoked when the pointer leaves the card.",
      },
    ],
  },

  "folder-card": {
    title: "Folder Card",
    description:
      "An interactive folder-style card where the image rises as the folder opens on hover, creating a smooth and playful animation.",
    preview: FolderCard,
    previewProps: {
      image: "",
      imageAlt: "Project preview",
      label: "01",
      title: "Creative Projects",
      description: "Explore something new",
      arrow: "↗",
      width: "260px",
      height: "340px",
    },
    usage: {
      language: "jsx",
      code: `import { FolderCard } from "tattva-ui";

export default function Example() {
  return (
    <FolderCard
      image="/img/project.png"
      label="01"
      title="Creative Projects"
      description="Explore something new"
    />
  );
}`,
    },
    css: {
      title: "CSS Styling",
      description: "Customize the card layout using a custom class.",
      language: "css",
      code: `.my-folder {
  margin: 0 auto;
}`,
    },
    props: [
      {
        name: "image",
        type: "string",
        default: "Built-in placeholder",
        description: "Image URL or data URI displayed inside the folder.",
      },
      {
        name: "imageAlt",
        type: "string",
        default: '""',
        description: "Alternative text for the image.",
      },
      {
        name: "imageBackground",
        type: "string",
        default: "Purple radial gradient",
        description: "Background shown behind the image.",
      },
      {
        name: "imageFit",
        type: "string",
        default: '"contain"',
        description: "Controls how the image fits inside its container.",
        options: ["contain", "cover", "fill", "none", "scale-down"],
      },
      {
        name: "imageWidth",
        type: "string | number",
        default: '"80%"',
        description: "Width of the image relative to the card's inner area.",
      },
      {
        name: "imageHeight",
        type: "string | number",
        default: '"58%"',
        description: "Height of the image relative to the card's inner area.",
      },
      {
        name: "imageTop",
        type: "string | number",
        default: '"6%"',
        description: "Image's top position when the folder is open.",
      },
      {
        name: "panelColor",
        type: "color",
        default: '"#08063f"',
        description: "Background color of the outer panel.",
      },
      {
        name: "folderColor",
        type: "color",
        default: '"#02002f"',
        description: "Color of the folder body and tab.",
      },
      {
        name: "folderHeight",
        type: "string | number",
        default: '"78%"',
        description: "Folder height in its closed state.",
      },
      {
        name: "folderOpenHeight",
        type: "string | number",
        default: '"50%"',
        description: "Folder height when opened on hover.",
      },
      {
        name: "tabWidth",
        type: "string | number",
        default: '"36%"',
        description: "Width of the folder tab.",
      },
      {
        name: "tabHeight",
        type: "string | number",
        default: '"16px"',
        description: "Height of the raised folder tab.",
      },
      {
        name: "folderRadius",
        type: "string | number",
        default: '"16px"',
        description: "Corner radius of the folder tab and body.",
      },
      {
        name: "panelPadding",
        type: "string | number",
        default: 6,
        description: "Thickness of the outer panel frame.",
      },
      {
        name: "label",
        type: "string",
        default: '"01"',
        description: "Text displayed on the folder tab.",
      },
      {
        name: "title",
        type: "string",
        default: '"Simple and easy to use"',
        description: "Main heading displayed on the card.",
      },
      {
        name: "description",
        type: "string",
        default: '"Fully customize to suit your needs"',
        description: "Supporting text below the title.",
      },
      {
        name: "arrow",
        type: "ReactNode",
        default: '"↗"',
        description: "Arrow content; accepts text, emoji, or a React element.",
      },
      {
        name: "showArrow",
        type: "boolean",
        default: true,
        description: "Controls whether the arrow is visible.",
      },
      {
        name: "labelColor",
        type: "color",
        default: '"#ffffff"',
        description: "Color of the folder label.",
      },
      {
        name: "titleColor",
        type: "color",
        default: '"#ffffff"',
        description: "Color of the title.",
      },
      {
        name: "descriptionColor",
        type: "color",
        default: '"rgba(255, 255, 255, 0.6)"',
        description: "Color of the description.",
      },
      {
        name: "arrowColor",
        type: "color",
        default: '"rgba(255, 255, 255, 0.85)"',
        description: "Color of the arrow.",
      },
      {
        name: "width",
        type: "string | number",
        default: '"260px"',
        description: "Width of the card.",
      },
      {
        name: "height",
        type: "string | number",
        default: '"340px"',
        description: "Height of the card.",
      },
      {
        name: "minWidth",
        type: "string | number",
        default: "none",
        description: "Minimum width of the card.",
      },
      {
        name: "maxWidth",
        type: "string | number",
        default: '"100%"',
        description: "Maximum width of the card.",
      },
      {
        name: "borderRadius",
        type: "string | number",
        default: '"24px"',
        description: "Outer corner radius of the card.",
      },
      {
        name: "transitionDuration",
        type: "string | number",
        default: 650,
        description: "Animation duration in milliseconds or CSS time format.",
      },
      {
        name: "easing",
        type: "string",
        default: '"cubic-bezier(0.22, 1, 0.36, 1)"',
        description: "CSS timing function used for the animation.",
      },
      {
        name: "enableHover",
        type: "boolean",
        default: true,
        description: "Enables or disables the hover opening animation.",
      },
      {
        name: "tapToToggle",
        type: "boolean",
        default: true,
        description: "Allows touch users to toggle the folder by tapping.",
      },
      {
        name: "onClick",
        type: "function",
        default: "none",
        description: "Click handler. Makes the card keyboard-accessible.",
      },
      {
        name: "onMouseEnter",
        type: "function",
        default: "none",
        description: "Callback invoked when the pointer enters the card.",
      },
      {
        name: "onMouseLeave",
        type: "function",
        default: "none",
        description: "Callback invoked when the pointer leaves the card.",
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Custom CSS class applied to the card.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles applied to the card.",
      },
    ],
  },
};

export default docs;
