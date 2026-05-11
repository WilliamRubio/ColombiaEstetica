"use client";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../translations";

export default function ContactForm() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    procedure: "",
    travelDate: "",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = t.errors.fullName;
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = t.errors.email;
    if (!formData.country.trim()) newErrors.country = t.errors.country;
    if (!formData.procedure) newErrors.procedure = t.errors.procedure;
    if (!formData.consent) newErrors.consent = t.errors.consent;
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 section-alt">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#1a4a6b" }}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#1c1c1e] mb-4">{t.thanks.title}</h2>
          <p className="text-gray-500 leading-relaxed">{t.thanks.text}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left info panel */}
          <div>
            <span className="inline-block text-[#b8974a] text-sm font-semibold tracking-widest uppercase mb-3">
              {t.label}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1e] mb-6">
              {t.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              {t.description}
            </p>

            <div className="space-y-5">
              {t.features.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "#f9f6f0" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#1c1c1e] text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-2xl border-l-4" style={{ background: "#fff8f0", borderColor: "#b8974a" }}>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">{t.disclaimerBold}</strong> {t.disclaimerText}
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">{t.form.fullName}</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t.form.fullNamePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">{t.form.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">{t.form.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.form.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Country + Procedure row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">{t.form.country}</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder={t.form.countryPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.country ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                    }`}
                  />
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">{t.form.procedure}</label>
                  <select
                    name="procedure"
                    value={formData.procedure}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all appearance-none ${
                      errors.procedure ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                    }`}
                  >
                    <option value="">{t.form.procedurePlaceholder}</option>
                    {t.form.procedures.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.procedure && <p className="text-red-500 text-xs mt-1">{errors.procedure}</p>}
                </div>
              </div>

              {/* Travel date */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">{t.form.travelDate}</label>
                <input
                  type="month"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">{t.form.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-[#1a4a6b] bg-gray-50 focus:bg-white resize-none"
                />
              </div>

              {/* Consent checkbox */}
              <div>
                <label className={`flex items-start gap-3 cursor-pointer ${errors.consent ? "text-red-500" : ""}`}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-[#1a4a6b] cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    {t.form.consentText}{" "}
                    <a href="#" className="underline text-[#1a4a6b] hover:text-[#b8974a]">{t.form.privacyPolicy}</a>{" "}
                    {t.form.and}{" "}
                    <a href="#" className="underline text-[#1a4a6b] hover:text-[#b8974a]">{t.form.terms}</a>.
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-xs mt-1 pl-7">{errors.consent}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-bold text-base hover:shadow-xl transition-all duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #1a4a6b 0%, #1e5a82 100%)" }}
              >
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    procedure: "",
    travelDate: "",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "A valid email address is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.procedure) newErrors.procedure = "Please select a procedure.";
    if (!formData.consent) newErrors.consent = "Please accept the terms to continue.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Placeholder: send formData to your backend / CRM / email service here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 section-alt">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#1a4a6b" }}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#1c1c1e] mb-4">Thank You!</h2>
          <p className="text-gray-500 leading-relaxed">
            Your request has been received. A patient coordinator will reach out within 24 hours to schedule your free virtual consultation.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left info panel */}
          <div>
            <span className="inline-block text-[#b8974a] text-sm font-semibold tracking-widest uppercase mb-3">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1c1e] mb-6">
              Request Your Free Assessment
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Take the first step toward your transformation. Fill out the form and one of our bilingual patient coordinators will contact you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: "🔒", title: "Completely Confidential", desc: "Your information is secure and never shared." },
                { icon: "💬", title: "Bilingual Support", desc: "English-speaking coordinators available 7 days a week." },
                { icon: "📋", title: "No Commitment", desc: "A free assessment with no obligation to proceed." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "#f9f6f0" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#1c1c1e] text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-2xl border-l-4" style={{ background: "#fff8f0", borderColor: "#b8974a" }}>
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">Medical Disclaimer:</strong> All medical procedures involve risks. Final eligibility and treatment plans are determined after medical evaluation by a qualified surgeon. Individual results may vary and are not guaranteed.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">Phone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Country + Procedure row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">Country *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="United States"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.country ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                    }`}
                  />
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">Procedure of Interest *</label>
                  <select
                    name="procedure"
                    value={formData.procedure}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all appearance-none ${
                      errors.procedure ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                    }`}
                  >
                    <option value="">Select procedure</option>
                    {procedures.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.procedure && <p className="text-red-500 text-xs mt-1">{errors.procedure}</p>}
                </div>
              </div>

              {/* Travel date */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">Preferred Travel Date</label>
                <input
                  type="month"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-[#1a4a6b] bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#1c1c1e] mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your goals, questions, or anything you'd like us to know..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-[#1a4a6b] bg-gray-50 focus:bg-white resize-none"
                />
              </div>

              {/* Consent checkbox */}
              <div>
                <label className={`flex items-start gap-3 cursor-pointer ${errors.consent ? "text-red-500" : ""}`}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-[#1a4a6b] cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    I consent to the collection and use of my personal data to receive information about medical tourism services. I understand this does not constitute a medical consultation or guarantee of any procedure. I have read and accept the{" "}
                    <a href="#" className="underline text-[#1a4a6b] hover:text-[#b8974a]">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="#" className="underline text-[#1a4a6b] hover:text-[#b8974a]">Terms & Conditions</a>.
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-xs mt-1 pl-7">{errors.consent}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-bold text-base hover:shadow-xl transition-all duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #1a4a6b 0%, #1e5a82 100%)" }}
              >
                Request Free Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
