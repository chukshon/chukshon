"use client";
import NavLink from "@/components/Layouts/Header/NavLink";
import NavMenu from "@/components/Layouts/Header/NavMenu";
import { NavlistData } from "@/data/NavList";
import React from "react";
import { usePathname } from "next/navigation";
import { X } from "react-feather";
import Link from "next/link";
import { AlignRight } from "react-feather";


const Header = () => {
  const pathname = usePathname();
  const isNavLinkActive = (value: string) => pathname === value;
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  return (
    <header className="border-b-[1.5px] border-neutral-200 flex justify-between items-center px-[40px]">
      <h1 className="text-[25px] font-[500] font-space_grotesk">Honour</h1>
      <ul className="hidden lg:flex">
        {NavlistData.map((item, index) => {
          return <NavLink key={index} label={item.label} value={item.value} />;
        })}
      </ul>
       <button type="button" onClick={() => setIsNavOpen(true)} className="py-[10px]">
      <AlignRight size={40} strokeWidth={1.7} />
    </button>
      <NavMenu setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
    
    </header>
  );
};

export default Header;
