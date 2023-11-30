import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header/Header";
import AboutSegment from "@/segments/home/AboutSegment";
import HeroSegment from "@/segments/home/HeroSegment";
import ExperienceSegment from "@/segments/home/ExperienceSegment";



export default function Home() {
  return (
    <main className="h-[100vh]">
      <Header />
      <HeroSegment />
      <AboutSegment />
      <ExperienceSegment />
    </main>
  );
}
