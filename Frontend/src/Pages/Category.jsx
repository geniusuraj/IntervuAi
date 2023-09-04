import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
  return (



    <div className=" fixed bg-gradient-to-r from-sky-500 to-indigo-500 w-screen items-center h-screen flex">
      <div className=" m-auto text-4xl font-medium p-5">
        <h1 className="text-center mb-10 text-white">
          What kind of interview would you like to practice?
        </h1>
        <div className="flex flex-shrink flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-10 justify-center items-center">
          <Link to="section/node">

            {" "}
            <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:shadow-2xl hover:pl-28 hover:pt-20 hover:pb-20 hover:pr-28  hover:bg-slate-900 hover:text-white transition-all  bg-slate-200 text-4xl">
              Node
            </button>
          </Link>
          <Link to="section/mern">
            {" "}

          <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:shadow-2xl hover:pl-28 hover:pt-20 hover:pb-20 hover:pr-28 hover:bg-slate-900 hover:text-white  transition-all  bg-slate-200 text-4xl">
              Mern{" "}

            </button>
          </Link>
          <Link to="section/java">
            {" "}
            <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:shadow-2xl hover:pl-28 hover:pt-20 hover:pb-20 hover:pr-28 hover:bg-slate-900 hover:text-white  transition-all  bg-slate-200 text-4xl">
              Java
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
