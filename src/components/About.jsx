import Image from "next/image";
import React from 'react';
import {Saira, Catamaran, Poppins } from "next/font/google";

const saira = Saira({
    weight:"700",
    subsets: ["latin"]
})
const catamaran = Catamaran({
    weight:"600",
    subsets: ["latin"]
})
const poppins = Poppins({
    weight:"400",
    subsets: ["latin"]
})
function Check({ children }) {
    return (
        <div className="flex flex-row space-x-3 items-center">
            <input
                type="checkbox"
                checked
                className="shrink-0 form-checkbox focus:ring-indigo-500 h-5 w-5  bg-gray-100 border-gray-300 disabled:checked:bg-blue-500 peer rounded"
            />
            <p className={poppins}>{children}</p>
        </div>
    );
}
function Info_text() {
    return (
        <div className=" text-[#171A1F] flex flex-col  p-4">
            <div className="text-[40px] leading-[56px] antialiased ">
                <h1 className={saira}>ABOUT US</h1>
            </div>
            <div className="text-[16px] leading-[26px] w-full antialiased">
                <p className={poppins}>IEDC CUSAT is a government-funded organization that
                    aims to promote enterpreneurship among students
                    and young professionals in india. The organization
                    was established with the goal of fostering a culture of
                    innovation and enterprenurship among the student
                    community and to provide the necesssary</p>
            </div>
            <div className="text-[22px] leading-[56px] antialiased">
                <h2 className={catamaran}>What We Offer</h2>
            </div>
            <div className="text-[16px]  leading-[26px] flex flex-col antialiased">
                <Check>Provides various training and resources for future enterpreneurs</Check>
                <Check>Enterprenurship-related workshops , seminars , and competitions.</Check>
                <Check> Provides incubation facilities for start-ups in CITTIC, CUSAT</Check>
                <Check>Provide opportunities for enterprenurs to connect with other like-minded individuals</Check>

            </div>
        </div>
    )
}
export default function Home() {
  return (

      <div className="lg:h-screen bg-[#E3FEF7] px-[10vw] py-[9vw] flex  flex-col md:flex-col lg:flex-row">
          <div className="md:h-full  w-full bg-[#E3FEF7] ">
              <div className="mx-auto  my-auto  flex">
              <Info_text/>
              </div>
          </div>


          <div className="h-full flex md:items-center md:justify-center lg:w-full bg-[#E3FEF7]">
              <Image
                  width={1536}
                  height={1536}
                  src="/images/sample_about.jpeg"
                  alt="About"
                  className=" lg:h-1/2 lg:w-3/4  rounded-lg"
              />
          </div>

      </div>
  );
}

