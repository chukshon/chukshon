"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";


interface NavLinkProps {
  label: string;
  value: string;
 
}

const NavLink = ({ label, value }: NavLinkProps) => {
  const pathname = usePathname();
  const isNavLinkActive = (value: string) => pathname === value;
  return (
    <Link
      href={value}
      className={`${
        isNavLinkActive(value)
          ? "bg-neutral-50 border-b-[3px] border-b-neutral-900 rounded-[0px] font-[600] text-[18px]"
          : ""
      } px-[50px] py-[20px] m-0  border-l-[1.5px] cursor-pointer last:border-r-[1.5px] text-[17px]`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
