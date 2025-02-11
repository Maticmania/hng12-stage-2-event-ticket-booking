import React from 'react'

const TickectDetails = () => {
  return (
    <div className="w-full min-h-[200px] border border-secondary rounded-3xl text-center space-y-4 md:space-y-2 py-4 px-6">
    <h1 className="font-roadrage text-grey text-[38px] sm:text-[48px] lg:text-[62px]">
      Techember Fest ”25
    </h1>
    <p className="text-grey font-roboto">
      Join us for an unforgettable experience at
      <br /> [Event Name]! Secure your spot now.
    </p>
    <p className="text-grey font-roboto">
    📍 [Event Location] <span className="mx-4">| |</span> March 15, 2025 | 7:00 PM
    </p>
  </div>
  )
}

export default TickectDetails
