const testimonials = [
  {
    name: "Sarah M.",
    location: "Miami, FL — USA",
    procedure: "Rhinoplasty",
    rating: 5,
    text: "I was nervous about traveling abroad for surgery, but the team made the entire experience seamless. My coordinator was reachable around the clock, the clinic was immaculate, and my surgeon truly understood what I was looking for. The results exceeded my expectations — I feel like the best version of myself.",
    initials: "SM",
    color: "#1a4a6b",
  },
  {
    name: "Jennifer L.",
    location: "Houston, TX — USA",
    procedure: "Liposuction",
    rating: 5,
    text: "After years of struggling with stubborn areas that didn't respond to diet or exercise, I finally took the step. The virtual consultation was thorough and professional. Dr. Ríos walked me through everything and made me feel completely at ease. The recovery support was exceptional — I never felt alone.",
    initials: "JL",
    color: "#3d2260",
  },
  {
    name: "Christine A.",
    location: "New York, NY — USA",
    procedure: "Breast Surgery",
    rating: 5,
    text: "I researched for over a year before choosing this team, and I'm so glad I did. Everything from the quote to the aftercare was transparent and professional. The price was a fraction of what I was quoted in the US, and the quality of care was absolutely world-class. I'd recommend this experience to anyone.",
    initials: "CA",
    color: "#1a4a38",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#b8974a] text-sm font-semibold tracking-widest uppercase mb-3">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1e] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Real experiences from international patients who trusted us with their care.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #b8974a, #d4af6a)" }} />
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" style={{ color: "#b8974a" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-6" />

              {/* Patient info */}
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#1c1c1e] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#f9f6f0", color: "#b8974a" }}
                  >
                    {t.procedure}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">* Testimonials are from real patients. Names may be abbreviated for privacy.</p>
      </div>
    </section>
  );
}
