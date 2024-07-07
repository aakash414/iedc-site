"use client";

import Image from "next/image";
import { Poppins, Saira } from "next/font/google";
// import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

const saira = Saira({
  weight: "700",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const InfoText = () => {
  return (
    <div className="flex flex-col space-x-2 text-[#FFFFFF]">
      <h1
        className={"antialised text-[40px] leading-[56px] " + saira.className}
      >
        {" "}
        CITTIC
      </h1>
      <p
        className={"antialised text-[16px] leading-[26px] " + poppins.className}
      >
        <LinkPreview
          url="https://cittic.cusat.ac.in/"
          className="font-bold text-white"
        >
          CITTIC CUSAT
        </LinkPreview>{" "}
        provide a springboard to budding entrepreneurs who wish to launch
        themselves into the world of technology-based business careers. In
        CITTIC, bright ideas can be developed into a product or service using
        advanced technology solutions. This innovation centre is designed to
        provide all the support to make business ventures successful.
      </p>
    </div>
  );
};

const Cittic = () => {
  return (
    <div className="flex flex-col space-y-1 bg-[#003C43] px-[10vw] py-[8vw] lg:h-screen lg:flex-row">
      <div className="flex bg-[#003C43] md:w-1/2 md:items-center md:justify-center">
        <InfoText />
      </div>
      <div className="flex w-full bg-[#003C43]">
        <Image
          width={1500}
          height={1500}
          src="/images/citticlogo.svg"
          className="bg-[#003C43]"
          alt="Cittic Logo"
        />
      </div>
    </div>
  );
};

export default Cittic;
