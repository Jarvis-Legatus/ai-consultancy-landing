'use client';

import * as React from 'react';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from "framer-motion";
import { useLanguage } from './language-selector';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card"; // Import Card

const MagicCard = dynamic(() => import('@/components/magicui/magic-card').then(mod => mod.MagicCard), { ssr: false });
const NumberTicker = dynamic(() => import('@/components/magicui/number-ticker').then(mod => mod.NumberTicker), { ssr: false });
import { ProjectDescriptionRenderer } from './ProjectDescriptionRenderer';

type ProjectStat = {
  value: string;
  label: string;
};

type ProjectContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; content: string }
  | { type: 'list'; items: string[] };

type Project = {
  image: string;
  alt: string;
  buttonTitle: string;
  title: string;
  description: ProjectContentBlock[];
  stats: ProjectStat[];
};

export default function ProjectShowcase(): React.JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const projects: Project[] = Array.isArray(t("projects.items", { returnObjects: true }))
    ? t<Project[]>("projects.items", { returnObjects: true })
    : [];
  const project = projects[selected];

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
    <section id="projects" className="py-10">
      <div className="section-container py-16 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
          >
            {t("projects.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground"
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>

        {/* Navigation */}
        <motion.nav
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex gap-4 mb-6"
        >
          {Array.isArray(projects) && projects.map((_, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex-1 h-full" // Added flex-1 and h-full here
            >
              <MagicCard
                className={cn(
                  "transition-all duration-500 group-hover:card-shadow-hover overflow-hidden group", // Removed flex-1 and h-full from here
                  selected === idx
                    ? "bg-background"
                    : "bg-background"
                )}
              >
                <Card className="h-full w-full border-none shadow-none">
                  <button
                    className={cn(
                      "w-full h-full py-3 px-4 font-medium text-sm rounded-[var(--radius)] transition-opacity duration-200",
                      selected === idx
                        ? "text-foreground"
                        : "text-muted-foreground opacity-50"
                    )}
                    onClick={() => setSelected(idx)}
                    type="button"
                  >
                    {projects[idx].buttonTitle}
                  </button>
                </Card>
              </MagicCard>
            </motion.div>
          ))}
        </motion.nav>

        {/* Content */}
        {project && (
          <motion.div variants={item}>
            <MagicCard className="h-full transition-all duration-500 group-hover:card-shadow-hover overflow-hidden group bg-background p-6 md:p-8">
              <Card className="h-full w-full border-none shadow-none">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                  {/* Image */}
                  <div className="flex-none w-full aspect-[7/8] md:w-[400px] rounded-xl overflow-hidden bg-muted flex items-center justify-center shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center gap-4 pt-3">
                    <p className="text-sm font-medium text-muted-foreground">
                      {String(selected + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-semibold text-2xl text-foreground">
                      {project.title}
                    </h3>
                    <ProjectDescriptionRenderer description={project.description} />
                    <div className="flex flex-wrap gap-4 mt-6">
                      {Array.isArray(project.stats) && project.stats.map(stat => (
                        <Card
                          key={stat.label}
                          className="flex-1 min-w-[120px] bg-card border border-border text-center card-shadow"
                        >
                          <CardContent className="p-6">
                            <strong className="block text-2xl font-bold text-primary">
                              {(() => {
                                const match = stat.value.match(/^(\d+(\.\d+)?)(.*)$/);
                                if (match) {
                                  const value = parseFloat(match[1]);
                                  const suffix = match[3];
                                  return (
                                    <>
                                      <NumberTicker value={value} />{suffix}
                                    </>
                                  );
                                }
                                return stat.value;
                              })()}
                            </strong>
                            <p className="text-sm text-muted-foreground mt-2">
                              {stat.label}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </MagicCard>
          </motion.div>
        )}
      </div>
    </section>
  );
}