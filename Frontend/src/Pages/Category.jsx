import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div>
        <h1 className="text-white">Hello</h1>
      <div className="border-5 m-auto p-56 text-4xl font-medium h-screen">
        <h1 className="text-center pb-10 text-white">Select the tech Stack</h1>
        <div className="flex flex-row space-x-10 gap-10 justify-center items-center">
          <Link to="section/node">
            {" "}
            <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:bg-pink-300  bg-slate-200 text-4xl">
              Node
            </button>
          </Link>
          <Link to="section/mern">
            {" "}
            <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:bg-blue-300 bg-slate-200 text-4xl">
              MERN{" "}
            </button>
          </Link>
          <Link to="section/java">
            {" "}
            <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:bg-purple-300 bg-slate-200 text-4xl">
              Java
            </button>
          </Link>
        </div>
      </div> 
    </div>
  );
};

export default Category;
