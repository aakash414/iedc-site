"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";

const EventCard = ({
  heading,
  icon,
  date,
  index,
  description,
  venue,
  time,
  link,
  buttonText,
  showDetails,
}) => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
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
  }, [index]);

  const handleHover = () => {
    const isMobile = window.innerWidth < 768;
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
    const isMobile = window.innerWidth < 768;
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
      className="flex w-full cursor-pointer flex-col gap-2 overflow-hidden  py-4 md:gap-4 md:py-6"
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
          className="bg text- col-span-12 flex flex-col justify-center gap-y-3 text-emerald-950 md:col-span-8 md:justify-between md:gap-y-2"
        >
          <div className="flex flex-col gap-y-3">
            <p className="text-lg font-normal md:text-2xl">{heading}</p>
            <p className="text-lg font-normal md:text-lg">{description}</p>
            {showDetails && (
              <>
                <p className="text-md font-normal md:text-base">
                  Venue: {venue}
                </p>
                <p className="text-md font-normal md:text-base">Time: {time}</p>
                <p className="text-md font-normal md:text-base">Date: {date}</p>
              </>
            )}
          </div>
          <div>
            <button
              className="my-auto mr-auto rounded-[78px] bg-[#cf52ee] px-4 py-2 text-sm text-black md:px-6 md:py-3 md:text-base"
              onClick={() => window.open(link)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
