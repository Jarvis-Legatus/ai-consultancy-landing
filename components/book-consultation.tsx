"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { useLanguage } from "./language-selector"
import Cal, { getCalApi } from "@calcom/embed-react"
import dynamic from 'next/dynamic';

const MagicCard = dynamic(() => import('@/components/magicui/magic-card').then(mod => mod.MagicCard), { ssr: false });

export function BookConsultation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({namespace:"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const benefits = [
    t("consultation.benefit1"),
    t("consultation.benefit2"),
    t("consultation.benefit3"),
    t("consultation.benefit4"),
  ]

  return (
    <section id="contact" className="py-10">
      <div className="section-container py-8 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{t("consultation.title")}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{t("consultation.subtitle")}</p>
              <motion.ul
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="space-y-4 max-w-3xl mx-auto"
              >
                {benefits.map((benefit, index) => (
                  <motion.li key={index} variants={item} className="flex items-start justify-center text-center">
                    <div className="mr-3 mt-1 bg-primary/10 rounded-full p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="text-foreground/90">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <MagicCard
              className="h-full transition-all duration-500 hover:shadow-xl border border-border hover:border-primary/50 rounded-xl overflow-hidden group bg-card p-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: 0 }}
              >
                <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">{t("consultation.form.title")}</h3>
                <Cal
                  namespace="30min"
                  calLink="fasteroperations/20min"
                  style={{width:"100%",height:"100%",overflow:"scroll"}}
                  config={{"layout":"month_view"}}
                />
              </motion.div>
            </MagicCard>
          </div>
        </div>
      </div>
    </section>
  )
}
