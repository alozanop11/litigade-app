// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
const HeaderNav = () => {
  return (
    <nav className="fixed left-0 top-16 w-full flex flex-col justify-center items-center [&>a]:p-6 lg:flex lg:static lg:flex-row lg:w-auto [&>a]:lg:py-0 bg-light-background-color lg:bg-transparent pointer-events-none opacity-0 lg:opacity-100 [&>a]:text-second-text-color text-[1.5rem] lg:text-base lg:pointer-events-auto">
      <a href="#">Home</a>
      <a href="#">Product</a>
      <a href="#">Pricing</a>
      <a href="#">Contact</a>
    </nav>
  );
};

export default HeaderNav;
