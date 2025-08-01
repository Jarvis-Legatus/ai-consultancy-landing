"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import React from 'react';
import * as Icons from '@/components/icons';
import dynamic from "next/dynamic";
const MagicCard = dynamic(() => import("@/components/magicui/magic-card").then((mod) => mod.MagicCard), { ssr: false });

export function IconGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const excludedIconsList = [
    "Facebook", "Gmail", "Google", "Huggingface", "HumeAi",
    "Instagram", "Linkedin", "Whatsapp", "Youtube", "Twitter",
  ];

  const iconComponents = Object.entries(Icons)
    .filter(([name]) => !excludedIconsList.includes(name))
    .map(([, Icon]) => Icon);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="icon-grid" className="py-10">
      <div className="section-container py-16 mt-4 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            Our Technologies & Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground"
          >
            We leverage a wide range of cutting-edge technologies and integrate with popular platforms to deliver robust solutions.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center"
        >
          {iconComponents.map((Icon, index) => (
            <MagicCard
              key={index}
              className="flex items-center justify-center p-4 border rounded-lg shadow-sm bg-card w-24 h-24 cursor-pointer hover:shadow-lg transition-all duration-300 group-hover:card-shadow-hover overflow-hidden group"
            >
              <motion.div variants={item} className="flex items-center justify-center w-full h-full">
                {React.isValidElement(<Icon />) ? (
                  <Icon className="h-12 w-12 text-foreground icon-current-color" />
                ) : (
                  <span className="text-muted-foreground">Invalid Icon</span>
                )}
              </motion.div>
            </MagicCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}