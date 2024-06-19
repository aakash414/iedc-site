import Image from "next/image";
import { Saira } from "next/dist/compiled/@next/font/dist/google";
function Info_text() {
  return (
    <div className="flex flex-col p-6">
      <h
        className={"antialiasing  mt-10 text-5xl font-bold text-white" + Saira}
      >
        {" "}
        CITTIC
      </h>
      <p className="p10 mt-2 pt-10 text-xl antialiased">
        Centre for Innovation Technology Transfer and Industrial
        Collaboration(CITTIC) CUSAT provide a springboard to budding
        entreprenurs who wish to launch themselves into the world of technology
        based business carrers. In CITTIC, bright ideas can be developed to a
        product or service using advanced technology solutions. This innovation
        centre is designed to provide all the support to make business ventures
        successful.
      </p>
    </div>
  );
}

export default function Cittic() {
  return (
    <div className="flex h-screen flex-col bg-[#003C43]  md:flex-row">
      <div className="mt-10 bg-[#003C43] md:ml-20 md:mt-40 md:w-1/2">
        <Info_text />
      </div>
      <div className="mt-20 bg-[#003c43] md:mt-60">
        <Image
          width={750}
          height={750}
          src="/images/citticlogo.svg"
          className="bg-[#003C43]"
        />
      </div>
    </div>
  );
}
