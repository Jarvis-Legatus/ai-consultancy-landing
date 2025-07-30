"use client"

import { Hero } from "@/components/hero"
import { FAQ } from "@/components/faq"
import { FAQ2B } from "@/components/faq2B"
import ProjectShowcase from "@/components/projects"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { BookConsultation } from "@/components/book-consultation"
import { TrustIndicators } from "@/components/trust-indicators"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/components/language-selector"
import ScrollToTopButton from "@/components/ui/ScrollToTopButton"
import TagSlide from "@/components/tag-slide"
import { User, DollarSign, Clock, Settings, BarChart2 } from "lucide-react"

export default function Home() {
  const tags = [
    { icon: User, text: "Personalized Experiences" },
    { icon: DollarSign, text: "Cost Effective" },
    { icon: Clock, text: "Real-Time Insights" },
    { icon: Settings, text: "Automation" },
    { icon: BarChart2, text: "Data-Driven Decisions" },
    { icon: User, text: "Personalized Experiences" },
    { icon: DollarSign, text: "Cost Effective" },
    { icon: Clock, text: "Real-Time Insights" },
    { icon: Settings, text: "Automation" },
    { icon: BarChart2, text: "Data-Driven Decisions" },
  ];

  return (
      <div className="min-h-screen app-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <div className="section-container py-12">
            <TagSlide tags={tags} />
          </div>
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
