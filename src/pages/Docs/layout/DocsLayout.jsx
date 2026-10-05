import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import DocsSidebar from "../Sidebar/DocsSidebar";
import "./docslayout.css";
import MobileTopBar from "../MobileTopBar/MobileTopBar";

const DocsLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="docs-main">
      {/* Desktop Navbar */}
      <Navbar setIsMenuOpen={setIsMenuOpen} />

      {/* Mobile Top Bar */}
      {isMenuOpen && <MobileTopBar setIsMenuOpen={setIsMenuOpen} />}

      <hr />

      <section className="docs-layout-section">
        <DocsSidebar/>

        <Outlet />
      </section>
    </div>
  );
};

export default DocsLayout;
