// eslint-disable-next-line no-unused-vars
import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="fixed lg:absolute left-0 top-0 px-6 py-[1rem] h-16 w-full lg:h-[3.5rem] lg:py-[1rem] [&>section]:flex [&>section]:justify-between [&>section]:content-center bg-light-background-color lg:bg-transparent z-50">
      <section className="lg:max-w-[1024px] lg:ml-auto lg:mr-auto">
        <h3 className="text-[1.5rem] text-text-color" href="">
          Litigade
        </h3>
        <div className="flex justify-center items-center">
          <HeaderNav />
          <HeaderMenu />
        </div>
      </section>
    </header>
  );
};

export default Header;
