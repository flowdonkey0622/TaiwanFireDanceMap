import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AdminApp } from "./components/AdminApp";
import App from "./App";
import "./styles/global.css";

const isAdminRoute =
  window.location.pathname.endsWith("/admin") || window.location.hash === "#/admin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 後台獨立於公開頁切換之外，方便自己管理登入與 session 狀態。 */}
    {isAdminRoute ? <AdminApp /> : <App />}
  </StrictMode>,
);
