import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ElementLight } from "./screens/ElementLight/ElementLight";
import { BlogPage } from "./screens/BlogPage/BlogPage";
import { BlogPostPage } from "./screens/BlogPostPage/BlogPostPage";
import { ErrorBoundary } from "./components/ErrorBoundary";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ElementLight />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<ElementLight />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
);
