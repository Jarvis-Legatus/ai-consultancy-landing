'use client';

import * as React from 'react';
import { useState, ReactNode } from 'react';
import Image from 'next/image';

type ProjectStat = {
  value: string;
  label: string;
};

type Project = {
  image: string;
  alt: string;
  title: ReactNode;
  description: string;
  stats: ProjectStat[];
};

const style = {
  container: {
    backgroundColor: 'var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))',
    width: '100%',
    borderRadius: '20px',
    boxShadow: `rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px,
      rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px,
      rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px,
      rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px,
      rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px,
      rgba(0, 0, 0, 0.02) 0px 30px 30px -4px,
      rgb(255, 255, 255) 0px 3px 1px 0px inset`,
    opacity: 1,
    padding: '28px',
    maxWidth: 980,
    margin: '40px auto'
  } as React.CSSProperties,
  nav: {
    display: 'flex',
    gap: '24px',
    marginBottom: '24px'
  } as React.CSSProperties,
  navButton: (active: boolean): React.CSSProperties => ({
    flex: 1,
    background: active ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.65)',
    border: 'none',
    outline: 'none',
    padding: '14px 0',
    borderRadius: '10px',
    fontWeight: 500,
    fontSize: 14,
    color: '#131313',
    boxShadow: active ? '0 2px 8px rgba(0,0,0,0.04)' : 'none',
    cursor: 'pointer',
    transition: 'background 0.2s'
  }),
  contentRow: {
    display: 'flex',
    gap: '36px',
    alignItems: 'stretch'
  } as React.CSSProperties,
  imageBox: {
    flex: '0 0 340px',
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'rgba(0,0,0,0.06) 0 1px 8px'
  } as React.CSSProperties,
  infoBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    gap: '18px',
    paddingTop: '12px'
  },
  statRow: {
    display: 'flex',
    gap: '18px',
    marginTop: '24px'
  } as React.CSSProperties,
  statBox: {
    flex: 1,
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,.06)',
    padding: '32px 16px',
    textAlign: 'center' as const,
    fontSize: '20px'
  },
  statLabel: {
    fontSize: 16,
    color: '#6C6C6C',
    marginTop: 8
  },
  projectTitle: {
    fontWeight: 600,
    fontSize: 20,
    color: '#191919',
    margin: '10px 0 6px'
  }
};

const projects: Project[] = [
  {
    image: '/project1.jpg',
    alt: 'Glass shattering, project one',
    title: <>MedixCare — AI Triage Assistant for Healthcare</>,
    description: 'We built a custom AI triage assistant that evaluates symptoms and routes patients to the appropriate care level.',
    stats: [
      { value: '40%', label: 'Reduced average wait' },
      { value: '30%', label: 'Rise in patient satisfaction' }
    ]
  },
  {
    image: '/project2.jpg',
    alt: 'Computer code visualization, project two',
    title: <>FinSight — AI-Powered Financial Analytics</>,
    description:
      'A platform for real-time financial data analytics, empowering clients with intelligent investment insights via NLP.',
    stats: [
      { value: '50%', label: 'Faster decision making' },
      { value: '99.9%', label: 'Data accuracy rate' }
    ]
  },
  {
    image: '/project3.jpg',
    alt: 'Mobile app interface, project three',
    title: <>EduLearn — Personalized AI Learning Platform</>,
    description:
      'Customizable AI for schools that recommends lessons, automates grading, and adapts content to each student’s pace.',
    stats: [
      { value: '3x', label: 'Faster content adoption' },
      { value: '95%', label: 'Student satisfaction' }
    ]
  }
];

export default function ProjectShowcase(): React.JSX.Element {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <section style={style.container}>
      {/* Navigation */}
      <nav style={style.nav}>
        {['PROJECT 1', 'PROJECT 2', 'PROJECT 3'].map((label, idx) => (
          <button
            key={idx}
            style={style.navButton(selected === idx)}
            onClick={() => setSelected(idx)}
            type="button"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div style={style.contentRow}>
        {/* Image */}
        <div style={style.imageBox}>
          <Image
            src={project.image}
            alt={project.alt}
            width={300}
            height={300}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Info */}
        <div style={style.infoBox}>
          <p style={{ fontSize: 14, fontWeight: 500, color: '#6C6C6C' }}>
            {String(selected + 1).padStart(2, '0')}
          </p>
          <h3 style={style.projectTitle}>{project.title}</h3>
          <p style={{ fontSize: 16, lineHeight: 1.5, color: '#4A4A4A' }}>
            {project.description}
          </p>
          <div style={style.statRow}>
            {project.stats.map(stat => (
              <div key={stat.label} style={style.statBox}>
                <strong>{stat.value}</strong>
                <p style={style.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}