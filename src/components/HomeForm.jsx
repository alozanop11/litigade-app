/* eslint-disable no-unused-vars */
import React from "react";

const HomeForm = () => {
  return (
    <form
      className="[&>label]:block [&>input]:w-full [&>select]:w-full [&>input]:border-2 [&>input]:border-second-text-color [&>input]:bg-[#F9F9F9] [&>input]:text-second-text-color [&>input]:rounded [&>input]:p-2 [&>select]:border-2 [&>select]:border-second-text-color [&>select]:bg-[#F9F9F9] [&>select]:text-second-text-color [&>select]:rounded [&>select]:p-2 bg-light-background-color px-16 py-8 mt-16 lg:w-[330px] lg:mt-0"
      action=""
    >
      <h3 className="text-[1.5rem] text-center mb-4">Book Appointment</h3>
      <label htmlFor="">Name*</label>
      <input className="mb-3" type="text" placeholder="Full Name" />
      <label htmlFor="">Email*</label>
      <input className="mb-3" type="emiail" placeholder="example@gmail.com" />
      <label htmlFor="">Departament*</label>
      <select className="mb-3" name="" id="">
        <option value="">Please Select</option>
      </select>
      <label htmlFor="">Time*</label>
      <select className="mb-8" name="" id="">
        <option value="">4:00 Available</option>
      </select>
      <button
        className="bg-secondary-color-4 text-light-text-color w-full h-[55px]"
        type="submit"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default HomeForm;
