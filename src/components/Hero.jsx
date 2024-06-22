import Image from "next/image";
import IEDCLogo from "../../public/images/iedc-logo.svg";
import Link from "next/link";

export default function Hero () {
  return (
    <section>
      <div className="bg-[#003C43] text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 bg-white rounded-xl border-2  tracking-loose">
              <Image src={IEDCLogo} alt="logo" />
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Innovation and Entrepreneurship Development Cell, CUSAT
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Entrepreneurship is the bridge between the spark of innovation and the fire of commercialization.
            </p>
            <a className="rounded-full bg-[#D221FF] px-4 py-2 text-white hover:cursor-pointer hover:bg-[#cf52ee]">
              <Link href="#join-us">Join Us</Link>
            </a>

          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap space-x-5  content-center">
              <div>
                <img
                  className="inline-block mt-28 hidden xl:block rounded-t-full rounded-b-full ]"
                  src="/images/businessidea.jpg"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0 rounded-b-full rounded-t-full "
                  src="/images/innovation.jpg"  />
              </div>
              <div>
                <img
                  className=" mt-28 hidden lg:block rounded-b-full rounded-t-full"
                  src="/images/progress.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}