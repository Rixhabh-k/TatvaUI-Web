import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="tatva-footer">
      <div className="tatva-footer__inner">

        {/* Brand */}
        <div className="tatva-footer__brand">
          <a href="/" className="tatva-footer__logo">
            <span className="tatva-footer__logo-mark"></span>
            Tatva
          </a>

          <p className="tatva-footer__tagline">
            Animated components for<br />
            interfaces that move.
          </p>

          <div className="tatva-footer__socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>

            <a
              href="#"
              aria-label="Discord"
            >
              Discord
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="tatva-footer__links">

          <div className="tatva-footer__column">
            <h3>PRODUCT</h3>

            <a href="/components">Components</a>
            <a href="/animations">Animations</a>
            <a href="/playground">Playground</a>
          </div>

          <div className="tatva-footer__column">
            <h3>BUILDERS</h3>

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="/contribute">Contribute</a>
            <a href="/showcase">Showcase</a>
          </div>

          <div className="tatva-footer__column">
            <h3>QUICK LINKS</h3>

            <a href="/docs">Documentation</a>
            <a href="/installation">Installation</a>
            <a href="/changelog">Changelog</a>
          </div>

        </div>

        {/* Bottom */}
        <div className="tatva-footer__bottom">
          <span>© {new Date().getFullYear()} Tatva Labs</span>

          <button
            className="tatva-footer__top"
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth",
            })}
          >
            Back to top <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;