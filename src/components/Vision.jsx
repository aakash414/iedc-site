"use client";

import React from "react";
import VisionCardComponent from "./VisionCardComponent";
import ProfileIcon1 from "../../public/images/icon1.png";
import ProfileIcon2 from "../../public/images/icon2.png";
import ProfileIcon3 from "../../public/images/icon3.png";

const Vision = () => {
 
  const dummyMissions = [
    {
      imageSrc: ProfileIcon1,
      heading: "Promoting Innovation",
      comment: "Our aim is to cultivate a setting where students feel empowered to explore new ideas freely and where innovation is not only endorsed but celebrated."
    },
  
    {
      imageSrc: ProfileIcon2,
      heading: "Fostering Collaboration",
      comment: "We give teachers and students the tools and assistance they need to work together productively and transform ideas into real initiatives."
    },
    {
      imageSrc: ProfileIcon3,
      heading: "Promoting Entrepreneurship",
      comment: "We want to help students develop an entrepreneurial attitude by giving them the tools and chances to lead innovation and effect good change."
    }
  ];

  return (
    <div className="bg-[#E3FEF7] px-4 py-8">
      <h3 className="text-5xl font-bold text-center my-14 text-[#001D23]">VISION</h3>
      <div className="grid w-full grid-cols-3 px-5 place-items-center" >
        {dummyMissions.map((mission, index) => (
          <VisionCardComponent
            key={index} // Use index as the key
            imageSrc={mission.imageSrc}
            heading={mission.heading}
            comment={mission.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Vision;
