"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MenuIcon } from "../../../public/assets";
import { IoClose } from "react-icons/io5";
import { links } from "@/constants/nav-links";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="drawer drawer-end z-[1]">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        onChange={handleSidebarToggle}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-between lg:px-[69px] md:px-[45px] px-[15px] shadow-md xl:h-[80px] lg:h-[90px] h-[79px] fixed w-full bg-white container">
            <Link href={"/"}>
              <Image
                src="/assets/svgs/companyLogo.svg"
                width={263}
                height={94}
                className="lg:w-[230px] lg:h-[84px] w-[171px] h-[63px]"
                alt={"techtimize-logo"}
              />
            </Link>
            <div className="flex-none xl:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar">
                <MenuIcon />
              </label>
            </div>
            <nav className="xl:flex lg:hidden items-center gap-[41px] hidden">
              <ul className="flex items-baseline gap-5 text-[16px] mt-3">
                {links?.map((item) => (
                  <Link href={item?.path} key={item?.id}>
                    <li
                      key={item?.id}
                      className={`cursor-pointer flex flex-col items-center gap-[10px] ${
                        item?.path === pathname
                          ? "text-primary satoshi-bold"
                          : "text-tertiary"
                      }`}
                    >
                      <p>{item?.link}</p>
                      <div
                        className={`bg-primary w-[25px] h-[3px] rounded-[21px] ${
                          pathname === item?.path ? "" : "hidden"
                        }`}
                      />
                    </li>
                  </Link>
                ))}
              </ul>
              <Link href="/contact-us">
                <Button
                  text="Get in Touch"
                  textClass="text-[16px]"
                  className="bg-secondary border border-secondary text-white px-[27px] py-[10px]"
                />
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full flex flex-col justify-between bg-white w-[75%]">
          <div>
            <div className="p-[10px]" onClick={handleCloseSidebar}>
              <IoClose size={25} color="black" />
            </div>
            <ul className="w-full text-black">
              {links?.map((item) => {
                return (
                  <li key={item?.id} className="border-b p-[15px] text-[14px]">
                    <Link href={item?.path} onClick={handleCloseSidebar}>
                      {item?.link}
                    </Link>
                  </li>
                );
              })}
              <li className="p-[15px] text-[14px]">
                <Link href={"/contact-us"} onClick={handleCloseSidebar}>
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-[15px] pb-[15px] flex flex-col justify-end">
            <button className="w-full rounded-[5px] bg-red text-white text-[14px] py-[10px] mb-[10px]">
              Get Consultation
            </button>
            <button className="w-full rounded-[5px] bg-green text-white text-[14px] py-[10px]">
              Hire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
