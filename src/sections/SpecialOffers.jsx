import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"


const SpecialOffers = () => {
  return (
    <section id="special-offers" className="flex flex-wrap max-md:flex-col gap-10 mt-12">
      
      <div className="flex-1">
        <img src={offer} alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">

        <h1 className="text-3xl font-montserrat font-semibold">
          <span
            className="padding-btn bg-black text-white rounded-lg"
          >Special</span> Products Offers
        </h1>

        <p className="mt-10 leading-8 max-md:text-sm text-xl info-text">
          Step into style with our new collection of trendy footwear, designed to elevate your every stride.

          Discover the perfect pair at our shoe store, where style meets comfort. Step into our world of footwear fashion and find the ideal fit for your unique journey.
        </p>
        <p className="info-text mt-5 leading-8 max-md:text-sm ">
        Discover Best And Perfect Shoes Of All Time, And Get a Many Discount Of it.
        </p>

        <div  className="mt-10">
          <Button img={arrowRight} />
        </div>

      </div>
    </section>
  )
}

export default SpecialOffers