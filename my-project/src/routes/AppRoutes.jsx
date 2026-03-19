import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductsDetail from "../pages/ProductsDetail"
import Industries from "../pages/Industries"
import IndustryDetail from "../pages/IndustryDetail"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductsDetail />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries/:id" element={<IndustryDetail />} />
    </Routes>
  )
}

export default AppRoutes