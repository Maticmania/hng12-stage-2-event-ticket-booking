"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { useRef } from "react";
import Image from "next/image";
import barcode from "@/public/assets/images/Bar Code.svg";
import noImage from "@/public/assets/images/noimage.jpg";

type FormData = {
  ticketType: string;
  ticketCount: string;
  name: string;
  email: string;
  project: string;
  profilePhoto?: string;
};

const Page = () => {
  const [tickets, setTickets] = useState<FormData[]>([]);
  const ticketRef = useRef<HTMLDivElement>(null);

  // Function to capture and download the ticket
  const downloadTicket = async () => {
    if (!ticketRef.current) return;

    const canvas = await html2canvas(ticketRef.current, { scale: 2 });
    const image = canvas.toDataURL("image/png");

    // Create a download link
    const link = document.createElement("a");
    link.href = image;
    link.download = "ticket.png";
    link.click();
  };
  // Load tickets from localStorage when component mounts
  useEffect(() => {
    const storedTickets = localStorage.getItem("tickets");
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);

  return (
    <div className="relative w-full grid place-items-center place-content-center min-h-screen bg-tertiary px-5">
      <Header />
      <h2 className="text-xl font-bold text-center mb-4 font-jeju text-grey">
        {" "}
        Tickets
      </h2>

      {tickets.length === 0 ? (
        <p className="text-gray-500 text-center">No tickets saved yet.</p>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket, index) => (
            <div
              className="flex flex-col relative justify-center items-center"
              key={index}
            >
              <div
                ref={ticketRef}
                className="relative w-full max-w-[300px] min-h-[600px] h-full font-sans "
              >
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
                      {ticket.profilePhoto ? (
                        <Image
                          src={ticket.profilePhoto || noImage}
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
                      <p className="text-white text-[12px] font-bold">
                        {ticket.name.slice(0, 15)}
                      </p>
                    </div>
                    <div className="font-roboto p-1 flex flex-col justify-center gap-1 group">
                      <p className="text-white opacity-25 text-[10px]">Email</p>
                      <p className="text-white text-[12px] font-bold group-hover:hidden">
                        {ticket.email.slice(0, 6)}{" "}
                        <span className="text-primary">see more</span>
                      </p>
                      <p className="text-white text-[12px] font-bold hidden group-hover:block ">
                        {ticket.email}
                      </p>
                    </div>
                    <div className="border-y border-r border-secondary font-roboto p-1 flex flex-col justify-center gap-1">
                      <p className="text-white opacity-25 text-[10px]">
                        Ticket Type:
                      </p>
                      <p className="text-white text-[12px] font-bold">
                        {ticket.ticketType || "Regular Access"}
                      </p>
                    </div>
                    <div className="border-y border-secondary font-roboto p-1 flex flex-col justify-center gap-1">
                      <p className="text-white opacity-25 text-[10px]">
                        Ticket for :
                      </p>
                      <p className="text-white text-[12px] font-bold">
                        {ticket.ticketCount}
                      </p>
                    </div>
                    <div className="col-span-2 p-1">
                      <p className="text-white opacity-25 text-[10px]">
                        Special request?
                      </p>
                      <p className="leading-[11px] text-[12px] text-white font-roboto">
                        {ticket.project.slice(0, 110)}...
                      </p>
                    </div>
                  </div>

                  {/* Barcode Section */}
                  <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
                    <div className="w-48 h-12 relative">
                      <Image
                        src={barcode}
                        alt="Barcode"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={downloadTicket}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Download Ticket
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
