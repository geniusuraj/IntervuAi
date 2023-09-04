import React from 'react';
import { Link } from 'react-router-dom';

export default function EndInterview() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md bg-emerald-100">
        <h1 className="text-3xl font-semibold text-center mb-6">Interview Completed</h1>
        <p className="text-gray-600 text-center mb-4">
          Congratulations! You have successfully completed your interview.
        </p>
        <p className="text-gray-600 text-center">
          Thank you for participating. 
        </p>
        <div className="mt-8 flex justify-center">

            <Link to="/">
            <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          >
            Finish
          </button>
            </Link>
          
        </div>
      </div>
    </div>
  );
}
