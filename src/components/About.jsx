"use client";

import Image from "next/image";
import tick from "../assets/check.png";
import React from "react";
import { Saira, Catamaran, Poppins } from "next/font/google";

const saira = Saira({
  weight: "700",
  subsets: ["latin"],
});
const catamaran = Catamaran({
  weight: "600",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
function Check({ data }) {
  return (
    <div className="flex flex-row items-center space-x-3">
      {/* <input
        type="checkbox"
        defaultChecked
        className="form-checkbox peer h-5 w-5 shrink-0  rounded border-gray-300 bg-gray-100 focus:ring-indigo-500 disabled:checked:bg-blue-500"
      /> */}
      <Image src={tick} alt="Check" className="h-5 w-5" />

      <p className={`${poppins} text-md`}>{data}</p>
    </div>
  );
}
function Info_text() {
  return (
    <div className=" flex flex-col p-4  text-[#171A1F]">
      <div className="text-[40px] leading-[56px] antialiased ">
        <h1 className={saira}>ABOUT US</h1>
      </div>
      <div className="w-full py-3 text-[16px] leading-[26px] antialiased">
        <p className={`${poppins} text-lg`}>
          IEDC CUSAT is a government-funded organization that aims to promote
          enterpreneurship among students and young professionals in india. The
          organization was established with the goal of fostering a culture of
          innovation and enterprenurship among the student community and to
          provide the necesssary
        </p>
      </div>
      <div className="text-[22px] leading-[56px] antialiased">
        <h2 className={catamaran}>What We Offer</h2>
      </div>
      <div className="flex  flex-col text-[16px] leading-[26px] antialiased">
        <Check
          data={
            "Provides various training and resources for future enterpreneurs"
          }
        />

        <Check
          data={
            "Enterprenurship-related workshops , seminars , and competitions."
          }
        />

        <Check
          data={"Provides incubation facilities for start-ups in CITTIC, CUSAT"}
        />
        <Check
          data={
            "Provide opportunities for enterprenurs to connect with other like-minded individuals"
          }
        />
      </div>
    </div>
  );
}
export default function About() {
  return (
    <div
      className="flex flex-col bg-[#E3FEF7] px-[10vw] py-[9vw]  md:flex-col lg:h-screen lg:flex-row"
      id="about"
    >
      <div className="w-full  bg-[#E3FEF7] md:h-full md:shrink">
        <div className="mx-auto  my-auto  flex">
          <Info_text />
        </div>
      </div>

      <div className="flex bg-[#E3FEF7]">
        <Image
          width={1536}
          height={1536}
          src="/images/about.jpg"
          alt="About"
          className=" rounded-b-3xl rounded-t-2xl border-2 md:w-[500px] lg:h-[500px] lg:w-[1000px]"
        />
      </div>
    </div>
  );
}
