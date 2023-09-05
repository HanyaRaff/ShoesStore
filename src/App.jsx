import { Nav } from "./components"
import { Footer, Hero, PopularProducts, Reviews, Services } from "./sections"
import SpecialOffers from "./sections/SpecialOffers"

function App() {

  return (
    <main className="relative">
      <Nav />

      <div className="padding-x">
        <div className="mt-32">
          <Hero />
        </div>

        <div className="mt-32 max-md:mt-16">
          <Services />
        </div>

        <div className="mt-32 max-md:mt-16">
          <SpecialOffers />
        </div>

        <div className="mt-32">
          <PopularProducts />
        </div>

        <div className="mt-32">
          <Reviews />
        </div>

      </div>

      <div className="padding-t max-sm:px-16 px-32 mt-32 pb-8 bg-black">
        <Footer />
      </div>

    </main>
  )
}

export default App
