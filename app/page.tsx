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
    if (step < 2) {
      setStep(step + 1);
    }
  };

  return (
    <div className="relative w-full grid place-items-center min-h-screen bg-tertiary">
      <Header />
      {/* step 1 start */}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="border-secondary border w-full max-w-[700px] min-h-[920px] relative bg-tertiary rounded-[40px]  my-[100px] p-[10px] lg:p-[48px] mt-[180px]"
        >
          <Progressive step={step} />
          {step === 1 && <TicketSelection setStep={setStep} />}
          {step === 2 && <AttendeeDetails setStep={setStep} />}
        </form>
      </FormProvider>
      {/* step 1 end */}

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
