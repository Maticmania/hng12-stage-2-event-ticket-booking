import React from "react";
import { useFormContext } from "react-hook-form";

const TicketCount: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="text-grey">
      <p className="font-roboto pb-1">Number of Tickets</p>
      <select
        {...register("ticketCount", { required: "Please select a ticket count" })} 
        className={`w-full bg-transparent border p-4 rounded-xl ${
          errors.ticketCount ? "border-red-500" : "border-secondary"
        }`}
      >
        <option value=""className="bg-primary">
          Select number of tickets
        </option>
        <option value="1" className="bg-primary">1</option>
        <option value="2" className="bg-primary">2</option>
        <option value="3" className="bg-primary">3</option>
        <option value="4" className="bg-primary">4</option>
        <option value="5" className="bg-primary">5</option>
        <option value="6" className="bg-primary">6</option>
        <option value="7" className="bg-primary">7</option>
      </select>

      {/* Error Message */}
      {errors.ticketCount && (
        <p className="text-red-500 text-sm mt-1">{errors.ticketCount.message as string}</p>
      )}
    </div>
  );
};

export default TicketCount;
