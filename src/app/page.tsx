import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header/Header";
import Hero from "@/segments/home/Hero";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <Header />
     <div className="flex flex-col gap-[20px] pt-[150px] items-center relative">
         <Image
                className="absolute left-[40%] top-[12%]"
                src="/images/Star.svg"
alt="star icon"
                width={40}  
                height={40}
              />
                <Image
                className="absolute right-[45%] top-[22%]"
                src="/images/Star.svg"
alt="star icon"
                width={20}  
                height={20}
              />
      <h1 className="font-space_grotesk text-[96px] leading-[120px] text-center uppercase">Frontend Software<br /> Developer</h1>
      <p className="text-neutral-900 text-center font-lalia max-w-[600px] mb-[15px]">
        I am a senior frontend engineer possessing over 5 years of experience,
        with strong adherence to coding standards practiced across multiple
        industries, exceptional skills in team leadership and project management
      </p>
      <button className="btn-primary h-[50px] w-[180px]">
        See my works
      </button>
    </div>
      <Footer />
    </main>
  );
}
