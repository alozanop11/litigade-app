// eslint-disable-next-line no-unused-vars
import React from "react";
import imgHeader from "../assets/images/Header.png";
import HomeDescription from "./HomeDescription";
import HomeForm from "./HomeForm";

const Home = () => {
  return (
    <section className="relative w-full h-full lg:h-full">
      <img className="absolute w-full h-full -z-10" src={imgHeader} alt="" />
      <div className="lg:max-w-[1024px] lg:ml-auto lg:mr-auto">
        <div className="py-24 px-8 lg:flex gap-20">
          <HomeDescription />
          <HomeForm />
        </div>
      </div>
    </section>
  );
};

export default Home;
