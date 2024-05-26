import TeamCardComponent from "./TeamCardComponent";
import ProfileIcon from "../../public/images/profile.png";

const Team = () => {
  const team = [];
  const dummyUser = {
    imageSrc: ProfileIcon,
    name: "John Doe",
    role: "Chief Executive Officer",
    linkedInURL: "#",
  };

  for (let i = 0; i < 9; i++) {
    team.push(dummyUser);
  }

  return (
    <div className="bg-[#E3FEF7] px-4 py-8">
      <h2 className="text-8xl font-bold text-center my-16 text-[#001D23]">EXECOM 24-25</h2>
      <div className="grid grid-cols-3 px-20 place-items-center w-full">
        {team.map((member) => (
          <TeamCardComponent
            key={member.name}
            imageSrc={member.imageSrc}
            name={member.name}
            role={member.role}
            linkedInURL={member.linkedInURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
