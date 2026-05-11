"use client";
import { useLang } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang].hero;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d2d45 0%, #1a4a6b 55%, #1e5a82 100%)" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #b8974a 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, #b8974a 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #b8974a, #d4af6a, #b8974a)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#b8974a]/40 bg-[#b8974a]/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#b8974a]" />
            <span className="text-[#d4af6a] text-sm font-medium tracking-wider uppercase">{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t.titleLine1}{" "}
            <span style={{ color: "#d4af6a" }}>{t.titleHighlight}</span>{" "}
            {t.titleLine2}
          </h1>

          <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            {t.description}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            {t.trustBadges.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#d4af6a" }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-blue-100 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full text-[#1a4a6b] font-bold text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #b8974a 0%, #d4af6a 50%, #b8974a 100%)" }}
            >
              {t.cta1}
            </a>
            <a
              href="https://wa.me/1XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-white font-bold text-base border-2 border-white/30 hover:border-white/60 transition-all duration-300 flex items-center gap-3 bg-white/10 hover:bg-white/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.cta2}
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            {/* Main visual card */}
            <div className="w-80 h-96 rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #b8974a 0%, #d4af6a 100%)" }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl mb-1">{t.cardTitle}</p>
                  <p className="text-blue-200/70 text-sm">{t.cardSubtitle}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full mt-4">
                  {t.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <p className="text-[#d4af6a] font-bold text-lg leading-tight">{stat.number}</p>
                      <p className="text-blue-200/60 text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1a4a6b" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1c1c1e]">{t.badgeCertified}</p>
                <p className="text-xs text-gray-500">{t.badgeSurgeons}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-blue-200/50 text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-200/40 to-transparent" />
      </div>
    </section>
  );
}
