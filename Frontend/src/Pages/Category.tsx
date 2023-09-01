// import React from 'react'

const Category = () => {
  return (
    <div className="flex justify-center items-center bg-slate-950">
      <div className="border-5 m-auto p-56 text-4xl font-medium h-screen" >

        <h1 className="text-center pb-10 text-white">Select the tech Stack</h1>
        <div className="flex flex-row space-x-10 gap-10 justify-center items-center">
          <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:bg-pink-300  bg-slate-200 text-4xl">
            Node
          </button>
          <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:bg-blue-300 bg-slate-200 text-4xl">
            Mern{" "}
          </button>
          <button className="pl-24 pr-24 pt-16 pb-16 rounded-xl hover:bg-purple-300 bg-slate-200 text-4xl">
            Java
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
