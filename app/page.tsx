import FormContainer from "@/components/form/FormContainer";
import UploadProfile from "@/components/form/ImageUpload";
import TickectDetails from "@/components/form/TickectDetails";
import TickectTypes from "@/components/form/TickectTypes";
import TicketCount from "@/components/form/TicketCount";
import Header from "@/components/Header";
import Button from "@/components/utils/Button";
import Image from "next/image";
import ticketbg from "@/public/assets/images/Ticket.svg";
import reg from "@/public/assets/icons/reg.svg";
import Ticket from "@/components/form/Ticket";

export default function Home() {
  return (
    <div
      className="relative w-full grid place-items-center min-h-screen"
      style={{
        background: `
          linear-gradient(to bottom, 
            rgba(2, 25, 29, 1) 0%, 
            rgba(2, 25, 29, 1) 90%, 
            rgba(36, 160, 181, 0.2) 100%
          ),
          radial-gradient(
            ellipse 100% 10% at 50% 100%,
            rgba(36, 160, 181, 0.2),
            transparent
          )
        `,
      }}
    >
      <Header />
      {/* step 1 start */}
      {/* <section className="border-secondary border w-full max-w-[700px] min-h-[920px] relative bg-tertiary rounded-[40px]  my-[100px] p-[10px] lg:p-[48px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
          <h1 className="text-[32px] font-jeju">Ticket Selection</h1>
          <span className="font-roboto text-grey">Step 1/3</span>
        </div> */}
      {/* progressive bar  */}
      {/* <div className="w-full bg-secondary h-1 rounded-full flex">
          <span className="w-[40%] bg-primary h-full rounded-full"></span>
        </div>

        <div className="border-secondary border w-full h-auto bg-foreground rounded-[32px] p-6 mt-6 space-y-8">
          <TickectDetails />
          <span className="w-full bg-secondary h-1 flex"></span>
          <TickectTypes />
          <TicketCount />
          <div className="md:bg-tertiary md:border-secondary md:border rounded-full flex flex-col md:flex-row md:justify-around  font-jeju gap-4">
            <button className="p-3 min-w-[35%] bg-transparent border border-secondary rounded-md text-primary hover:border-primary ">Cancel</button>
            <Button text="Next" />
          </div>
        </div>
      </section> */}
      {/* step 1 end */}

      {/* step 2 start */}
      {/* <section className="border-secondary border w-full max-w-[700px] min-h-[920px] relative bg-tertiary rounded-[40px]  my-[100px] p-[10px] lg:p-[48px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
          <h1 className="text-[32px] font-jeju">Attendee Details</h1>
          <span className="font-roboto text-grey">Step 2/3</span>
        </div> */}
      {/* progressive bar  */}
      {/* <div className="w-full bg-secondary h-1 rounded-full flex">
          <span className="w-[70%] bg-primary h-full rounded-full"></span>
        </div>

        <div className="border-secondary border w-full h-auto bg-foreground rounded-[32px] p-6 mt-6 space-y-8">
          <UploadProfile />
          <span className="w-full bg-secondary h-1 flex"></span>
          <FormContainer />
        </div>
      </section> */}

      {/* step 2 end */}

      {/* step 3 start */}
      <section className="border-secondary border w-full max-w-[700px] relative bg-tertiary rounded-[40px]  my-[100px] px-[24px] md:p-[10px] lg:p-[48px] ">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
          <h1 className="text-[32px] font-jeju">Ready</h1>
          <span className="font-roboto text-grey">Step 3/3</span>
        </div>
        {/* progressive bar  */}
        <div className="w-full bg-secondary h-1 rounded-full flex">
          <span className="w-[100%] bg-primary h-full rounded-full"></span>
        </div>
        <div className="space-y-4 text-left md:text-center text-grey mt-10">
          <h1 className="font-roboto text-2xl font-bold md:text-[32px] md:font-normal">Your Ticket is Booked!</h1>
          <p>You can download or Check your <br className="md:hidden"/> email for a copy</p>
        </div>
        <Ticket />
        <div className=""></div>
      </section>
    </div>
  );
}
{
  /* <QRCode
                value={`TECHEMBER-${ticketNumber}`}
                size={140}
                style={{ height: "auto", width: "100%", maxWidth: "145.8px" }}
              /> */
}
