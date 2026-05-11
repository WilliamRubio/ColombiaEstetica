"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Is plastic surgery in Colombia safe?",
    answer:
      "Yes. Colombia has internationally accredited medical facilities and surgeons with world-class training. Our partner clinic holds ISO and ACHC accreditations. We only work with board-certified plastic surgeons with a verifiable track record. As with any surgery anywhere in the world, procedures carry risks — which is why our pre-surgical evaluation and aftercare protocols are rigorous.",
  },
  {
    question: "How long should I stay in Colombia?",
    answer:
      "The recommended stay varies by procedure. Rhinoplasty typically requires 7–10 days, liposuction 10–14 days, and breast surgery 7–10 days. Your surgeon will provide a specific recommendation based on your individual case and recovery progress.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes. We offer secure, private video consultations with your assigned surgeon before you travel. This allows you to ask questions, review your goals, and receive an initial assessment — all from the comfort of your home.",
  },
  {
    question: "What is included in the package?",
    answer:
      "Our all-inclusive packages typically cover the surgical procedure, anesthesia, hospital stay, pre-operative tests, post-operative compression garments, medication, and follow-up appointments in Colombia. Airport transfers and accommodation options are also available. You will receive a detailed, itemized quote with no hidden fees.",
  },
  {
    question: "Can I communicate in English?",
    answer:
      "Absolutely. Our entire patient coordination team is bilingual (English/Spanish). Your surgeon speaks English, and all written communications, consent forms, and medical documents are provided in English.",
  },
  {
    question: "How do I start?",
    answer:
      "Simply fill out the consultation form below or message us on WhatsApp. A patient coordinator will reach out within 24 hours to schedule your virtual consultation and answer any initial questions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#b8974a] text-sm font-semibold tracking-widest uppercase mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1e] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know before starting your medical journey with us.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #b8974a, #d4af6a)" }} />
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-[#b8974a]/40 shadow-sm"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span
                  className={`font-semibold text-sm sm:text-base transition-colors ${
                    openIndex === index ? "text-[#1a4a6b]" : "text-[#1c1c1e] group-hover:text-[#1a4a6b]"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ background: openIndex === index ? "#1a4a6b" : "#f9f6f0" }}
                >
                  <svg
                    className={`w-4 h-4 ${openIndex === index ? "text-white" : "text-[#1a4a6b]"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl" style={{ background: "#f9f6f0" }}>
          <p className="text-[#1c1c1e] font-semibold mb-2">Still have questions?</p>
          <p className="text-gray-500 text-sm mb-6">Our patient coordinators are available 7 days a week to help you.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:shadow-lg"
              style={{ background: "#1a4a6b" }}
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/1XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-bold text-white flex items-center gap-2 transition-all duration-200"
              style={{ background: "#25D366" }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
