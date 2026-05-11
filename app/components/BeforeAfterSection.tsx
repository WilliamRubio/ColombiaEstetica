"use client";
import { useLang } from "../context/LanguageContext";
import { translations } from "../translations";

export default function BeforeAfterSection() {
  const { lang } = useLang();
  const t = translations[lang].beforeAfter;

  const placeholders = [
    { procedure: translations[lang].procedures.items[0].title },
    { procedure: translations[lang].procedures.items[1].title },
    { procedure: translations[lang].procedures.items[2].title },
    { procedure: translations[lang].procedures.items[0].title },
    { procedure: translations[lang].procedures.items[1].title },
    { procedure: translations[lang].procedures.items[2].title },
  ];

  return (
    <section id="results" className="py-24 bg-white">
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

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholders.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden group relative aspect-[3/4]">
              <div
                className="h-full flex flex-col items-center justify-center gap-3 text-center p-4 transition-all duration-500 group-hover:brightness-90"
                style={{ background: `linear-gradient(145deg, ${index % 2 === 0 ? "#f0ece4" : "#e8eef3"} 0%, ${index % 2 === 0 ? "#e8e0d4" : "#d8e8f0"} 100%)` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(26,74,107,0.1)" }}>
                  <svg className="w-8 h-8 text-[#1a4a6b]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1a4a6b] font-bold text-sm">{item.procedure}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.photoPlaceholder}</p>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                  <span className="flex-1 text-center py-1 rounded-full text-xs font-bold bg-white/80 text-gray-600">{t.before}</span>
                  <span className="flex-1 text-center py-1 rounded-full text-xs font-bold text-white" style={{ background: "#1a4a6b" }}>{t.after}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consent note */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-xl" style={{ background: "#f9f6f0" }}>
          <svg className="w-5 h-5 text-[#b8974a] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-700">{t.consentBold}</strong> {t.consentText}
          </p>
        </div>
      </div>
    </section>
  );
}
