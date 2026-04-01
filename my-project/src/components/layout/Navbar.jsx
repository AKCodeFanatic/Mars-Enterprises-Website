import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logos/Mars_Logo.jpeg"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    let lastScrollY = window.scrollY

    

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <nav
        className={`bg-white shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Mars Rubber Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white"
            >
              Home
            </Link>

            <Link 
              to="/#about" 
              className="px-3 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white"
            >
              About Us
            </Link>

            <button
            onClick={() => {
              navigate("/products", {
                state: { selectedIndustry: null },                
              })
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="px-3 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white"
          >
            Products
            </button>
            <Link 
              to="/#industries" 
              className="px-3 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white"
            >
              Industries
            </Link>

            {/* CTA Button */}
            <Link
               to="/contact" 
              
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Enquire Now
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        
      >
        <div className="p-4 flex flex-col gap-4 mt-10">

          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="p-2 rounded transition hover:bg-black hover:text-white"
          >
            Home
          </Link>

          <Link 
            to="/#about" 
            onClick={() => setIsOpen(false)} 
            className="p-2 rounded transition hover:bg-black hover:text-white"
          >
            About Us
          </Link>

          <Link 
            to="/products" 
            onClick={() => setIsOpen(false)} 
            className="p-2 rounded transition hover:bg-black hover:text-white"
          >
            Products
          </Link>

          <Link 
            to="/#industries" 
            onClick={() => setIsOpen(false)} 
            className="p-2 rounded transition hover:bg-black hover:text-white"
          >
            Industries
          </Link>

          <Link
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="bg-black text-white px-4 py-2 rounded text-center hover:bg-gray-800 transition"
          >
            Enquire Now
          </Link>

        </div>
      </div>
    </>
  )
}

export default Navbar