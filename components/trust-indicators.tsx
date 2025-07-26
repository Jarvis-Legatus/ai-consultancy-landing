// components/trust-indicators.tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
// Image import might still be used by AvatarImage or if testimonials use non-SVG images.
import Image from "next/image"
import { useLanguage } from "./language-selector"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" 
import dynamic from 'next/dynamic';

// Dynamically import MagicCard to avoid SSR issues
const MagicCard = dynamic(() => import('@/components/magicui/magic-card').then(mod => mod.MagicCard), { ssr: false });

// --- SVG Icon Components ---
interface SvgIconProps {
  className?: string;
  title?: string;
}

const OpenAiIcon = ({ className, title }: SvgIconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    preserveAspectRatio="xMidYMid" 
    viewBox="0 0 256 260" 
    className={className} 
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}
    <path 
      fill="currentColor" 
      d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"
    />
  </svg>
);

const N8nIcon = ({ className, title }: SvgIconProps) => (
  <svg 
    viewBox="0 0 228 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" 
      fill="#EA4B71"
    />
  </svg>
);

const AnthropicIcon = ({ className, title }: SvgIconProps) => (
  <svg 
    fillRule="evenodd" 
    style={{flex:'none', lineHeight:1}} 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}
    <path 
      fill="currentColor" 
      d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"
    />
  </svg>
);

const GeminiIcon = ({ className, title }: SvgIconProps) => (
  <svg 
    style={{flex:'none', lineHeight:1}} 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}
    <defs>
      <linearGradient id="lobe-icons-gemini-fill-trustindicators" x1="0%" x2="68.73%" y1="100%" y2="30.395%">
        <stop offset="0%" stopColor="#1C7DFF"></stop>
        <stop offset="52.021%" stopColor="#1C69FF"></stop>
        <stop offset="100%" stopColor="#F0DCD6"></stop>
      </linearGradient>
    </defs>
    <path 
      d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12" 
      fill="url(#lobe-icons-gemini-fill-trustindicators)" 
      fillRule="nonzero"
    />
  </svg>
);

const QdrantIcon = ({ className, title }: SvgIconProps) => (
  <svg 
    viewBox="0 0 49 56" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    role="img"
    aria-label={title}
  >
    {title && <title>{title}</title>}
    <g clipPath="url(#qdrant-new-clip)">
      <path fillRule="evenodd" clipRule="evenodd" d="M38.4886 51.4767L37.3719 20.6899L35.3496 12.5732L48.848 14.0022V51.2437L40.6024 56.0026L38.4886 51.4767Z" fill="#24386C"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M48.8468 14L40.6011 18.7622L23.5851 15.0296L3.66794 23.139L0.349609 14L12.4719 7L24.5979 0L36.7206 7L48.8468 14Z" fill="#7589BE"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.349609 13.9994L8.59528 18.7616L13.3751 32.9769L29.5141 45.89L24.5983 55.9994L12.4723 48.999L0.349609 41.999V13.9994Z" fill="#B2BFE8"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M30.0662 38.4209L24.5996 46.4799V56.0006L32.3566 51.525L36.3534 45.5569" fill="#24386C"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.6021 36.9622L16.8418 23.5262L18.5133 19.0731L24.8677 15.9922L32.3557 23.5265L24.6021 36.9622Z" fill="#7589BE"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.8428 23.5254L24.5997 28.001V36.9595L17.4256 37.2682L13.0859 31.727L16.8428 23.5254Z" fill="#B2BFE8"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.5996 27.9996L32.3566 23.5244L37.6358 32.3147L31.2472 37.5931L24.5996 36.9585V27.9996Z" fill="#24386C"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M32.3553 51.524L40.601 56V18.7622L32.5978 14.1433L24.5983 9.52441L16.5952 14.1433L8.5957 18.7622V37.2411L16.5952 41.86L24.5983 46.4793L32.3553 41.9996V51.524ZM32.3553 32.4789L24.5983 36.9582L16.8414 32.4789V23.524L24.5983 19.0448L32.3553 23.524V32.4789Z" fill="#DC244C"/>
      <path d="M24.6033 46.4828V36.9606L16.8867 32.5195V42.0259L24.6033 46.4828Z" fill="url(#qdrant-new-gradient)"/>
    </g>
    <defs>
      <linearGradient id="qdrant-new-gradient" x1="23.1805" y1="38.7809" x2="15.4911" y2="38.7809" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3364"/>
        <stop offset="1" stopColor="#C91540" stopOpacity="0"/>
      </linearGradient>
      <clipPath id="qdrant-new-clip">
        <rect width="48.3" height="56" fill="white" transform="translate(0.349609)"/>
      </clipPath>
    </defs>
  </svg>
);


const partners = [
  { name: "OpenAI", LogoComponent: OpenAiIcon },
  { name: "n8n", LogoComponent: N8nIcon },
  { name: "Anthropic", LogoComponent: AnthropicIcon },
  { name: "Gemini", LogoComponent: GeminiIcon },
  { name: "Qdrant", LogoComponent: QdrantIcon },
];

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
      <div className="section-container py-8 shadow-sm bg-background">
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
          {partners.map((partner, index) => {
            const Logo = partner.LogoComponent; // Get the component constructor
            return (
              <motion.div
                key={index}
                variants={item} // Apply item animation to each logo 
                whileHover={{ scale: 1.05 }} // Slightly reduced scale for subtlety 
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Logo
                  title={partner.name}
                  className="h-10 w-auto text-foreground" // Applied consistent sizing and text color for currentColor
                />
              </motion.div>
            );
          })}
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