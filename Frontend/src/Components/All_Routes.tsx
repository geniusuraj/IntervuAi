import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../Pages/Category";
import Speech from "./Speech";
import Speech2 from "./Speech2";
const All_Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Category/>} />
        <Route path="/node" element={<Speech2/>} />
      </Routes>
    </div>
  );
};

export default All_Routes;
