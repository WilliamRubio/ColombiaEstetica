import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import TrustSection from "@/app/components/TrustSection";
import ProceduresSection from "@/app/components/ProceduresSection";
import HowItWorks from "@/app/components/HowItWorks";
import DoctorsSection from "@/app/components/DoctorsSection";
import BeforeAfterSection from "@/app/components/BeforeAfterSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import FAQSection from "@/app/components/FAQSection";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import WhatsAppFloat from "@/app/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TrustSection />
        <ProceduresSection />
        <HowItWorks />
        <DoctorsSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
