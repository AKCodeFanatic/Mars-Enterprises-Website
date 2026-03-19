import aboutImg from "../../assets/images/about.webp"

const About = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-stretch">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
              About <span className="text-black">Mars Enterprises</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-center">
              We are a trusted manufacturer of high-quality rubber components, delivering 
              durable and precision-engineered solutions for a wide range of industrial applications. 
              With years of experience, we ensure reliability, performance, and customer satisfaction.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-center">
              Our expertise lies in custom molded rubber products designed to meet specific 
              industrial requirements across multiple sectors.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold text-black">15+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold text-black">100+</h3>
              <p className="text-gray-600 text-sm">Products</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold text-black">50+</h3>
              <p className="text-gray-600 text-sm">Clients</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold text-black">10+</h3>
              <p className="text-gray-600 text-sm">Industries</p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block h-full">
          <img
            src={aboutImg}
            alt="About Mars Enterprises"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

      </div>

    </section>
  )
}

export default About