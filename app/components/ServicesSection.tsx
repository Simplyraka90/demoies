"use client";

import {
  FiTruck,
  FiBriefcase,
  FiMapPin,
  FiPackage,
  FiClock,
  FiShield,
  FiTarget,
  FiDollarSign,
  FiHeadphones,
} from "react-icons/fi";

export default function ServicesSection() {
  const services = [
    {
      title: "Home Shifting",
      desc: "Safe & smooth relocation for 1BHK to villas with expert packing & loading.",
      icon: <FiTruck className="h-7 w-7" />,
    },
    {
      title: "Office Relocation",
      desc: "Zero-downtime corporate shifting with IT equipment & document safety.",
      icon: <FiBriefcase className="h-7 w-7" />,
    },
    {
      title: "Local & Outstation",
      desc: "Delhi NCR local shifting plus long-distance relocation across major cities.",
      icon: <FiMapPin className="h-7 w-7" />,
    },
    {
      title: "Packing & Unpacking",
      desc: "Premium packing material, labeling and careful unpacking at destination.",
      icon: <FiPackage className="h-7 w-7" />,
    },
  ];

  // BLUE-CYAN HIGHLIGHTS
  const highlights = [
    {
      title: "Real-Time Shifting Tracking",
      icon: <FiTarget className="h-10 w-10" />,
    },
    {
      title: "Safe & Secure Packing Services",
      icon: <FiShield className="h-10 w-10" />,
    },
    {
      title: "On Time Delivery Transportation",
      icon: <FiClock className="h-10 w-10" />,
    },
    {
      title: "Budget-Friendly Moving Solutions",
      icon: <FiDollarSign className="h-10 w-10" />,
    },
    {
      title: "24x7 Customer Support",
      icon: <FiHeadphones className="h-10 w-10" />,
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#010d1c] overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 left-5 h-72 w-72 rounded-full bg-[#007aff22] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#3fe9ff25] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-[#3fe9ff55] bg-[#032d4a] px-5 py-1 text-xs tracking-[0.28em] text-[#3fe9ff] shadow-[0_0_10px_#0077ff55] uppercase">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Premium <span className="text-[#3fe9ff]">Shifting Solutions</span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-[#3fe9ff40] to-transparent hover:from-[#3fe9ff90] hover:to-[#0066ff33] transition-all duration-300"
            >
              <div className="rounded-2xl p-6 h-full bg-[#021427]/70 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,80,255,0.25)] group-hover:shadow-[0_0_35px_rgba(0,120,255,0.55)] group-hover:-translate-y-2 transition-all duration-300">

                <div className="h-14 w-14 flex items-center justify-center rounded-xl text-[#3fe9ff] bg-[#3fe9ff15] border border-[#3fe9ff40] shadow-[0_0_15px_#3fe9ff66]">
                  {s.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>

                <button className="mt-5 text-sm font-medium text-[#3fe9ff] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ⭐ BLUE-CYAN HIGHLIGHTS SECTION ⭐ */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="text-[#3fe9ff] drop-shadow-[0_0_10px_#3fe9ff88]">
                {item.icon}
              </div>

              <p className="mt-3 text-sm font-semibold text-white leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-16">
          <button className="relative rounded-full px-10 py-4 text-white font-semibold bg-gradient-to-r from-[#007bff] to-[#00d4ff] shadow-[0_0_25px_rgba(0,120,255,0.6)] hover:shadow-[0_0_35px_rgba(0,150,255,1)] hover:scale-[1.03] transition-all">
            View All Services →
          </button>
        </div>

      </div>
    </section>
  );
}
