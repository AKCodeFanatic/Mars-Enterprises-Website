import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div
        className="
          bg-white 
          rounded-xl 
          overflow-hidden
          border border-gray-200
          transition-all duration-300 
          hover:-translate-y-2
          hover:shadow-xl   
          group
          text-center
        "
      >
        {/* ================= IMAGE ================= */}
        <div className="flex justify-center items-center h-40 p-6">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="
              max-h-full 
              object-contain 
              transition-all duration-300 
              group-hover:scale-105
            "
          />
        </div>

        {/* ================= TEXT SECTION ================= */}
        <div
          className="
            px-4 py-3
            transition-all duration-300
            bg-white
            group-hover:bg-gradient-to-r 
            group-hover:from-gray-900 
            group-hover:to-zinc-700 
            group-hover:to-transparent
          "
        >
          <h3
            className="
              text-lg 
              font-semibold 
              text-gray-800 
              transition duration-300 
              group-hover:text-white
            "
          >
            {product.name}
          </h3>
        </div>

      </div>
    </Link>
  )
}

export default ProductCard