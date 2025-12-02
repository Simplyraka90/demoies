"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* NAV WRAPPER */}
      <div className="w-full backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[0_10px_35px_rgba(0,60,160,0.35)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO SECTION */}
          <div className="flex items-center gap-3">
            {/* LOGO IMAGE */}
            <div className="h-14 w-14 flex items-center justify-center">
              <Image
                src="/noida-logo.png"
                alt="Noida Transport Logo"
                width={60}
                height={60}
                className="rounded-full drop-shadow-[0_0_10px_#00c2ff]"
              />
            </div>

            {/* TEXT NEXT TO LOGO */}
            <div>
              <p className="text-white font-bold text-base leading-tight">
             Noida Home
              </p>
              <p className="text-white/60 text-xs -mt-1">
                 PACKERS MOVERS
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">

            {["Home", "Services", "Service Area", "Testimonials", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="
                    group relative 
                    text-[#3fe9ff] 
                    hover:text-white 
                    transition font-medium
                    drop-shadow-[0_0_6px_#00e1ff88]
                  "
                >
                  {item}

                  {/* Hover neon underline */}
                  <span className="
                    absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-[#3fe9ff] to-[#0051ff]
                    group-hover:w-full transition-all duration-300
                  "></span>
                </Link>
              )
            )}
          </nav>

          {/* PREMIUM 3D BLOB BUTTON */}
          <div className="hidden md:flex">
            <button
              className="
                relative overflow-hidden rounded-xl p-[2px] cursor-pointer
                bg-[radial-gradient(circle_80px_at_80%_-10%,#4fd8ff,#001a33)]
              "
            >
              {/* Blob Left */}
              <span
                className="
                  absolute left-0 bottom-0 h-full w-[70px] rounded-xl
                  bg-[radial-gradient(circle_60px_at_0%_100%,#3fe9ff,#0051ff80,transparent)]
                  shadow-[-10px_10px_30px_#0051ff50]
                "
              ></span>

              {/* Blob Right */}
              <span
                className="
                  absolute right-0 top-0 h-full w-[50px] rounded-xl opacity-40
                  bg-[radial-gradient(circle_60px_at_60%_0%,#ffffff33,#0088ff22,transparent)]
                "
              ></span>

              {/* Button inner */}
              <span
                className="
                  relative z-10 block rounded-lg px-6 py-3 text-white font-semibold
                  bg-[radial-gradient(circle_80px_at_80%_-50%,#7abfff,#0f1111)]
                  before:absolute before:inset-0 before:rounded-lg
                  before:bg-[radial-gradient(circle_60px_at_0%_100%,#00e1ff1a,#0000ff11,transparent)]
                  before:content-['']
                "
              >
                Get In Touch
              </span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-11 w-11 flex items-center justify-center rounded-xl bg-white/10 border border-white/20"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>

        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div className="
          fixed inset-0 z-40 p-7 backdrop-blur-xl
          bg-gradient-to-b from-blue-700 via-blue-900 to-[#010a1a]
          animate-[fadeIn_0.35s_ease-out]
        ">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white/80 text-3xl"
          >
            ✕
          </button>

          <div className="mt-24 flex flex-col items-center gap-7 text-lg font-medium tracking-wide">

            {["Home", "Services", "Service Area", "Testimonials", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpen(false)}
                  className="
                    w-full text-center py-3 border-b border-white/10 
                    text-[#3fe9ff] drop-shadow-[0_0_8px_#00caffaa]
                  "
                >
                  {item}
                </Link>
              )
            )}

            {/* Mobile CTA button */}
            <button
              className="
                relative overflow-hidden rounded-xl p-[2px] cursor-pointer mt-6
                bg-[radial-gradient(circle_80px_at_80%_-10%,#4fd8ff,#001a33)]
              "
            >
              <span
                className="
                  absolute left-0 bottom-0 h-full w-[70px] rounded-xl
                  bg-[radial-gradient(circle_60px_at_0%_100%,#3fe9ff,#0051ff80,transparent)]
                "
              ></span>

              <span
                className="
                  relative z-10 block rounded-lg px-8 py-3 text-white font-semibold
                  bg-[radial-gradient(circle_80px_at_80%_-50%,#7abfff,#0f1111)]
                "
              >
                Get In Touch
              </span>
            </button>

          </div>
        </div>
      )}

    </header>
  );
}
