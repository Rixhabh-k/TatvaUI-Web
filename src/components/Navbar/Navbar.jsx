import { useEffect, useRef } from "react";
import "./navbar.css";

import { FaGithub } from "react-icons/fa";

import { applyLiquidGlass } from "../../effects/liquidGlass/liquidGlass";

const Navbar = () => {
  const navbarRef = useRef(null);
  const githubRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current) return;

    const cleanup = applyLiquidGlass(navbarRef.current, {
      glassThickness: 80,
      bezelWidth: 40,
      ior: 1.4,
      scaleRatio: 1,
      blur: 1,
      specularOpacity: 0.6,
      specularSat: 0,
      tintColor: "255,255,255",
      tintOpacity: 0.03,
      innerShadow: "rgba(255,255,255,0.15)",
      innerShadowBlur: 20,
      innerShadowSpread: -2,
      balancedSpecular: true,
    });

    return cleanup;
  }, []);

  useEffect(() => {
    if (!githubRef.current) return;

    const cleanup = applyLiquidGlass(githubRef.current, {
      glassThickness: 28,
      bezelWidth: 14,
      ior: 1.35,
      scaleRatio: 0.6,
      blur: 0.8,
      specularOpacity: 0.75,
      specularSat: 0,
      tintColor: "255,255,255",
      tintOpacity: 0.035,
      innerShadow: "rgba(255,255,255,0.18)",
      innerShadowBlur: 10,
      innerShadowSpread: -1,
      balancedSpecular: true,
    });

    return cleanup;
  }, []);

  return (
    // data-radius matches the rounded-rectangle shape (was 999 for the pill)
    <nav ref={navbarRef} className="navbar" data-radius="18">
      <div className="navbar-content">
        <div className="logo">
         
          <h1>
            Tatva/<span>ui</span>
          </h1>
        </div>

        <div className="nav-links">
          <a
            ref={githubRef}
            className="github-button"
            data-radius="10"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;