import banner from "../../assets/images/hero-image.jpeg"

const Hero = () => {
  return (
    <section className="w-full mt-[70px]"> {/* Push below navbar */}

      <div
        className="
          w-full 
          h-[180px] 
          sm:h-[250px] 
          md:h-[350px] 
          lg:h-[420px]
          bg-cover 
          bg-center 
          relative
        "
        style={{ backgroundImage: `url(${banner})` }}
      >

        {/* Medium Overlay (not too dark) */}
        <div className="absolute inset-0 "></div>

        

      </div>

    </section>
  )
}

export default Hero