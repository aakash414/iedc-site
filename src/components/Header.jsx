"use client";

import Image from "next/image";
import Link from "next/link";
import IEDCLogo from "../../public/images/iedc-logo.svg";
import { Poppins } from "next/font/google";
import HeaderLink from "./HeaderLink";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Header = () => {
  return (
    <div className="flex bg-slate-950 pt-4 lg:pt-8">
      <header className="mx-4 mt-4 flex w-full items-center justify-between rounded-full border-white/[0.2] bg-black  px-6 py-3 text-white lg:mx-24">
        <Image className="text-white" src={IEDCLogo} alt="logo" />
        <ul className={`${poppins.variable} hidden space-x-6 lg:flex`}>
          <HeaderLink href="#" text="Home" />
          <HeaderLink href="#about" text="About Us" />
          <HeaderLink href="#events" text="Events" />
          <HeaderLink href="#team" text="Team" />
          <HeaderLink href="#contact" text="Contact" />
          <button className="rounded-full bg-emerald-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-emerald-400">
            <Link href="#join-us" className="font-normal">
              Join Us
            </Link>
          </button>
        </ul>
      </header>
    </div>
  );
};

export default Header;
