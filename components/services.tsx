"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, FileText, BarChart3, Workflow, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "./language-selector"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const services = [
    {
      icon: MessageSquare,
      title: t("service.chatbot.title"),
      description: t("service.chatbot.description"),
      benefit: t("service.chatbot.benefit"),
    },
    {
      icon: FileText,
      title: t("service.document.title"),
      description: t("service.document.description"),
      benefit: t("service.document.benefit"),
    },
    {
      icon: BarChart3,
      title: t("service.bi.title"),
      description: t("service.bi.description"),
      benefit: t("service.bi.benefit"),
    },
    {
      icon: Workflow,
      title: t("service.automation.title"),
      description: t("service.automation.description"),
      benefit: t("service.automation.benefit"),
    },
    {
      icon: Code,
      title: t("service.custom.title"),
      description: t("service.custom.description"),
      benefit: t("service.custom.benefit"),
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
    <section id="services" className="py-20">
      <div className="section-container bg-gray-50 py-16 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-gray-600"
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} item={item} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, item, t }) {
  const Icon = service.icon

  return (
    <motion.div variants={item}>
      <Card className="h-full transition-all duration-500 hover:shadow-xl border-2 border-gray-100 hover:border-indigo-200 rounded-xl overflow-hidden group">
        <CardHeader className="pb-2">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300"
          >
            <Icon className="h-7 w-7 text-blue-600" />
          </motion.div>
          <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 mb-4 text-base">{service.description}</CardDescription>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm font-medium text-blue-600 mb-2">{t("service.outcome")}</p>
            <p className="text-gray-700 mt-1">{service.benefit}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
