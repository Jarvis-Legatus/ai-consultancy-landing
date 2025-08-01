"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useLanguage } from "./language-selector";


interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ2B() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();
  const faqItems = t<FAQItem[]>("faq.items", { returnObjects: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

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
  };
  return (
    <section id="faq" className="py-10">
      <div className="section-container py-16 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
          >
            {t("faq.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground"
          >
            {t("faq.subtitle")}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {Array.isArray(faqItems) && faqItems.map((faqItem, index) => (
              <motion.div key={index} variants={item}>
                <Card
                  key={index}
                  className="h-full transition-all duration-500 overflow-hidden group bg-background mb-4"
                >
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className={cn(
                      "border-none px-8", // Removed border and shadow, increased px-8 for padding
                      index === 0 && "border-b-0"
                    )}
                  >
                    <AccordionTrigger className="py-6 text-base sm:text-xl font-medium text-foreground hover:no-underline">
                      {faqItem.question as string}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base text-muted-foreground">
                      {faqItem.answer as string}
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}