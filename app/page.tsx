"use client";

import FormContainer from "@/components/form/FormContainer";
import UploadProfile from "@/components/form/ImageUpload";

import Header from "@/components/Header";
import Button from "@/components/utils/Button";
import Image from "next/image";
import ticketbg from "@/public/assets/images/Ticket.svg";
import reg from "@/public/assets/icons/reg.svg";
import Ticket from "@/components/form/Ticket";
import TicketTypes from "@/components/form/TickectTypes";

export default function Home() {
  return (
    <div className="relative w-full grid place-items-center min-h-screen bg-tertiary">
      <Header />
      {/* step 1 start */}
      <section className="border-secondary border w-full max-w-[700px] min-h-[920px] relative bg-tertiary rounded-[40px]  my-[100px] p-[10px] lg:p-[48px] mt-[180px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
          <h1 className="text-[32px] font-jeju">Ticket Selection</h1>
          <span className="font-roboto text-grey">Step 1/3</span>
        </div>
        {/* progressive bar  */}
        <div className="w-full bg-secondary h-1 rounded-full flex">
          <span className="w-[40%] bg-primary h-full rounded-full"></span>
        </div>

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
          {/* <div className="text-grey">
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
              <div className="rounded-lg h-[65px] bg-transparent border border-secondary  p-2 flex justify-between items-start cursor-pointer hover:bg-primary transition-all duration-300">
                <div className="font-normal text-base font-roboto text-grey">
                  <p className="uppercase">VIP Access </p>
                  <p>20 left!</p>
                </div>
                <button className="bg-secondary font-roboto font-semibold text-right pl-6 pr-2 rounded-lg border-primary border py-2">
                  $50
                </button>
              </div>
              <div className="rounded-lg h-[65px] bg-transparent border border-secondary  p-2 flex justify-between items-start cursor-pointer hover:bg-primary transition-all duration-300">
                <div className="font-normal text-base font-roboto text-grey">
                  <p className="uppercase">VVIP Access </p>
                  <p>20 left!</p>
                </div>
                <button className="bg-secondary font-roboto font-semibold text-right pl-6 pr-2 rounded-lg border-primary border py-2">
                  $150
                </button>
              </div>
            </div>
          </div> */}
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
            <Button text="Next" />
          </div>
        </div>
      </section>
      {/* step 1 end */}

      {/* step 2 start */}
      <section className="border-secondary border w-full max-w-[700px] min-h-[920px] relative bg-tertiary rounded-[40px]  my-[100px] p-[10px] lg:p-[48px] mt-[180px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
          <h1 className="text-[32px] font-jeju">Attendee Details</h1>
          <span className="font-roboto text-grey">Step 2/3</span>
        </div>
        <div className="w-full bg-secondary h-1 rounded-full flex">
          <span className="w-[70%] bg-primary h-full rounded-full"></span>
        </div>

        <div className="border-secondary border w-full h-auto bg-foreground rounded-[32px] p-6 mt-6 space-y-8">
          <UploadProfile />
          <span className="w-full bg-secondary h-1 flex"></span>
          {/* <form action="" className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="font-roboto text-grey">Enter your name</label>
              <input
                type="text"
                className="rounded-xl border border-secondary bg-transparent h-[48px] outline-none focus:ring ring-primary px-4 text-grey"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-roboto text-grey">
                Enter your email *
              </label>
              <input
                type="email"
                className="rounded-xl border border-secondary bg-transparent h-[48px] outline-none focus:ring ring-primary px-4 text-grey"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-roboto text-grey">
                About your project
              </label>
              <textarea
                placeholder="Textarea"
                className="rounded-xl border border-secondary bg-transparent min-h-[127px] max-h-[130px] outline-none focus:ring ring-primary p-4 text-grey"
              />
            </div>
            <div className="w-full flex justify-between gap-5 font-jeju">
              <button className="p-3 w-full bg-transparent border border-secondary rounded-md text-primary hover:border-primary">
                Back
              </button>
              <button className="p-3 w-full bg-primary border border-secondary rounded-md text-grey hover:border-primary ">
                Get My Ticket
              </button>
            </div>
          </form> */}
          <FormContainer />
        </div>
      </section>

      {/* step 2 end */}

      {/* step 3 start */}
      <section className="border-secondary border w-full max-w-[700px]  relative bg-tertiary rounded-[40px]  my-[100px] p-[10px] lg:p-[48px] mt-[180px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
          <h1 className="text-[32px] font-jeju">Ready</h1>
          <span className="font-roboto text-grey">Step 3/3</span>
        </div>
        <div className="w-full bg-secondary h-1 rounded-full flex">
          <span className="w-[100%] bg-primary h-full rounded-full"></span>
        </div>
        <div className="space-y-4 text-left md:text-center text-grey mt-10">
          <h1 className="font-roboto text-2xl font-bold md:text-[32px] md:font-normal">
            Your Ticket is Booked!
          </h1>
          <p>
            You can download or Check your <br className="md:hidden" /> email
            for a copy
          </p>
        </div>
        <Ticket />
        <div className="md:bg-tertiary md:border-secondary md:border rounded-full flex flex-col md:flex-row md:justify-around  font-jeju gap-4">
          <button className="p-3 min-w-[35%] bg-transparent border border-secondary rounded-md text-primary hover:border-primary font-jeju">
            Download Ticket
          </button>
          <Button text="Book Another Ticket" />
        </div>
      </section>
    </div>
  );
}
