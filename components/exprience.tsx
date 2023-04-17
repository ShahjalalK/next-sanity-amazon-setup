import React from "react";
import ExprienceCard from "./expriencecard";
import { NextPage } from "next";

type Props = {};

const Exprience : NextPage = (props: Props) => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory max-w-7xl mx-auto">
      <div className="flex justify-center items-center pt-10 pb-5">
        <h1 className="text-center text-2xl uppercase tracking-[15px] text-gray-500">
          Exprience
        </h1>
      </div>
      <div className=" w-full flex space-x-5 overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7abba]/80 p-10 snap-x snap-mandatory">
        <ExprienceCard />
        <ExprienceCard />
        <ExprienceCard />
        <ExprienceCard />
      </div>
    </div>
  );
};

export default Exprience;
