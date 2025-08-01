// components/trust-indicators.tsx
"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-selector"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import dynamic from 'next/dynamic';

// Dynamically import MagicCard to avoid SSR issues

const MagicCard = dynamic(() => import('@/components/magicui/magic-card').then(mod => mod.MagicCard), { ssr: false });
const NumberTicker = dynamic(() => import('@/components/magicui/number-ticker').then(mod => mod.NumberTicker), { ssr: false });

// Import SVG Icon Components



const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? "fill-foreground" : "fill-foreground opacity-50"}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"/>
  </svg>
);


  // --- Testimonials Below ---

const testimonials = [
  {
    quoteKey: "testimonial1.quote",
    authorKey: "testimonial1.author",
    positionKey: "testimonial1.position",
    rating: 5,
    image: "/faceholder.avif",
  },
  {
    quoteKey: "testimonial2.quote",
    authorKey: "testimonial2.author",
    positionKey: "testimonial2.position",
    rating: 5,
    image: "/faceholder.avif",
  },

  {
    quoteKey: "testimonial3.quote",
    authorKey: "testimonial3.author",
    positionKey: "testimonial3.position",
    rating: 4,
    image: "/faceholder.avif",
  },
]

export function TrustIndicators() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 }) // Adjusted amount slightly
  const { t } = useLanguage()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3, // Consistent delay
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 }, // Consistent animation direction
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Consistent duration
        ease: [0.22, 1, 0.36, 1], // Consistent easing
      },
    },
  }

  return (
    <section id="about" className="py-10"> {/* Added id="about" assuming this section covers it */}
      <div className="section-container py-16 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref} // Attach ref to the first animated element in view
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            {t("testimonials.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground"
          >
            {t("testimonials.subtitle")}
          </motion.p>
        </div>

        {/* Hero Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 items-start"
        >
          <motion.div variants={item} className="md:col-span-3 order-2 md:order-1">
            <MagicCard className="h-full">
              <Card className="h-full flex flex-col justify-center p-6 border-none shadow-none bg-transparent min-h-[300px]">
                <p className="text-xl lg:text-2xl font-medium leading-snug text-foreground text-center">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("testimonials.trustQuote") as string,
                    }}
                  />
                </p>
                <div className="flex justify-center mt-4">
                  <svg className="w-12 h-12 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"/>
                  </svg>
                </div>
              </Card>
            </MagicCard>
          </motion.div>
          <motion.div variants={item} className="md:col-span-2 md:aspect-auto order-1 md:order-2">
            <MagicCard className="w-full md:h-full">
              {/* The Card is absolutely positioned to fill the MagicCard, bypassing an internal layout issue. */}
              <Card className="flex flex-col p-6 border-none shadow-none bg-transparent">
                {/* The inner div uses flex-1 to fill the padded space within the Card. */}
                <div className="relative rounded-md overflow-hidden h-[250px]">
                  <Image
                    src="/Artemis-ken.png"
                    alt="AI-powered operations"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Card>
            </MagicCard>
          </motion.div>
        </motion.div>
        {/* Testimonials Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <MagicCard className="h-full">
                <Card className="h-full flex flex-col p-6 border-none shadow-none bg-transparent">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < testimonial.rating} />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground mb-6 flex-grow">
                    {t(testimonial.quoteKey)}
                  </p>
                  <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={t(testimonial.authorKey) as string} />
                        <AvatarFallback>{(t(testimonial.authorKey) as string).charAt(0)}</AvatarFallback>
                      </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {t(testimonial.authorKey)}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t(testimonial.positionKey)}
                      </p>
                    </div>
                  </div>
                </Card>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <motion.div variants={item} className="stat-item">
            <h3 className="font-bold text-5xl text-foreground mb-2 tracking-tight">
              <NumberTicker value={parseInt(t("stats.projectsCompleted.value") as string)} />+
            </h3>
            <p className="text-base text-muted-foreground">
              {t("stats.projectsCompleted.label")}
            </p>
          </motion.div>
          <motion.div variants={item} className="stat-item">
            <h3 className="font-bold text-5xl text-foreground mb-2 tracking-tight">
              <NumberTicker value={parseFloat(t("stats.clientSatisfaction.value") as string)} />%
            </h3>
            <p className="text-base text-muted-foreground">
              {t("stats.clientSatisfaction.label")}
            </p>
          </motion.div>
          <motion.div variants={item} className="stat-item">
            <h3 className="font-bold text-5xl text-foreground mb-2 tracking-tight">
              <NumberTicker value={parseInt(t("stats.yearsExperience.value") as string)} />+
            </h3>
            <p className="text-base text-muted-foreground">
              {t("stats.yearsExperience.label")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}