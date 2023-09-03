import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../Pages/Category";
import Interview from '../Pages/Interview'
const All_Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Category/>} />
        <Route path="/interview" element={<Interview/>} />
     

      </Routes>
    </div>
  );
};

export default All_Routes;
