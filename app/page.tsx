import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ApplicationsSection from "@/components/applications-section"
import GuidesSection from "@/components/guides-section"
import NewsSection from "@/components/news-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
 return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApplicationsSection />
        <GuidesSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
