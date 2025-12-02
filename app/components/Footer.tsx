"use client";

import Image from "next/image";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#010915] text-white pt-20 pb-10">
      {/* BG OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-4">

        {/* ABOUT */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-[#3fe9ff55] pb-2">
            About Us
          </h3>
          <p className="text-white/70 leading-relaxed text-sm">
            We provide trusted and affordable packers and movers services across Delhi.
            Our trained team ensures safe packing, fast delivery & complete protection
            for your household or office goods.
          </p>

          <p className="mt-4 text-[#ff7a3c] font-semibold text-lg">24/7 Online</p>
          <p className="text-xl font-bold mt-1 text-[#3fe9ff]">
            +91 9311475729
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-[#3fe9ff55] pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="hover:text-[#3fe9ff] transition cursor-pointer">Home</li>
            <li className="hover:text-[#3fe9ff] transition cursor-pointer">About Us</li>
            <li className="hover:text-[#3fe9ff] transition cursor-pointer">Services</li>
            <li className="hover:text-[#3fe9ff] transition cursor-pointer">Testimonials</li>
            <li className="hover:text-[#3fe9ff] transition cursor-pointer">Blog & News</li>
            <li className="hover:text-[#3fe9ff] transition cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* SERVICES LIST */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-[#3fe9ff55] pb-2">
            Services
          </h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="hover:text-[#3fe9ff] transition">Packers & Movers Delhi</li>
            <li className="hover:text-[#3fe9ff] transition">Home Shifting Services</li>
            <li className="hover:text-[#3fe9ff] transition">Office Shifting</li>
            <li className="hover:text-[#3fe9ff] transition">Factory Shifting</li>
            <li className="hover:text-[#3fe9ff] transition">Bike & Scooty Transport</li>
            <li className="hover:text-[#3fe9ff] transition">Car Transportation</li>
            <li className="hover:text-[#3fe9ff] transition">Packing Services</li>
            <li className="hover:text-[#3fe9ff] transition">Loading & Unloading</li>
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-[#3fe9ff55] pb-2">
            Contact Us
          </h3>

          <p className="text-sm text-white/70 flex gap-3 mb-3">
            <FiMapPin className="text-[#3fe9ff] text-lg mt-1" />
            S–2, Master Complex, Near Mahila Park, Harola Sec-5  
            Noida 201301
          </p>

          <p className="text-sm text-white/70 flex gap-3 mb-3">
            <FiPhoneCall className="text-[#3fe9ff] text-lg mt-1" />
            +91 9311475729
          </p>

          <p className="text-sm text-white/70 flex gap-3">
            <FiMail className="text-[#3fe9ff] text-lg mt-1" />
            info@delhishifting.com
          </p>

          {/* LOGO */}
          <div className="mt-6">
            <Image
              src="/noida-logo.png"
              alt="Delhi Shifting Logo"
              width={110}
              height={110}
              className="opacity-90"
            />
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="relative max-w-7xl mx-auto px-6 mt-10 flex justify-center gap-4">
        {[
          { icon: <FaFacebookF />, link: "#" },
          { icon: <FaTwitter />, link: "#" },
          { icon: <FaGlobe />, link: "#" },
          { icon: <FaInstagram />, link: "#" },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="
              h-11 w-11 flex items-center justify-center rounded-lg 
              bg-white/10 border border-white/20 text-white text-lg 
              hover:bg-[#3fe9ff] hover:text-black hover:scale-110 transition
            "
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* COPYRIGHT */}
      <div className="relative mt-10 text-center text-white/60 text-xs">
        Copyright © {new Date().getFullYear()}  
        <span className="text-[#3fe9ff]"> Delhi Shifting</span> | All Rights Reserved.
        <br />
        Designed & Developed by <span className="text-[#ff7a3c]">TechShield Solutions</span>
      </div>
    </footer>
  );
}
