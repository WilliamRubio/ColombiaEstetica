const procedures = [
  {
    title: "Rhinoplasty",
    subtitle: "Nose Reshaping",
    description:
      "Refine the shape, size, and symmetry of your nose to achieve natural-looking, harmonious results that complement your facial features.",
    benefits: [
      "Improved facial harmony",
      "Corrects breathing issues",
      "Natural-looking results",
      "Minimal visible scarring",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-[#1a4a6b] to-[#1e5a82]",
  },
  {
    title: "Liposuction",
    subtitle: "Body Contouring",
    description:
      "Sculpt and contour your body by precisely removing stubborn fat deposits that resist diet and exercise, for a slimmer, more defined silhouette.",
    benefits: [
      "Targeted fat removal",
      "Improved body proportions",
      "Long-lasting results",
      "Multiple areas treated",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: "from-[#2d1a4a] to-[#3d2260]",
  },
  {
    title: "Breast Surgery",
    subtitle: "Augmentation & Lift",
    description:
      "Enhance, lift, or reduce breast size and shape to restore confidence and achieve your desired aesthetic profile using premium implants and techniques.",
    benefits: [
      "Enhanced proportions",
      "Restored confidence",
      "Premium implants available",
      "Customized approach",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    gradient: "from-[#1a3a2a] to-[#1a4a38]",
  },
];

export default function ProceduresSection() {
  return (
    <section id="procedures" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#b8974a] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1e] mb-4">
            Premium Surgical Procedures
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Each procedure is performed by board-certified surgeons using the latest techniques and technology, tailored exclusively to your goals.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #b8974a, #d4af6a)" }} />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {procedures.map((proc) => (
            <div
              key={proc.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${proc.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 translate-x-12 -translate-y-12" style={{ background: "#b8974a" }} />
                <div className="text-white/80 mb-4">{proc.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{proc.title}</h3>
                <p className="text-white/60 text-sm font-medium tracking-wide">{proc.subtitle}</p>
              </div>

              {/* Card body */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{proc.description}</p>

                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Benefits</h4>
                <ul className="space-y-2 mb-8">
                  {proc.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#b8974a" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a4a6b] hover:text-[#b8974a] transition-colors group"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-12 max-w-3xl mx-auto leading-relaxed">
          All medical procedures involve risks. Final eligibility and treatment plans are determined after medical evaluation by a qualified surgeon. Individual results may vary.
        </p>
      </div>
    </section>
  );
}
