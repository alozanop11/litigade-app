// eslint-disable-next-line no-unused-vars
import React from "react";
import imgBgMobile from "../assets/images/background-mobile.png";
import imgBgDesk from "../assets/images/background-contact.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="relative w-full h-full lg:h-full">
      <picture>
        <source media="(max-width: 640px)" srcSet={imgBgMobile} />
        <source media="(min-width: 641px)" srcSet={imgBgDesk} />
        <img
          className="absolute w-full h-full -z-10"
          src={imgBgMobile}
          alt=""
        />
      </picture>
      <article className="lg:max-w-[1024px] lg:ml-auto lg:mr-auto">
        <div className="pt-24 pb-8 px-16 lg:pl-0">
          <h5 className="text-text-color text-base">Contact Us</h5>
          <h2 className=" text-text-color text-4xl font-semibold">
            Make an Appointment
          </h2>
        </div>
        <div className="lg:max-w-[60%]">
          <ContactForm />
        </div>
      </article>
      <div className="h-2/5 p-12 px-16 bg-light-background-color">
        <div className="lg:max-w-[1024px] lg:ml-auto lg:mr-auto lg:flex justify-between items-center">
          <div className="">
            <h2 className="mb-4 text-text-color text-4xl">
              Request A Free Consultation
            </h2>
            <p className="text-second-text-color text-xs text-center mb-16 w-[200px]">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <button
            className="bg-secondary-color-2 text-light-text-color w-full h-[55px] lg:w-[158px]"
            type="submit"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
