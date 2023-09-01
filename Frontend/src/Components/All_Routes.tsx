import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../Pages/Category";
import Speech from "./Speech";
const All_Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Category/>} />
        <Route path="/node" element={<Speech/>} />
      </Routes>
    </div>
  );
};

export default All_Routes;
