/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import imgMobile from "../assets/images/card-item.png";
import imgDesk from "../assets/images/row.png";
import imgBg from "../assets/images/background.png";

const Pricing = () => {
  return (
    <section className="relative w-full h-full lg:h-full bg-[#FAFAFA] -z-20">
      <img
        className="absolute left-0 bottom-0 h-2/5 w-full -z-10"
        src={imgBg}
        alt=""
      />
      <article className="lg:max-w-[1024px] lg:ml-auto lg:mr-auto mb-14">
        <div className="py-24 px-8 flex flex-col justify-center items-center">
          <h2 className="text-center mb-4 text-text-color text-4xl font-semibold">
            Who We Are
          </h2>
          <p className="mb-14 text-second-text-color text-xs text-center w-[200px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <picture>
            <source media="(max-width: 640px)" srcset={imgMobile} />
            <source media="(min-width: 641px)" srcset={imgDesk} />
            <img className="ml-auto mr-auto" src={imgMobile} alt="" />
          </picture>
        </div>
      </article>
    </section>
  );
};

export default Pricing;
