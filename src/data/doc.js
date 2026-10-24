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
  FolderCard,
  DayNightToggle,
  MoodToggle,
  SleepyCat,
  RockerSwitch,
  EyeToggle,
  PadlockToggle,
  BellToggle,
  CandleToggle,
  FireflyJar,
  LavaLamp,
  RecordPlayer,
  RocketToggle,
  NeonSign,
  FlowerBloom,
} from "tatva-ui";
//tying to push
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
      image:
        "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/batman.jpg",
      imageAlt: "Man are brave",
      title: "Batman",
      subtitle: "Do you bleed",
      showPreview: true,
      previewLabel: "Live Link",
      previewHref: "https://me.rixhabh.in",
      previewTarget: "_blank",
      heading: "How to become Batman",
      tags: [
        "Rich",
        "intelligence",
        { label: "TatvaUI", href: "https://react.dev" },
      ],
      description: "Short story about the project...",
      openLabel: "View",
      closeLabel: "Close",
      cardColor: "#faf8f7",
      panelColor: "#ececec",
      textColor: "#0a0a0a",
      mutedTextColor: "#1c1c1c",
      titleColor: "#ffffff",
      subtitleColor: "#cbd5e1",
      tagColor: "#959595",
      tagTextColor: "#000000",
      imageHref: "me.rixhabh.in",
      imageTarget: "_blank",
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
        default: "_blank",
        description: "Target for the image link",
      },
      {
        name: "showPreview",
        type: "boolean",
        default: true,
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
        default: "_blank",
        description: "Target for the preview link",
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
    ],
  },

  "side-reveal-card": {
    title: "Side Reveal Card",
    description:
      "A two-sided interactive card that reveals profile details with a smooth transition and customizable arrow controls.",

    preview: SideRevealCard,

    previewProps: {
      className: "team-card",
      image:
        "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/sideReveal?updatedAt=1791959791151",
      imageAlt: "Aya Takahashi",
      thumbnail:
        "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/sideReveal?updatedAt=1791959791151",
      title: "Aya Takahashi",
      subtitle: "(Founder, Studio)",
      description:
        "Studio is a digital marketing agency building powerful brands and strengthening digital presence through creative strategies, impactful design, and result-driven marketing.",
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
        name: "className",
        type: "text",
        default: `""`,
        description: "Custom CSS class for the root element",
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
      image:
        "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/mode-1?updatedAt=1791959889225",
      hoverImage:
        "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/model-2.jpg?updatedAt=1791959927518",
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
      pixelSize: 2,
      duration: 0.9,
      showGrid: false,
      gridColor: "#d6d3d1",
      imageHeight: 280,
      imageAspectRatio: "6 / 5",
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
      imageHeight={350}
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
        default: "_self",
        description: "Target for the button link",
      },
      {
        name: "onButtonClick",
        type: "function",
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
        default: 3,
        description: "Size of pixels used in the transition effect",
      },
      {
        name: "duration",
        type: "range",
        min: 0.1,
        max: 5,
        step: 0.1,
        default: 0.7,
        description: "Duration of the pixel transition in seconds",
      },
      {
        name: "showGrid",
        type: "boolean",
        default: false,
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
        type: "range",
        min: 100,
        max: 600,
        step: 10,
        default: 350,
        description: "Image height in pixels.",
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
        default: "cover",
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
        default: 3,
        description: "Thickness of the card border in pixels",
      },
      {
        name: "shadowOffset",
        type: "range",
        min: 0,
        max: 15,
        step: 1,
        default: 5,
        description: "Offset distance of the card shadow in pixels",
      },
      {
        name: "hoverOffset",
        type: "range",
        min: 0,
        max: 10,
        step: 1,
        default: 3,
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
      className: "circle-expand-demo",
      image:
        "https://ik.imagekit.io/rixhabh/Tattva%20UI%20Default%20Images/space.jpg?updatedAt=1791986900603",
      imageAlt: "Dreamscape space image",
      imagePosition: "50% 30%",
      imageScale: 1.12,
      topText: "Dreamscape",
      title: "Beyond Reality",
      description: "Where dreams take shape",
      width: "100%",
      maxWidth: 300,
      height: 420,
      borderRadius: 10,
      circleSize: 56,
      circleColor: "#002463",
      overlayColor: "#002463",
      arrow: "↗",
      showArrow: true,
      arrowColor: "#ffffff",
      arrowHoverColor: "#ffffff",
      arrowRotation: 45,
      topTextColor: "#ffffff",
      hoverTopTextColor: "#ffffff",
      titleColor: "#ffffff",
      hoverTitleColor: "#ffffff",
      descriptionColor: "#dddddd",
      hoverDescriptionColor: "#ffffff",
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
      imagePosition="50% 30%"
      imageScale={1.12}
      topText="Nature"
      title="OverSpace"
      description="Explore the canopy"
      width="100%"
      maxWidth={400}
      height={500}
      borderRadius={28}
      circleSize={56}
      circleColor="#002463"
      overlayColor="#ef476f"
      arrow="→"
      showArrow={true}
      arrowColor="#ffffff"
      arrowHoverColor="#ffffff"
      arrowRotation={45}
      transitionDuration={900}
      easing="cubic-bezier(0.65, 0, 0.35, 1)"
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
        type: "text",
        default: "Unsplash URL",
        description: "Background image URL for the card.",
      },
      {
        name: "imageAlt",
        type: "text",
        default: '""',
        description: "Alternative text for the image.",
      },
      {
        name: "imagePosition",
        type: "text",
        default: '"50% 30%"',
        description: "Controls the image crop position.",
      },
      {
        name: "imageScale",
        type: "range",
        min: 1,
        max: 2,
        step: 0.01,
        default: 1.12,
        description: "Scale applied to the background image.",
      },
      {
        name: "width",
        type: "text",
        default: '"100%"',
        description: "Card width as a CSS length.",
      },
      {
        name: "maxWidth",
        type: "range",
        min: 200,
        max: 700,
        step: 10,
        default: 400,
        description: "Maximum card width in pixels.",
      },
      {
        name: "height",
        type: "range",
        min: 250,
        max: 700,
        step: 10,
        default: 500,
        description: "Card height in pixels.",
      },
      {
        name: "borderRadius",
        type: "range",
        min: 0,
        max: 60,
        step: 1,
        default: 28,
        description: "Card corner radius in pixels.",
      },
      {
        name: "topText",
        type: "text",
        default: '"Top Text"',
        description: "Small text displayed above the title.",
      },
      {
        name: "title",
        type: "text",
        default: '"Card Title"',
        description: "Main heading displayed on the card.",
      },
      {
        name: "description",
        type: "text",
        default: '"Card subtitle"',
        description: "Supporting text displayed below the title.",
      },
      {
        name: "className",
        type: "text",
        default: '""',
        description: "Custom CSS class applied to the card.",
      },
      {
        name: "topTextColor",
        type: "color",
        default: "#ffffff",
        description: "Top text color before expansion.",
      },
      {
        name: "hoverTopTextColor",
        type: "color",
        default: "#ffffff",
        description: "Top text color during expansion.",
      },
      {
        name: "titleColor",
        type: "color",
        default: "#ffffff",
        description: "Title color before expansion.",
      },
      {
        name: "hoverTitleColor",
        type: "color",
        default: "#ffffff",
        description: "Title color during expansion.",
      },
      {
        name: "descriptionColor",
        type: "color",
        default: "#dddddd",
        description: "Description color before expansion.",
      },
      {
        name: "hoverDescriptionColor",
        type: "color",
        default: "#ffffff",
        description: "Description color during expansion.",
      },
      {
        name: "circleColor",
        type: "color",
        default: "#002463",
        description: "Color of the circle in its resting state.",
      },
      {
        name: "overlayColor",
        type: "color",
        default: "#002463",
        description: "Color of the expanded circular overlay.",
      },
      {
        name: "arrowColor",
        type: "color",
        default: "#ffffff",
        description: "Arrow color in its resting state.",
      },
      {
        name: "arrowHoverColor",
        type: "color",
        default: "#ffffff",
        description: "Arrow color during hover.",
      },
      {
        name: "arrow",
        type: "text",
        default: "↗",
        description: "Arrow content.",
      },
      {
        name: "showArrow",
        type: "boolean",
        default: true,
        description: "Controls whether the arrow is displayed.",
      },
      {
        name: "circleSize",
        type: "range",
        min: 20,
        max: 200,
        step: 1,
        default: 56,
        description: "Size of the expanding circle.",
      },
      {
        name: "arrowRotation",
        type: "number",
        min: -360,
        max: 360,
        step: 1,
        default: 45,
        description: "Arrow rotation angle in degrees.",
      },
      {
        name: "transitionDuration",
        type: "number",
        min: 100,
        max: 2000,
        step: 50,
        default: 900,
        description: "Animation duration in milliseconds.",
      },
      {
        name: "easing",
        type: "text",
        default: "cubic-bezier(0.65, 0, 0.35, 1)",
        description: "CSS easing function for the transition.",
      },
      {
        name: "onClick",
        type: "function",
        default: "none",
        description: "Callback invoked when the card is clicked.",
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
      imageFit: "contain",
      imageWidth: "80%",
      imageHeight: "58%",
      imageTop: "6%",
      imageBackground: "radial-gradient(circle, #8b5cf6, #02002f)",
      panelColor: "#08063f",
      folderColor: "#02002f",
      folderHeight: "78%",
      folderOpenHeight: "50%",
      tabWidth: "36%",
      tabHeight: "16px",
      folderRadius: "16px",
      panelPadding: 6,
      label: "01",
      title: "Creative Projects",
      description: "Explore something new",
      arrow: "↗",
      showArrow: true,
      labelColor: "#ffffff",
      titleColor: "#ffffff",
      descriptionColor: "rgba(255, 255, 255, 0.6)",
      arrowColor: "rgba(255, 255, 255, 0.85)",
      width: "260px",
      height: "340px",
      minWidth: "0px",
      maxWidth: "100%",
      borderRadius: "24px",
      transitionDuration: 650,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      enableHover: true,
      tapToToggle: true,
      className: "",
      style: {},
    },

    usage: {
      language: "jsx",
      code: `import { FolderCard } from "tattva-ui";

export default function Example() {
  return (
    <FolderCard
      image="/img/project.png"
      imageAlt="Project preview"
      imageFit="contain"
      label="01"
      title="Creative Projects"
      description="Explore something new"
      width="260px"
      height="340px"
      enableHover={true}
      tapToToggle={true}
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
        type: "text",
        default: "Built-in placeholder",
        description: "Image URL or data URI displayed inside the folder.",
      },
      {
        name: "imageAlt",
        type: "text",
        default: '""',
        description: "Alternative text for the image.",
      },
      {
        name: "imageBackground",
        type: "text",
        default: "Purple radial gradient",
        description: "Background shown behind the image.",
      },
      {
        name: "imageFit",
        type: "select",
        default: "contain",
        options: ["contain", "cover", "fill", "none", "scale-down"],
        description: "Controls how the image fits inside its container.",
      },
      {
        name: "imageWidth",
        type: "text",
        default: "80%",
        description: "Width of the image relative to the card's inner area.",
      },
      {
        name: "imageHeight",
        type: "text",
        default: "58%",
        description: "Height of the image relative to the card's inner area.",
      },
      {
        name: "imageTop",
        type: "text",
        default: "6%",
        description: "Image's top position when the folder is open.",
      },
      {
        name: "panelColor",
        type: "color",
        default: "#08063f",
        description: "Background color of the outer panel.",
      },
      {
        name: "folderColor",
        type: "color",
        default: "#02002f",
        description: "Color of the folder body and tab.",
      },
      {
        name: "folderHeight",
        type: "text",
        default: "78%",
        description: "Folder height in its closed state.",
      },
      {
        name: "folderOpenHeight",
        type: "text",
        default: "50%",
        description: "Folder height when opened on hover.",
      },
      {
        name: "tabWidth",
        type: "text",
        default: "36%",
        description: "Width of the folder tab.",
      },
      {
        name: "tabHeight",
        type: "text",
        default: "16px",
        description: "Height of the raised folder tab.",
      },
      {
        name: "folderRadius",
        type: "text",
        default: "16px",
        description: "Corner radius of the folder tab and body.",
      },
      {
        name: "panelPadding",
        type: "number",
        min: 0,
        max: 30,
        step: 1,
        default: 6,
        description: "Thickness of the outer panel frame.",
      },
      {
        name: "label",
        type: "text",
        default: "01",
        description: "Text displayed on the folder tab.",
      },
      {
        name: "title",
        type: "text",
        default: "Simple and easy to use",
        description: "Main heading displayed on the card.",
      },
      {
        name: "description",
        type: "text",
        default: "Fully customize to suit your needs",
        description: "Supporting text below the title.",
      },
      {
        name: "arrow",
        type: "text",
        default: "↗",
        description: "Arrow content.",
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
        default: "#ffffff",
        description: "Color of the folder label.",
      },
      {
        name: "titleColor",
        type: "color",
        default: "#ffffff",
        description: "Color of the title.",
      },
      {
        name: "descriptionColor",
        type: "color",
        default: "rgba(255, 255, 255, 0.6)",
        description: "Color of the description.",
      },
      {
        name: "arrowColor",
        type: "color",
        default: "rgba(255, 255, 255, 0.85)",
        description: "Color of the arrow.",
      },
      {
        name: "width",
        type: "text",
        default: "260px",
        description: "Width of the card.",
      },
      {
        name: "height",
        type: "text",
        default: "340px",
        description: "Height of the card.",
      },
      {
        name: "minWidth",
        type: "text",
        default: "0px",
        description: "Minimum width of the card.",
      },
      {
        name: "maxWidth",
        type: "text",
        default: "100%",
        description: "Maximum width of the card.",
      },
      {
        name: "borderRadius",
        type: "text",
        default: "24px",
        description: "Outer corner radius of the card.",
      },
      {
        name: "transitionDuration",
        type: "number",
        min: 100,
        max: 2000,
        step: 50,
        default: 650,
        description: "Animation duration in milliseconds.",
      },
      {
        name: "easing",
        type: "text",
        default: "cubic-bezier(0.22, 1, 0.36, 1)",
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
        type: "text",
        default: "",
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

  "day-night-toggle": {
    title: "Day Night Toggle",
    description:
      "A dark-mode switch drawn as a little sky. Flip it and the sun rolls across and turns into a cratered moon, the clouds sink away and the stars come out.",

    preview: DayNightToggle,

    previewProps: {
      size: 40,
      label: "Dark mode",
      disabled: false,
      daySky: "linear-gradient(180deg, #4fa8f7 0%, #8fd0ff 100%)",
      nightSky: "linear-gradient(180deg, #0e1530 0%, #23305c 100%)",
      sunColor: "#ffd23f",
      moonColor: "#e4e8f2",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { DayNightToggle } from "tatva-ui"

export function DayNightToggleDemo() {
  const [night, setNight] = useState(false)

  return <DayNightToggle checked={night} onChange={setNight} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-dnt-size (height; everything scales with it); --tattva-dnt-day (sky by day); --tattva-dnt-night (sky by night); --tattva-dnt-sun (sun colour); --tattva-dnt-moon (moon colour); --tattva-dnt-speed (how long the change takes).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-day-night-toggle {
  --tattva-dnt-size: 48px;
  --tattva-dnt-sun: #ffb703; /* a deeper sun */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Night (dark mode) when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 24,
        max: 120,
        step: 1,
        default: "40",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Dark mode\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "daySky",
        type: "text",
        default: "linear-gradient(180deg, #4fa8f7 0%, #8fd0ff 100%)",
        description: "Sky by day. Any CSS background, gradients included.",
      },
      {
        name: "nightSky",
        type: "text",
        default: "linear-gradient(180deg, #0e1530 0%, #23305c 100%)",
        description: "Sky by night. Any CSS background, gradients included.",
      },
      {
        name: "sunColor",
        type: "color",
        default: "#ffd23f",
        description: "Colour of the sun.",
      },
      {
        name: "moonColor",
        type: "color",
        default: "#e4e8f2",
        description: "Colour of the moon.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "mood-toggle": {
    title: "Mood Toggle",
    description:
      "A switch whose knob is a little face. Off, it is sad and rolls left with a tear; on, it rolls right and smiles with rosy cheeks, blinking every time it flips.",

    preview: MoodToggle,

    previewProps: {
      size: 40,
      label: "Happy",
      disabled: false,
      offColor: "#a9b4cf",
      onColor: "#6fdc9f",
      faceColor: "#ffd84d",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { MoodToggle } from "tatva-ui"

export function MoodToggleDemo() {
  const [happy, setHappy] = useState(false)

  return <MoodToggle checked={happy} onChange={setHappy} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-mood-size (height; everything scales with it); --tattva-mood-off (track colour when off); --tattva-mood-on (track colour when on); --tattva-mood-face (colour of the face); --tattva-mood-ink (eyes and mouth); --tattva-mood-speed (how long the roll takes).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-mood-toggle {
  --tattva-mood-size: 48px;
  --tattva-mood-on: #4ade80; /* a brighter green when happy */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Happy when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 24,
        max: 120,
        step: 1,
        default: "40",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Happy\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "offColor",
        type: "color",
        default: "#a9b4cf",
        description: "Track colour when off.",
      },
      {
        name: "onColor",
        type: "color",
        default: "#6fdc9f",
        description: "Track colour when on.",
      },
      {
        name: "faceColor",
        type: "color",
        default: "#ffd84d",
        description: "Colour of the face.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "sleepy-cat": {
    title: "Sleepy Cat",
    description:
      "A switch with a cat for a knob. Off, it dozes on a dusky track with z's floating up; on, it slides into the sunshine, its eyes pop open, its ears perk up and its whiskers twitch.",

    preview: SleepyCat,

    previewProps: {
      size: 44,
      label: "Awake",
      disabled: false,
      furColor: "#f5a14a",
      nightColor: "#8f86c9",
      dayColor: "#ffd28a",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { SleepyCat } from "tatva-ui"

export function SleepyCatDemo() {
  const [awake, setAwake] = useState(false)

  return <SleepyCat checked={awake} onChange={setAwake} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-cat-size (height; everything scales with it); --tattva-cat-fur (colour of the cat); --tattva-cat-night (track colour while it sleeps); --tattva-cat-day (track colour while it is awake); --tattva-cat-ink (eyes, nose and whiskers); --tattva-cat-speed (how long the slide takes).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-sleepy-cat {
  --tattva-cat-size: 52px;
  --tattva-cat-fur: #9ca3af; /* a grey cat */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Awake when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 24,
        max: 120,
        step: 1,
        default: "44",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Awake\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "furColor",
        type: "color",
        default: "#f5a14a",
        description: "Colour of the cat.",
      },
      {
        name: "nightColor",
        type: "color",
        default: "#8f86c9",
        description: "Track colour while it sleeps.",
      },
      {
        name: "dayColor",
        type: "color",
        default: "#ffd28a",
        description: "Track colour while it is awake.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "rocker-switch": {
    title: "Rocker Switch",
    description:
      "A chunky retro power switch. The paddle tips in 3D toward the side you pressed, the pressed half falls into shadow, and an LED above it glows when the power is on.",

    preview: RockerSwitch,

    previewProps: {
      size: 56,
      label: "Power",
      disabled: false,
      ledColor: "#36f08a",
      paddleColor: "#2b2b33",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { RockerSwitch } from "tatva-ui"

export function RockerSwitchDemo() {
  const [power, setPower] = useState(false)

  return <RockerSwitch checked={power} onChange={setPower} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-rocker-size (height of the housing; everything scales with it); --tattva-rocker-led (colour of the lit LED); --tattva-rocker-paddle (colour of the paddle); --tattva-rocker-housing (colour of the housing); --tattva-rocker-speed (how quickly it tips over).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-rocker-switch {
  --tattva-rocker-size: 64px;
  --tattva-rocker-led: #ff4d4d; /* a red power light */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "On when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 32,
        max: 140,
        step: 1,
        default: "56",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Power\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "ledColor",
        type: "color",
        default: "#36f08a",
        description: "Colour of the lit LED.",
      },
      {
        name: "paddleColor",
        type: "color",
        default: "#2b2b33",
        description: "Colour of the paddle.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "eye-toggle": {
    title: "Eye Toggle",
    description:
      "A show/hide toggle drawn as an eye, made for password fields. Closed, it shows a lid and lashes; open, its pupil follows the pointer and it blinks now and then.",

    preview: EyeToggle,

    previewProps: {
      size: 40,
      label: "Show password",
      disabled: false,
      follow: true,
      irisColor: "#3d8bff",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { EyeToggle } from "tatva-ui"

export function PasswordField() {
  const [show, setShow] = useState(false)

  return (
    <div className="password-field">
      <EyeToggle checked={show} onChange={setShow} />
      <input type={show ? "text" : "password"} placeholder="Password" />
    </div>
  )
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-eye-size (height; everything scales with it); --tattva-eye-iris (colour of the iris); --tattva-eye-ink (lids and lashes); --tattva-eye-bg (the pad behind the eye).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-eye-toggle {
  --tattva-eye-size: 48px;
  --tattva-eye-iris: #22c55e; /* green eyes */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Open (password shown) when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 24,
        max: 120,
        step: 1,
        default: "40",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Show password\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "follow",
        type: "boolean",
        default: "true",
        description: "Whether the pupil follows the pointer.",
      },
      {
        name: "irisColor",
        type: "color",
        default: "#3d8bff",
        description: "Colour of the iris.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "padlock-toggle": {
    title: "Padlock Toggle",
    description:
      "A padlock. Lock it and the shackle snaps down, the keyhole turns, the body thunks and a few sparkles pop; unlock it and the shackle springs up and swings open.",

    preview: PadlockToggle,

    previewProps: {
      size: 90,
      label: "Locked",
      disabled: false,
      lockedColor: "#4f6bff",
      openColor: "#ffb020",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { PadlockToggle } from "tatva-ui"

export function PadlockToggleDemo() {
  const [locked, setLocked] = useState(false)

  return <PadlockToggle checked={locked} onChange={setLocked} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-lock-size (height; everything scales with it); --tattva-lock-locked (body colour when locked); --tattva-lock-open (body colour when open); --tattva-lock-metal (colour of the shackle).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-padlock-toggle {
  --tattva-lock-size: 98px;
  --tattva-lock-locked: #10b981; /* green when locked */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Locked when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 48,
        max: 200,
        step: 1,
        default: "90",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Locked\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "lockedColor",
        type: "color",
        default: "#4f6bff",
        description: "Body colour when locked.",
      },
      {
        name: "openColor",
        type: "color",
        default: "#ffb020",
        description: "Body colour when open.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "bell-toggle": {
    title: "Bell Toggle",
    description:
      "A notifications switch drawn as a bell. Off, it is muted and struck through; on, the slash wipes away, the bell turns gold and rings, and a badge pops up.",

    preview: BellToggle,

    previewProps: {
      size: 64,
      label: "Notifications",
      disabled: false,
      bellColor: "#ffbf1f",
      badgeColor: "#ff4d5e",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { BellToggle } from "tatva-ui"

export function BellToggleDemo() {
  const [notify, setNotify] = useState(false)

  return <BellToggle checked={notify} onChange={setNotify} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-bell-size (size of the button; everything scales with it); --tattva-bell-on (colour of the bell when on); --tattva-bell-off (colour of the bell when muted); --tattva-bell-badge (colour of the badge); --tattva-bell-bg (the round pad behind it).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-bell-toggle {
  --tattva-bell-size: 72px;
  --tattva-bell-on: #a855f7; /* a violet bell */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Notifications on when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 32,
        max: 160,
        step: 1,
        default: "64",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Notifications\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "bellColor",
        type: "color",
        default: "#ffbf1f",
        description: "Colour of the bell when on.",
      },
      {
        name: "badgeColor",
        type: "color",
        default: "#ff4d5e",
        description: "Colour of the badge.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "candle-toggle": {
    title: "Candle Toggle",
    description:
      "A candle you light with a click. On, a flame grows from the wick and flickers in its own warm glow; off, it goes out with a curl of smoke.",

    preview: CandleToggle,

    previewProps: {
      size: 110,
      label: "Candle",
      disabled: false,
      waxColor: "#f7e7c4",
      flameColor: "#ff8a1f",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { CandleToggle } from "tatva-ui"

export function CandleToggleDemo() {
  const [lit, setLit] = useState(false)

  return <CandleToggle checked={lit} onChange={setLit} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-candle-size (height; everything scales with it); --tattva-candle-wax (colour of the candle); --tattva-candle-flame (outer colour of the flame); --tattva-candle-plate (colour of the plate under it).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-candle-toggle {
  --tattva-candle-size: 118px;
  --tattva-candle-flame: #3b82f6; /* a blue flame */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Lit when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 60,
        max: 220,
        step: 1,
        default: "110",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Candle\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "waxColor",
        type: "color",
        default: "#f7e7c4",
        description: "Colour of the candle.",
      },
      {
        name: "flameColor",
        type: "color",
        default: "#ff8a1f",
        description: "Outer colour of the flame.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "firefly-jar": {
    title: "Firefly Jar",
    description:
      "A glass jar of fireflies. Off, they sleep at the bottom; on, they wake one by one, rise, and drift around the jar, each glowing to its own rhythm.",

    preview: FireflyJar,

    previewProps: {
      size: 120,
      label: "Fireflies",
      disabled: false,
      glowColor: "#e9ff70",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { FireflyJar } from "tatva-ui"

export function FireflyJarDemo() {
  const [awake, setAwake] = useState(false)

  return <FireflyJar checked={awake} onChange={setAwake} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-firefly-size (height; everything scales with it); --tattva-firefly-glow (colour of the fireflies' light).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-firefly-jar {
  --tattva-firefly-size: 128px;
  --tattva-firefly-glow: #7df9ff; /* icy blue fireflies */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Fireflies awake when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 60,
        max: 240,
        step: 1,
        default: "120",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Fireflies\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "glowColor",
        type: "color",
        default: "#e9ff70",
        description: "Colour of the fireflies' light.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "lava-lamp": {
    title: "Lava Lamp",
    description:
      "A lava lamp. Off, the wax lies cold at the bottom of dark glass; on, the lamp glows and soft blobs of wax rise, merge, split and sink again.",

    preview: LavaLamp,

    previewProps: {
      size: 130,
      label: "Lava lamp",
      disabled: false,
      waxColor: "#ffcf3a",
      liquidColor: "#ff4f7b",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { LavaLamp } from "tatva-ui"

export function LavaLampDemo() {
  const [on, setOn] = useState(false)

  return <LavaLamp checked={on} onChange={setOn} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-lava-size (height; everything scales with it); --tattva-lava-wax (colour of the wax); --tattva-lava-liquid (colour of the glowing liquid); --tattva-lava-metal (colour of the cap and base).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-lava-lamp {
  --tattva-lava-size: 138px;
  --tattva-lava-liquid: #7c3aed; /* purple lava */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "On when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 70,
        max: 260,
        step: 1,
        default: "130",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Lava lamp\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "waxColor",
        type: "color",
        default: "#ffcf3a",
        description: "Colour of the wax.",
      },
      {
        name: "liquidColor",
        type: "color",
        default: "#ff4f7b",
        description: "Colour of the glowing liquid.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "record-player": {
    title: "Record Player",
    description:
      "A little turntable. Switch it on and the tonearm swings onto the record, the vinyl spins and notes float up; switch it off and the arm lifts back while the record stops.",

    preview: RecordPlayer,

    previewProps: {
      size: 100,
      label: "Music",
      disabled: false,
      labelColor: "#ef5b3c",
      noteColor: "#ffcf5c",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { RecordPlayer } from "tatva-ui"

export function RecordPlayerDemo() {
  const [playing, setPlaying] = useState(false)

  return <RecordPlayer checked={playing} onChange={setPlaying} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-record-size (height; everything scales with it); --tattva-record-label (colour of the record's centre label); --tattva-record-note (colour of the floating notes); --tattva-record-wood (colour of the plinth).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-record-player {
  --tattva-record-size: 108px;
  --tattva-record-label: #3b82f6; /* a blue record label */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Playing when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 60,
        max: 200,
        step: 1,
        default: "100",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Music\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "labelColor",
        type: "color",
        default: "#ef5b3c",
        description: "Colour of the record's centre label.",
      },
      {
        name: "noteColor",
        type: "color",
        default: "#ffcf5c",
        description: "Colour of the floating notes.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "rocket-toggle": {
    title: "Rocket Toggle",
    description:
      "A rocket on its launch pad. Switch it on and the engine fires, the rocket lifts off in a cloud of smoke and hovers while the stars streak past; switch it off and it lands.",

    preview: RocketToggle,

    previewProps: {
      size: 96,
      label: "Launch",
      disabled: false,
      rocketColor: "#ff5a5f",
      skyColor: "#1c2250",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { RocketToggle } from "tatva-ui"

export function RocketToggleDemo() {
  const [launched, setLaunched] = useState(false)

  return <RocketToggle checked={launched} onChange={setLaunched} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-rocket-size (size of the tile; everything scales with it); --tattva-rocket-accent (nose cone and fins); --tattva-rocket-sky (the sky behind it).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-rocket-toggle {
  --tattva-rocket-size: 104px;
  --tattva-rocket-accent: #22c55e; /* a green rocket */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "In flight when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 56,
        max: 200,
        step: 1,
        default: "96",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Launch\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "rocketColor",
        type: "color",
        default: "#ff5a5f",
        description: "Colour of the nose cone and fins.",
      },
      {
        name: "skyColor",
        type: "color",
        default: "#1c2250",
        description: "Colour of the sky.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "neon-sign": {
    title: "Neon Sign",
    description:
      "A neon \"OPEN\" sign on a brick wall. Switch it on and the tubes flicker to life one letter at a time inside a glowing border; switch it off and they go dark.",

    preview: NeonSign,

    previewProps: {
      size: 80,
      label: "Open sign",
      disabled: false,
      textColor: "#ff3fa4",
      borderColor: "#3df2ff",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { NeonSign } from "tatva-ui"

export function NeonSignDemo() {
  const [open, setOpen] = useState(false)

  return <NeonSign checked={open} onChange={setOpen} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-neon-size (height; everything scales with it); --tattva-neon-text (colour of the lettering); --tattva-neon-border (colour of the border tube); --tattva-neon-wall (colour of the brick wall).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-neon-sign {
  --tattva-neon-size: 88px;
  --tattva-neon-text: #a3ff3c; /* green lettering */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "Lit when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 48,
        max: 180,
        step: 1,
        default: "80",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Open sign\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "textColor",
        type: "color",
        default: "#ff3fa4",
        description: "Colour of the lettering.",
      },
      {
        name: "borderColor",
        type: "color",
        default: "#3df2ff",
        description: "Colour of the border tube.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },

  "flower-bloom": {
    title: "Flower Bloom",
    description:
      "A flower in a pot. Off, it is a closed bud on a drooping stem; on, the stem straightens, the leaves unfurl and the petals open one after another.",

    preview: FlowerBloom,

    previewProps: {
      size: 120,
      label: "Bloom",
      disabled: false,
      petalColor: "#ff6fae",
      potColor: "#d9774a",
    },

    usage: {
      language: "jsx",
      code: `import { useState } from "react"
import { FlowerBloom } from "tatva-ui"

export function FlowerBloomDemo() {
  const [bloom, setBloom] = useState(false)

  return <FlowerBloom checked={bloom} onChange={setBloom} />
}`,
    },

    css: {
      title: "CSS Styling",
      description:
        "Everything is drawn by the component. To restyle it, set any of its CSS variables on your own class: --tattva-bloom-size (height; everything scales with it); --tattva-bloom-petal (colour of the petals); --tattva-bloom-pot (colour of the pot); --tattva-bloom-leaf (colour of the stem and leaves).",
      language: "css",
      code: `/* every variable is optional; set the ones you want on your own class */
.my-flower-bloom {
  --tattva-bloom-size: 128px;
  --tattva-bloom-petal: #a78bfa; /* lavender petals */
}`,
    },

    props: [
      {
        name: "checked",
        type: "boolean",
        default: "undefined",
        description: "In bloom when true. Pass it with onChange to control the toggle.",
        control: false,
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Starting state when you let the toggle manage itself.",
        control: false,
      },
      {
        name: "onChange",
        type: "function",
        default: "none",
        description: "Called with (checked, event) whenever it flips.",
        control: false,
      },
      {
        name: "size",
        type: "range",
        min: 60,
        max: 240,
        step: 1,
        default: "120",
        description: "Size in pixels; the whole scene scales with it.",
      },
      {
        name: "label",
        type: "text",
        default: "\"Bloom\"",
        description: "What screen readers announce.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Cannot be switched.",
      },
      {
        name: "petalColor",
        type: "color",
        default: "#ff6fae",
        description: "Colour of the petals.",
      },
      {
        name: "potColor",
        type: "color",
        default: "#d9774a",
        description: "Colour of the pot.",
      },
      {
        name: "className",
        type: "text",
        default: "\"\"",
        description: "Custom CSS class.",
      },
      {
        name: "style",
        type: "object",
        default: "none",
        description: "Inline styles.",
        control: false,
      },
    ],
  },
};

export default docs;
