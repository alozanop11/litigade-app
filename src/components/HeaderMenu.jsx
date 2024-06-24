// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";

const HeaderMenu = () => {
  return (
    <nav className="flex justify-center items-center">
      <button className="[&>svg]:lg:w-[20px] [&>svg]:lg:h-[20px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_964_18550)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.1901 15.4783L23.6458 21.934C23.8727 22.161 24.0001 22.4689 24 22.7899C23.9999 23.111 23.8723 23.4188 23.6452 23.6457C23.4181 23.8726 23.1102 24 22.7892 23.9999C22.4682 23.9998 22.1604 23.8722 21.9335 23.6451L15.4778 17.1894C13.5479 18.6841 11.1211 19.3875 8.69104 19.1565C6.26097 18.9255 4.01018 17.7774 2.39656 15.9458C0.782936 14.1142 -0.0723147 11.7366 0.00479537 9.29681C0.0819054 6.857 1.08558 4.5382 2.81165 2.81214C4.53771 1.08607 6.85651 0.0823937 9.29632 0.00528365C11.7361 -0.0718264 14.1137 0.783424 15.9453 2.39705C17.7769 4.01067 18.925 6.26146 19.156 8.69153C19.387 11.1216 18.6836 13.5484 17.1889 15.4783H17.1901ZM9.60045 16.7994C11.5099 16.7994 13.3412 16.0409 14.6914 14.6907C16.0416 13.3405 16.8001 11.5092 16.8001 9.59974C16.8001 7.69027 16.0416 5.859 14.6914 4.5088C13.3412 3.1586 11.5099 2.40007 9.60045 2.40007C7.69098 2.40007 5.85971 3.1586 4.50951 4.5088C3.15932 5.859 2.40078 7.69027 2.40078 9.59974C2.40078 11.5092 3.15932 13.3405 4.50951 14.6907C5.85971 16.0409 7.69098 16.7994 9.60045 16.7994Z"
              fill="#737373"
            />
          </g>
          <defs>
            <clipPath id="clip0_964_18550">
              <rect width="24" height="23.9997" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button className="px-4 [&>svg]:lg:w-[20px] [&>svg]:lg:h-[20px]">
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_964_18552)">
            <path
              d="M7.9999 22.4002C8.88356 22.4002 9.5999 21.6839 9.5999 20.8002C9.5999 19.9165 8.88356 19.2002 7.9999 19.2002C7.11625 19.2002 6.3999 19.9165 6.3999 20.8002C6.3999 21.6839 7.11625 22.4002 7.9999 22.4002Z"
              fill="#737373"
            />
            <path
              d="M19.2001 22.4002C20.0838 22.4002 20.8001 21.6839 20.8001 20.8002C20.8001 19.9165 20.0838 19.2002 19.2001 19.2002C18.3164 19.2002 17.6001 19.9165 17.6001 20.8002C17.6001 21.6839 18.3164 22.4002 19.2001 22.4002Z"
              fill="#737373"
            />
            <path
              d="M22.4 4.00016H4.656L4 0.640163C3.9626 0.456742 3.86206 0.292245 3.71589 0.175305C3.56971 0.0583653 3.38716 -0.00361159 3.2 0.000162751H0V1.60016H2.544L5.6 16.9602C5.6374 17.1436 5.73794 17.3081 5.88411 17.425C6.03029 17.542 6.21284 17.6039 6.4 17.6002H20.8V16.0002H7.056L6.4 12.8002H20.8C20.9849 12.8047 21.1657 12.745 21.3116 12.6312C21.4574 12.5174 21.5594 12.3566 21.6 12.1762L23.2 4.97616C23.2268 4.85746 23.2262 4.73421 23.1982 4.61579C23.1702 4.49737 23.1155 4.38689 23.0384 4.29278C22.9612 4.19867 22.8636 4.12339 22.753 4.07268C22.6424 4.02198 22.5217 3.99717 22.4 4.00016ZM20.16 11.2002H6.096L4.976 5.60016H21.4L20.16 11.2002Z"
              fill="#737373"
            />
          </g>
          <defs>
            <clipPath id="clip0_964_18552">
              <rect width="24" height="22.4002" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button className="lg:pl-8 [&>svg]:lg:w-[20px] [&>svg]:lg:h-[20px]">
        <svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.571289 0H23.4284V2.28571H0.571289V0ZM6.28557 5.71429H23.4284V8H6.28557V5.71429ZM13.4284 11.4286H23.4284V13.7143H13.4284V11.4286Z"
            fill="#737373"
          />
        </svg>
      </button>
    </nav>
  );
};

export default HeaderMenu;