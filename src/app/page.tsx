import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header/Header";
import About from "@/segments/home/About";
import Hero from "@/segments/home/Hero";
import Image from "next/image";


export default function Home() {
  return (
    <main className="h-[100vh]">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
