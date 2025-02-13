import React from "react";
import Ticket from "../form/Ticket";
import { useFormContext } from "react-hook-form"

interface TicketConfirmationProps {
    setStep: (step: number) => void;
  }
  

  
  const TicketConfirmation: React.FC<TicketConfirmationProps> = ({ setStep }) => {
    const { getValues } = useFormContext()
    const { name } = getValues()
  return (
    <div className="">
      <div className="space-y-4 text-left md:text-center text-grey mt-10">
        <h1 className="font-roboto text-2xl font-bold md:text-[32px] md:font-normal">
          Your Ticket is Booked!
        </h1>
        <p>
          You can download or Check your <br className="md:hidden" /> email for
          a copy
        </p>
      </div>
      <Ticket name={name} />
      <div className="md:bg-tertiary md:border-secondary md:border rounded-full flex flex-col md:flex-row md:justify-around  font-jeju gap-4">
        <button className="p-3 min-w-[35%] bg-transparent border border-secondary rounded-md text-primary hover:border-primary font-jeju" >
          Download Ticket
        </button>
        <button className="p-3 min-w-[35%] border border-secondary rounded-md text-grey bg-primary  hover:font-bold capitalize">
          Book Another Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketConfirmation;
