import { useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";

// Define the form fields type
type FormData = {
  name: string;
  email: string;
  project: string;
};

// Define the form steps type
interface setStepProps {
  setStep: (step: number) => void;
}

const FormContainer = ({ setStep }: setStepProps) => {
  const {
    register,
    formState: { errors },
    setValue, // You can use this to update form values programmatically
  } = useFormContext<FormData>();

  return (
    <section className="space-y-4">
      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <label className="font-roboto text-grey">Enter your name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="rounded-xl border border-secondary bg-transparent h-[48px] outline-none focus:ring ring-primary px-4 text-grey"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.message && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label className="font-roboto text-grey">Enter your email *</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
          className="rounded-xl border border-secondary bg-transparent h-[48px] outline-none focus:ring ring-primary px-4 text-grey"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.message && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Project Description */}
      <div className="flex flex-col gap-2">
        <label className="font-roboto text-grey">About your project</label>
        <textarea
          placeholder="Tell us about your project..."
          {...register("project", { required: "Project details are required" })}
          className="rounded-xl border border-secondary bg-transparent min-h-[127px] max-h-[130px] outline-none focus:ring ring-primary p-4 text-grey"
        />
        {errors.project?.message && (
          <p className="text-red-500 text-sm">{errors.project.message}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="w-full flex justify-between flex-col md:flex-row gap-5 font-jeju">
        <button
          type="button"
          className="p-3 w-full bg-transparent border border-secondary rounded-md text-primary hover:border-primary"
          onClick={() => setStep(1)}
        >
          Back
        </button>
        <button
          type="submit"
          className="p-3 w-full bg-primary border border-secondary rounded-md text-grey hover:border-primary"
        >
          Get My Ticket
        </button>
      </div>
    </section>
  );
};

export default FormContainer;
