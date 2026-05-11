"use client";
import { useLang } from "../context/LanguageContext";
import { translations } from "../translations";

export default function DoctorsSection() {
  const { lang } = useLang();
  const t = translations[lang].doctors;

  return (
    <section id="doctors" className="py-24 section-alt">
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

        {/* Doctor cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {t.items.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Photo placeholder */}
              <div
                className="h-72 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(145deg, #0d2d45 0%, #1a4a6b 60%, #1e5a82 100%)" }}
              >
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #b8974a 0%, transparent 70%)" }} />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center border-4 border-[#b8974a]/40" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <svg className="w-14 h-14 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-white/40 text-xs tracking-widest uppercase">{t.photoPlaceholder}</span>
                </div>
                {/* Experience badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg, #b8974a 0%, #d4af6a 100%)", color: "#1a4a6b" }}>
                  {doctor.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#1c1c1e] mb-1">{doctor.name}</h3>
                <p className="text-[#b8974a] text-sm font-semibold tracking-wide mb-4">{doctor.specialty}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{doctor.description}</p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {doctor.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{ background: "#f9f6f0", borderColor: "#e8e0d4", color: "#1a4a6b" }}
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a4a6b] hover:text-[#b8974a] transition-colors group"
                >
                  {t.requestConsultation}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
