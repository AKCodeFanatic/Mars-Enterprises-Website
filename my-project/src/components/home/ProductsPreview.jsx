import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import ProductCard from "../common/ProductCard"
import { products } from "../../data/products"
import { Link } from "react-router-dom"

const ProductsPreview = () => {
  return (
    <section className="pt-12 pb-6 md:pt-16 md:pb-8 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Your Visualization : Our Products
        </h2>

        {/* Carousel */}
        <div className="mt-10 relative px-8 md:px-12">

          <Swiper
            lazy={true}
            preloadImages={false}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="!overflow-hidden"
          >

            {products.map((product) => (
              <SwiperSlide key={product.id} className="flex justify-center">
                <div className="w-full max-w-[250px]">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

          {/* Buttons */}
          <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-black hover:text-white transition z-10">
            ◀
          </button>

          <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-black hover:text-white transition z-10">
            ▶
          </button>

        </div>

        {/* ================= NEW BUTTON ================= */}
        <div className="mt-10 text-center">

          <Link
            to="/products"
            className="
              inline-block 
              bg-black text-white 
              px-8 py-3 
              rounded-lg 
              font-semibold 
              transition 
              hover:bg-gray-800 
              hover:scale-105
            "
          >
            Explore Our Products
          </Link>

        </div>

      </div>

    </section>
  )
}

export default ProductsPreview