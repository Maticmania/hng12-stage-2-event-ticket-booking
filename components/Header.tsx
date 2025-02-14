import React from "react";
import logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
const Header = () => {
  return (
    <div className="fixed top-6 md:max-w-[1200px] w-full h-[76px] bg-foreground text-white border-secondary border rounded-3xl flex items-center justify-between px-4 z-10 ">
      <Link href={"/"}>
        <Image src={logo} alt="ticket" width={91} height={36} />
      </Link>
      <ul className="hidden justify-center items-center gap-4 font-jeju md:flex">
        <li className="p-[10px] text-lg text-white cursor-pointer">Events</li>
        <li className="p-[10px] text-lg text-fade hover:text-white transition-colors duration-300 capitalize  cursor-pointer">
          My Tickets
        </li>
        <li className="p-[10px] text-lg text-fade hover:text-white transition-colors duration-300 capitalize ">
          About
        </li>
        <li className="p-[10px] text-lg text-fade hover:text-white transition-colors duration-300 capitalize ">
          Project
        </li>
      </ul>
      <Link
        href={"/tickets"}
        type="button"
        className="bg-white text-black font-jeju py-4 px-6 rounded-xl border border-[#D5EA001A]/10 flex items-center gap-x-4 group transition-all duration-200 hover:bg-primary"
      >
        MY TICKETS
        <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-2" />
      </Link>
    </div>
  );
};

export default Header;
