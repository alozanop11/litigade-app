/* eslint-disable no-unused-vars */
import React from "react";

const ContactForm = () => {
  return (
    <form
      className="[&>label]:block [&>input]:w-full [&>select]:w-full [&>textarea]:w-full [&>input]:border-2 [&>input]:border-second-text-color [&>input]:bg-[#F9F9F9] [&>input]:text-second-text-color [&>input]:rounded [&>input]:p-2 [&>select]:border-2 [&>select]:border-second-text-color [&>select]:bg-[#F9F9F9] [&>select]:text-second-text-color [&>select]:rounded [&>select]:p-2 px-16 pt-8 pb-16 lg:mt-0 [&>textarea]:border-2 [&>textarea]:border-second-text-color [&>textarea]:h-[140px] [&>textarea]:resize-none [&>textarea]:p-4 lg:p-0 mb-8 lg:grid lg:grid-cols-2 lg:w-full lg:gap-4"
      action=""
    >
      <input className="mb-3" type="text" placeholder="Full Name" />
      <input className="mb-3" type="emiail" placeholder="example@gmail.com" />
      <select className="mb-3" name="" id="">
        <option value="">Please Select</option>
      </select>
      <select className="mb-3" name="" id="">
        <option value="">4:00 Available</option>
      </select>
      <textarea
        placeholder="Message"
        className="mb-8 col-span-2"
        name=""
        id=""
      ></textarea>
      <button
        className="bg-secondary-color-2 text-light-text-color w-full h-[55px]"
        type="submit"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default ContactForm;
