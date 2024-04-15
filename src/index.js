import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ResponsiveDrawer from "./components/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResponsiveDrawer />
  </React.StrictMode>
);
