import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-100">

      <div className="max-w-6xl mx-auto px-4">

        <div
          className="
            bg-gradient-to-r 
            from-black 
            to-gray-900 
            text-white 
            rounded-2xl 
            px-6 md:px-12 
            py-10 md:py-12 
            text-center 
            shadow-xl
          "
        >

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            Let’s Build Reliable Rubber Solutions Together
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            From material selection to final production, we ensure precision,
            durability, and performance tailored to your exact requirements.             

            Products you can Visualize : We can Materialize
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919871786670"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white text-black 
                px-6 py-3 
                rounded-lg 
                font-semibold 
                transition 
                hover:bg-gray-200 
                hover:scale-105
              "
            >
              WhatsApp Enquiry
            </a>

            {/* Contact Page */}
            <Link
              to="/contact"
              className="
                border border-white 
                px-6 py-3 
                rounded-lg 
                font-semibold 
                transition 
                hover:bg-white 
                hover:text-black 
                hover:scale-105
              "
            >
              Send Enquiry
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}

export default CTA