import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
const Home = lazy(() => import("../pages/Home"))
const Products = lazy(() => import("../pages/Products"))
const ProductsDetail = lazy(() => import("../pages/ProductsDetail"))
const Industries = lazy(() => import("../pages/Industries"))
const IndustryDetail = lazy(() => import("../pages/IndustryDetail"))
const Contact = lazy(() => import("../pages/Contact"))


const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center pt-20">Wait A Minute !</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductsDetail />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries/:id" element={<IndustryDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:id" element={<ProductsDetail />} />
    </Routes>
   </Suspense>
  )
}

export default AppRoutes