import Image from "next/image";
import { Saira } from "next/font/google";

const saira = Saira({
  weight: ["700","600","400"],
   
  subsets: ["latin"],
  variable: "--saira-font", 
});
const VisionCardComponent=({imageSrc,heading,comment})=>{
    return(
        <div className={`my-12 flex w-96 flex-col h-96 place-items-center rounded-2xl hover:transform hover:scale-105
        bg-[#ffffff] p-4 text-[#111111]  ${saira.variable}`}>
        
        <Image src={imageSrc} alt="" className="mt-3 size-32" />
        <h3 className="mt-2 text-center text-3xl font-bold text-[#001D23] ">{heading}</h3>
        <p className="mt-2 text-center text-[#787878]">{comment}</p>
        
        </div>
    );
    
};

export default VisionCardComponent;
