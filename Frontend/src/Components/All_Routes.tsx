// import React from "react";
import {Route, Routes} from 'react-router-dom'
import Category from '../Pages/Category';

const All_Routes = () => {
  return <div>

<Routes>
  <Route path="/" element={<Category/>} />
  <Route path="/node" element={<Category/>} />
  <Route path="/mern" element={<Category/>} />
  <Route path="/java" element={<Category/>} />
</Routes>
  </div>;
}

export default All_Routes;
