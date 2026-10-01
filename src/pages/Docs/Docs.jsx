import React from "react";
import MobileDocs from "./MobileDocs/MobileDocs";
import "./Docs.css";
import DocsPage from './DocsPage/DocsPage';

const Docs = () => {
  return (
    <>
      {/* Desktop Docs */}
      <div className="desktop-docs-home">
        <DocsPage/>
      </div>

      {/* Mobile Docs */}
      <div className="mobile-docs-home">
        <MobileDocs />
      </div>
    </>
  );
};

export default Docs;
