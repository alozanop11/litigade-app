/* eslint-disable no-unused-vars */
import React from "react";
import stars from "../assets/images/stars.png";
import imgClients from "../assets/images/clients.png";

const Clients = () => {
  return (
    <section className="relative w-full h-full lg:h-full bg-[#FAFAFA] -z-20 mb-16">
      <article className="lg:max-w-[1024px] lg:ml-auto lg:mr-auto">
        <div className="flex flex-col justify-center items-center px-24">
          <h2 className="text-4xl text-center text-text-color mb-8 mt-16 lg:text-left font-semibold">
            What Clients Say
          </h2>
          <p className="text-second-text-color text-xs text-center mb-16 w-[300px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3">
          <aside className="w-full px-8 ml-auto mr-auto mb-8">
            <div className="border-2 border-[#A9D6FF] p-6 flex flex-col justify-center items-start rounded-md">
              <img className="pb-4" src={stars} alt="" />
              <p className="pb-4">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
              <div className="flex items-center gap-4">
                <img src={imgClients} alt="" />
                <div className="flex flex-col">
                  <span>Regina Miles</span>
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </aside>
          <aside className="w-full px-8 ml-auto mr-auto mb-8">
            <div className="border-2 border-[#A9D6FF] p-6 flex flex-col justify-center items-start rounded-md">
              <img className="pb-4" src={stars} alt="" />
              <p className="pb-4">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
              <div className="flex items-center gap-4">
                <img src={imgClients} alt="" />
                <div className="flex flex-col">
                  <span>Regina Miles</span>
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </aside>
          <aside className="w-full px-8 ml-auto mr-auto mb-8">
            <div className="border-2 border-[#A9D6FF] p-6 flex flex-col justify-center items-start rounded-md">
              <img className="pb-4" src={stars} alt="" />
              <p className="pb-4">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
              <div className="flex items-center gap-4">
                <img src={imgClients} alt="" />
                <div className="flex flex-col">
                  <span>Regina Miles</span>
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </section>
  );
};

export default Clients;
