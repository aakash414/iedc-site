"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import Event1 from "../../public/images/Event1.jpeg";
const data = [
  {
    heading: "Innovate & Elevate: Empowering Entrepreneurs",
    description:
      "Gain insider insights, guidance from experts, and network with peers. Don't miss this opportunity to kickstart your entrepreneurial journey!",
    icon: Event1,
    date: "March 20, 2024",
    link: "https://www.google.com",
    time: "4:30 PM",
    venue: "TBI Seminar hall, Amenity Centre",
  },
];
const Card = ({ heading, icon, date, index, description, venue, time }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window width
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    // Apply animation only if it's not a mobile device
    if (!isMobile) {
      gsap.set(`.landing #img-${index}`, {
        x: "-100%",
        duration: 0.3,
        opacity: 0,
        transformOrigin: "right bottom",
      });
      gsap.set(`.landing #text-${index}`, {
        x: "-30%",
        duration: 0.3,
        width: "137%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  }, [index, isMobile]);

  const handleHover = () => {
    if (!isMobile) {
      gsap.to(`.landing #img-${index}`, {
        x: 0,
        duration: 0.3,
        opacity: 1,
        transformOrigin: "right bottom",
      });
      gsap.to(`.landing #text-${index}`, {
        x: 0,
        duration: 0.3,
        width: "100%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  };

  const handleHoverExit = () => {
    if (!isMobile) {
      gsap.to(`.landing #img-${index}`, {
        x: "-100%",
        duration: 0.3,
        opacity: 0,
        transformOrigin: "right bottom",
      });
      gsap.to(`.landing #text-${index}`, {
        x: "-30%",
        duration: 0.3,
        width: "137%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  };

  return (
    <motion.div
      className="flex w-full cursor-pointer gap-2 overflow-hidden border-black border-opacity-40 py-5 odd:border-y-[2px] md:gap-4 md:py-8"
      key={index}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      <div className="landing grid flex-1 grid-cols-12">
        <Image
          id={`img-${index}`}
          src={icon}
          alt="icon"
          className="col-span-12 my-auto block w-full rounded-2xl md:col-span-4 md:w-11/12"
        />
        <div
          id={`text-${index}`}
          className="col-span-12 flex flex-col justify-center gap-y-5 md:col-span-8 md:justify-between md:gap-y-3"
        >
          <div className="flex flex-col gap-y-5">
            <p className="text-lg font-normal md:text-4xl">{heading}</p>
            <p className="text-lg font-normal md:text-xl">{description}</p>
            <p className="text-md font-normal md:text-lg">Venue: {venue}</p>
            <p className="text-md font-normal md:text-lg">Time: {time}</p>
            <p className="text-md font-normal md:text-lg">Date: {date}</p>
          </div>
          <div>
            <button
              className="my-auto mr-auto rounded-[78px] bg-[#cf52ee] px-5 py-3 text-sm text-black md:px-8 md:py-3 md:text-lg"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/posts/iedc-cusat_innovateandelevate-entrepreneurship-cusat-activity-7179443628677771265-tCow",
                )
              }
            >
              Know More
            </button>
          </div>
        </div>
        <div className="hidden w-full md:col-span-1 md:block"></div>
      </div>
    </motion.div>
  );
};

const Events = () => {
  return (
    <div
      className="flex flex-col bg-[#003c43] px-6 py-8 md:px-24 md:py-20"
      id="events"
    >
      <p className="w-full pb-4 text-center text-4xl font-normal uppercase !leading-tight text-[#ffffff] md:w-full md:text-7xl">
        EVENTS
      </p>

      <div>
        {data.map((cardDetail, index) => (
          <Card
            heading={cardDetail.heading}
            icon={cardDetail.icon}
            date={cardDetail.date}
            description={cardDetail.description}
            venue={cardDetail.venue}
            time={cardDetail.time}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
