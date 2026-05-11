export type Lang = "en" | "es";

export const translations = {
  en: {
    navbar: {
      links: [
        { label: "Procedures", href: "#procedures" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Our Doctors", href: "#doctors" },
        { label: "Results", href: "#results" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
      consultation: "Free Consultation",
      whatsapp: "WhatsApp",
      switchLang: "Cambiar a Español",
    },
    hero: {
      badge: "International Medical Tourism",
      titleLine1: "Premium Plastic Surgery in",
      titleHighlight: "Colombia",
      titleLine2: "for International Patients",
      description:
        "Experienced surgeons, personalized care, and complete travel assistance. Achieve the results you desire with world-class medical expertise at a fraction of the US cost.",
      trustBadges: [
        "Board-Certified Surgeons",
        "English-Speaking Team",
        "All-Inclusive Packages",
      ],
      cta1: "Get Free Consultation",
      cta2: "Chat on WhatsApp",
      cardTitle: "World-Class Care",
      cardSubtitle: "Premium medical expertise",
      stats: [
        { number: "15+", label: "Years Experience" },
        { number: "2,500+", label: "Procedures" },
        { number: "98%", label: "Satisfaction Rate" },
        { number: "40+", label: "Countries" },
      ],
      badgeCertified: "Board Certified",
      badgeSurgeons: "All Surgeons",
    },
    trust: {
      label: "Why Choose Us",
      title: "Healthcare Excellence You Can Trust",
      description:
        "We combine world-class surgical expertise with the warm, personalized hospitality that Colombia is renowned for.",
      benefits: [
        {
          title: "Experienced Plastic Surgeons",
          description:
            "Our surgeons hold international certifications with over a decade of specialized experience in aesthetic procedures.",
        },
        {
          title: "International Patient Support",
          description:
            "Dedicated bilingual coordinators assist you before, during, and after your journey — from visa paperwork to hotel bookings.",
        },
        {
          title: "Virtual Consultation",
          description:
            "Start your journey from home with a secure video consultation with your surgeon before travelling to Colombia.",
        },
        {
          title: "Transparent Process",
          description:
            "Clear, itemized quotes — no hidden fees. You know exactly what you're paying for at every stage of the process.",
        },
        {
          title: "Personalized Surgical Plans",
          description:
            "Every treatment plan is tailored to your anatomy, goals, and lifestyle — never a one-size-fits-all approach.",
        },
        {
          title: "Safe Recovery Guidance",
          description:
            "Comprehensive post-operative care protocol and 24/7 medical follow-up during your recovery stay in Colombia.",
        },
      ],
    },
    procedures: {
      label: "Our Specialties",
      title: "Premium Surgical Procedures",
      description:
        "Each procedure is performed by board-certified surgeons using the latest techniques and technology, tailored exclusively to your goals.",
      keyBenefits: "Key Benefits",
      learnMore: "Learn More & Schedule",
      items: [
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
        },
      ],
    },
    howItWorks: {
      label: "The Journey",
      title: "How It Works",
      description:
        "From your first inquiry to your final follow-up, we guide you through every step with clarity and care.",
      stepLabel: "Step",
      cta: "Start Your Journey Today",
      steps: [
        {
          number: "01",
          title: "Virtual Consultation",
          description:
            "Schedule a private video call with one of our surgeons to discuss your goals, review your medical history, and receive professional guidance.",
        },
        {
          number: "02",
          title: "Medical Evaluation",
          description:
            "Submit photos and medical documents for a thorough pre-surgical evaluation. Our team reviews your case and confirms candidacy.",
        },
        {
          number: "03",
          title: "Personalized Quote",
          description:
            "Receive a transparent, all-inclusive quote covering your procedure, accommodation, transfers, and post-op follow-up — no hidden fees.",
        },
        {
          number: "04",
          title: "Travel to Colombia",
          description:
            "Our coordination team manages your arrival logistics. We arrange airport pickup, hotel, and a pre-surgical appointment.",
        },
        {
          number: "05",
          title: "Surgery Day",
          description:
            "Your procedure is performed at a fully accredited clinic. Our bilingual team is with you every step of the way.",
        },
        {
          number: "06",
          title: "Recovery & Follow-Up",
          description:
            "Recover comfortably in Colombia with 24/7 medical support. Receive ongoing remote follow-up once you return home.",
        },
      ],
    },
    doctors: {
      label: "Meet the Team",
      title: "Our Surgeons",
      description:
        "Board-certified, internationally trained, and dedicated to delivering exceptional, personalized outcomes for every patient.",
      photoPlaceholder: "Photo Placeholder",
      requestConsultation: "Request Consultation",
      items: [
        {
          name: "Dr. Alejandro Morales",
          specialty: "Facial & Rhinoplasty Surgery",
          experience: "18 Years Experience",
          description:
            "Dr. Morales is a double board-certified plastic surgeon specializing in facial aesthetics and rhinoplasty. He trained at leading institutions in the US and Europe and is recognized for his meticulous, natural-looking results.",
          credentials: ["Board Certified – SCCP", "Fellow – ISAPS", "Trained – Mayo Clinic"],
        },
        {
          name: "Dr. Valentina Ríos",
          specialty: "Body Contouring & Breast Surgery",
          experience: "14 Years Experience",
          description:
            "Dr. Ríos is an internationally trained specialist in body contouring, liposuction, and breast aesthetics. Her approach prioritizes patient safety, personalized planning, and achieving proportional, elegant results.",
          credentials: ["Board Certified – SCCP", "Member – ASPS", "Trained – Paris & Bogotá"],
        },
      ],
    },
    testimonials: {
      label: "Patient Stories",
      title: "What Our Patients Say",
      description:
        "Real experiences from international patients who trusted us with their care.",
      footer:
        "* Testimonials are from real patients. Names may be abbreviated for privacy.",
      items: [
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
      ],
    },
    beforeAfter: {
      label: "Real Results",
      title: "Before & After Gallery",
      description:
        "Every result reflects a personalized surgical plan crafted specifically for that patient.",
      before: "Before",
      after: "After",
      photoPlaceholder: "Photo placeholder",
      consentBold: "Images shown with patient consent.",
      consentText:
        "All photographs are shared with full written authorization from our patients. Results vary per individual. These images are for illustrative purposes only and do not represent guaranteed outcomes.",
    },
    faq: {
      label: "Common Questions",
      title: "Frequently Asked Questions",
      description:
        "Everything you need to know before starting your medical journey with us.",
      items: [
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
      ],
      stillHaveQuestions: "Still have questions?",
      coordinatorsAvailable: "Our patient coordinators are available 7 days a week to help you.",
      contactUs: "Contact Us",
    },
    contact: {
      label: "Get Started",
      title: "Request Your Free Assessment",
      description:
        "Take the first step toward your transformation. Fill out the form and one of our bilingual patient coordinators will contact you within 24 hours.",
      features: [
        {
          icon: "🔒",
          title: "Completely Confidential",
          desc: "Your information is secure and never shared.",
        },
        {
          icon: "💬",
          title: "Bilingual Support",
          desc: "English-speaking coordinators available 7 days a week.",
        },
        {
          icon: "📋",
          title: "No Commitment",
          desc: "A free assessment with no obligation to proceed.",
        },
      ],
      disclaimerBold: "Medical Disclaimer:",
      disclaimerText:
        "All medical procedures involve risks. Final eligibility and treatment plans are determined after medical evaluation by a qualified surgeon. Individual results may vary and are not guaranteed.",
      form: {
        fullName: "Full Name *",
        fullNamePlaceholder: "Jane Smith",
        email: "Email *",
        emailPlaceholder: "jane@example.com",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "+1 (555) 000-0000",
        country: "Country *",
        countryPlaceholder: "United States",
        procedure: "Procedure of Interest *",
        procedurePlaceholder: "Select procedure",
        travelDate: "Preferred Travel Date",
        message: "Message",
        messagePlaceholder:
          "Tell us about your goals, questions, or anything you'd like us to know...",
        consentText:
          "I consent to the collection and use of my personal data to receive information about medical tourism services. I understand this does not constitute a medical consultation or guarantee of any procedure. I have read and accept the",
        privacyPolicy: "Privacy Policy",
        and: "and",
        terms: "Terms & Conditions",
        submit: "Request Free Assessment",
        procedures: [
          "Rhinoplasty",
          "Liposuction",
          "Breast Surgery",
          "Breast Augmentation",
          "Breast Lift / Reduction",
          "Body Contouring",
          "Combination Procedure",
          "Other / Not Sure Yet",
        ],
      },
      errors: {
        fullName: "Full name is required.",
        email: "A valid email address is required.",
        country: "Country is required.",
        procedure: "Please select a procedure.",
        consent: "Please accept the terms to continue.",
      },
      thanks: {
        title: "Thank You!",
        text: "Your request has been received. A patient coordinator will reach out within 24 hours to schedule your free virtual consultation.",
      },
    },
    footer: {
      description:
        "Premium plastic surgery services for international patients, combining world-class expertise with the warmth and affordability of Colombia.",
      proceduresTitle: "Procedures",
      procedures: [
        "Rhinoplasty",
        "Liposuction",
        "Breast Surgery",
        "Body Contouring",
        "Facelift",
      ],
      legalTitle: "Legal & Info",
      legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Medical Disclaimer", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
      copyright: "ColombiaEstética Medical Tourism. All rights reserved.",
      disclaimer:
        "All medical procedures involve risks. Results are not guaranteed. This website does not constitute medical advice. Consult a qualified surgeon before making any decision.",
    },
  },

  es: {
    navbar: {
      links: [
        { label: "Procedimientos", href: "#procedures" },
        { label: "Cómo Funciona", href: "#how-it-works" },
        { label: "Nuestros Médicos", href: "#doctors" },
        { label: "Resultados", href: "#results" },
        { label: "Preguntas", href: "#faq" },
        { label: "Contacto", href: "#contact" },
      ],
      consultation: "Consulta Gratuita",
      whatsapp: "WhatsApp",
      switchLang: "Switch to English",
    },
    hero: {
      badge: "Turismo Médico Internacional",
      titleLine1: "Cirugía Plástica Premium en",
      titleHighlight: "Colombia",
      titleLine2: "para Pacientes Internacionales",
      description:
        "Cirujanos con experiencia, atención personalizada y asistencia de viaje completa. Logra los resultados que deseas con experiencia médica de clase mundial a una fracción del costo en EE. UU.",
      trustBadges: [
        "Cirujanos Certificados",
        "Equipo Bilingüe",
        "Paquetes Todo Incluido",
      ],
      cta1: "Consulta Gratuita",
      cta2: "Chat por WhatsApp",
      cardTitle: "Atención de Clase Mundial",
      cardSubtitle: "Experiencia médica premium",
      stats: [
        { number: "15+", label: "Años de Experiencia" },
        { number: "2,500+", label: "Procedimientos" },
        { number: "98%", label: "Tasa de Satisfacción" },
        { number: "40+", label: "Países" },
      ],
      badgeCertified: "Certificados",
      badgeSurgeons: "Todos los Cirujanos",
    },
    trust: {
      label: "Por Qué Elegirnos",
      title: "Excelencia Médica en la que Puedes Confiar",
      description:
        "Combinamos experiencia quirúrgica de clase mundial con la calidez y hospitalidad personalizadas por la que Colombia es reconocida.",
      benefits: [
        {
          title: "Cirujanos Plásticos con Experiencia",
          description:
            "Nuestros cirujanos tienen certificaciones internacionales con más de una década de experiencia especializada en procedimientos estéticos.",
        },
        {
          title: "Apoyo al Paciente Internacional",
          description:
            "Coordinadores bilingües dedicados te asisten antes, durante y después de tu viaje — desde trámites de visa hasta reservas de hotel.",
        },
        {
          title: "Consulta Virtual",
          description:
            "Inicia tu proceso desde casa con una videoconsulta segura con tu cirujano antes de viajar a Colombia.",
        },
        {
          title: "Proceso Transparente",
          description:
            "Presupuestos detallados y claros — sin costos ocultos. Sabes exactamente qué estás pagando en cada etapa.",
        },
        {
          title: "Planes Quirúrgicos Personalizados",
          description:
            "Cada plan de tratamiento se adapta a tu anatomía, objetivos y estilo de vida — nunca un enfoque genérico.",
        },
        {
          title: "Guía de Recuperación Segura",
          description:
            "Protocolo integral de atención postoperatoria y seguimiento médico 24/7 durante tu estancia de recuperación en Colombia.",
        },
      ],
    },
    procedures: {
      label: "Nuestras Especialidades",
      title: "Procedimientos Quirúrgicos Premium",
      description:
        "Cada procedimiento es realizado por cirujanos certificados usando las últimas técnicas y tecnología, adaptados exclusivamente a tus objetivos.",
      keyBenefits: "Beneficios Clave",
      learnMore: "Más Info y Agendar",
      items: [
        {
          title: "Rinoplastia",
          subtitle: "Remodelación Nasal",
          description:
            "Refina la forma, tamaño y simetría de tu nariz para lograr resultados naturales y armoniosos que complementen tus rasgos faciales.",
          benefits: [
            "Armonía facial mejorada",
            "Corrige problemas respiratorios",
            "Resultados naturales",
            "Mínimas cicatrices visibles",
          ],
        },
        {
          title: "Liposucción",
          subtitle: "Contorneado Corporal",
          description:
            "Esculpe y contornea tu cuerpo eliminando con precisión depósitos de grasa persistente que resisten la dieta y el ejercicio.",
          benefits: [
            "Eliminación de grasa localizada",
            "Proporciones corporales mejoradas",
            "Resultados duraderos",
            "Múltiples zonas tratadas",
          ],
        },
        {
          title: "Cirugía de Senos",
          subtitle: "Aumento y Levantamiento",
          description:
            "Aumenta, eleva o reduce el tamaño y la forma de los senos para recuperar la confianza y lograr el perfil estético deseado.",
          benefits: [
            "Proporciones mejoradas",
            "Confianza recuperada",
            "Implantes premium disponibles",
            "Enfoque personalizado",
          ],
        },
      ],
    },
    howItWorks: {
      label: "El Proceso",
      title: "Cómo Funciona",
      description:
        "Desde tu primera consulta hasta el seguimiento final, te guiamos en cada paso con claridad y cuidado.",
      stepLabel: "Paso",
      cta: "Comienza Tu Proceso Hoy",
      steps: [
        {
          number: "01",
          title: "Consulta Virtual",
          description:
            "Agenda una videollamada privada con uno de nuestros cirujanos para hablar de tus objetivos, revisar tu historial médico y recibir orientación profesional.",
        },
        {
          number: "02",
          title: "Evaluación Médica",
          description:
            "Envía fotos y documentos médicos para una evaluación prequirúrgica completa. Nuestro equipo revisa tu caso y confirma tu elegibilidad.",
        },
        {
          number: "03",
          title: "Presupuesto Personalizado",
          description:
            "Recibe un presupuesto transparente y todo incluido que cubre el procedimiento, alojamiento, traslados y seguimiento postoperatorio — sin costos ocultos.",
        },
        {
          number: "04",
          title: "Viaje a Colombia",
          description:
            "Nuestro equipo de coordinación gestiona tu llegada. Organizamos el traslado del aeropuerto, el hotel y una cita prequirúrgica.",
        },
        {
          number: "05",
          title: "Día de la Cirugía",
          description:
            "Tu procedimiento se realiza en una clínica totalmente acreditada. Nuestro equipo bilingüe estará contigo en cada momento.",
        },
        {
          number: "06",
          title: "Recuperación y Seguimiento",
          description:
            "Recupérate cómodamente en Colombia con soporte médico 24/7. Recibe seguimiento remoto continuo una vez que regreses a casa.",
        },
      ],
    },
    doctors: {
      label: "Conoce al Equipo",
      title: "Nuestros Cirujanos",
      description:
        "Certificados, con formación internacional y dedicados a brindar resultados excepcionales y personalizados para cada paciente.",
      photoPlaceholder: "Foto del médico",
      requestConsultation: "Solicitar Consulta",
      items: [
        {
          name: "Dr. Alejandro Morales",
          specialty: "Cirugía Facial y Rinoplastia",
          experience: "18 Años de Experiencia",
          description:
            "El Dr. Morales es un cirujano plástico con doble certificación especializado en estética facial y rinoplastia. Se formó en instituciones líderes de EE. UU. y Europa y es reconocido por sus resultados meticulosos y naturales.",
          credentials: ["Certificado – SCCP", "Miembro – ISAPS", "Formado – Mayo Clinic"],
        },
        {
          name: "Dr. Valentina Ríos",
          specialty: "Contorno Corporal y Cirugía de Senos",
          experience: "14 Años de Experiencia",
          description:
            "La Dra. Ríos es una especialista con formación internacional en contorno corporal, liposucción y estética mamaria. Su enfoque prioriza la seguridad del paciente, la planificación personalizada y resultados proporcionales y elegantes.",
          credentials: ["Certificada – SCCP", "Miembro – ASPS", "Formada – París y Bogotá"],
        },
      ],
    },
    testimonials: {
      label: "Historias de Pacientes",
      title: "Lo Que Dicen Nuestros Pacientes",
      description:
        "Experiencias reales de pacientes internacionales que confiaron en nosotros.",
      footer:
        "* Los testimonios son de pacientes reales. Los nombres pueden estar abreviados por privacidad.",
      items: [
        {
          name: "Sarah M.",
          location: "Miami, FL — EE. UU.",
          procedure: "Rinoplastia",
          rating: 5,
          text: "Estaba nerviosa por viajar al extranjero para cirugía, pero el equipo hizo que toda la experiencia fuera perfecta. Mi coordinadora estaba disponible las 24 horas, la clínica era inmaculada y mi cirujano entendió exactamente lo que buscaba. Los resultados superaron mis expectativas.",
          initials: "SM",
          color: "#1a4a6b",
        },
        {
          name: "Jennifer L.",
          location: "Houston, TX — EE. UU.",
          procedure: "Liposucción",
          rating: 5,
          text: "Después de años luchando con zonas persistentes que no respondían a la dieta ni al ejercicio, finalmente di el paso. La consulta virtual fue exhaustiva y profesional. La Dra. Ríos me explicó todo y me hizo sentir completamente tranquila. El apoyo en la recuperación fue excepcional.",
          initials: "JL",
          color: "#3d2260",
        },
        {
          name: "Christine A.",
          location: "Nueva York, NY — EE. UU.",
          procedure: "Cirugía de Senos",
          rating: 5,
          text: "Investigué por más de un año antes de elegir este equipo, y estoy muy contenta de haberlo hecho. Todo, desde el presupuesto hasta el seguimiento, fue transparente y profesional. El precio fue una fracción de lo que me cotizaron en EE. UU. y la calidad de la atención fue absolutamente excepcional.",
          initials: "CA",
          color: "#1a4a38",
        },
      ],
    },
    beforeAfter: {
      label: "Resultados Reales",
      title: "Galería Antes y Después",
      description:
        "Cada resultado refleja un plan quirúrgico personalizado diseñado específicamente para ese paciente.",
      before: "Antes",
      after: "Después",
      photoPlaceholder: "Foto de referencia",
      consentBold: "Imágenes mostradas con consentimiento del paciente.",
      consentText:
        "Todas las fotografías se comparten con autorización escrita completa de nuestros pacientes. Los resultados varían por individuo. Estas imágenes son solo ilustrativas y no representan resultados garantizados.",
    },
    faq: {
      label: "Preguntas Frecuentes",
      title: "Preguntas Frecuentes",
      description:
        "Todo lo que necesitas saber antes de iniciar tu proceso médico con nosotros.",
      items: [
        {
          question: "¿Es segura la cirugía plástica en Colombia?",
          answer:
            "Sí. Colombia cuenta con instalaciones médicas acreditadas internacionalmente y cirujanos con formación de clase mundial. Nuestra clínica asociada tiene acreditaciones ISO y ACHC. Solo trabajamos con cirujanos plásticos certificados con trayectoria verificable.",
        },
        {
          question: "¿Cuánto tiempo debo permanecer en Colombia?",
          answer:
            "El tiempo recomendado varía según el procedimiento. La rinoplastia generalmente requiere 7–10 días, la liposucción 10–14 días y la cirugía de senos 7–10 días. Tu cirujano dará una recomendación específica según tu caso.",
        },
        {
          question: "¿Ofrecen consultas virtuales?",
          answer:
            "Sí. Ofrecemos videoconsultas privadas y seguras con tu cirujano asignado antes de viajar. Esto te permite hacer preguntas, revisar tus objetivos y recibir una evaluación inicial desde la comodidad de tu hogar.",
        },
        {
          question: "¿Qué incluye el paquete?",
          answer:
            "Nuestros paquetes todo incluido generalmente cubren el procedimiento quirúrgico, anestesia, estadía hospitalaria, pruebas preoperatorias, prendas de compresión postoperatorias, medicamentos y citas de seguimiento en Colombia. También están disponibles traslados al aeropuerto y opciones de alojamiento.",
        },
        {
          question: "¿Pueden atenderme en español?",
          answer:
            "Por supuesto. Todo nuestro equipo de coordinación de pacientes es bilingüe (inglés/español). Tu cirujano habla español e inglés, y todas las comunicaciones, formularios de consentimiento y documentos médicos están disponibles en ambos idiomas.",
        },
        {
          question: "¿Cómo comienzo?",
          answer:
            "Simplemente completa el formulario de consulta a continuación o escríbenos por WhatsApp. Un coordinador de pacientes se comunicará contigo en 24 horas para agendar tu consulta virtual y responder tus preguntas iniciales.",
        },
      ],
      stillHaveQuestions: "¿Tienes más preguntas?",
      coordinatorsAvailable: "Nuestros coordinadores están disponibles los 7 días de la semana para ayudarte.",
      contactUs: "Contáctanos",
    },
    contact: {
      label: "Comienza Ahora",
      title: "Solicita Tu Evaluación Gratuita",
      description:
        "Da el primer paso hacia tu transformación. Completa el formulario y uno de nuestros coordinadores bilingües te contactará en 24 horas.",
      features: [
        {
          icon: "🔒",
          title: "Completamente Confidencial",
          desc: "Tu información es segura y nunca se comparte.",
        },
        {
          icon: "💬",
          title: "Atención Bilingüe",
          desc: "Coordinadores disponibles en español e inglés los 7 días de la semana.",
        },
        {
          icon: "📋",
          title: "Sin Compromiso",
          desc: "Una evaluación gratuita sin obligación de continuar.",
        },
      ],
      disclaimerBold: "Aviso Médico:",
      disclaimerText:
        "Todos los procedimientos médicos conllevan riesgos. La elegibilidad y los planes de tratamiento se determinan tras evaluación médica por un cirujano calificado. Los resultados individuales pueden variar y no están garantizados.",
      form: {
        fullName: "Nombre Completo *",
        fullNamePlaceholder: "María García",
        email: "Correo Electrónico *",
        emailPlaceholder: "maria@ejemplo.com",
        phone: "Teléfono / WhatsApp",
        phonePlaceholder: "+57 (300) 000-0000",
        country: "País *",
        countryPlaceholder: "Colombia",
        procedure: "Procedimiento de Interés *",
        procedurePlaceholder: "Selecciona un procedimiento",
        travelDate: "Fecha de Viaje Preferida",
        message: "Mensaje",
        messagePlaceholder:
          "Cuéntanos sobre tus objetivos, preguntas o cualquier cosa que quieras que sepamos...",
        consentText:
          "Doy mi consentimiento para el uso de mis datos personales para recibir información sobre servicios de turismo médico. Entiendo que esto no constituye una consulta médica ni garantía de ningún procedimiento. He leído y acepto la",
        privacyPolicy: "Política de Privacidad",
        and: "y los",
        terms: "Términos y Condiciones",
        submit: "Solicitar Evaluación Gratuita",
        procedures: [
          "Rinoplastia",
          "Liposucción",
          "Cirugía de Senos",
          "Aumento de Senos",
          "Levantamiento / Reducción de Senos",
          "Contorno Corporal",
          "Procedimiento Combinado",
          "Otro / No estoy seguro/a aún",
        ],
      },
      errors: {
        fullName: "El nombre completo es requerido.",
        email: "Se requiere una dirección de correo válida.",
        country: "El país es requerido.",
        procedure: "Por favor selecciona un procedimiento.",
        consent: "Por favor acepta los términos para continuar.",
      },
      thanks: {
        title: "¡Gracias!",
        text: "Tu solicitud fue recibida. Un coordinador de pacientes te contactará en 24 horas para agendar tu consulta virtual gratuita.",
      },
    },
    footer: {
      description:
        "Servicios de cirugía plástica premium para pacientes internacionales, combinando experiencia de clase mundial con la calidez y accesibilidad de Colombia.",
      proceduresTitle: "Procedimientos",
      procedures: [
        "Rinoplastia",
        "Liposucción",
        "Cirugía de Senos",
        "Contorno Corporal",
        "Lifting Facial",
      ],
      legalTitle: "Legal e Info",
      legal: [
        { label: "Política de Privacidad", href: "#" },
        { label: "Aviso Médico", href: "#" },
        { label: "Términos y Condiciones", href: "#" },
        { label: "Preguntas Frecuentes", href: "#faq" },
        { label: "Contacto", href: "#contact" },
      ],
      copyright: "ColombiaEstética Medical Tourism. Todos los derechos reservados.",
      disclaimer:
        "Todos los procedimientos médicos conllevan riesgos. Los resultados no están garantizados. Este sitio web no constituye asesoramiento médico. Consulta a un cirujano calificado antes de tomar cualquier decisión.",
    },
  },
} as const;
