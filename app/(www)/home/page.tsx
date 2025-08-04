
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";

import GuidesSection from "@/components/guides-section";
import NewsSection from "@/components/news-section";
import ContactSection from "@/components/contact-section";


import { SocialSection2 } from "@/components/social-section-2";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />

      <ServicesSection />

      {/* <ApplicationsSection /> */}
      <GuidesSection />
      <NewsSection />
      {/* <SocialSection/> */}
      <SocialSection2 />
      <ContactSection />
    </main>
  );
}
