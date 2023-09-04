<<<<<<< HEAD
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
=======
import axios from "axios";
import React, { useState } from "react";
import { BsRobot } from "react-icons/bs";
import bgSign from "../Images/bgSign.jpg";
import robo from "../Images/robo.png";
import {useToast} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
const initState = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  password: "",
};
const Signup = () => {
  const [data, setData] = useState(initState);

  const toast = useToast()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth/signup", data)
      .then((res) => {
        console.log(res.data);
        toast({
            title: "Login Successfull.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          navigate("/login")
      })
      .catch((err) => {
        console.log(err);
        toast({
            title: "Signup Failed.",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
      });
  };

  return (
    <div className="bg-gradient-to-r from-sky-400 to-indigo-400 h-screen fixed w-full ">
      <div className="flex justify-evenly items-center pl">
        <div>
          <img src={robo} alt="" className="drop-shadow-2xl w-11/12" />
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-96 p-10 border m-auto bg-white  rounded-xl shadow-lg 0"
          >
            <h1 className="text-center text-4xl font-bold mb-7 ">Signup</h1>
            <input
              type="text"
              placeholder="FirstName"
              className="p-2 rounded-lg text-lg bg-slate-200"
              onChange={handleChange}
              name="firstName"
              value={data.firstName}
            />
            <input
              type="text"
              placeholder="Lastname"
              className="p-2 rounded-lg text-lg bg-slate-200"
              onChange={handleChange}
              name="lastName"
              value={data.lastName}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg text-lg bg-slate-200"
              onChange={handleChange}
              name="email"
              value={data.email}
            />
            <input
              type="text"
              maxLength={10}
              placeholder="Mobile No."
              className="p-2 rounded-lg text-lg bg-slate-200"
              onChange={handleChange}
              name="mobileNumber"
              value={data.mobileNumber}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-lg text-lg bg-slate-200"
              onChange={handleChange}
              name="password"
              value={data.password}
            />

            <input
              type="submit"
              value="Signup"
              className="bg-sky-400 text-lg font-medium rounded-xl p-2 cursor-pointer text-white hover:bg-sky-500 transition-all"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
>>>>>>> 5cc167ec7910f04b4b101ab66ba0e012f022681b

export default Signup;
