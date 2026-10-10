import React from "react";
import { Link } from "react-router";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon" />
              <span>TatvaUI</span>
            </Link>

            <p className="footer-tagline">
              The component library you own
              <br className="desktop-break" /> outright.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer-social-link"
              >
                GH
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="footer-social-link"
              >
                X
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="footer-social-link"
              >
                DC
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>PRODUCT</h3>
            <Link to="/docs/installation" className="desktop-docs">Components</Link>
            <Link to="/docs" className="mobile-docs">Components</Link>
            <a href="#">Composer</a>
          </div>

          <div className="footer-column">
            <h3>CONTRIBUTERS</h3>
            <a href="https://github.com">Rishabh</a>
            <a href="https://github.com">Pratyush</a>
            <a href="https://github.com">Abhinav</a>
          </div>

          <div className="footer-column">
            <h3>COMPANY</h3>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h3>LEGAL</h3>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">DPA</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} TatvaUI</p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

