import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from './components/Layout';
import Home from "./components/Home";

import About from "./about";
import Contact from "./contact";
import Education from './education';
import Project from './project';
import Services from './services';




const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default MainRouter;
