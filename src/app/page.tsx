import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header/Header";
import AboutSegment from "@/segments/home/AboutSegment";
import HeroSegment from "@/segments/home/HeroSegment";
import ExperienceSegment from "@/segments/home/ExperienceSegment";
import TechStackSegment from "@/segments/home/TechStackSegment";
import EndorsementSegment from "@/segments/home/EndorsementSegment";
import LoveDoingSegment from "@/segments/home/LoveDoingSegment";



export default function Home() {
  return (
    <main className="h-[100vh]">
      <HeroSegment />
      <AboutSegment />
      <ExperienceSegment />
      <TechStackSegment />
      <LoveDoingSegment />
      {/* <EndorsementSegment /> */}

    </main>
  );
}
