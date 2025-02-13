import React from 'react'
import TicketTypes from '../form/TickectTypes'

const TicketSelection = () => {
  return (
    <div className="border-secondary border w-full h-auto bg-foreground rounded-[32px] p-6 mt-6 space-y-8">
    <div className="w-full min-h-[200px] border border-secondary rounded-3xl text-center space-y-4 md:space-y-2 py-4 px-6">
      <h1 className="font-roadrage text-grey text-[38px] sm:text-[48px] lg:text-[62px]">
        Techember Fest ”25
      </h1>
      <p className="text-grey font-roboto">
        Join us for an unforgettable experience at
        <br /> [Event Name]! Secure your spot now.
      </p>
      <p className="text-grey font-roboto">
        📍 [Event Location] <span className="mx-4">| |</span> March 15,
        2025 | 7:00 PM
      </p>
    </div>{" "}
    <span className="w-full bg-secondary h-1 flex"></span>
    <TicketTypes />
    <div className="text-grey">
      <p className="font-roboto">Number of Tickets</p>
      <select
        name=""
        id=""
        className="w-full bg-transparent border-secondary border p-4 rounded-xl"
      >
        <option value="1" className="bg-primary ">
          1
        </option>
        <option value="2" className="bg-primary ">
          2
        </option>
        <option value="3" className="bg-primary ">
          3
        </option>
        <option value="4" className="bg-primary ">
          4
        </option>
      </select>
    </div>{" "}
    <div className="md:bg-tertiary md:border-secondary md:border rounded-full flex flex-col md:flex-row md:justify-around  font-jeju gap-4">
      <button className="p-3 min-w-[35%] bg-transparent border border-secondary rounded-md text-primary hover:border-primary ">
        Cancel
      </button>
      <button className="p-3 min-w-[35%] border border-secondary rounded-md text-grey bg-primary  hover:font-bold capitalize">Next</button>
    </div>
  </div>
  )
}

export default TicketSelection
