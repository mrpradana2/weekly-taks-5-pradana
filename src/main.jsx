import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/tailwind.css";
import Header from "./components/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
