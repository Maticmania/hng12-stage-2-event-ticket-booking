import React from "react";
import NewTicket from "../form/NewTicket";
import html2canvas from "html2canvas";
import { useRef } from "react";
const TicketConfirmation = () => {
  const ticketRef = useRef<HTMLDivElement>(null);

  // Function to capture and download the ticket
  const downloadTicket = async () => {
    if (!ticketRef.current) return;
    
    const canvas = await html2canvas(ticketRef.current, { scale: 2 });
    const image = canvas.toDataURL("image/png");

    // Create a download link
    const link = document.createElement("a");
    link.href = image;
    link.download = "ticket.png";
    link.click();
  };


  return (
    <div className="grid gap-y-8">
      <div className="space-y-4 text-left md:text-center text-grey mt-10">
        <h1 className="font-roboto text-2xl font-bold md:text-[32px] md:font-normal">
          Your Ticket is Booked!
        </h1>
        <p>
          You can download or Check your <br className="md:hidden" /> email for
          a copy
        </p>
      </div>
      {/* <Ticket ticketNumber="12345" name={name} /> */}
      <NewTicket ticketNumber="12345" ticketRef={ticketRef} />
      <div className="md:bg-tertiary md:border-secondary md:border rounded-full flex flex-col md:flex-row md:justify-around  font-jeju gap-4">
        <button
          onClick={downloadTicket}
          className="p-3 min-w-[35%] bg-transparent border border-secondary rounded-md text-primary hover:border-primary font-jeju"
        >
          Download Ticket
        </button>
        <button
          className="p-3 min-w-[35%] border border-secondary rounded-md text-grey bg-primary  hover:font-bold capitalize"
          type="button"
          onClick={() => (window.location.href = "/")}
        >
          Book Another Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketConfirmation;
