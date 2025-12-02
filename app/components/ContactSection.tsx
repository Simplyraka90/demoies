"use client";

import Image from "next/image";
import { FiPhoneCall, FiMail, FiUser, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#010d1c] overflow-hidden"
    >
      {/* BG GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-[#0077ff22] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#3fe9ff22] blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE — TEXT + CONTACT + AVATAR */}
        <div className="space-y-6 flex flex-col">

          {/* TOP TAG */}
          <span className="inline-block rounded-full border border-[#3fe9ff55] bg-[#032d4a] px-5 py-1 text-xs tracking-[0.28em] text-[#3fe9ff] uppercase shadow-[0_0_12px_#0077ff55]">
            CONTACT US
          </span>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-[0_5px_15px_rgba(0,150,255,0.25)]">
            Get Your <span className="text-[#3fe9ff]">Shifting Quote</span> Instantly
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/70 text-base leading-relaxed max-w-lg">
            Share your current location, destination & inventory details. Our verified 
            team will call you back with a precise quote and a professional shifting plan.
          </p>

          {/* CONTACT + AVATAR INLINE */}
          <div className="flex items-start gap-8 mt-4">

            {/* CONTACT TEXT */}
            <div className="space-y-3 pt-2">
              <p className="flex items-center gap-3 text-white/80">
                <FiPhoneCall className="text-[#3fe9ff] text-xl" />
                <span className="font-semibold text-white">+91 9311475729</span>
              </p>

              <p className="flex items-center gap-3 text-white/80">
                <FiMail className="text-[#3fe9ff] text-xl" />
                <span className="font-semibold text-white">info@delhishifting.com</span>
              </p>
            </div>

            {/* AVATAR — BIGGER 190PX */}
            <div className="w-[190px] h-[190px] flex-shrink-0 hidden sm:flex">
              <Image
                src="/cont.png"
                alt="Support Avatar"
                width={190}
                height={190}
                className="object-contain drop-shadow-[0_0_30px_#00aaffaa] animate-fade-in"
              />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form
          className="
            relative rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl 
            p-8 shadow-[0_0_40px_rgba(0,120,255,0.25)] 
            space-y-6
          "
        >
          <div className="grid md:grid-cols-2 gap-5">

            {/* Name */}
            <div>
              <label className="text-xs text-white/70">Name</label>
              <div className="relative mt-1">
                <FiUser className="absolute left-3 top-3 text-white/40" />
                <input
                  type="text"
                  className="w-full pl-10 rounded-lg border border-white/20 bg-black/30 px-3 py-2.5 text-sm 
                  outline-none text-white placeholder-white/40 
                  focus:border-[#3fe9ff] transition"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs text-white/70">Phone</label>
              <div className="relative mt-1">
                <FiPhoneCall className="absolute left-3 top-3 text-white/40" />
                <input
                  type="tel"
                  className="w-full pl-10 rounded-lg border border-white/20 bg-black/30 px-3 py-2.5 text-sm 
                  outline-none text-white placeholder-white/40 
                  focus:border-[#3fe9ff] transition"
                  placeholder="Mobile number"
                />
              </div>
            </div>
          </div>

          {/* From */}
          <div>
            <label className="text-xs text-white/70">From (Pickup Location)</label>
            <div className="relative mt-1">
              <FiMapPin className="absolute left-3 top-3 text-white/40" />
              <input
                type="text"
                className="w-full pl-10 rounded-lg border border-white/20 bg-black/30 px-3 py-2.5 text-sm 
                outline-none text-white placeholder-white/40 
                focus:border-[#3fe9ff] transition"
                placeholder="e.g. Noida Sector 15"
              />
            </div>
          </div>

          {/* To */}
          <div>
            <label className="text-xs text-white/70">To (Destination)</label>
            <div className="relative mt-1">
              <FiMapPin className="absolute left-3 top-3 text-white/40" />
              <input
                type="text"
                className="w-full pl-10 rounded-lg border border-white/20 bg-black/30 px-3 py-2.5 text-sm 
                outline-none text-white placeholder-white/40 
                focus:border-[#3fe9ff] transition"
                placeholder="e.g. Gurgaon Cyber City"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <label className="text-xs text-white/70">Shifting Details</label>
            <textarea
              rows={4}
              className="
                w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2.5 text-sm
                outline-none text-white placeholder-white/40 
                focus:border-[#3fe9ff] transition
              "
              placeholder="BHK size, floors, items, heavy objects, etc."
            ></textarea>
          </div>

          {/* CTA BUTTON */}
          <button
            type="submit"
            className="
              w-full rounded-full py-3 text-sm font-semibold text-white
              bg-gradient-to-r from-[#007bff] to-[#00d4ff]
              shadow-[0_0_25px_rgba(0,150,255,0.7)]
              hover:scale-[1.03] transition
            "
          >
            Request Callback →
          </button>
        </form>
      </div>
    </section>
  );
}
