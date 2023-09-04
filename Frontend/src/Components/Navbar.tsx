import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-slate-800 items-center pl-5 pt-3 pr-5 pb-3 justify-between sticky w-full">
     
     
      <div className="flex space-x-5 items-center ">
      <a href="" className="font-sans text-white font-medium text-xl">INTERVUAI</a>
        <a href="/" className="rounded-lg pl-3 pt-2 pr-3 pb-2 bg-slate-100">
          Dashboard
        </a>
      </div>

      <div className="flex items-center gap-5 font-medium ">
        <Link to="/login">
          {" "}
          <button className="rounded-lg pl-3 pt-2 pr-3 pb-2 bg-slate-100">
            Login
          </button>
        </Link>
        <Link to="/signup">
          {" "}
          <button className="rounded-lg pl-3 pt-2 pr-3 pb-2 bg-slate-100">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
