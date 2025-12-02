"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FaqSection() {
  const faqs = [
    {
      q: "How are the shifting charges calculated?",
      a: "Our charges depend on the volume of goods, distance, number of floors, packing material required, and labor involved. After a quick survey, we provide a final quote with No hidden charges.",
    },
    {
      q: "Do you provide packing materials?",
      a: "Yes, we provide premium-quality packing materials including bubble wrap, boxes, foam sheets, blankets and waterproof laminations.",
    },
    {
      q: "Can I track my goods during transportation?",
      a: "Yes, all trucks are GPS enabled. You can track your shipment in real time until delivery.",
    },
    {
      q: "How long does the shifting process take?",
      a: "Local shifting takes 4–8 hours depending on the size of the move. Outstation shifting depends on the distance.",
    },
    {
      q: "Do you transport cars and bikes as well?",
      a: "Yes, we provide safe vehicle relocation services with scratch-proof loading and unloading.",
    },
    {
      q: "Do you offer a free pre-move survey?",
      a: "Yes, we offer a free survey by an expert to estimate the shifting cost accurately.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 bg-[#010d1c] overflow-hidden border-t border-white/10"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-5 top-14 h-96 w-96 rounded-full bg-[#3fe9ff22] blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#007bff22] blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-[#3fe9ff55] bg-[#032d4a] px-6 py-1 text-xs tracking-[0.28em] text-[#3fe9ff] shadow-[0_0_12px_#0077ff55] uppercase">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,150,255,0.35)]">
            Our Most Popular <span className="text-[#3fe9ff]">Questions</span>
          </h2>

          <p className="mt-3 text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Explore the most frequently asked questions about our relocation services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(0,120,255,0.25)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <p className="text-lg font-semibold text-white">{item.q}</p>

                <FiChevronDown
                  className={`text-[#3fe9ff] text-2xl transition-all ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Section */}
              <div
                className={`transition-all overflow-hidden px-6 ${
                  openIndex === i
                    ? "max-h-[500px] pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
