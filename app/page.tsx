"use client"

import { Hero } from "@/components/hero"
import { FAQ } from "@/components/faq"
import { FAQ2B } from "@/components/faq2B"
import ProjectShowcase from "@/components/projects"
import { Services } from "@/components/services"
import { IconGrid } from "@/components/icon-grid"
import { CaseStudies } from "@/components/case-studies"
import { BookConsultation } from "@/components/book-consultation"
import { TrustIndicators } from "@/components/trust-indicators"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import ScrollToTopButton from "@/components/ui/ScrollToTopButton"
import TagSlide from "@/components/tag-slide"
import { useLanguage } from "@/components/language-selector"

export default function Home() {
  const { t } = useLanguage();

  return (
      <div className="min-h-screen app-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <IconGrid />
          <TagSlide />
          <ProjectShowcase />
          <CaseStudies />
          <BookConsultation />
          <FAQ />
          <TrustIndicators />
          <ScrollToTopButton />
        </main>
        <Footer />
      </div>
  )
}
