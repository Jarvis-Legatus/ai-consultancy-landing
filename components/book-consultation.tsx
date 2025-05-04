"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check } from "lucide-react"
import { useLanguage } from "./language-selector"

export function BookConsultation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your backend
    setSubmitted(true)
  }

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
    <section id="contact" className="py-20">
      <div className="section-container bg-gray-50 py-16 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("consultation.title")}</h2>
              <p className="text-xl text-gray-600 mb-8">{t("consultation.subtitle")}</p>
              <motion.ul
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.li key={index} variants={item} className="flex items-start">
                    <div className="mr-3 mt-1 bg-green-100 rounded-full p-1">
                      <Check size={16} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check size={32} className="text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("consultation.success.title")}</h3>
                  <p className="text-gray-600 mb-6">{t("consultation.success.message")}</p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="button-hover rounded-xl border-2"
                  >
                    <span>{t("consultation.success.button")}</span>
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("consultation.form.title")}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("consultation.form.name")}
                        </label>
                        <Input id="name" placeholder="John Smith" required className="rounded-lg border-2" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("consultation.form.company")}
                        </label>
                        <Input id="company" placeholder="Acme Inc." required className="rounded-lg border-2" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("consultation.form.email")}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="rounded-lg border-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("consultation.form.phone")}
                        </label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" className="rounded-lg border-2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("consultation.form.date")}
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal rounded-lg border-2"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>{t("consultation.form.selectDate")}</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("consultation.form.message")}
                      </label>
                      <Textarea
                        id="message"
                        placeholder={t("consultation.form.messagePlaceholder")}
                        className="min-h-[120px] rounded-lg border-2"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-6 button-hover">
                      <span>{t("consultation.form.submit")}</span>
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">{t("consultation.form.privacy")}</p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
