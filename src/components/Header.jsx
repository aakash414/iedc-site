import Image from "next/image";
import Link from "next/link";
import IEDCLogo from "../../public/images/iedc-logo.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Header = () => {
  return (
    <div className="flex bg-[#003C43] pt-8">
      <header className="mx-24 mt-4 flex w-full items-center justify-between rounded-full bg-white px-6 py-3 text-[#424955]">
        <Image src={IEDCLogo} alt="logo" />
        <ul className={`${poppins.variable} flex space-x-6`}>
          <li className="p-2">
            <Link href="#">Home</Link>
          </li>
          <li className="p-2">
            <Link href="#about">About Us</Link>
          </li>
          <li className="p-2">
            <Link href="#events">Events</Link>
          </li>
          <li className="p-2">
            <Link href="#team">Team</Link>
          </li>
          <li className="p-2">
            <Link href="#contact">Contact</Link>
          </li>
          <li className="rounded-full bg-[#D221FF] px-4 py-2 text-white hover:cursor-pointer hover:bg-[#cf52ee]">
            <Link href="#join-us">Join Us</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
