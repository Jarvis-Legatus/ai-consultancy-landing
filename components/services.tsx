"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, FileText, BarChart3, Workflow, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "./language-selector"
import dynamic from 'next/dynamic';

const MagicCard = dynamic(() => import('@/components/magicui/magic-card').then(mod => mod.MagicCard), { ssr: false });

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
    <section id="services" className="py-10">
      <div className="section-container py-8 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground"
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

interface ServiceCardProps {
  service: {
    icon: any; // Replace 'any' with a more specific type if available
    title: string | string[];
    description: string | string[];
    benefit: string | string[];
  };
  index: number;
  item: any; // Replace 'any' with a more specific type if available
  t: (key: string) => string | string[];
}

function ServiceCard({ service, index, item, t }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div variants={item}>
      <MagicCard
        className="h-full transition-all duration-500 hover:shadow-xl border border-border hover:border-primary/50 rounded-xl overflow-hidden group bg-card"
      >
        <Card className="h-full w-full border-none shadow-none">
          <CardHeader className="pb-2">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
            >
              <Icon className="h-7 w-7 text-primary" />
            </motion.div>
            <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4 text-base">{service.description}</CardDescription>
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-medium text-primary mb-2">{t("service.outcome")}</p>
              <p className="text-foreground/90 mt-1">{service.benefit}</p>
            </div>
          </CardContent>
        </Card>
      </MagicCard>
    </motion.div>
  )
}
