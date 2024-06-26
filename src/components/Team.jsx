"use client";

import TeamCardComponent from "./TeamCardComponent";
import { team } from "@/constants";

const Team = () => {
  return (
    <div className="bg-[#E3FEF7] px-2 lg:px-4 py-8">
      <h2 className="my-16 text-center text-4xl font-bold text-[#001D23] md:text-7xl lg:text-8xl">
        EXECOM 24-25
      </h2>
      <div className="grid w-full grid-cols-1 place-items-center md:px-2 lg:px-20 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <TeamCardComponent
            key={member.name}
            imageSrc={member.image}
            name={member.name}
            role={member.role}
            linkedInURL={member.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
