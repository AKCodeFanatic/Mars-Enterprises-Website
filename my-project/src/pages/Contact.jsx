const Contact = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4">

        {/* ================= FORM SECTION ================= */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Products You Visualize : We Materialize
            </h2>
            <p className="mt-2 text-gray-500">
              Enquire about your visualization now
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">

            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold transition hover:bg-gray-800 hover:scale-105"
              >
                Request Now
              </button>
            </div>

          </form>

        </div>

        {/* ================= CONTACT DETAILS ================= */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">

          {/* Left Info */}
          <div className="md:px-12"> {/* 👈 THIS IS THE MAIN FIX */}

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Mars Enterprises
            </h3>

            <div className="space-y-4 text-gray-600">

              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <p>+91 9871786670</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <p>marsenterprises142@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">🌐</span>
                <p>www.marsenterprises.com</p>
              </div>

              {/* ✅ NEW ADDRESS */}
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <p>
                  HNo. 125/14 Devi Lal Nagar <br />
                  122001 Gurgaon, Haryana
                </p>
              </div>

            </div>

          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Mars%20Enterprises%20Devi%20Lal%20Nagar%20Gurgaon&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact