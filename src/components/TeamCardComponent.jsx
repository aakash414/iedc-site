"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const TeamCardComponent = ({ imageSrc, name, role, linkedInURL }) => {
  return (
    <div
      className={`my-8 flex w-[300px] flex-col items-center rounded-md bg-[#77B0AA] p-4 text-[#111111] md:w-80 lg:w-96 ${poppins.variable}`}
    >
      <Image
        src={imageSrc}
        alt=""
        className="mt-8 size-52 rounded-full lg:size-[200px]"
      />
      <h3 className="mt-2 text-2xl font-bold md:text-3xl">{name}</h3>
      <p className="mt-1">{role}</p>
      <Link href={linkedInURL ?? ""}>
        <FaLinkedin className="mb-4 mt-[6px] size-6" />
      </Link>
    </div>
  );
};

export default TeamCardComponent;
