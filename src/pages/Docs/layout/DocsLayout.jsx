import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import DocsSidebar from "../Sidebar/DocsSidebar";
import "./docslayout.css";
import MobileTopBar from "../MobileTopBar/MobileTopBar";
import Playground from "../../Playground/Playground";

const DocsLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isPlayground = location.pathname === "/playground";

  return (
    <div className="docs-main">
      <Navbar setIsMenuOpen={setIsMenuOpen} />

      {isMenuOpen && <MobileTopBar setIsMenuOpen={setIsMenuOpen} />}

      <hr />

      <section className="docs-layout-section">
        <DocsSidebar />

        {isPlayground ? <Playground /> : <Outlet />}
      </section>
    </div>
  );
};

export default DocsLayout;