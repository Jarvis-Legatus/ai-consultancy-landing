"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "./language-selector"

import { MorphingText } from "@/components/magicui/morphing-text";
import SlideArrowButton from "./SlideArrowButton";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

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

  useEffect(() => {
    if (containerRef.current) {
      const textContainer = containerRef.current.querySelector('.max-w-3xl');
      if (textContainer) {
      }
    }
  }, [mounted]);

  if (!mounted) return null

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10"
    >
      <video
        className="background-orb"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/orb.mp4" type="video/mp4" />
      </video>

      <motion.div style={{ opacity, scale, y }} className="container mx-auto px-4 z-10 py-5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-16 tracking-tight">
              {t("hero.title") as string}
              <MorphingText texts={t("hero.morphingTexts") as string[]} className="inline-block ml-2" />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">{t("hero.subtitle") as string}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center sm:flex-row gap-6 justify-center"
          >
            <InteractiveHoverButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t("hero.cta.primary") as string}</InteractiveHoverButton>

          </motion.div>
        </div>
      </motion.div>
      <div
        className="absolute bottom-0 left-0 w-full h-[400px] z-5"
        style={{
          background: 'linear-gradient(to top, var(--hero-bottom-transition), transparent)',
          pointerEvents: 'none',
        }}
      ></div>
    </section>
  )
}

