"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { BookConsultation } from "@/components/book-consultation"
import { TrustIndicators } from "@/components/trust-indicators"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/components/language-selector"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen app-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <CaseStudies />
          <BookConsultation />
          <TrustIndicators />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
