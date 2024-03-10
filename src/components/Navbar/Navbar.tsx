"use client";
import Image from "next/image";
import { useState } from "react";
import { links } from "@/constants/nav-links";
import Link from "next/link";
import Button from "../Button/Button";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { MenuIcon } from "../../../public/assets";
import companyLogo from "../../../public/assets/svgs/companyLogo.svg"

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="container fixed bg-white z-10 top-0 left-0 right-0">
      <div className="flex items-center justify-between lg:px-[69px] md:px-[45px] px-[15px] shadow-md xl:h-[80px] lg:h-[90px] h-[79px]">
        <Link href={"/"}>
          <Image
            src="/assets/svgs/companyLogo.svg"
            width={263}
            height={94}
            className="lg:w-[230px] lg:h-[84px] w-[171px] h-[63px]"
            alt={"techtimize-logo"}
          />
        </Link>
        <nav className="xl:flex lg:hidden items-center gap-[41px] hidden">
          <ul className="flex items-baseline gap-5 text-[16px] mt-3">
            {links?.map((item) => (
              <Link href={item?.path} key={item?.id}>
                <li
                  key={item?.id}
                  className={`cursor-pointer flex flex-col items-center gap-[10px] ${
                    item?.path === pathname
                      ? "text-[#0697D5] satoshi-bold"
                      : "text-[#4F4F4F]"
                  }`}
                >
                  <p>{item?.link}</p>
                  <div
                    className={`bg-[#0697D5] w-[25px] h-[3px] rounded-[21px] ${
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
              className="bg-[#0B4D8E] text-white px-[27px] py-[10px] rounded-[10px]"
            />
          </Link>
        </nav>
        <button className="block xl:hidden" onClick={handleSidebar}>
          <MenuIcon />
        </button>
      </div>
      <div
        className={`transition-transform ${
          sidebarOpen
            ? "bg-slate-500 bg-opacity-50 w-full h-screen fixed top-0 transform translate-x-0"
            : "hidden"
        }`}
      >
        <div
          className={`transition-transform ${
            sidebarOpen
              ? "bg-white w-[75%] absolute right-0 flex flex-col justify-between h-full ease-in-out duration-500 transform translate-x-0"
              : "absolute -right-full top-0 ease-in-out duration-500 transform translate-x-full"
          }`}
        >
          <div>
            <div className="p-[10px]">
              <button onClick={handleSidebar}>
                <IoClose size={25} color="black" />
              </button>
            </div>
            <ul className="w-full">
              {links?.map((item) => {
                return (
                  <li key={item?.id} className="border-b p-[15px] text-[14px]">
                    <Link href={item?.path} onClick={handleSidebar}>
                      {item?.link}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact-us" onClick={handleSidebar}>
              <p className="text-[14px] p-[15px]">Get In Touch</p>
            </Link>
          </div>
          <div className="w-full px-[15px] pb-[15px] flex flex-col justify-end">
            <button className="w-full rounded-[5px] bg-[#9A0000] text-white text-[14px] py-[10px] mb-[10px]">
              Get Consultation
            </button>
            <button className="w-full rounded-[5px] bg-[#7EC61F] text-white text-[14px] py-[10px]">
              Hire Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
