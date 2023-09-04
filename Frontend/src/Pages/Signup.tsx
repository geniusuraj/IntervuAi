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

export default Signup;
