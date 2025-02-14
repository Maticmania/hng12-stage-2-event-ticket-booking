"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { useForm, FormProvider } from "react-hook-form";
import TicketSelection from "@/components/steps/TicketSelection";
import AttendeeDetails from "@/components/steps/AttendeeDetails";
import TicketConfirmation from "@/components/steps/TicketConfirmation";
import Progressive from "@/components/Progressive";

type FormData = {
  ticketType: string;
  ticketCount: string;
  name: string;
  email: string;
  project: string;
  profilePhoto?: string;
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [tickets, setTickets] = useState<FormData[]>([]);

  const methods = useForm<FormData>({
    defaultValues: {
      ticketType: "",
      ticketCount: "1",
      name: "",
      email: "",
      project: "",
      profilePhoto: "",
    },
  });



  const onSubmit = (data: FormData) => {
  
    // Retrieve existing tickets from localStorage
    const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
  
    // Append the new valid ticket
    const updatedTickets = [...storedTickets, data];
  
    // Save to localStorage
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  
    // Move to the next step
    if (step < 3) {
      setStep(step + 1);
    }
  };
  
  
  

  return (
    <div className="relative w-full grid place-items-center min-h-screen bg-tertiary px-5">
      <Header />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={`border-secondary border w-full max-w-[700px] ${
            step === 3 ? "min-h-auto" : "min-h-[920px]"
          } relative bg-tertiary rounded-[40px] my-[100px] p-[10px] lg:p-[48px] mt-[180px]`}
        >
          <Progressive step={step} />
          {step === 1 && <TicketSelection setStep={setStep} />}
          {step === 2 && <AttendeeDetails setStep={setStep} />}
          {step === 3 && <TicketConfirmation />}
        </form>
      </FormProvider>
    </div>
  );
}
