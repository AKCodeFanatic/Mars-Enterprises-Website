import { useParams } from "react-router-dom"

const IndustryDetail = () => {
  const { id } = useParams()

  return <h1>Industry: {id}</h1>
}

export default IndustryDetail