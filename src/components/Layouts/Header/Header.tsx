import NavLink from "@/components/Layouts/Header/NavLink";
import NavMenu from "@/components/Layouts/Header/NavMenu";
import { NavlistData } from "@/data/NavList";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-[1.5px] border-neutral-200 flex justify-between items-center px-[40px]">
      <h1 className="font-space_grotesk">Honour</h1>
      <ul className="flex m-0 p-0">
        {NavlistData.map((item, index) => {
          return <NavLink key={index} label={item.label} value={item.value} />;
        })}
      </ul>
      <NavMenu />
    </header>
  );
};

export default Header;
