import React from "react";
import UploadProfile from "../form/ImageUpload";
import FormContainer from "../form/FormContainer";
import { useFormContext } from "react-hook-form";

interface AttendeeDetailsProps {
  setStep: (step: number) => void
}

  const AttendeeDetails = ({ setStep }: AttendeeDetailsProps) => {
  const {
    setValue,
  } = useFormContext();

  const handleProfileUpload = (file: File) => {
    setValue("profilePhoto", file);
  };
  return (
    <div className="border-secondary border w-full h-auto bg-foreground rounded-[32px] p-6 mt-6 space-y-8">
      <UploadProfile onUpload={handleProfileUpload} />
      <span className="w-full bg-secondary h-1 flex"></span>
      <FormContainer setStep={setStep} />
    </div>
  );
};

export default AttendeeDetails;
