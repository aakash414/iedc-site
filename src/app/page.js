import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cittic from "@/components/Cittic";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";
import Team from "@/components/Team";
import Events from "@/components/Events";
import TeamCard from "@/components/TeamCard";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TeamCard />
      <Cittic />
      <Vision />
      <Events />
      <Team />
      <Footer />
    </>
  );
}
