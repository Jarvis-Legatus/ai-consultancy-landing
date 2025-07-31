"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "./language-selector"
import dynamic from 'next/dynamic';

const MagicCard = dynamic(() => import('@/components/magicui/magic-card').then(mod => mod.MagicCard), { ssr: false });

export function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const caseStudies = [
    {
      title: t("caseStudy.manufacturing.title"),
      company: t("caseStudy.manufacturing.company"),
      description: t("caseStudy.manufacturing.description"),
      outcome: t("caseStudy.manufacturing.outcome"),
      tags: ["Process Automation", "Predictive Analytics"],
      roi: t("caseStudy.manufacturing.roi"),
    },
    {
      title: t("caseStudy.support.title"),
      company: t("caseStudy.support.company"),
      description: t("caseStudy.support.description"),
      outcome: t("caseStudy.support.outcome"),
      tags: ["Chatbot", "Customer Experience"],
      roi: t("caseStudy.support.roi"),
    },
    {
      title: t("caseStudy.legal.title"),
      company: t("caseStudy.legal.company"),
      description: t("caseStudy.legal.description"),
      outcome: t("caseStudy.legal.outcome"),
      tags: ["Document Processing", "RAG System"],
      roi: t("caseStudy.legal.roi"),
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="case-studies" className="py-10">
      <div className="section-container py-16 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            {t("caseStudies.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground"
          >
            {t("caseStudies.subtitle")}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} item={item} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface CaseStudy {
  company: string | string[];
  title: string | string[];
  description: string | string[];
  outcome: string | string[];
  tags: string[];
  roi: string | string[];
}

function CaseStudyCard({
  study,
  item,
  t
}: {
  study: CaseStudy;
  item: any; // Motion variant type would be more specific if available
  t: (key: string) => string | string[];
}) {
  return (
    <motion.div variants={item}>
      <MagicCard
        className="h-full transition-all duration-500 group-hover:card-shadow-hover overflow-hidden group bg-background mb-4"
      >
        <Card className="h-full w-full border-none shadow-none flex flex-col">
          <CardHeader className="pb-2 flex-shrink-0">
            <div className="text-sm text-muted-foreground mb-1">{study.company}</div>
            <CardTitle className="text-2xl font-semibold text-foreground">{study.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col h-[320px]"> {/* New inner div with fixed height */}
              <CardDescription className="text-muted-foreground mb-4 text-base">{study.description}</CardDescription>
              <div className="pt-4 border-t border-border flex-grow overflow-hidden"> {/* Outcome and tags div, now flex-growing */}
                <p className="text-sm font-medium text-primary mb-2">{t("caseStudy.outcome")}</p>
                <p className="text-foreground/90 mb-4">{study.outcome}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag: string, i: number) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div> {/* End of new inner div */}
          </CardContent>
          <CardFooter className="flex justify-between items-center border-t border-border pt-4 px-6 pb-6 flex-shrink-0">
            <div className="font-semibold text-orange-400 text-sm">{study.roi}</div>
            <motion.button
              whileHover={{ x: 5 }}
              className="text-primary hover:text-primary/90 flex items-center text-sm font-medium"
            >
              {t("caseStudy.readMore")} <ArrowRight size={16} className="ml-1" />
            </motion.button>
          </CardFooter>
        </Card>
      </MagicCard>
    </motion.div>
  );
}
