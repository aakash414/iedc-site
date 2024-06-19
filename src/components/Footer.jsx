import Image from "next/image";
import IEDCLogo from "../../public/images/iedc-logo.svg";

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col items-center bg-[#003C43] ">
      <div className="flex w-full max-w-7xl flex-col gap-y-8 border-b-[1px] border-white px-6 py-6 md:flex-row md:py-16">
        <div className="hidden flex-1 md:flex">
          <Image src={IEDCLogo} alt="logo" className="bg" />
        </div>
        <div className="hidden flex-1 md:flex">
          <div className="flex flex-col gap-y-3 md:mx-auto ">
            <p className="font-playfair text-2xl font-normal text-white ">
              Quick links
            </p>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-raleway text-base font-normal text-white"
            >
              About
            </a>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              Event
            </a>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              Join Us
            </a>
          </div>
        </div>
        <div className="hidden flex-1 md:flex">
          <div className="flex flex-col gap-y-3 md:mx-auto ">
            <p className="font-playfair text-2xl font-normal text-white ">
              Events
            </p>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              Upcoming
            </a>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              Completed
            </a>
          </div>
        </div>
        <div className="hidden flex-1 md:flex">
          <div className="flex flex-col gap-y-3 md:mx-auto ">
            <p className="font-playfair text-2xl font-normal text-white ">
              About
            </p>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              News
            </a>
            <a
              href="#"
              className="font-raleway text-base font-normal text-white"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="hidden flex-1 md:flex">
          <div className="mb-auto flex flex-col gap-y-3 rounded-full bg-[#D221FF] p-4 md:mx-auto">
            Get In Touch
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-6 py-4">
        <p className="font-raleway text-center text-xs font-normal capitalize text-white md:text-base">
          © 2024 — IEDC CUSAT All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
