import React from "react";

const TickectTypes = () => {
  return (
    <div className="text-grey">
      <p className="font-roboto">Select Ticket Type:</p>
      <div className="min-h-[186px] bg-[#052228] w-full rounded-[14px] border-secondary border p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary rounded-lg h-[65px] border-secondary border p-2 flex justify-between items-start cursor-pointer">
          <div className="font-normal text-base font-roboto text-grey">
            <p className="uppercase">Regular Access</p>
            <p>20 left!</p>
          </div>
          <button className="bg-secondary font-roboto font-semibold text-right pl-6 pr-2 rounded-lg border-primary border py-2">
            Free
          </button>
        </div>
        <div className="rounded-lg h-[65px] bg-transparent border border-secondary  p-2 flex justify-between items-start cursor-pointer">
          <div className="font-normal text-base font-roboto text-grey">
            <p className="uppercase">VIP Access </p>
            <p>20 left!</p>
          </div>
          <button className="bg-secondary font-roboto font-semibold text-right pl-6 pr-2 rounded-lg border-primary border py-2">
            $50
          </button>
        </div>
        <div className="rounded-lg h-[65px] bg-transparent border border-secondary  p-2 flex justify-between items-start cursor-pointer">
          <div className="font-normal text-base font-roboto text-grey">
            <p className="uppercase">VVIP Access </p>
            <p>20 left!</p>
          </div>
          <button className="bg-secondary font-roboto font-semibold text-right pl-6 pr-2 rounded-lg border-primary border py-2">
            $150
          </button>
        </div>
      </div>
    </div>
  );
};

export default TickectTypes;
