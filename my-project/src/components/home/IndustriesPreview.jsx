import { Link } from "react-router-dom"
import { industries } from "../../data/industries"
import bg from "../../assets/images/industry_bg.jpg"

const IndustriesPreview = () => {
  return (
    <section id="industries" className="pt-10 pb-10 md:pt-12 md:pb-12 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4">

        <div
          className="relative rounded-2xl overflow-hidden bg-cover bg-center py-8 md:py-10"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative px-4">

            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
              INDUSTRIES WE SERVE
            </h2>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  to="/products"
                  state={{ selectedIndustry: industry.id }} // ✅ USE ID
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="aspect-square flex flex-col">

                      <div className="flex-1 overflow-hidden">
                        <img
                          src={industry.image}
                          alt={industry.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition group-hover:scale-105"
                        />
                      </div>

                      <div className="px-3 py-2 bg-white group-hover:bg-black transition">
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-white text-center">
                          {industry.name}
                        </h3>
                      </div>

                    </div>

                  </div>
                </Link>
              ))}

            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default IndustriesPreview