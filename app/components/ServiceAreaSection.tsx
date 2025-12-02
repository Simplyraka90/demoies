"use client";

import {
  FiShield,
  FiPackage,
  FiTruck,
  FiCheckCircle,
  FiHeadphones,
  FiCompass,
  FiArrowUpRight,
} from "react-icons/fi";

export default function WhyChooseUsSection() {
  const points = [
    { title: "Professional & Verified Team", icon: <FiCheckCircle /> },
    { title: "High-Quality Packing", icon: <FiPackage /> },
    { title: "Fast & Safe Delivery", icon: <FiTruck /> },
    { title: "Door-to-Door Service", icon: <FiCompass /> },
    { title: "Affordable Charges", icon: <FiShield /> },
    { title: "24×7 Customer Support", icon: <FiHeadphones /> },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 bg-[#010d1c] overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-0 h-96 w-96 bg-[#007bff33] rounded-full blur-[130px]" />
        <div className="absolute right-0 bottom-10 h-[420px] w-[420px] bg-[#00e5ff33] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block rounded-full border border-[#3fe9ff55] bg-[#032d4a] px-5 py-1 text-xs tracking-[0.28em] text-[#3fe9ff] uppercase shadow-[0_0_10px_#0077ff55]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,150,255,0.3)]">
            Explore Why We Are{" "}
            <span className="text-[#3fe9ff]">Trusted Packers Movers</span>
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            We provide safe, fast, and reliable moving solutions with high–quality
            packing and trained professionals. From home shifting to office
            relocation, our team ensures smooth delivery, complete protection,
            and on–time service for your move.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-6">
          {points.map((item) => (
            <div
              key={item.title}
              className="
                group flex items-center justify-between gap-4 rounded-xl
                border border-white/10 bg-white/5 backdrop-blur-xl
                px-5 py-4 transition-all duration-300
                hover:border-[#3fe9ff88] hover:bg-[#02243c]/60
                hover:shadow-[0_0_25px_rgba(0,200,255,0.5)]
              "
            >
              {/* LEFT ICON + TITLE */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    text-[#3fe9ff] text-3xl p-3 rounded-lg
                    bg-[#3fe9ff15] border border-[#3fe9ff44]
                    shadow-[0_0_10px_#3fe9ff66]
                    group-hover:shadow-[0_0_18px_#3fe9ffaa]
                    transition-all
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-white drop-shadow">
                  {item.title}
                </h3>
              </div>

              {/* RIGHT ARROW */}
              <FiArrowUpRight
                className="
                  text-[#3fe9ff] text-2xl opacity-60
                  group-hover:translate-x-1 group-hover:-translate-y-1
                  group-hover:opacity-100 transition-all duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
