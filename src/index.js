import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Link, BrowserRouter } from "react-router-dom";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import Feedback from "./components/Feedback";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Blumea-UI" element={<App />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
