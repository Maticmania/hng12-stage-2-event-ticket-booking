// import FormContainer from "@/components/form/formContainer";
import TickectDetails from "@/components/form/TickectDetails";
import TickectTypes from "@/components/form/TickectTypes";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className="relative w-full grid place-items-center min-h-screen p-[5%]"
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
      <section className="border-secondary border w-full max-w-[700px] h-[920px] relative bg-tertiary rounded-[40px]  my-[140px] p-[10px] lg:p-[48px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center text-white">
          <h1 className="text-[32px] font-jeju">Ticket Selection</h1>
          <span className="font-roboto text-grey">Step 1/3</span>
        </div>
        {/* progressive bar  */}
        <div className="w-full bg-secondary h-1 rounded-full flex">
          <span className="w-[40%] bg-primary h-full rounded-full"></span>
        </div>

        <div className="border-secondary border w-full h-auto bg-foreground rounded-[32px] p-6 mt-6">
          <TickectDetails />
          <span className="w-full bg-secondary h-1 flex my-8"></span>
          <TickectTypes />
        </div>
      </section>
    </div>
  );
}
