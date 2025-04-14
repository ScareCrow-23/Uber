import React from "react";
import assets from "../assets/assets.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover  h-screen pt-8  w-full flex justify-between flex-col"
        style={{ backgroundImage: `url(${assets.heroBg})` }}
      >
        <img className="w-16 ml-8" src={assets.logo} alt="" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-2xl font-semibold">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className=" flex justify-center items-center bg-black w-full text-white  py-3 mt-4 rounded-lg"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
