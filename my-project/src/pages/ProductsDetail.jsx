import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"
import { useState } from "react"

const ProductsDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  const [isOpen, setIsOpen] = useState(false)
  const [zoomed, setZoomed] = useState(false)

  if (!product) {
    return <div className="pt-24 text-center">Product not found</div>
  }

  return (
    <>
      <section className="pt-24 pb-12 bg-gray-50 min-h-screen">

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* ================= LEFT IMAGE ================= */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => setIsOpen(true)}
              className="
                max-h-[400px] 
                object-contain 
                cursor-zoom-in 
                transition 
                hover:scale-105
              "
            />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.name}
            </h1>

            {/* Description */}
            <p className="mt-3 text-gray-600">
              {product.shortDescription}
            </p>

            {/* ================= TECHNICAL ================= */}
            <div className="mt-6">

              <h3 className="font-semibold text-lg text-gray-800">
                Material: {product.primaryMaterial.name}
              </h3>

              <div className="mt-3 overflow-hidden rounded-lg border">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.primaryMaterial.specifications).map(
                      ([key, value]) => (
                        <tr key={key} className="border-b">
                          <td className="px-4 py-2 font-medium capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </td>
                          <td className="px-4 py-2 text-gray-600">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

            </div>

            {/* ================= OTHER MATERIALS ================= */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg text-gray-800">
                Other Materials We Deal In
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {product.otherMaterials.map((mat, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 
                      border border-gray-300 
                      rounded-full 
                      text-sm 
                      bg-gray-100 
                      hover:bg-black hover:text-white 
                      transition
                    "
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= INDUSTRIES ================= */}
            <div className="mt-6">

              <h3 className="font-semibold text-lg text-gray-800">
                Industries & Applications
              </h3>

              <div className="mt-3 space-y-3">
                {product.industries.map((industry, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-700">
                      {industry.name}
                    </h4>

                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      {industry.applications.map((app, i) => (
                        <li key={i}>{app}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>

            {/* ================= FEATURES ================= */}
            <div className="mt-6">

              <h3 className="font-semibold text-lg text-gray-800">
                Key Features
              </h3>

              <ul className="mt-3 list-disc list-inside text-gray-600 text-sm space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

            </div>

            {/* ================= DOWNLOAD ================= */}
            {/* <div className="mt-6 text-center">
              <a
                href={product.datasheet}
                download
                className="
                  inline-block 
                  bg-black text-white 
                  px-6 py-3 
                  rounded-lg 
                  font-semibold 
                  hover:bg-gray-800 
                  transition
                "
              >
                Download Datasheet
              </a>
            </div> */}

            {/* ================= NOTE ================= */}
            <div className="mt-6 text-sm text-gray-600 border-t pt-4">

              <p className="font-medium text-gray-800 mb-2">Note:</p>

              <p>
                We make custom sizes depending upon your drawings and requirements.
                For more details regarding your order, you can reach out to us:
              </p>

              <p className="mt-2">
                📞 +91 9871786670 <br />
                ✉️ marsenterprises142@gmail.com
              </p>

            </div>

            {/* ================= CTA BUTTONS ================= */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">

              <a
                href="https://wa.me/919871786670"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 text-center 
                  bg-green-600 text-white 
                  px-6 py-3 
                  rounded-lg 
                  font-semibold 
                  hover:bg-green-700 
                  transition
                "
              >
                WhatsApp Enquiry
              </a>

              <Link
                to="/contact"
                className="
                  flex-1 text-center 
                  border border-black 
                  px-6 py-3 
                  rounded-lg 
                  font-semibold 
                  hover:bg-black 
                  hover:text-white 
                  transition
                "
              >
                Enquire Now
              </Link>

            </div>

          </div>
        </div>

      </section>

      {/* ================= IMAGE MODAL ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => {
            setIsOpen(false)
            setZoomed(false)
          }}
        >

          {/* Top Buttons */}
          <div className="absolute top-4 right-4 flex gap-3">

            {/* Zoom Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setZoomed(!zoomed)
              }}
              className="bg-white/10 text-white px-3 py-2 rounded hover:bg-white/20"
            >
              {zoomed ? "🗗" : "⛶"}
            </button>

            {/* Download */}
            <a
              href={product.image}
              download
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 text-white px-3 py-2 rounded hover:bg-white/20"
            >
              ⬇
            </a>

            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
                setZoomed(false)
              }}
              className="bg-white/10 text-white px-3 py-2 rounded hover:bg-white/20"
            >
              ✕
            </button>

          </div>

          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            onClick={(e) => e.stopPropagation()}
            className={`
              object-contain transition-all duration-300
              ${zoomed ? "max-h-[98vh] max-w-[98vw]" : "max-h-[90vh] max-w-[90vw]"}
            `}
          />

        </div>
      )}
    </>
  )
}

export default ProductsDetail