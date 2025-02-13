"use client";
import { useState } from "react";
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
    profilePhoto?: File | null;
  };

export default function Home() {
  const [step, setStep] = useState(1);
  const methods = useForm<FormData>({
    defaultValues: {
      ticketType: "",
      ticketCount: "1",
      name: "",
      email: "",
      project: "",
      profilePhoto: null,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="relative w-full grid place-items-center min-h-screen bg-tertiary">
      <Header />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={`border-secondary border w-full max-w-[700px] ${
            step === 3 ? "min-h-auto" : "min-h-[920px]"
          }  relative bg-tertiary rounded-[40px]  my-[100px] p-[10px] lg:p-[48px] mt-[180px]`}
        >
          <Progressive step={step} />
          {step === 1 && <TicketSelection setStep={setStep} />}
          {step === 2 && <AttendeeDetails setStep={setStep} />}
          {step === 3 && <TicketConfirmation setStep={setStep} />}
        </form>
      </FormProvider>
    </div>
  );
}
