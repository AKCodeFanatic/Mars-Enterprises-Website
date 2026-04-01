import Hero from "../components/home/Hero"
import About from "../components/home/About"
import ProductsPreview from "../components/home/ProductsPreview"
import WhyChooseUs from "../components/home/WhyChooseUs"
import Partners from "../components/home/Partners"
import IndustriesPreview from "../components/home/IndustriesPreview"
import CTA from "../components/home/CTA"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ProductsPreview />
      <WhyChooseUs />
      <Partners />
      <IndustriesPreview />
      <CTA />
    </>
  )
}

export default Home