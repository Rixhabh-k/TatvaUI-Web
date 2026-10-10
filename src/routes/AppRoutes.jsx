import { BrowserRouter, Route, Routes } from "react-router";
import Hero from "../pages/Hero/Hero";
import Docs from "../pages/Docs/Docs";
import DocsLayout from "../pages/Docs/layout/DocsLayout";
import DocsPage from "../pages/Docs/DocsPage/DocsPage";
import Playground from "../pages/Playground/Playground";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route element={<DocsLayout />}>
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/:slug" element={<DocsPage />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/playground/:slug" element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
