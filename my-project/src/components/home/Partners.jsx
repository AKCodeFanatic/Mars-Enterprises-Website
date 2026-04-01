import { partners } from "../../data/partners"

const Partners = () => {
  return (
    <section
      id="partners"
      className="pt-12 pb-12 md:pt-16 md:pb-16 bg-white overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Our Trusted Partners
        </h2>

        {/* Slider */}
        <div className="mt-10 overflow-hidden">

          <div className="flex w-max items-center gap-16 md:gap-24 animate-scroll">

            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center 
                  min-w-[180px] h-[80px] md:h-[100px]
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="
                    max-h-full 
                    max-w-[140px] md:max-w-[160px]
                    object-contain
                    transition duration-300
                    opacity-80
                    hover:opacity-100
                    hover:scale-105
                  "
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Partners