
const Button = ({text}:{text:string}) => {
  return (
    <button className="p-3 min-w-[35%] border border-secondary rounded-md text-grey bg-primary  hover:font-bold capitalize">{text}</button>
  )
}

export default Button
