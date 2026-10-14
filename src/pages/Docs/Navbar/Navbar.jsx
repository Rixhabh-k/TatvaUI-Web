import React, { useEffect, useState } from "react";
import docs from "../../../data/doc";
import { useNavigate, Link } from "react-router";
import "./navbar.css";
import Logo from "../../../../public/images/logo (1).png";

const DocsNavbar = ({ setIsMenuOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = searchOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  const componentDocs = Object.entries(docs).filter(
    ([key]) => key !== "installation",
  );

  const filteredDocs = componentDocs.filter(([key, item]) => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return true;

    return (
      key.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  const openSearch = () => {
    setSearchOpen(true);
  };

  return (
    <>
      <header className="docs-navbar">
        <div className="docs-navbar-container">
          {/* Logo */}
          <Link to="/" className="docs-navbar-logo">
            <img src={Logo} alt="Tatva UI" className="docs-navbar-logo-image" />

            <h1 className="docs-logo-text">Tatva UI</h1>
          </Link>

          {/* Desktop Search */}
          <div className="docs-navbar-search" onClick={openSearch}>
            <svg
              className="docs-navbar-search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input type="text" placeholder="Search documentation..." readOnly />

            <div className="docs-navbar-search-shortcut">
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>

          {/* Mobile Search */}
          <button
            className="docs-navbar-mobile-search"
            onClick={openSearch}
            aria-label="Search documentation">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

          {/* Navigation */}
          <nav className="docs-navbar-links">
            <Link to="/templates" className="docs-navbar-link">
              Templates
            </Link>

            <Link to="/docs/installation" className="docs-navbar-link">
              Docs
            </Link>
            <Link to="/playground" className="docs-navbar-link">
              Playground
            </Link>
          </nav>


          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="docs-navbar-menu"
            aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="docs-search-overlay"
          onClick={() => setSearchOpen(false)}>
          <div
            className="docs-search-modal"
            onClick={(e) => e.stopPropagation()}>
            <div className="docs-search-modal-input">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                autoFocus
                type="text"
                placeholder="Search components, templates, docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="docs-search-content">
              <div className="docs-search-section-title">Quick Links</div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">▦</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Blocks</div>

                  <div className="docs-search-item-description">
                    Hero sections, backgrounds, and larger UI sections.
                  </div>
                </div>

                <span className="docs-search-item-type">Library</span>
              </div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">⌂</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Home</div>

                  <div className="docs-search-item-description">
                    Tatva UI landing page and featured components.
                  </div>
                </div>

                <span className="docs-search-item-type">Page</span>
              </div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">✧</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Templates</div>

                  <div className="docs-search-item-description">
                    Portfolio and product templates with screenshots and links.
                  </div>
                </div>

                <span className="docs-search-item-type">Page</span>
              </div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">▤</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Docs</div>

                  <div className="docs-search-item-description">
                    Start browsing component documentation.
                  </div>
                </div>

                <span className="docs-search-item-type">Page</span>
              </div>

              <div className="docs-search-item">
                <div className="docs-search-item-icon">&lt;/&gt;</div>

                <div className="docs-search-item-info">
                  <div className="docs-search-item-title">Snippets</div>

                  <div className="docs-search-item-description">
                    Small reusable component snippets and interactions.
                  </div>
                </div>

                <span className="docs-search-item-type">Library</span>
              </div>

              <div className="docs-search-divider" />

              <div className="docs-search-section-title">Components</div>

              {filteredDocs.length > 0 ? (
                filteredDocs.map(([key, item]) => (
                  <div
                    className="docs-search-item"
                    key={key}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                      navigate(`/docs/${key}`);
                    }}>
                    <div className="docs-search-item-icon">◇</div>

                    <div className="docs-search-item-info">
                      <div className="docs-search-item-title">{item.title}</div>

                      <div className="docs-search-item-description">
                        {item.description}
                      </div>
                    </div>

                    <span className="docs-search-item-type">Component</span>
                  </div>
                ))
              ) : (
                <div className="docs-search-no-results">No results found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DocsNavbar;


