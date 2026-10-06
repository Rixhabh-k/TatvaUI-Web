import { useState, useSyncExternalStore } from "react";
import "./accordionFooter.css";

/* Must match the breakpoint in accordionFooter.css. Above it the panels are
   forced open by CSS and the trigger is styled as a plain heading, so the
   markup has to say the same thing: nothing to expand, and nothing to tab to.
   useSyncExternalStore is used rather than an effect because it gives a
   correct value on the very first client render instead of after one. */
const QUERY = "(max-width: 860px)";

const subscribe = (onChange) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

const useIsAccordion = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );

const DEFAULT_SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Components", href: "#" },
      { label: "Composer", href: "#" },
    ],
  },
  {
    title: "Contributers",
    links: [
      { label: "Rishabh", href: "#" },
      { label: "Pratysh", href: "#" },
      { label: "Abhinav", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
];

const AccordionFooter = ({
  brand = "TatvaUI",
  tagline = "The component library you own outright.",
  sections = DEFAULT_SECTIONS,
  socials = [
    { label: "GitHub", glyph: "GH", href: "#" },
    { label: "X", glyph: "X", href: "#" },
    { label: "Discord", glyph: "DC", href: "#" },
  ],
  copyright = `© ${new Date().getFullYear()} TatvaUI`,
  accent = "#8C4EFB",
}) => {
  const [open, setOpen] = useState(null);
  const isAccordion = useIsAccordion();

  return (
    <footer className="tv-acc-footer" style={{ "--tv-af-accent": accent }}>
      <div className="tv-acc-footer__inner">
        <div className="tv-acc-footer__brand">
          <span className="tv-acc-footer__logo">
            <i aria-hidden="true" />
            {brand}
          </span>
          <p>{tagline}</p>

          {socials?.length > 0 && (
            <div className="tv-acc-footer__socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  {social.glyph}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="tv-acc-footer__sections">
          {sections.map((section, i) => {
            const isOpen = open === i;

            return (
              <section
                className={`tv-acc-footer__section ${isOpen ? "is-open" : ""}`}
                key={section.title}
              >
                {/* Above the breakpoint this is a heading, not a control:
                    no expanded state to report and no reason to be a tab
                    stop, since CSS is holding the panel open anyway. */}
                <button
                  type="button"
                  className="tv-acc-footer__trigger"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isAccordion ? isOpen : undefined}
                  tabIndex={isAccordion ? undefined : -1}
                >
                  {section.title}
                  <span className="tv-acc-footer__sign" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </button>

                <div className="tv-acc-footer__panel">
                  <ul>
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="tv-acc-footer__bar">
        <span>{copyright}</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
};

export default AccordionFooter;
