import { useState, useMemo, useEffect } from "react"
import { products } from "../data/products"

import { lazy, Suspense } from "react"
const ProductCard = lazy(() => import("../components/common/ProductCard"))

import { Link, useLocation } from "react-router-dom"

const INDUSTRIES = [
  { id: "Sanitary & Hydraulics", name: "Sanitary & Hydraulics" },
  { id: "Automobile", name: "Automobile" },
  { id: "Oil & Gas", name: "Oil & Gas" },
  { id: "Solar", name: "Solar" },
]

const ITEMS_PER_PAGE = 8

const Products = () => {
  const location = useLocation()

  const [search, setSearch] = useState("")
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  // ✅ HANDLE INDUSTRY CLICK NAVIGATION
  useEffect(() => {
  if (location.state?.selectedIndustry) {
    setSelectedIndustries([location.state.selectedIndustry])
  } else {
    // ✅ ALWAYS RESET when null or undefined
    setSelectedIndustries([])
  }

  setCurrentPage(1)
}, [location.key]) // 🔥 IMPORTANT CHANGE

  // ================= FILTER =================
  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // SEARCH
    if (search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    // MULTI INDUSTRY FILTER
    if (selectedIndustries.length > 0) {
      filtered = filtered.filter((p) =>
        p.industries?.some((ind) =>
          selectedIndustries.includes(ind.id)
        )
      )
    }

    // SORT
    filtered.sort((a, b) => a.name.localeCompare(b.name))

    return filtered
  }, [search, selectedIndustries])

  // ================= PAGINATION =================
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // ================= HANDLERS =================

  const toggleIndustry = (industryId) => {
    setCurrentPage(1)

    setSelectedIndustries((prev) =>
      prev.includes(industryId)
        ? prev.filter((i) => i !== industryId)
        : [...prev, industryId]
    )
  }

  const removeFilter = (industryId) => {
    setSelectedIndustries((prev) =>
      prev.filter((i) => i !== industryId)
    )
  }

  const clearAllFilters = () => {
    setSelectedIndustries([])
  }

  // ================= UI =================
  return (
    <section className="pt-24 pb-16 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Explore Our Range of Products
        </h1>

        {/* SEARCH + FILTER */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-between">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full md:w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((industry) => (
              <button
                key={industry.id}
                onClick={() => toggleIndustry(industry.id)}
                className={`
                  px-3 py-2 rounded-lg border text-sm transition
                  ${
                    selectedIndustries.includes(industry.id)
                      ? "bg-black text-white"
                      : "bg-white hover:bg-black hover:text-white"
                  }
                `}
              >
                {industry.name}
              </button>
            ))}
          </div>

        </div>

        {/* ================= ACTIVE FILTER TAGS ================= */}
        {selectedIndustries.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-3">

            {selectedIndustries.map((id) => {
              const industry = INDUSTRIES.find((i) => i.id === id)

              return (
                <div
                  key={id}
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm"
                >
                  <span>{industry?.name}</span>

                  <button
                    onClick={() => removeFilter(id)}
                    className="hover:text-gray-300"
                  >
                    ✕
                  </button>
                </div>
              )
            })}

            {/* CLEAR ALL */}
            <button
              onClick={clearAllFilters}
              className="text-sm underline text-gray-600 hover:text-black"
            >
              Clear All
            </button>

          </div>
        )}

        {/* PRODUCTS GRID */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}

        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2 flex-wrap">

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`
                  px-4 py-2 rounded border
                  ${
                    currentPage === index + 1
                      ? "bg-black text-white"
                      : "bg-white hover:bg-black hover:text-white"
                  }
                `}
              >
                {index + 1}
              </button>
            ))}

          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Not Found What You Were Looking For!
          </h3>

          <p className="mt-2 text-gray-600">
            Enquire about Your Visualization below
          </p>

          <p className="mt-3 text-gray-700">
            📞 +91 9871786670 <br />
            ✉️ marsenterprises142@gmail.com
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/919871786670"
              target="_blank"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              WhatsApp Enquiry
            </a>

            <Link
              to="/contact"
              className="border border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
            >
              Enquire Now
            </Link>

          </div>

          <p className="mt-6 text-xl font-bold text-gray-900">
            PRODUCTS YOU VISUALIZE : WE MATERIALIZE
          </p>

        </div>

      </div>

    </section>
  )
}

export default Products