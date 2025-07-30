"use client";

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

export function FAQ() {
  const { t } = useLanguage();
  const faqItems = t<FAQItem[]>("faq.items", { returnObjects: true });
  return (
    <section id="faq" className="py-10">
      <div className="section-container py-16 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {Array.isArray(faqItems) && faqItems.map((item, index) => (
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
                    {item.question as string}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base text-muted-foreground">
                    {item.answer as string}
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}