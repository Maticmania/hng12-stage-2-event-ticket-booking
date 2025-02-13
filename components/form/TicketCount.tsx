import React from "react";
import { UseFormRegister, useFormContext } from "react-hook-form";

interface TicketCountProps {
  register: UseFormRegister<any>;
}

const TicketCount: React.FC<TicketCountProps> = ({ register }) => {
  return (
    <div className="text-grey">
      <p className="font-roboto">Number of Tickets</p>
      <select
        {...register("ticketCount")} // Register with react-hook-form
        className="w-full bg-transparent border-secondary border p-4 rounded-xl"
      >
        <option value="1" className="bg-primary ">1</option>
        <option value="2" className="bg-primary ">2</option>
        <option value="3" className="bg-primary ">3</option>
        <option value="4" className="bg-primary ">4</option>
      </select>
    </div>
  );
};

export default TicketCount;
