
const FormContainer = () => {
  return (
    <form action="" className="space-y-4">
    <div className="flex flex-col gap-2">
      <label className="font-roboto text-grey">
        Enter your name
      </label>
      <input type="text" className="rounded-xl border border-secondary bg-transparent h-[48px] outline-none focus:ring ring-primary px-4 text-grey" />
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-roboto text-grey">
        Enter your email *
      </label>
      <input type="email" className="rounded-xl border border-secondary bg-transparent h-[48px] outline-none focus:ring ring-primary px-4 text-grey" />
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-roboto text-grey">
        About your project
      </label>
      <textarea placeholder="Textarea"  className="rounded-xl border border-secondary bg-transparent min-h-[127px] max-h-[130px] outline-none focus:ring ring-primary p-4 text-grey" />
    </div>
    <div className="w-full flex justify-between gap-5 font-jeju">
    <button className="p-3 w-full bg-transparent border border-secondary rounded-md text-primary hover:border-primary">
      Back
    </button>
    <button className="p-3 w-full bg-primary border border-secondary rounded-md text-grey hover:border-primary ">
      Get My Ticket
    </button>
    </div>
  </form>
  )
}

export default FormContainer
