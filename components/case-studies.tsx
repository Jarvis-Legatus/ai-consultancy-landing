"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "./language-selector"

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
    <section id="case-studies" className="py-20">
      <div className="section-container bg-white py-16 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t("caseStudies.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-600"
          >
            {t("caseStudies.subtitle")}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} item={item} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CaseStudyCard({ study, item, t }) {
  return (
    <motion.div variants={item}>
      <Card className="h-full transition-all duration-500 hover:shadow-xl border-2 border-gray-200 hover:border-indigo-200 rounded-xl overflow-hidden group">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <CardHeader className="pb-2">
          <div className="text-sm text-gray-500 mb-1">{study.company}</div>
          <CardTitle className="text-2xl font-semibold">{study.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 mb-4 text-base">{study.description}</CardDescription>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm font-medium text-indigo-600 mb-2">{t("caseStudy.outcome")}</p>
            <p className="text-gray-700 mb-4">{study.outcome}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center border-t border-gray-100 pt-4">
          <div className="font-semibold text-green-600">{study.roi}</div>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
          >
            {t("caseStudy.readMore")} <ArrowRight size={16} className="ml-1" />
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
