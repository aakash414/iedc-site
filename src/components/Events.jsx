"use client";

import EventCard from "./EventCard";
import Event1 from "../../public/images/Event1.jpeg";

const upcomingEvent = {
  heading: "Innovate & Elevate: Empowering Entrepreneurs",
  description:
    "Gain insider insights, guidance from experts, and network with peers. Don't miss this opportunity to kickstart your entrepreneurial journey!",
  icon: Event1,
  date: "March 20, 2024",
  link: "https://www.google.com",
  time: "4:30 PM",
  venue: "TBI Seminar hall, Amenity Centre",
};

const pastEvents = [
  {
    heading: "Past Event 1",
    description: "Description of past event 1.",
    icon: Event1,
    date: "January 15, 2024",
    link: "https://www.google.com",
    time: "3:00 PM",
    venue: "Venue 1",
  },

  {
    heading: "Past Event 2",
    description: "Description of past event 2.",
    icon: Event1,
    date: "February 10, 2024",
    link: "https://www.google.com",
    time: "5:00 PM",
    venue: "Venue 2",
  },
];

const Events = () => {
  return (
    <div
      className="flex flex-col bg-[#003c43] px-4 py-6 md:px-12 md:py-16"
      id="events"
    >
      <p className="w-full pb-4 text-center text-4xl font-normal uppercase !leading-tight text-[#ffffff] md:w-full md:text-6xl">
        EVENTS
      </p>

      <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
        Upcoming Event
      </h2>
      <div className="mb-8 rounded-lg bg-emerald-50 p-4">
        <EventCard
          heading={upcomingEvent.heading}
          icon={upcomingEvent.icon}
          date={upcomingEvent.date}
          description={upcomingEvent.description}
          venue={upcomingEvent.venue}
          time={upcomingEvent.time}
          link={upcomingEvent.link}
          index={0}
          buttonText="Register"
          showDetails={true}
        />
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
        Past Events
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {pastEvents.map((event, index) => (
          <div key={index} className="rounded-lg bg-white p-4">
            <EventCard
              heading={event.heading}
              icon={event.icon}
              date={event.date}
              description={event.description}
              venue={event.venue}
              time={event.time}
              link={event.link}
              index={index + 1}
              buttonText="View Details"
              showDetails={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
