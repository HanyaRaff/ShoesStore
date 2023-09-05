

const Button = ({img}) => {
  return (
    <div className="flex justify-between max-w-[150px] text-center text-xl font-medium border-4 border-black rounded-xl padding-btn cursor-pointer">
      <div className="">
        View More
      </div>
      <div className="flex items-center justify-center">
        <img src={img} alt="img"
        width={15}
        height={15}
         />
      </div>
    </div>
  )
}

export default Button