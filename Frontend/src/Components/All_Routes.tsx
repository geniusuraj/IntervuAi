import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../Pages/Category";

import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Speech from "./Speech";
import Speech2 from "./Speech2";
<<<<<<< HEAD
import Signup from "../Pages/Signup";
=======


import Interview from '../Pages/Interview'

>>>>>>> 5cc167ec7910f04b4b101ab66ba0e012f022681b
const All_Routes = () => {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Category/>} />
        <Route path="/node" element={<Speech2/>} />
        <Route path="/signup" element={<Signup/>} />
=======

      
        <Route path="section/:tech" element={<Speech2/>} />


        <Route path="/" element={<Category />} />
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


>>>>>>> 5cc167ec7910f04b4b101ab66ba0e012f022681b
      </Routes>
    </div>
  );
};

export default All_Routes;
