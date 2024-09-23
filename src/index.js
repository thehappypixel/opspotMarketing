import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import KindeWrapper from "./contexts/KindeWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <KindeWrapper />
  </React.StrictMode>
);
