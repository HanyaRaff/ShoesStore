import { useState } from "react";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
const Nav = () => {

  const [Open, setOpen] = useState(false)

  return (
    <header className="padding-x py-8 max-sm:px-8 overflow-hidden">
      <nav className="flex justify-between items-center ">
        <img src="/shoestore.png" alt="logo"
          width={150}
          className=" hover:animate-bounce"
        />

        <div className="flex justify-between max-md:hidden">
          {navLinks.map((link) => (
            <div key={link.label} className="px-8 font-montserrat font-semibold hover:underline hover:underline-offset-8">
              <a href={link.href}>{link.label}</a>
            </div>
          ))}
        </div>

        <div 
        onClick={() => setOpen((prev) => !prev)}
        className="hidden max-md:block"
        >
          <img src={hamburger} alt="hamburger"
          width={25}
          height={25}
           />
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`md:hidden mt-4 flex-col z-10 justify-between max-md:${Open ? 'flex' : 'hidden'}`}>
        {navLinks.map((link) => (
          <div key={link.label} 
          className="w-full px-8 py-4 font-montserrat font-semibold text-center transition hover:underline hover:underline-offset-8"
          >
            <a  href={link.href}>{link.label}</a>
          </div>
        ))}
      </div>

    </header>
  )
}

export default Nav