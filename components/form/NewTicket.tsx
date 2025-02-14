"use client";

import Image from "next/image";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { useFormContext } from "react-hook-form";
import barcode from "@/public/assets/images/Bar Code.svg";
import noImage from "@/public/assets/images/noimage.jpg";

interface TicketProps {
  ticketNumber?: string,
  ticketRef : any
}

export default function NewTicket({ ticketNumber = "234567",ticketRef }: TicketProps) {
  const { getValues } = useFormContext();
  const { name, ticketCount, ticketType, profilePhoto, email, project } =
    getValues();


  return (
    <div className="flex flex-col items-center py-8">
      {/* Ticket Wrapper */}
      <div ref={ticketRef} className="relative w-full max-w-[300px] min-h-[600px] h-full font-sans">
        <div
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newTicket-UNSYW9XRmQ9lVvJDTCeQc2LvZOjqvo.svg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-full p-6 text-[#B2F5FF] flex flex-col items-center bg-tertiary "
        >
          {/* Event Header */}
          <div className="space-y-1 ">
            <h1 className="text-[34px] font-roadrage text-white">
              Techember Fest &apos;25
            </h1>
            <p className="text-sm opacity-80 text-white">
              📍 04 Rumens road, Ikoyi, Lagos
            </p>
            <p className="text-sm opacity-80 text-white">
              📅 March 15, 2025 | 7:00 PM
            </p>
          </div>

          {/* Profile Section */}
          <div className="mt-6 mb-4">
            <div className="w-[140px] h-[140px] mx-auto overflow-hidden rounded-lg bg-[#1A3A40] border-2 border-primary">
              {profilePhoto ? (
                <Image
                  src={profilePhoto || noImage}
                  alt="Profile"
                  width={140}
                  height={140}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-[#1A3A40]" />
              )}
            </div>
          </div>

          {/* Ticket Details */}
          <div className="grid w-[232px] h-[160px] bg-[#08343C] rounded-xl p-1 grid-cols-2">
            <div className="border-r border-[#12464E] font-roboto p-1 flex flex-col justify-center gap-1">
              <p className="text-white opacity-25 text-[10px]">Name</p>
              <p className="text-white text-[12px] font-bold">{name.slice(0, 15)}</p>
            </div>
            <div className="font-roboto p-1 flex flex-col justify-center gap-1 group">
              <p className="text-white opacity-25 text-[10px]">Email</p>
              <p className="text-white text-[12px] font-bold group-hover:hidden">
                {email.slice(0, 6)} <span className="text-primary">see more</span>
              </p>
              <p className="text-white text-[12px] font-bold hidden group-hover:block ">
                {email}
              </p>
            </div>
            <div className="border-y border-r border-secondary font-roboto p-1 flex flex-col justify-center gap-1">
              <p className="text-white opacity-25 text-[10px]">Ticket Type:</p>
              <p className="text-white text-[12px] font-bold">{ticketType || 'Regular Access'}</p>
            </div>
            <div className="border-y border-secondary font-roboto p-1 flex flex-col justify-center gap-1">
              <p className="text-white opacity-25 text-[10px]">Ticket for :</p>
              <p className="text-white text-[12px] font-bold">{ticketCount}</p>
            </div>
            <div className="col-span-2 p-1">
              <p className="text-white opacity-25 text-[10px]">Special request?</p>
              <p className="leading-[11px] text-[12px] text-white font-roboto">{project.slice(0, 110)}...</p>
            </div>
          </div>

          {/* Barcode Section */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
            <div className="w-48 h-12 relative">
              <Image
                src={barcode}
                alt="Barcode"
                width={192}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
