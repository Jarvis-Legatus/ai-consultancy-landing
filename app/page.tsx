"use client"

import { Hero } from "@/components/hero"
import { FAQ } from "@/components/faq"
import { FAQ2 } from "@/components/faq2"
import ProjectShowcase from "@/components/projects"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { BookConsultation } from "@/components/book-consultation"
import { TrustIndicators } from "@/components/trust-indicators"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/components/language-selector"
import ScrollToTopButton from "@/components/ui/ScrollToTopButton"

export default function Home() {
  return (
      <div className="min-h-screen app-background">
        <Header />
        <main>
          <Hero />
          <FAQ />
          <FAQ2 />
          <ProjectShowcase />
          <Services />
          <CaseStudies />
          <BookConsultation />
          <TrustIndicators />
          <ScrollToTopButton />
        </main>
        <Footer />
      </div>
  )
}
