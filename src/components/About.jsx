import Image from 'next/image'
import React from 'react';



function Check({ children }) {
  return (
    <div className=" flex flex-row space-x-3 items-center">
      <input
        type="checkbox"
        checked
        className="shrink-0  w-5 h-5 form-checkbox focus:ring-indigo-500 h-5 w-5 rounded-full bg-gray-100 border-gray-300 disabled:checked:bg-blue-500 peer rounded"
      />
      <p>{children}</p>
    </div>
  );
}

function Info_text() {
  return (
    <div className="h-full flex flex-col  p-4 bg-emerald-200">
      <div className="font-black text-3xl antialiased mb-4">
        <h1>ABOUT US</h1>
      </div>
      <div className="text-2xl w-full antialiased mb-8">
        <p>IEDC CUSAT is a government-funded organization that
          aims to promote enterpreneurship among students
          and young professionals in india. The organization
          was established with the goal of fostering a culture of
          innovation and enterprenurship among the student
          community and to provide the necesssary</p>
      </div>
      <div className="font-black text-3xl antialiased mb-4">
        <h2>What We Offer</h2>
      </div>
      <div className="text-2xl flex flex-col antialiased ">
        <Check>Provides various training and resources for future enterpreneurs</Check>
        <Check>Enterprenurship-related workshops , seminars , and competitions.</Check>
        <Check> Provides incubation facilities for start-ups in CITTIC, CUSAT</Check>
        <Check>Provide opportunities for enterprenurs to connect with other like-minded individuals</Check>

      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="flex  flex-col md:flex-row bg-emerald-200 min-h-screen ">
      <div className="h-full md:w-1/2 md:mt-20 md:ml-20">
        <Info_text/>
      </div>


      <div className="bg-emerald-200">
        <Image
          width={1536}
          height={1536}
          src="/images/sample_about.jpeg"
          alt="About"
          className="md:mt-40  flex md:h-2/3 md:w-2/3 md:ml-60 border-dotted  rounded-lg"
        />
      </div>

    </div>

  )
}
