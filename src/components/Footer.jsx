/* eslint-disable no-unused-vars */
import React from "react";
import imgSocialMedia from "../assets/images/social media.png";

const Footer = () => {
  return (
    <footer className="relative w-full h-full lg:h-full bg-dark-background-color">
      <div className="lg:max-w-[1024px] lg:ml-auto lg:mr-auto">
        <article className="pt-24 px-8 lg:px-0">
          <div className="lg:flex justify-between w-full">
            <h3 className="mb-8 text-light-text-color text-2xl">Litigade</h3>
            <img className="mb-16" src={imgSocialMedia} alt="" />
          </div>
          <div className="[&_h5]:text-light-text-color [&_h5]:font-medium [&_li]:text-light-text-color [&_li]:text-sm [&>div]:mb-4 lg:grid grid-cols-6">
            <div>
              <h5>Company Info</h5>
              <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5>Legal</h5>
              <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5>Features</h5>
              <ul>
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div>
              <h5>Resources</h5>
              <ul>
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
            <div className="mb-12 col-span-2">
              <h5 className="text-sm text-light-text-color font-medium my-4">
                Get In Touch
              </h5>
              <form action="">
                <input
                  className="mb-3 inline-block h-[40px] p-2 text-second-text-color"
                  type="emiail"
                  placeholder="Your Email"
                />
                <button
                  className="inline-block h-[41px] bg-primary-color p-2 text-light-text-color"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              <span className="text-light-text-color">
                Lorem impsum dolor amit
              </span>
            </div>
          </div>
        </article>
      </div>
      <div className="left-0 bottom-0 bg-background-gradient-1 w-full h-[98px] flex justify-center items-center mt-16 lg:justify-start">
        <span className="text-center px-10 text-light-text-color">
          Made With Love By Figmaland All Right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
