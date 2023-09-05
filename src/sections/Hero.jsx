import { useState } from "react"
import { bigShoe1 } from "../assets/images"
import { ShoeCard } from "../components"
import { shoes, statistics } from "../constants"

const Hero = () => {
  const [BigShoe, setBigShoe] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full max-container"
    >
      {/* Quotes  */}
      <div className=" my-10 leading-0 relative">
        <div className="max-md:py-4 relative font-abril text-5xl max-md:text-4xl text-left">
          <div className="absolute -top-[20px] px-2 font-abril text-xl rounded-md bg-black text-white">
            Find
          </div>
          The Best Shoes in Your Area
        </div>
      </div>

      {/* Hero  */}

      <div className="flex justify-between items-start gap-10 max-md:gap-28 lg:py-16 py-8 max-lg:flex-col-reverse">

        <div className="flex flex-col w-3/6 max-lg:w-full gap-5">
          <div
            className="text-3xl font-montserrat font-semibold"
          >
            <span
              className="padding-btn bg-black text-white rounded-lg"
            >New</span> Products
          </div>
          <div className="leading-8 max-md:text-sm info-text">
            Step into style with our new collection of trendy footwear, designed to elevate your every stride.

            Discover the perfect pair at our shoe store, where style meets comfort. Step into our world of footwear fashion and find the ideal fit for your unique journey.
          </div>
          <div className="mt-5 lg:mt-1">
            <div className="w-[130px] text-center text-xl font-medium border-4 border-black rounded-xl padding-btn cursor-pointer">
              View More
            </div>
          </div>

          <div className="flex flex-wrap justify-around max-lg:mt-2 mt-22">
            {statistics.map((stat) => (
              <div key={stat.label}
                className="flex flex-col"
              >
                <div className="pt-8 max-md:text-lg text-3xl font-semibold">
                {stat.value}
                </div>

                <div className="text-xl max-md:text-sm text-slate-gray text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Shoes  */}
        <div className="w-3/6 max-lg:w-full">

          <img src={BigShoe} alt="shoe"
            className="max-md:w-[550px] w-[450px]"
          />

          <div className="mt-10 flex justify-center items-center gap-10">
            {shoes.map((shoe, index) => (
              <ShoeCard
                key={index}
                imgUrl={shoe}
                BigShoe={BigShoe}
                changeImage={(shoe) => { setBigShoe(shoe) }}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero