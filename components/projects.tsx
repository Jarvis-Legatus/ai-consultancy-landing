'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from './language-selector';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const MagicCard = dynamic(() => import('@/components/magicui/magic-card').then(mod => mod.MagicCard), { ssr: false });

type ProjectStat = {
  value: string;
  label: string;
};

type Project = {
  image: string;
  alt: string;
  title: string;
  description: string;
  stats: ProjectStat[];
};

export default function ProjectShowcase(): React.JSX.Element {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const projects: Project[] = Array.isArray(t("projects.items", { returnObjects: true }))
    ? t<Project[]>("projects.items", { returnObjects: true })
    : [];
  const project = projects[selected];

  return (
    <section id="projects" className="py-10">
      <div className="section-container py-16 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 mb-6">
          {Array.isArray(projects) && projects.map((_, idx) => (
            <MagicCard
              key={idx}
              className={cn(
                "flex-1",
                selected === idx
                  ? "bg-card border border-primary/20"
                  : "bg-card border border-border"
              )}
            >
              <button
                className={cn(
                  "w-full h-full py-3 px-4 font-medium text-sm rounded-xl transition-opacity duration-200",
                  selected === idx
                    ? "text-foreground"
                    : "text-muted-foreground opacity-50"
                )}
                onClick={() => setSelected(idx)}
                type="button"
              >
                {t(`projects.items.${idx}.title`)}
              </button>
            </MagicCard>
          ))}
        </nav>

        {/* Content */}
        {project && (
          <MagicCard className="h-full transition-all duration-500 hover:shadow-xl overflow-hidden group bg-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-80 h-64 md:h-auto rounded-xl overflow-hidden bg-muted flex items-center justify-center shadow-sm">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-center gap-4 pt-3">
                <p className="text-sm font-medium text-muted-foreground">
                  {String(selected + 1).padStart(2, '0')}
                </p>
                <h3 className="font-semibold text-xl text-foreground">
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  {Array.isArray(project.stats) && project.stats.map(stat => (
                    <div
                      key={stat.label}
                      className="flex-1 min-w-[120px] bg-card rounded-lg border border-border p-6 text-center"
                    >
                      <strong className="block text-2xl font-bold text-primary">
                        {stat.value}
                      </strong>
                      <p className="text-sm text-muted-foreground mt-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MagicCard>
        )}
      </div>
    </section>
  );
}