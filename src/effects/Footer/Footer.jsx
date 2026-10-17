import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Tatva UI home">
              
              <span className="footer-logo-text">
                Tatva/<span>ui</span>
              </span>
            </Link>

            <p className="footer-tagline">Animate Your Web Presence</p>
          </div>

          {/* Socials */}
          <div className="footer-connect">
            <h3>Connect With Us</h3>
            <div className="footer-socials">
              <a
                href="https://github.com/Rixhabh-k/TatvaUI-Web"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer-social-link"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="footer-social-link"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Tatva UI, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;