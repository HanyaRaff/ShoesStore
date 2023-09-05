

const ServicesCard = ({imgURL,label,subtext}) => {
  return (
    <section id="about" className="sm:min-w-[350px] sm:w-[350px] w-full shadow-3xl py-16 px-10">
      <div className="h-11 w-11 flex justify-center items-center rounded-full bg-black">
        <img src={imgURL} alt="img"
        height={24}
        width={24}
        />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat leading-normal text-lg text-slate-gray">{subtext}</p>
    </section>
  )
}

export default ServicesCard