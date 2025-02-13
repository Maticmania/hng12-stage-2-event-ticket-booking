"use client";
import Header from "@/components/Header";
import TicketSelection from "@/components/steps/TicketSelection";
import AttendeeDetails from "@/components/steps/AttendeeDetails";
import TicketConfirmation from "@/components/steps/TicketConfirmation";

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

        <TicketSelection />
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

        <AttendeeDetails />
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
        <TicketConfirmation />
      </section>
    </div>
  );
}
