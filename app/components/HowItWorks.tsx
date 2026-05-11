"use client";
import { useLang } from "../context/LanguageContext";
import { translations } from "../translations";

export default function HowItWorks() {
  const { lang } = useLang();
  const t = translations[lang].howItWorks;

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#b8974a] text-sm font-semibold tracking-widest uppercase mb-3">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1e] mb-4">
            {t.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #b8974a, #d4af6a)" }} />
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line on desktop (not last in row) */}
              {index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px z-0" style={{ background: "linear-gradient(90deg, #b8974a20, transparent)" }} />
              )}

              <div className="relative z-10 p-8 rounded-2xl border border-gray-100 hover:border-[#b8974a]/30 hover:shadow-lg transition-all duration-300 bg-white">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #0d2d45 0%, #1a4a6b 100%)", color: "#d4af6a" }}
                  >
                    {step.number}
                  </div>
                  <div className="w-px h-8 bg-gray-100" />
                  <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">{t.stepLabel} {parseInt(step.number)}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1c1c1e] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1a4a6b 0%, #1e5a82 100%)" }}
          >
            {t.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
