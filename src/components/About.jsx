import Image from "next/image";
import React from "react";

function Check({ children }) {
  return (
    <div className=" flex flex-row items-center space-x-3 text-black">
      <input
        type="checkbox"
        checked
        className="form-checkbox peer h-5 w-5 shrink-0  rounded border-gray-300 bg-gray-100 focus:ring-indigo-500 disabled:checked:bg-blue-500"
      />
      <p>{children}</p>
    </div>
  );
}

function Info_text() {
  return (
    <div className="flex h-full flex-col bg-emerald-200 p-4 text-black">
      <div className="mb-4 text-3xl font-black antialiased">
        <h1>ABOUT US</h1>
      </div>
      <div className="mb-8 w-full text-2xl antialiased">
        <p>
          IEDC CUSAT is a government-funded organization that aims to promote
          enterpreneurship among students and young professionals in india. The
          organization was established with the goal of fostering a culture of
          innovation and enterprenurship among the student community and to
          provide the necesssary
        </p>
      </div>
      <div className="mb-4 text-3xl font-black antialiased">
        <h2>What We Offer</h2>
      </div>
      <div className="flex flex-col text-2xl antialiased ">
        Provides various training and resources for future enterpreneurs
        Enterprenurship-related workshops , seminars , and competitions.
        Provides incubation facilities for start-ups in CITTIC, CUSAT Provide
        opportunities for enterprenurs to connect with other like-minded
        individuals
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex  min-h-screen flex-col bg-emerald-200 md:flex-row ">
      <div className="h-full md:ml-20 md:mt-20 md:w-1/2">
        <Info_text />
      </div>

      <div className="bg-emerald-200">
        <Image
          width={1536}
          height={1536}
          src="/images/sample_about.jpeg"
          alt="About"
          className="flex  rounded-lg border-dotted md:ml-60 md:mt-40 md:h-2/3  md:w-2/3"
        />
      </div>
    </div>
  );
}
