import axios from "axios";
import React, { useState } from "react";
import { BsRobot } from "react-icons/bs";
import bgSign from "../Images/bgSign.jpg";
import robo from "../Images/robo.png";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:8080/auth/signin", data)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        toast({
          title: "Login Successfull.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Wrong Credentials.",
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
            <h1 className="text-center text-4xl font-bold mb-7 ">Login</h1>

            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg text-lg bg-slate-200"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-lg text-lg bg-slate-200"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <input
              type="submit"
              value="Login"
              className="bg-sky-400 text-lg font-medium rounded-xl p-2 cursor-pointer text-white hover:bg-sky-500 transition-all"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
