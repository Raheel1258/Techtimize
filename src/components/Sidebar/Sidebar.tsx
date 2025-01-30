"use client";
import { sidebarOption } from "@/constants/sidebarOption";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div
      className={`h-screen lg:w-64 w-full bg-white flex flex-col transition-all duration-500 sticky`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between py-[3px] px-4">
        <Link href={"/"}>
          <Image
            src="/assets/svgs/companyLogo.svg"
            width={263}
            height={94}
            className={`transition-all duration-300 ${"w-[230px] h-[84px]"}`}
            alt={"Company Logo"}
          />
        </Link>
        <button
          className="lg:hidden block"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <RxCross1 color="black" />
        </button>
      </div>

      {/* Sidebar Links */}
      <ul className="mt-4 space-y-2">
        {sidebarOption?.map((item) => (
          <li
            key={item.id}
            className="group flex items-center text-primary px-4 w-full hover:bg-primary hover:text-white"
          >
            {/* Image with hover filter */}
            <Image
              src={item.icon}
              alt={item.title}
              width={24}
              height={24}
              className="group-hover:brightness-0 group-hover:invert"
            />
            <Link href={item.path} className="font-bold px-4 py-2">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
