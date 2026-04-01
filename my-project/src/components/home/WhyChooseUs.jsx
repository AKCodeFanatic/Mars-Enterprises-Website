import img1 from "../../assets/images/Partnership.png"
import img2 from "../../assets/images/Final_Settings.png"
import img3 from "../../assets/images/workflow.png"

const WhyChooseUs = () => {
  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Why Choose Us
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            
            <div className="w-20 h-20 mx-auto flex items-center justify-center">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-contain scale-[1.1]"
            />
          </div>

            <h3 className="mt-4 text-lg font-semibold text-black">
              Responsible Partnership
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              We place our clients at the center of everything we do. We understand that our reputation is directly attached to your brand reputation and we strive to make your brand better and reliable with our products.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            
            <div className="w-20 h-20 mx-auto flex items-center justify-center">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-contain scale-[1.8]"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-black">
              Material Integrity
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              We strictly follow every specification with zero compromise in material quality, 
              precision, and performance.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            
            <div className="w-20 h-20 mx-auto flex items-center justify-center ">
              <img
                src={img3}
                alt=""
                className="w-full h-full object-contain scale-[2.0]"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-black">
              Efficient Workflow
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              We ensure timely delivery of high-quality, cost-effective products that help 
              our clients grow thereby resulting in our growth in hindsight as well.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs