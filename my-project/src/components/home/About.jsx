import { useState } from "react"

const stats = [
  {
    title: "15+",
    label: "Years Experience",
    desc: "Decades of expertise delivering precision rubber solutions",
  },
  {
    title: "100+",
    label: "Products",
    desc: "Wide range of high-performance engineered components",
  },
  {
    title: "75+",
    label: "Workforce",
    desc: "Skilled team ensuring consistency, quality & reliability",
  },
  {
    title: "10+",
    label: "Industries",
    desc: "Serving critical industrial sectors with precision",
  },
]

const About = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPos({ x, y })
  }

  return (
    <section id="about" className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            About <span className="text-black">Mars Enterprises</span>
          </h2>

          {/* Stats Grid */}
          <div className="mt-10 grid grid-cols-2 gap-6">

            {stats.map((item, index) => (
              <div key={index} className="group perspective">

                <div
                  className="
                    relative 
                    w-full h-32
                    transition-transform duration-700 ease-out
                    transform-style-preserve-3d
                    group-hover:rotate-x-180
                  "
                >

                  {/* FRONT */}
                  <div
                    className="
                      absolute inset-0 
                      rounded-xl 
                      bg-gray-100 
                      flex flex-col items-center justify-center
                      shadow-md
                      backface-hidden
                    "
                  >
                    <h3 className="text-2xl font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.label}
                    </p>
                  </div>

                  {/* BACK */}
                  <div
                    className="
                      absolute inset-0 
                      rounded-xl 
                      flex items-center justify-center text-center px-4
                      text-white text-sm
                      rotate-x-180
                      backface-hidden
                      shadow-xl
                      bg-gradient-to-br from-blue-900 via-black to-zinc-800
                    "
                  >
                    {item.desc}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          onMouseMove={handleMove}
          className="
            relative 
            h-[350px] md:h-[420px] 
            rounded-2xl 
            overflow-hidden 
            bg-black 
            shadow-2xl
          "
        >

          {/* Dynamic Cursor Glow */}
          <div
            className="absolute inset-0 transition duration-200"
            style={{
              background: `
                radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.18), transparent 35%)
              `,
            }}
          ></div>

          {/* Floating Gradient Orbs */}
          <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-[-40px] left-[-40px] animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-[-40px] right-[-40px] animate-pulse"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Noise Texture (fake premium feel) */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          {/* Center Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

            <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
              PRODUCTS YOU VISUALIZE : WE MATERIALIZE
            </h3>

            <p className="text-gray-400 text-sm mt-3 max-w-sm">
              Every component we manufacture is engineered to meet industrial-grade performance and durability standards.
            </p>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-white/30 mt-6"></div>

            {/* Sub text */}
            <p className="text-gray-500 text-xs mt-4 tracking-widest uppercase">
              Engineering Excellence
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About