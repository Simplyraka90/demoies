"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#021427] via-[#03203d] to-[#010b18] pt-32 pb-20"
    >
      {/* Neon Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#3fe9ff33] blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0051ff44] blur-[150px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6">
          <span className="inline-block rounded-full border border-[#3fe9ff55] bg-[#032d4a] px-5 py-1 text-xs tracking-wide text-[#3fe9ff] shadow-[0_0_12px_#0077ff55]">
            Noida Transport Packers & Movers
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_3px_8px_rgrgba(0,0,0,0.25)]">
            Fast, Safe & Reliable{" "}
            <span className="text-[#3fe9ff] drop-shadow-[0_0_12px_#3fe9ffaa]">Transport</span>{" "}
            <br />
            For Your Home & Office Shifting
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            We simplify your shifting experience with safe packing, verified workers, fast delivery,
            and transparent pricing. Noida’s most trusted relocation partner—serving 50,000+ satisfied clients.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              className="
                relative overflow-hidden rounded-xl p-[2px] cursor-pointer
                bg-[radial-gradient(circle_80px_at_80%_-10%,#4fd8ff,#001a33)]
                shadow-[0_0_25px_#0077ff55]
              "
            >
              <span
                className="
                  absolute left-0 bottom-0 h-full w-[70px] rounded-xl opacity-80
                  bg-[radial-gradient(circle_60px_at_0%_100%,#3fe9ff,#0051ff80,transparent)]
                  shadow-[-10px_10px_30px_#0051ff70]
                "
              ></span>

              <span
                className="
                  relative z-10 block rounded-lg px-7 py-3 text-white font-semibold text-sm
                  bg-[radial-gradient(circle_80px_at_80%_-50%,#4faaff,#0f1111)]
                "
              >
                Get Free Quote →
              </span>
            </button>

            <a href="tel:+919311475729" className="flex items-center gap-3 text-white/90">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-base shadow-inner">
                📞
              </div>
              <div className="leading-tight">
                <p className="text-xs text-white/50">Call Us</p>
                <p className="font-semibold text-white">+91 9311475729</p>
              </div>
            </a>
          </div>

          {/* PREMIUM HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            {/* BOX 1 */}
            <div
              className="
                group relative overflow-hidden rounded-2xl p-5
                bg-white/10 border border-white/20 backdrop-blur-xl
                shadow-[0_0_20px_rgba(0,140,255,0.15)]
                hover:shadow-[0_0_35px_rgba(0,170,255,0.45)]
                hover:-translate-y-1 transition-all duration-300
              "
            >
              <div
                className="
                  absolute top-0 left-0 w-full h-[2px]
                  bg-gradient-to-r from-transparent via-[#3fe9ff] to-transparent
                  opacity-40 group-hover:opacity-80 transition
                "
              />

              <div
                className="
                  h-12 w-12 flex items-center justify-center rounded-xl
                  bg-[#3fe9ff22] text-[#3fe9ff] text-xl font-bold
                  border border-[#3fe9ff44]
                  shadow-[0_0_25px_#3fe9ff55]
                  group-hover:shadow-[0_0_40px_#3fe9ffaa]
                  transition-all duration-300
                "
              >
                📦
              </div>

              <p className="mt-4 text-white font-semibold text-base tracking-wide">
                100% Safe Packing
              </p>
              <p className="text-white/60 text-xs leading-relaxed mt-1">
                Multi-layer protection for fragile & heavy items.
              </p>
            </div>

            {/* BOX 2 — UPGRADED AS REQUESTED */}
            <div
              className="
                group relative overflow-hidden rounded-2xl p-5
                bg-white/10 border border-white/20 backdrop-blur-xl
                shadow-[0_0_20px_rgba(0,140,255,0.15)]
                hover:shadow-[0_0_35px_rgba(0,170,255,0.45)]
                hover:-translate-y-1 transition-all duration-300
              "
            >
              <div
                className="
                  absolute top-0 left-0 w-full h-[2px]
                  bg-gradient-to-r from-transparent via-[#3fe9ff] to-transparent
                  opacity-40 group-hover:opacity-80 transition
                "
              />

              <div
                className="
                  h-12 w-12 flex items-center justify-center rounded-xl
                  bg-[#3fe9ff22] text-[#3fe9ff] text-xl font-bold
                  border border-[#3fe9ff44]
                  shadow-[0_0_25px_#3fe9ff55]
                  group-hover:shadow-[0_0_40px_#3fe9ffaa]
                  transition-all duration-300
                "
              >
                🚚
              </div>

              <p className="mt-4 text-white font-semibold text-base tracking-wide">
                Express Delivery
              </p>
              <p className="text-white/60 text-xs leading-relaxed mt-1">
                Fast, secure & real-time trackable shifting.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute -left-10 -top-6 h-40 w-40 rounded-full bg-[#3fe9ff33] blur-[100px]" />
          <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-[#0051ff33] blur-[100px]" />

          <Image
            src="/humanii.png"
            alt="Mover holding boxes"
            width={600}
            height={600}
            className="object-contain drop-shadow-[0_10px_40px_rgba(0,90,255,0.5)]"
          />
        </div>

      </div>
    </section>
  );
}
