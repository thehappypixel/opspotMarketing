import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import KindeWrapper from "./contexts/KindeWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <KindeWrapper /> */}
    <App />
  </React.StrictMode>
);
