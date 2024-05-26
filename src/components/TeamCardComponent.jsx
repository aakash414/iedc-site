import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const TeamCardComponent = ({ imageSrc, name, role, linkedInURL }) => {
  return (
    <div
      className={`my-12 flex w-64 flex-col items-center rounded-md bg-[#77B0AA] p-4 text-[#111111] ${poppins.variable}`}
    >
      <Image src={imageSrc} alt="" className="mt-3 size-32 rounded-full" />
      <h3 className="mt-2 text-3xl font-bold">{name}</h3>
      <p className="mt-2">{role}</p>
      <a href={linkedInURL}>
        <FaLinkedin className="mt-3 size-6" />
      </a>
    </div>
  );
};

export default TeamCardComponent;
