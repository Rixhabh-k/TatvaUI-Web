import React from "react";
import { Search, Menu } from "lucide-react";
import "./mobileTopBar.css";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
const MobileTopBar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="mobile-topbar">
      {/* <div className="mobile-topbar-search">
        <Search size={17} />

        <input type="text" placeholder="Search documentation..." />

        <div className="search-shortcut">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div> */}

      <div className="mobile-topbar-brand">
        <span>Tatva UI</span>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu">
          <Menu size={17} />
        </button>
      </div>

      <nav className="mobile-topbar-links">
        <NavLink
          onClick={() => setIsMenuOpen(false)}
          to="/templates"
          className={({ isActive }) => (isActive ? "active" : "")}>
          Templates
        </NavLink>

        <NavLink
          onClick={() => setIsMenuOpen(false)}
          to="/docs"
          end
          className={({ isActive }) => (isActive ? "active" : "")}>
          Docs
        </NavLink>

        <NavLink
          onClick={() => setIsMenuOpen(false)}
          to="/sponsors"
          className={({ isActive }) => (isActive ? "active" : "")}>
          Sponsors
        </NavLink>
      </nav>

      <div className="mobile-topbar-bottom">
        <a href="https://github.com/Rixhabh-k/TatvaUI-Web" target="_blank" className="x-link">
          <FaGithub />
        </a>

        <div className="github-pill">
          <span>◉</span>
          <span>★ 0</span>
        </div>
      </div>
    </header>
  );
};

export default MobileTopBar;
