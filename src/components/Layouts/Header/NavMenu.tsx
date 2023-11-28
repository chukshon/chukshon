import React from "react";
import { AlignRight } from "react-feather";
import { usePathname } from "next/navigation";
import { NavlistData } from "@/data/NavList";
import Link from "next/link";
import { X } from "react-feather";


interface NavMenuProps {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  isNavOpen: boolean
}
const NavMenu = ({ setIsNavOpen, isNavOpen }: NavMenuProps) => {
  const pathname = usePathname();
  const isNavLinkActive = (value: string) => pathname === value;
  return (
    <>
      {isNavOpen &&
        <div className="fixed top-[0px] left-[0px] bg-neutral-0 w-[100%] h-[100%] z-50">
          <div className="flex justify-between px-[40px] py-[20px]">
            <h2 className=" text-[25px] font-lalia font-[500]">Honour</h2>
            <button type="button" onClick={() => setIsNavOpen(false)}>
              <X size={45} strokeWidth={2} />
            </button>
          </div>
          <ul className={`flex gap-[20px] justify-center flex-col items-center `}>
            {NavlistData.map((item, index) => {
              return <Link href={item.value} key={index} className={`${isNavLinkActive(item.value)
                ? "text-neutral-800"
                : ""
                } text-[70px] font-lalia font-[600] text-neutral-200`}>{item.label}</Link>;
            })}


            
          </ul>
        </div>}

    </>

  );
};

export default NavMenu;
