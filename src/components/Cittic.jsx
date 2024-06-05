import Image from 'next/image'
import { Saira } from "next/dist/compiled/@next/font/dist/google";
function Info_text (){
  return(
    <div className="flex flex-col p-6">
      <h className={"text-5xl  font-bold text-white antialiasing mt-10"+Saira}  > CITTIC LOGO</h>
      <p className="text-2xl mt-2 antialiased">
        CITTIC CUSAT provide a springboard to budding
        entreprenurs who wish to launch themselves
        into the world of technology based business
        carrers. In CITTIC, bright ideas can be developed
        to a product or service using advanced
        technology solutions. This innovation centre is
        designed to provide all the support to make
        business ventures successful.
      </p>
    </div>
  )
}

export default function Cittic (){
  return (
    <div className="flex flex-col md:flex-row h-screen  bg-[#003C43]">
    <div className="bg-[#003C43] mt-10 md:w-1/2 md:mt-40 md:ml-20">
      <Info_text />
    </div>
    <div className="mt-20 md:mt-60 bg-[#003c43]">
      <Image
        width={1500}
        height={1500}
        src="/images/citticlogo.svg"
        className="bg-[#003C43]"
      />


    </div>
    </div>
  )
}