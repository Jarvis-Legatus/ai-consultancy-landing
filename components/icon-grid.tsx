"use client"

import React from 'react';
import * as Icons from '@/components/icons';

export function IconGrid() {
  const excludedIconsList = [
    "Asana", "Facebook", "Gmail", "Google", "Huggingface", "HumeAi",
    "Instagram", "Linkedin", "Whatsapp", "Youtube", "Twitter",
  ];

  const iconComponents = Object.entries(Icons)
    .filter(([name]) => !excludedIconsList.includes(name))
    .map(([, Icon]) => Icon);

  return (
    <section id="icon-grid" className="py-10">
      <div className="section-container py-16 mt-24 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Technologies & Integrations
          </h2>
          <p className="text-xl text-muted-foreground">
            We leverage a wide range of cutting-edge technologies and integrate with popular platforms to deliver robust solutions.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
          {iconComponents.map((Icon, index) => (
            <div key={index} className="flex items-center justify-center p-4 border rounded-lg shadow-sm bg-card w-24 h-24">
              {React.isValidElement(<Icon />) ? (
                <Icon className="h-12 w-12 text-foreground icon-current-color" />
              ) : (
                <span className="text-muted-foreground">Invalid Icon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}