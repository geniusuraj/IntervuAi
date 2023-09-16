import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../Pages/Category";

import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Speech from "./Speech";
import Speech2 from "./Speech2";





import Interview from '../Pages/Interview'
import EndInterview from "./EndInterview";


const All_Routes = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Category/>} />
    
        <Route path="/signup" element={<Signup/>} />


      
        <Route path="section/:tech" element={<Speech2/>} />


   
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/endinterview" element={<EndInterview />} />


      </Routes>
    </div>
  );
};

export default All_Routes;
