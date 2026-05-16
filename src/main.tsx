import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AdminApp } from "./components/AdminApp";
import App from "./App";
import "./styles/global.css";

const isAdminRoute =
  window.location.pathname.endsWith("/admin") || window.location.hash === "#/admin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isAdminRoute ? <AdminApp /> : <App />}
  </StrictMode>,
);
