import React from "react";

const stepTitles = ["Ticket Selection", "Attendee Details", "Ready"];

const Progressive = ({step}:{step:number}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
        <h1 className="text-[32px] font-jeju">{stepTitles[step - 1]}</h1>
        <span className="font-roboto text-grey">Step {step}/3</span>
      </div>
      {/* progressive bar  */}
      <div className="w-full bg-secondary h-1 rounded-full flex">
        <span
          className={`
      bg-primary h-full rounded-full transition-all duration-300
      ${step === 1 ? "w-[33%]" : step === 2 ? "w-[66%]" : "w-[100%]"}
    `}
        ></span>
      </div>
    </>
  );
};

export default Progressive;
