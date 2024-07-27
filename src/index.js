import React from "react";
import reactDOM from "react-dom/client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import FootNote from "./components/FootNote";

import "./styles/index.css";

const rootElement = document.getElementById(`root`);
const root = reactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <FootNote />
  </React.StrictMode>
);
