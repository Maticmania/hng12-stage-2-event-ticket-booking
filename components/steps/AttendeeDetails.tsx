import React from "react";
import UploadProfile from "../form/ImageUpload";
import FormContainer from "../form/FormContainer";

interface AttendeeDetailsProps {
  setStep: (step: number) => void
}

  const AttendeeDetails = ({ setStep }: AttendeeDetailsProps) => {
 
  return (
    <div className="border-secondary border w-full h-auto bg-foreground rounded-[32px] p-6 mt-6 space-y-8">
      <UploadProfile  />
      <span className="w-full bg-secondary h-1 flex"></span>
      <FormContainer setStep={setStep} />
    </div>
  );
};

export default AttendeeDetails;
