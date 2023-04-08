import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Link, HashRouter, BrowserRouter } from "react-router-dom";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import Feedback from "./components/Feedback";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
