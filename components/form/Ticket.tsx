"use client";
import ticketbg from "@/public/assets/images/Ticket.svg";
import reg from "@/public/assets/icons/reg.svg";
import QRCode from "react-qr-code";
import Image from "next/image";

interface TicketProps {
  ticketNumber?: string;
  userName?: string;
}

export default function Ticket({
  ticketNumber = "12345",
  userName = "John Doe",
}: TicketProps) {
  return (
    <div className="w-full my-5 relative">
      <Image src={ticketbg} alt="your ticket" className="w-full relative" />
      <div className="w-full h-[210px] absolute top-0 ">
        <div className="h-[90%] w-[84%] flex  justify-end">
          <div className="absolute top-3 left-3  md:top-5 md:left-5 w-[100px] h-[100px] sm:w-[92px] sm:h-[92px] md:w-[165px] md:h-[145px] lg:w-[145px] lg:h-[145px] xl:w-[145px] xl:h-[145px]">
            <QRCode
              value={`TECHEMBER-${ticketNumber}`}
              className="w-full h-full"
              viewBox="0 0 256 256"
            />
          </div>

          <div className="w-[60%] flex items-start justify-between">
            {/* details */}
            <div className="text-grey font-roboto grid md:gap-2">
              <h1 className="font-roadrage text-xl md:text-[67px] leading-[54px] text-grey ">
                Techember <br className="hidden md:flex" /> Fest ”25
              </h1>
              <p className="text-[8px] md:text-base">
                📍 04 Rumens road, Ikoyi, Lagos
              </p>
              <p className="text-[9px] md:text-base">
                📅 March 15, 2025 | 7:00 PM
              </p>
              <h1 className="md:hidden font-roadrage text-[22px] leading-3 opacity-20 w-full text-end">
                Techember <br /> Fest ”25
              </h1>
            </div>
            {/* Tickect type */}
            <Image src={reg} alt="reg" />
          </div>
        </div>
        <p className="text-secondary h-[10%] px-5 font-[900] font-roboto hidden lg:flex justify-start items-start ">
          Ticket for 1 entry only
        </p>
      </div>
      <div className="absolute top-0 right-0 h-full w-[16%] flex flex-col items-start text-white font-bold py-5 -rotate-90 translate-x-[60%] -translate-y-5 md:translate-y-0  whitespace-nowrap">
        <span className="text-[11px] md:text-[28px] font-normal font-roadrage">
          Techember Fest ”25
        </span>
        <span className="font-roboto text-[5px]  font-semibold md:hidden">
          4 Rumens road, Ikoyi, Lagos
        </span>
        <span className="font-roboto text-[5px]  font-semibold md:hidden">
          March 15, 2025 | 7:00 PM
        </span>
        <span className="font-roboto text-[11px] font-semibold hidden md:flex">
          User Name: John Doe
        </span>
      </div>
      <Image
        src={reg}
        alt="reg"
        className="absolute bottom-0 right-0 rotate-90"
      />
      <p className="absolute left-2 bottom-0 text-[10px] font-semibold md:bottom-2 lg:hidden font-roboto text-grey">
        Ticket for 1 entry only
      </p>
    </div>
  );
}
