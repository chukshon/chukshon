import NavLink from "@/components/Layouts/Header/NavLink";
import NavMenu from "@/components/Layouts/Header/NavMenu";
import React from "react";

const data = [1, 2, 3, 4];
const Header = () => {
  return (
    <header className="border-b-[1.5px] border-neutral-200 py-[20px] flex justify-between items-center px-[40px]">
      <h1 className="font-space_grotesk">Honour</h1>
      <ul className="flex">
        {data.map((item, index) => {
          return <NavLink key={index} />;
        })}
      </ul>
      <NavMenu />
    </header>
  );
};

export default Header;
