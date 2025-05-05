"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "./language-selector"

import { FlickeringGrid } from "@/components/magicui/flickering-grid"
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >

 <FlickeringGrid className="absolute left-0 top-0 h-full w-1/6" color="blue" style={{ maskImage: 'linear-gradient(to right, black, transparent)' }} /> 
 <FlickeringGrid className="absolute right-0 top-0 h-full w-1/6" color="blue" style={{ maskImage: 'linear-gradient(to left, black, transparent)' }} />

      <motion.div style={{ opacity, scale, y }} className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 tracking-tight">
              {t("hero.title")}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl button-hover">
              <span>{t("hero.cta.primary")}</span>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-2 button-hover text-foreground">
              <span>{t("hero.cta.secondary")}</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

