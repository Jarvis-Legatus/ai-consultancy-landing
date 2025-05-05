"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-selector"

const partners = [
  { name: "Microsoft for Startups", logo: "/placeholder.svg?height=60&width=180" },
  { name: "AWS Partner Network", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Google Cloud Partner", logo: "/placeholder.svg?height=60&width=180" },
  { name: "ISO 27001 Certified", logo: "/placeholder.svg?height=60&width=180" },
  { name: "GDPR Compliant", logo: "/placeholder.svg?height=60&width=180" },
]

const testimonials = [
  {
    quote:
      "FasterOperations helped us implement an AI solution that reduced our customer response time by 75% while improving satisfaction scores.",
    author: "Sarah Johnson",
    position: "COO, Retail Chain",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "Their practical approach to AI delivered exactly what we needed - real business results without the technical complexity.",
    author: "Michael Chen",
    position: "CEO, Manufacturing SME",
    image: "/placeholder.svg?height=64&width=64",
  },
]

export function TrustIndicators() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

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

  return (
    <section className="py-20">
      <div className="section-container bg-background py-16 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            {t("trust.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground"
          >
            {t("trust.subtitle")}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 * index, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="bg-card p-8 rounded-xl shadow-md border-2 border-border"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.author}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                </div>
              </div>
              <blockquote className="text-foreground/90 italic">"{testimonial.quote}"</blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
