import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./controlPanel.css";

const toHex6 = (value) => {
  if (typeof value !== "string") return "#000000";

  const color = value.trim();

  if (/^#[0-9a-f]{6}$/i.test(color)) return color;

  if (/^#[0-9a-f]{3}$/i.test(color)) {
    return (
      "#" +
      color
        .slice(1)
        .split("")
        .map((char) => char + char)
        .join("")
    );
  }

  return "#000000";
};

const isHexColor = (v) =>
  typeof v === "string" && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v.trim());

// array prop ko "colors list" treat karna hai ya nahi
const isColorArray = (prop, value) => {
  if (prop.type !== "array") return false;
  if (prop.itemType === "color") return true;
  if (/colou?rs?$/i.test(prop.name || "")) return true;
  return Array.isArray(value) && value.length > 0 && value.every(isHexColor);
};

const ArrayInput = ({ value, onChange }) => {
  const [text, setText] = useState(
    Array.isArray(value) ? value.join(", ") : ""
  );

  return (
    <input
      className="control-text-input"
      type="text"
      value={text}
      onChange={(e) => {
        const newValue = e.target.value;
        setText(newValue);
        onChange(
          newValue
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        );
      }}
    />
  );
};

/* ---------- Color helpers ---------- */
const PRESETS = [
  "#a855f7", "#7c3aed", "#6366f1", "#3b82f6", "#06b6d4", "#10b981", "#84cc16",
  "#eab308", "#f97316", "#ef4444", "#ec4899", "#f43f5e", "#ffffff", "#94a3b8",
  "#000000",
];

const clamp01 = (n) => Math.min(Math.max(n, 0), 1);

const hexToHsv = (hex) => {
  const h6 = toHex6(hex);
  const r = parseInt(h6.slice(1, 3), 16) / 255;
  const g = parseInt(h6.slice(3, 5), 16) / 255;
  const b = parseInt(h6.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }

  return { h, s: max ? d / max : 0, v: max };
};

const hsvToHex = ({ h, s, v }) => {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;

  let rgb;
  if (h < 60) rgb = [c, x, 0];
  else if (h < 120) rgb = [x, c, 0];
  else if (h < 180) rgb = [0, c, x];
  else if (h < 240) rgb = [0, x, c];
  else if (h < 300) rgb = [x, 0, c];
  else rgb = [c, 0, x];

  return (
    "#" +
    rgb
      .map((n) =>
        Math.round((n + m) * 255)
          .toString(16)
          .padStart(2, "0")
      )
      .join("")
  );
};

// pointer drag helper (mouse + touch)
const dragHandlers = (onMove) => {
  const move = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onMove(
      clamp01((e.clientX - rect.left) / rect.width),
      clamp01((e.clientY - rect.top) / rect.height)
    );
  };

  return {
    onPointerDown: (e) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      move(e);
    },
    onPointerMove: (e) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e);
    },
  };
};

/* ---------- Editable hex input ---------- */
const HexInput = ({ value, onCommit, className = "", label }) => {
  const hex = toHex6(value);
  const [text, setText] = useState(hex);
  const [focused, setFocused] = useState(false);

  const parseHex = (raw, allowShort) => {
    let t = raw.trim();
    if (!t.startsWith("#")) t = "#" + t;
    if (/^#[0-9a-f]{6}$/i.test(t)) return t.toLowerCase();
    if (allowShort && /^#[0-9a-f]{3}$/i.test(t)) return toHex6(t).toLowerCase();
    return null;
  };

  const invalid = !/^#?[0-9a-f]{0,6}$/i.test(text.trim());

  const commit = () => {
    const parsed = parseHex(text, true);
    if (parsed) {
      if (parsed !== hex.toLowerCase()) onCommit(parsed);
      setText(parsed);
    } else {
      setText(hex); // galat input ho to purana color wapas
    }
  };

  // bahar se color badle (picker / reset) to text bhi badle, typing ke time nahi
  useEffect(() => {
    if (!focused) setText(hex);
  }, [hex, focused]);

  return (
    <input
      className={`control-hex-input ${invalid ? "invalid" : ""} ${className}`}
      type="text"
      value={text}
      maxLength={7}
      spellCheck={false}
      autoComplete="off"
      aria-label={label}
      onFocus={(e) => {
        setFocused(true);
        e.target.select();
      }}
      onBlur={() => {
        setFocused(false);
        commit();
      }}
      onChange={(e) => {
        const next = e.target.value;
        setText(next);
        const parsed = parseHex(next, false); // 6 digit hote hi live apply
        if (parsed && parsed !== hex.toLowerCase()) onCommit(parsed);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.currentTarget.blur();
        if (e.key === "Escape") {
          setText(hex);
          e.currentTarget.blur();
        }
      }}
    />
  );
};

/* ---------- Picker popover (portal + fixed) ---------- */
const ColorPopover = ({
  anchorEl,
  value,
  onChange,
  onClose,
  label,
  showHex = false,
  onRemove,
}) => {
  const hex = toHex6(value);
  const [hsv, setHsv] = useState(() => hexToHsv(hex));
  const [pos, setPos] = useState({ top: -9999, left: -9999 });
  const popRef = useRef(null);

  const place = () => {
    const pop = popRef.current;
    if (!anchorEl || !pop) return;

    const r = anchorEl.getBoundingClientRect();
    const w = pop.offsetWidth;
    const h = pop.offsetHeight;
    const gap = 8;
    const edge = 8;

    let left = r.right - w;
    left = Math.max(edge, Math.min(left, window.innerWidth - w - edge));

    let top = r.bottom + gap;
    if (top + h > window.innerHeight - edge && r.top - gap - h >= edge) {
      top = r.top - gap - h;
    }
    top = Math.max(edge, top);

    setPos({ top, left });
  };

  useLayoutEffect(() => {
    place();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorEl]);

  useEffect(() => {
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorEl]);

  // value bahar se badle to picker sync ho
  useEffect(() => {
    if (hsvToHex(hsv).toLowerCase() !== hex.toLowerCase()) {
      setHsv(hexToHsv(hex));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hex]);

  // bahar click ya Escape pe band
  useEffect(() => {
    const onDown = (e) => {
      const inside =
        (popRef.current && popRef.current.contains(e.target)) ||
        (anchorEl && anchorEl.contains(e.target));
      if (!inside) onClose();
    };
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorEl]);

  const update = (next) => {
    setHsv(next);
    onChange(hsvToHex(next));
  };

  const pickPreset = (color) => {
    setHsv(hexToHsv(color));
    onChange(color);
  };

  return createPortal(
    <div
      ref={popRef}
      className="cp-popover"
      style={{ top: pos.top, left: pos.left }}
      role="dialog"
      aria-label={`${label} picker`}
    >
      {/* Saturation / brightness */}
      <div
        className="cp-sv"
        style={{ "--hue": `hsl(${hsv.h}, 100%, 50%)` }}
        {...dragHandlers((x, y) => update({ ...hsv, s: x, v: 1 - y }))}
      >
        <span
          className="cp-sv-handle"
          style={{ left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%` }}
        />
      </div>

      {/* Hue */}
      <div
        className="cp-hue"
        {...dragHandlers((x) => update({ ...hsv, h: x * 360 }))}
      >
        <span
          className="cp-hue-handle"
          style={{ left: `${(hsv.h / 360) * 100}%` }}
        />
      </div>

      {/* Presets */}
      <div className="cp-presets">
        {PRESETS.map((color) => (
          <button
            key={color}
            type="button"
            className={`cp-preset ${
              color.toLowerCase() === hex.toLowerCase() ? "active" : ""
            }`}
            style={{ background: color }}
            onClick={() => pickPreset(color)}
            aria-label={color}
          />
        ))}
      </div>

      {/* Hex + remove (multi-color list ke liye) */}
      {(showHex || onRemove) && (
        <div className="cp-hex-row">
          <HexInput
            value={hex}
            onCommit={(c) => {
              setHsv(hexToHsv(c));
              onChange(c);
            }}
            label={`${label} hex code`}
          />
          {onRemove && (
            <button type="button" className="cp-remove" onClick={onRemove}>
              Remove
            </button>
          )}
        </div>
      )}
    </div>,
    document.body
  );
};

/* ---------- Single color ---------- */
const ColorField = ({ name, description, value, onChange }) => {
  const hex = toHex6(value);
  const [anchor, setAnchor] = useState(null);

  return (
    <div
      className={`control-item control-color-item ${anchor ? "is-open" : ""}`}
      title={description || undefined}
    >
      <span className="control-name">{name}</span>

      <div className="control-color">
        <button
          type="button"
          className="color-swatch"
          style={{ background: hex }}
          onClick={(e) => {
            const el = e.currentTarget;
            setAnchor((a) => (a === el ? null : el));
          }}
          aria-expanded={Boolean(anchor)}
          aria-label={`${name} color picker`}
        />
        <HexInput value={hex} onCommit={onChange} label={`${name} hex code`} />
      </div>

      {anchor && (
        <ColorPopover
          anchorEl={anchor}
          value={hex}
          onChange={onChange}
          onClose={() => setAnchor(null)}
          label={name}
        />
      )}
    </div>
  );
};

/* ---------- Multiple colors (array of hex) ---------- */
const ColorListField = ({ name, description, value, onChange }) => {
  const colors = Array.isArray(value) ? value : [];
  const [active, setActive] = useState(null); // { index, el }

  const setAt = (index, color) => {
    const next = colors.slice();
    next[index] = color;
    onChange(next);
  };

  const add = () => {
    const last = colors.length ? toHex6(colors[colors.length - 1]) : "#ffffff";
    onChange([...colors, last]);
  };

  const remove = (index) => {
    onChange(colors.filter((_, i) => i !== index));
    setActive(null);
  };

  return (
    <div
      className={`control-item control-colors-item ${active ? "is-open" : ""}`}
      title={description || undefined}
    >
      <span className="control-name">{name}</span>

      <div className="color-list">
        {colors.map((c, i) => (
          <button
            key={i}
            type="button"
            className={`color-swatch ${active && active.index === i ? "selected" : ""}`}
            style={{ background: toHex6(c) }}
            title={toHex6(c)}
            onClick={(e) => {
              const el = e.currentTarget;
              setActive((a) => (a && a.index === i ? null : { index: i, el }));
            }}
            aria-label={`${name} ${i + 1}: ${toHex6(c)}`}
          />
        ))}

        <button
          type="button"
          className="color-add"
          onClick={add}
          aria-label={`Add ${name}`}
          title="Add color"
        >
          +
        </button>
      </div>

      {active && colors[active.index] !== undefined && (
        <ColorPopover
          key={active.index}
          anchorEl={active.el}
          value={colors[active.index]}
          onChange={(c) => setAt(active.index, c)}
          onClose={() => setActive(null)}
          label={`${name} ${active.index + 1}`}
          showHex
          onRemove={colors.length > 1 ? () => remove(active.index) : undefined}
        />
      )}
    </div>
  );
};

const ResetIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaletteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.5-1.9-.3-1 .4-2.1 1.5-2.1H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="7.5" cy="11" r="1.1" fill="currentColor" />
    <circle cx="10.5" cy="7" r="1.1" fill="currentColor" />
    <circle cx="15" cy="7.5" r="1.1" fill="currentColor" />
  </svg>
);

const ControlPanel = ({
  props = [],
  values = {},
  onChange,
  onReset,
  onOpenStudio, // optional: "Open in BG Studio" button sirf tab dikhega jab ye pass karo
  studioLabel = "Open in BG Studio",
}) => {
  return (
    <section className="playground-controls">
      {/* Header */}
      <div className="controls-header">
        <div className="controls-title">
          <span>Customize</span>
        </div>

        <div className="controls-actions">
          <button type="button" className="header-btn reset-controls" onClick={onReset}>
            <ResetIcon />
            <span>Reset</span>
          </button>

          {onOpenStudio && (
            <button type="button" className="header-btn open-studio" onClick={onOpenStudio}>
              <PaletteIcon />
              <span>{studioLabel}</span>
            </button>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="controls-grid">
        {props.map((prop) => {
          // className playground mein expose nahi karna
          if (prop.name === "className") return null;

          const value = values[prop.name];
          const type = prop.type || "text";

          const displayValue = Array.isArray(value)
            ? value.join(", ")
            : String(value ?? "");

          /* ---------- Range ---------- */
          if (type === "range") {
            const min = Number(prop.min ?? 0);
            const max = Number(prop.max ?? 100);
            const step = Number(prop.step ?? 1);

            const num = Math.min(Math.max(Number(value ?? min), min), max);
            const ratio = max === min ? 0 : (num - min) / (max - min);

            return (
              <label
                className="control-item control-range-item"
                key={prop.name}
                title={prop.description || undefined}
                style={{ "--p": ratio }}
              >
                <span className="range-fill" />
                <span className="range-ticks" />
                <span className="range-thumb" />

                <span className="control-name">{prop.name}</span>
                <span className="control-value" title={displayValue}>
                  {displayValue}
                </span>

                <input
                  className="control-range"
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={num}
                  aria-label={prop.name}
                  onChange={(e) => onChange(prop.name, Number(e.target.value))}
                />
              </label>
            );
          }

          /* ---------- Boolean ---------- */
          if (type === "boolean") {
            return (
              <div
                className="control-item control-boolean"
                key={prop.name}
                title={prop.description || undefined}
              >
                <span className="control-name">{prop.name}</span>

                <button
                  type="button"
                  className={`control-toggle ${value ? "active" : ""}`}
                  onClick={() => onChange(prop.name, !value)}
                  aria-pressed={Boolean(value)}
                  aria-label={prop.name}
                >
                  <span className="toggle-knob" />
                </button>
              </div>
            );
          }

          /* ---------- Color ---------- */
          if (type === "color") {
            return (
              <ColorField
                key={prop.name}
                name={prop.name}
                description={prop.description}
                value={value}
                onChange={(v) => onChange(prop.name, v)}
              />
            );
          }

          /* ---------- Array of colors ---------- */
          if (isColorArray(prop, value)) {
            return (
              <ColorListField
                key={prop.name}
                name={prop.name}
                description={prop.description}
                value={value}
                onChange={(v) => onChange(prop.name, v)}
              />
            );
          }

          /* ---------- Array ---------- */
          if (type === "array") {
            return (
              <div
                className="control-item control-field"
                key={prop.name}
                title={prop.description || undefined}
              >
                <span className="control-name">{prop.name}</span>
                <ArrayInput value={value} onChange={(v) => onChange(prop.name, v)} />
              </div>
            );
          }

          /* ---------- Text (default) ---------- */
          return (
            <div
              className="control-item control-field"
              key={prop.name}
              title={prop.description || undefined}
            >
              <span className="control-name">{prop.name}</span>
              <input
                className="control-text-input"
                type="text"
                value={value ?? ""}
                aria-label={prop.name}
                onChange={(e) => onChange(prop.name, e.target.value)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ControlPanel;