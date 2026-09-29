import React from "react";
import { Search, Menu } from "lucide-react";
import "./mobileTopBar.css";

const MobileTopBar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="mobile-topbar">
      <div className="mobile-topbar-search">
        <Search size={17} />

        <input type="text" placeholder="Search documentation..." />

        <div className="search-shortcut">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

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
        <a href="/templates">Templates</a>
        <a href="/docs" className="active">
          Docs
        </a>
        <a href="/sponsors">Sponsors</a>
      </nav>

      <div className="mobile-topbar-bottom">
        <span className="x-link">𝕏</span>

        <div className="github-pill">
          <span>◉</span>
          <span>★ 1.2K</span>
        </div>
      </div>
    </header>
  );
};

export default MobileTopBar;
