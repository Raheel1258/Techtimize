"use client";
import Image from "next/image";
import React, { useState } from "react";
import { links } from "@/constants/nav-links";

const Navbar: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <header>
      <div className="flex items-center justify-between lg:px-[69px] md:px-[45px] px-[18px] shadow-md xl:h-[135px] lg:h-[90px] h-[79px]">
        <Image
          src="/images/logo.png"
          width={263}
          height={94}
          className="lg:w-[263px] lg:h-[94px] w-[171px] h-[63px]"
          alt={"techtimize-logo"}
        />
        <nav className="xl:flex lg:hidden items-center gap-[41px] hidden">
          <ul className="flex items-baseline gap-5 text-[20px] mt-3">
            {links?.map((item) => {
              return (
                <li
                  key={item?.id}
                  className={`cursor-pointer flex flex-col items-center gap-[10px] ${
                    activeMenuItem === item?.link
                      ? "text-[#0697D5]"
                      : "text-[#4F4F4F]"
                  }`}
                  onClick={() => handleMenuItemClick(item?.link)}
                >
                  <p>{item?.link}</p>
                  <div
                    className={`bg-[#0697D5] w-[25px] h-[3px] rounded-[21px] ${
                      activeMenuItem === item?.link ? "" : "hidden"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
          <button className="bg-[#0B4D8E] text-white px-[27px] py-[15px] rounded-[10px]">
            Get in Touch
          </button>
        </nav>
        <button className="block xl:hidden">
          <Image src={"/images/menu.png"} width={26} height={26} alt={"menu"} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
