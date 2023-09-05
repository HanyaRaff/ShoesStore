import { star } from "../assets/icons"

const RevieCard = ({ imgURL, feedback, customerName, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgURL} alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-center mt-6 
      max-w-sm info-text">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt=""
          height={24}
          width={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-5 font-semibold text-2xl font-palanquin text-center">{customerName}</h3>
    </div>
  )
}

export default RevieCard