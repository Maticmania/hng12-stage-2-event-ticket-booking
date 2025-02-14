import React from "react";
import { UseFormRegister, useFormContext } from "react-hook-form";

interface TicketTypesProps {
  register: UseFormRegister<any>;
}

const TicketTypes: React.FC<TicketTypesProps> = ({ register }) => {
  const { setValue, watch } = useFormContext(); 
  const selectedTicket = watch("ticketType", "Regular Access"); 

  const handleSelect = (ticketType: string) => {
    setValue("ticketType", ticketType); 
    console.log(`Selected Ticket: ${ticketType}, Time: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div className="text-grey">
      <p className="font-roboto mb-2">Select Ticket Type:</p>
      
      <div className="min-h-[142px] bg-[#052228] w-full rounded-[14px] border-secondary border p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Regular Access */}
        <div
          className={`rounded-lg  border border-secondary p-2 flex justify-between items-start cursor-pointer transition-all duration-300 
          ${selectedTicket === "Regular Access" ? "bg-[#12464E]" : "bg-transparent hover:bg-[#12464E]"}`}
          onClick={() => handleSelect("Regular Access")}
        >
          <div className="font-normal text-base font-roboto text-grey">
            <h4 className="font-roboto font-semibold text-2xl">Free</h4>
            <p className="uppercase">Regular Access</p>
            <p>20/52</p>
          </div>
          <input type="radio" {...register("ticketType")} value="Regular Access" className="hidden" />

        </div>

        {/* VIP Access */}
        <div
          className={`rounded-lg  border border-secondary p-2 flex justify-between items-start cursor-pointer transition-all duration-300 
          ${selectedTicket === "VIP Access" ? "bg-[#12464E]" : "bg-transparent hover:bg-[#12464E]"}`}
          onClick={() => handleSelect("VIP Access")}
        >
          <div className="font-normal text-base font-roboto text-grey">
          <h4 className="font-roboto font-semibold text-2xl">$150</h4>
            <p className="uppercase">VIP Access</p>
            <p>20/52</p>
          </div>
          <input type="radio" {...register("ticketType")} value="VIP Access" className="hidden" />
        </div>

        {/* VVIP Access */}
        <div
          className={`rounded-lg  border border-secondary p-2 flex justify-between items-start cursor-pointer transition-all duration-300 
          ${selectedTicket === "VVIP Access" ? "bg-[#12464E]" : "bg-transparent hover:bg-[#12464E]"}`}
          onClick={() => handleSelect("VVIP Access")}
        >
          <div className="font-normal text-base font-roboto text-grey">
          <h4 className="font-roboto font-semibold text-2xl">$150</h4>

            <p className="uppercase">VVIP Access</p>
            <p>20/52</p>
          </div>
          <input type="radio" {...register("ticketType")} value="VVIP Access" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default TicketTypes;
