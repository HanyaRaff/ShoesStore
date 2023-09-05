import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products"
      className="max-container max-sm:mt-12"
    >

      <div>
        <h1 className="text-3xl font-montserrat font-semibold">
          <span
            className="padding-btn bg-black text-white rounded-lg"
          >Popular</span> Products
        </h1>

        <p className="mt-10 leading-8 max-md:text-sm text-xl info-text">
          Step into style with our new collection of trendy footwear, designed to elevate your every stride.

          Discover the perfect pair at our shoe store, where style meets comfort. Step into our world of footwear fashion and find the ideal fit for your unique journey.
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-4 
      md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {
          products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))
        }
      </div>

    </section>
  )
}

export default PopularProducts