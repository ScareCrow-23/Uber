import React, { useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src={assets.logo} alt="" />

        <form onSubmit={submitHandler(e)}>
          <h3 className="text-xl mb-2">What's your Email?</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 mb-7 py-2  w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 mb-7 py-2  w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="******"
          />
          <button className="bg-black text-white rounded px-4 mb-7 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New Here?
          <Link to={"/signup"} className="text-blue-600">
            {" "}
            Create an account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/captain-login"}
          className="bg-green-700 flex justify-center items-center text-white rounded px-4 mb-7 py-2  w-full text-lg placeholder:text-base"
        >
          Sign In as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
