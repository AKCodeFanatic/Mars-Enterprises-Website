import { Link } from "react-router-dom"
import logo from "../../assets/logos/Mars_Logo.jpeg"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">

      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">

        {/* ================= LOGO + CONTACT ================= */}
        <div>
          <img src={logo} alt="Mars Enterprises" className="h-12 mb-4" />

          <p className="text-sm text-gray-400 mb-4">
            Delivering precision-engineered rubber components for industrial applications.
          </p>

          {/* Contact Details */}
          <div className="text-sm space-y-2 text-gray-400">
            <p>📞 +91 9871786670</p>
            <p>✉️ marsenterprises142@gmail.com</p>
            <p>
              📍 Mars Enterprises <br />
              HNo. 125/14 Devi Lal Nagar <br />
              122001 Gurgaon, Haryana
            </p>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/products" className="hover:text-white transition">
              Products
            </Link>

            <Link to="/#industries" className="hover:text-white transition">
              Industries
            </Link>

            <Link to="/#partners" className="hover:text-white transition">
              Our Clients
            </Link>

            <Link to="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* ================= LOCATION ================= */}
        <div>
          <h3 className="text-white font-semibold mb-4">OUR LOCATION</h3>

          <div className="rounded-lg overflow-hidden mb-3">
            <iframe
              src="https://www.google.com/maps?q=Mars%20Enterprises%20Devi%20Lal%20Nagar%20Gurgaon&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          <a
            href="https://maps.app.goo.gl/JpVFMNLnE2GYrnET8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-white transition"
          >
            Open in Google Maps ↗
          </a>
        </div>

      </div>

      {/* ================= BOTTOM STRIP ================= */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} Mars Enterprises. All rights reserved. <br />

        Designed & Developed by{" "}
        <a
          href="https://www.linkedin.com/in/akarshit-singh-ba821b225"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Akarshit Singh
        </a>

      </div>

    </footer>
  )
}

export default Footer