import Image from "next/image";
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
function Check({ children }) {
  return (
    <div className="flex flex-row items-center space-x-3">
      <input
        type="checkbox"
        checked
        className="form-checkbox peer h-5 w-5 shrink-0  rounded border-gray-300 bg-gray-100 focus:ring-indigo-500 disabled:checked:bg-blue-500"
      />
      <p className={poppins}>{children}</p>
    </div>
  );
}
function Info_text() {
  return (
    <div className=" flex flex-col p-4  text-[#171A1F]">
      <div className="text-[40px] leading-[56px] antialiased ">
        <h1 className={saira}>ABOUT US</h1>
      </div>
      <div className="w-full text-[16px] leading-[26px] antialiased">
        <p className={poppins}>
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
        <Check>
          Provides various training and resources for future enterpreneurs
        </Check>
        <Check>
          Enterprenurship-related workshops , seminars , and competitions.
        </Check>
        <Check>
          {" "}
          Provides incubation facilities for start-ups in CITTIC, CUSAT
        </Check>
        <Check>
          Provide opportunities for enterprenurs to connect with other
          like-minded individuals
        </Check>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="flex flex-col bg-[#E3FEF7] px-[10vw] py-[9vw]  md:flex-col lg:h-screen lg:flex-row">
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
          className=" lg:h-[500px] lg:w-[1000px] md:w-[500px] rounded-t-2xl rounded-b-3xl border-2"
        />
      </div>
    </div>
  );
}
