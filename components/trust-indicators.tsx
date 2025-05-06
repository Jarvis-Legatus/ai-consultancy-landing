// components/trust-indicators.tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-selector"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // Added Avatar
import dynamic from 'next/dynamic';

// Dynamically import MagicCard to avoid SSR issues
const MagicCard = dynamic(() => import('@/components/magicui/magic-card').then(mod => mod.MagicCard), { ssr: false });

const partners = [
  { name: "Microsoft for Startups", logo: "/placeholder.svg?height=60&width=180" },
  { name: "AWS Partner Network", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Google Cloud Partner", logo: "/placeholder.svg?height=60&width=180" },
  { name: "ISO 27001 Certified", logo: "/placeholder.svg?height=60&width=180" },
  { name: "GDPR Compliant", logo: "/placeholder.svg?height=60&width=180" },
]

  // --- Testimonials Below ---

const testimonials = [
  {
    quoteKey: "testimonial1.quote",
    authorKey: "testimonial1.author",
    positionKey: "testimonial1.position",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    quoteKey: "testimonial2.quote",
    authorKey: "testimonial2.author",
    positionKey: "testimonial2.position",
    image: "/placeholder.svg?height=64&width=64",
  },

  {
    quoteKey: "testimonial3.quote",
    authorKey: "testimonial3.author",
    positionKey: "testimonial3.position",
    image: "/placeholder.svg?height=64&width=64", // Replace with actual image paths if available
  },
  {
    quoteKey: "testimonial4.quote",
    authorKey: "testimonial4.author",
    positionKey: "testimonial4.position",
    image: "/placeholder.svg?height=64&width=64", // Replace with actual image paths if available
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
      <div className="section-container py-8 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref} // Attach ref to the first animated element in view
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

        {/* Partner Logos Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={item} // Apply item animation to each logo
              whileHover={{ scale: 1.05 }} // Slightly reduced scale for subtlety
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name} // Use translated name if available, otherwise partner.name
                width={160} // Slightly smaller for better fit maybe
                height={50}
                className="h-10 w-auto object-contain" // Adjusted height
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section - Refactored with Cards */}
        <motion.div
          variants={container} // Reuse container for staggering testimonials
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" // Added items-stretch
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <MagicCard
                 className="h-full transition-all duration-500 hover:shadow-xl rounded-xl overflow-hidden group bg-card"
               >
                <Card className="h-full w-full border-none shadow-none flex flex-col">
                  <CardHeader className="pb-4 flex-shrink-0"> {/* Adjusted padding */}
                    <div className="flex items-center">
                       <Avatar className="h-16 w-16 mr-4"> {/* Use Avatar component */}
                         <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={t(testimonial.authorKey) as string} />
                         <AvatarFallback>{(t(testimonial.authorKey) as string).substring(0, 2)}</AvatarFallback> {/* Fallback initials */}
                       </Avatar>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{t(testimonial.authorKey)}</h4>
                        <p className="text-muted-foreground text-sm">{t(testimonial.positionKey)}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow"> {/* Make content grow */}
                     <blockquote className="text-foreground/90 italic border-l-4 border-primary pl-4">
                        "{t(testimonial.quoteKey)}"
                    </blockquote>
                  </CardContent>
                  {/* No CardFooter needed for testimonials based on previous structure */}
                </Card>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}