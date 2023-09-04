// src/components/Signup.js
import React, { useState } from "react";
import axiosInstance from "../api/api";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("auth/signup", formData);
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
   
    // console.log(formData); // You can replace this with your signup logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-5 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="firstName" className="block text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full border rounded p-2"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="lastName" className="block text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full border rounded p-2"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="mobileNumber" className="block text-gray-600">
              Mobile
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              className="w-full border rounded p-2"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded p-2"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
