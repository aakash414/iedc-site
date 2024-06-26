"use client";

import Image from "next/image";
import IEDCLogo from "../../public/images/iedc-logo.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="bg-[#003C43] px-16 py-10 text-white">
        <div className="container mx-auto my-12 flex flex-col items-center md:my-24 md:flex-row">
          <div className="flex w-full flex-col items-start justify-center p-8 lg:w-1/3">
            <h1 className="tracking-loose rounded-xl border-2 bg-white p-2 text-3xl  md:text-5xl">
              <Image src={IEDCLogo} alt="logo" />
            </h1>
            <h2 className="mb-2 pt-5 text-3xl leading-relaxed md:text-4xl md:leading-snug">
              Innovation and Entrepreneurship Development Cell, CUSAT
            </h2>
            <p className="mb-4 text-sm text-gray-50 md:text-base">
              Entrepreneurship is the bridge between the spark of innovation and
              the fire of commercialization.
            </p>
            <button className="rounded-full bg-[#D221FF] px-4 py-2 text-white hover:cursor-pointer hover:bg-[#cf52ee]">
              <Link href="#join-us">Join Us</Link>
            </button>
          </div>
          <div className="mb-6 ml-0 mt-12 justify-center p-8 md:mb-0 md:ml-12 md:mt-0  lg:w-2/3">
            <div className="flex h-48 flex-wrap content-center  space-x-5">
              <div>
                <img
                  className="] mt-28 hidden rounded-b-full rounded-t-full xl:block"
                  src="/images/businessidea.jpg"
                />
              </div>
              <div>
                <img
                  className="mt-24 inline-block rounded-b-full rounded-t-full p-8 md:mt-0 md:p-0 "
                  src="/images/innovation.jpg"
                />
              </div>
              <div>
                <img
                  className=" mt-28 hidden rounded-b-full rounded-t-full lg:block"
                  src="/images/progress.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
