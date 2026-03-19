import { useParams } from "react-router-dom"

const ProductsDetail = () => {
  const { id } = useParams()

  return <h1>Product: {id}</h1>
}

export default ProductsDetail
