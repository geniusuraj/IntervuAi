import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../Pages/Category";
const All_Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Category/>} />
      </Routes>
    </div>
  );
};

export default All_Routes;
