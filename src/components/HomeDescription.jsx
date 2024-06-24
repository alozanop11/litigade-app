/* eslint-disable no-unused-vars */
import React from "react";

const HomeDescription = () => {
  return (
    <div className="self-center lg:w-[500px]">
      <h2 className="text-4xl text-center text-text-color mb-8 lg:text-left font-semibold">
        Help to reclaim your life and freedom
      </h2>
      <h4 className="text-xl text-second-text-color text-center mb-8 lg:text-left">
        We know how large objects will act, but things on a small scale.
      </h4>
      <div className="[&>a]:flex [&>a]:justify-center [&>a]:items-center w-[182px] h-[116px] ml-auto mr-auto [&>a]:w-[182px] [&>a]:h-[48px] lg:w-[500px] lg:ml-0 lg:mr-0 lg:flex gap-x-4">
        <a
          className="bg-secondary-color-2 text-light-text-color rounded-full"
          href=""
        >
          Get Quote Now
        </a>
        <a
          className="text-sm border-2 rounded-full border-secondary-color-2 text-secondary-color-2 mt-[1rem] lg:mt-0"
          href=""
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HomeDescription;
