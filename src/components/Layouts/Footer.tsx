import React from "react";
import ArrowText from "../ArrowText";
import Image from "next/image";


const Footer = () => {
  return (
    <div className=''>
      <div className='border-b-[1px] border-b-neutral-300 py-[80px] px-[50px]'>
        <div className='container'>
          <ArrowText text="CONNECT WITH ME" />
          <div className='flex justify-between mt-[70px]'>
            <ul className="flex flex-col gap-[10px]">
              <li className="flex gap-[10px] items-start">
                <p className="text-[18px] font-[300]">Email:</p>
                <a href="www.google.com" className="font-[600] text-[18px]">Chukwukahonour@gmail.com</a>
              </li>
              <li className="flex gap-[10px] items-start">
                <p className="text-[18px] font-[300]">Phone:</p>
                <a className="font-[600] text-[18px]" href="www.google.com">+2348139098569</a>
              </li>
            </ul>
            <div className="flex items-start gap-[30px]">
              <Image
                className=""
                src="/images/connect.svg"
                alt="Connect Icon"
                width={200}
                height={200}
              />
              <ul className="underline text-[30px] flex flex-col gap-[20px]">
                <li>
                  <a href="www.twitter.com">TWITTER</a>
                </li>
                <li>
                  <a href="www.twitter.com">GITHUB</a>
                </li>
                <li>
                  <a href="www.twitter.com">LINKEDIN</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="py-[20px] text-center text-[14px]">
        Copyright 2023, All right reserved.
      </p>
    </div>
  );
};

export default Footer;
