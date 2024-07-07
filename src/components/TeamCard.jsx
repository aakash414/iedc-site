import Image from "next/image";
import { team } from "@/constants";
const TeamCard = ({ member }) => {
  return (
    <div className=" flex transform cursor-pointer flex-col items-center rounded-xl  p-8 transition-colors duration-300 hover:border-transparent  dark:border-gray-700 dark:hover:border-transparent">
      <Image
        className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
        src={member.image}
        alt={member.name}
        width="auto"
        height="auto"
      />
      <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
        {member.name}
      </h1>
      <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
        {member.role}
      </p>
      <div className="-mx-2 mt-3 flex">
        <a
          href={member.linkedinUrl}
          className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
          aria-label="LinkedIn"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C0.79 0 0 0.77 0 1.72v20.56C0 23.23 0.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 0.77 23.21 0 22.23 0zM7.12 20.45H3.56V9.02h3.56v11.43zm-1.78-13c-1.15 0-2.1-0.95-2.1-2.1s0.95-2.1 2.1-2.1c1.16 0 2.1 0.95 2.1 2.1 0 1.15-0.94 2.1-2.1 2.1zm15.56 13h-3.56v-5.57c0-1.32-0.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.93v5.67H9.82V9.02h3.42v1.56h0.05c0.48-0.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.19z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <section className="bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 py-10">
            <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
              Our Team
            </h1>

            <p className="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>
            <div className="flex flex-row justify-center ">
              <div className=" flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border bg-gray-100 p-5 sm:w-72">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  className="h-24 w-24 rounded-full object-cover transition duration-200 hover:scale-110"
                  width={50}
                  height={50}
                />
                <div className="text-lg font-bold text-gray-900">
                  Olivia Rhye
                </div>
                <div className="text-purple-600">Nodal Officer</div>
                <div className="text-gray-600">Professor at Cusat</div>
              </div>
            </div>
            <h1 className="mx-auto py-10 text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
              Executive Committee
            </h1>

            <div className="mt-6 grid grid-cols-1 gap-8 gap-y-10 md:grid-cols-2 xl:mt-12 xl:grid-cols-3">
              {team.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamSection;
