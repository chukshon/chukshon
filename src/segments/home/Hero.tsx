/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col gap-[20px] pt-[40px]  pb-[100px] md:pt-[120px] items-center relative px-[20px] border-b-[1px] border-b-neutral-300 py-[20px]">
      <Image
        className="hidden md:block absolute left-[40%] top-[5%] "
        src="/images/Star.svg"
        alt="star icon"
        width={40}
        height={40}
      />
      <Image
        className="hidden md:block absolute right-[45%] top-[10%]"
        src="/images/Star.svg"
        alt="star icon"
        width={20}
        height={20}
      />
      <h1 className="font-space_grotesk text-[40px] lg:text-[86px] lg:leading-[120px] text-center uppercase">Frontend Software<br /> Developer</h1>
      <p className="text-neutral-900 text-[18px] text-center font-[300] font-lalia max-w-[700px] mb-[15px]">
        I am a senior frontend engineer prossessing over 5 years of experience,
        with strong adherence to coding standards practiced across multiple
        industries, exceptional skills in team leadership and project management
      </p>
      <button className="btn-primary h-[50px] w-[180px]">
        See my works
      </button>
      <div className="pt-[20px] relative">
        <Image
          className="hidden md:block absolute right-[-100px] top-[200px]"
          src="/images/Star.svg"
          alt="star icon"
          width={40}
          height={40}
        />
        <Image
          className="hidden md:block absolute right-[-50px] bottom-[200px]"
          src="/images/Star.svg"
          alt="star icon"
          width={20}
          height={20}
        />
        <Image
          className="h-[400px] w-[400px] grayscale md:h-[500px] md:w-[500px] object-cover rounded-[10px]"
          src="/images/Honour.png"
          alt="star icon"
          width={500}
          height={200}
        />
        <div className="flex gap-[50px] justify-center relative pt-[40px] underline">
          <Image
            className="hidden md:block absolute left-[-50px] top-[10px]"
            src="/images/Star.svg"
            alt="star icon"
            width={20}
            height={20}
          />
          <a href="www.google.com">TWITTER</a>
          <a href="www.google.com">GITHUB</a>
          <a href="www.google.com">LINKEDIN</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
