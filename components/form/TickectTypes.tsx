import React, { useState } from "react";

const TicketTypes = () => {
  const [selectedTicket, setSelectedTicket] = useState("Regular Access");

  const handleSelect = (ticketType: string) => {
    setSelectedTicket(ticketType);
    console.log(`Selected Ticket: ${ticketType}, Time: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div className="text-grey">
      <p className="font-roboto mb-2">Select Ticket Type:</p>
      
      <div className="min-h-[186px] bg-[#052228] w-full rounded-[14px] border-secondary border p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Regular Access */}
        <div 
          className={`rounded-lg h-[65px] border border-secondary p-2 flex justify-between items-start cursor-pointer transition-all duration-300 
          ${selectedTicket === "Regular Access" ? "bg-primary" : "bg-transparent hover:bg-primary"}`}
          onClick={() => handleSelect("Regular Access")}
        >
          <div className="font-normal text-base font-roboto text-grey">
            <p className="uppercase">Regular Access</p>
            <p>20 left!</p>
          </div>
          <button className="bg-secondary font-roboto font-semibold text-right pl-6 pr-2 rounded-lg border-primary border py-2">
            Free
          </button>
        </div>

        {/* VIP Access */}
        <div 
          className={`rounded-lg h-[65px] border border-secondary p-2 flex justify-between items-start cursor-pointer transition-all duration-300 
          ${selectedTicket === "VIP Access" ? "bg-primary" : "bg-transparent hover:bg-primary"}`}
          onClick={() => handleSelect("VIP Access")}
        >
          <div className="font-normal text-base font-roboto text-grey">
            <p className="uppercase">VIP Access</p>
            <p>20 left!</p>
          </div>
          <button className="bg-secondary font-roboto font-semibold text-right pl-6 pr-2 rounded-lg border-primary border py-2">
            $50
          </button>
        </div>

        {/* VVIP Access */}
        <div 
          className={`rounded-lg h-[65px] border border-secondary p-2 flex justify-between items-start cursor-pointer transition-all duration-300 
          ${selectedTicket === "VVIP Access" ? "bg-primary" : "bg-transparent hover:bg-primary"}`}
          onClick={() => handleSelect("VVIP Access")}
        >
          <div className="font-normal text-base font-roboto text-grey">
            <p className="uppercase">VVIP Access</p>
            <p>20 left!</p>
          </div>
          <button className="bg-secondary font-roboto font-semibold text-right pl-6 pr-2 rounded-lg border-primary border py-2">
            $150
          </button>
        </div>

      </div>

      {/* Display Selected Ticket */}
      {/* <p className="mt-4 font-roboto text-lg">
        Selected Ticket: <span className="font-bold text-white">{selectedTicket}</span>
      </p> */}
    </div>
  );
};

export default TicketTypes;
