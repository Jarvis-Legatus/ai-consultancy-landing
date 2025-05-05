"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

type Language = {
  code: string
  name: string
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
]

// Create a context for language
type LanguageContextType = {
  currentLanguage: string
  setLanguage: (code: string) => void
  t: (key: string) => string
}

const defaultTranslate = (key: string) => key

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "en",
  setLanguage: () => {},
  t: defaultTranslate,
})

// Translations
const translations = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.caseStudies": "Case Studies",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.bookConsultation": "Book Consultation",

    // Hero section
    "hero.title": "AI Solutions That Deliver Real Results",
    "hero.subtitle":
      "We transform how SMEs operate with practical AI implementations that provide measurable ROI and tangible business outcomes.",
    "hero.cta.primary": "Book a Consultation",
    "hero.cta.secondary": "Explore Services",

    // Services section
    "services.title": "Practical AI Solutions With Measurable Results",
    "services.subtitle": "We focus on business outcomes, not technical jargon. Our solutions deliver real ROI.",

    // Service cards
    "service.chatbot.title": "Customer Support Chatbots",
    "service.chatbot.description":
      "Reduce support costs by 40% while improving customer satisfaction with AI-powered chatbots that handle routine inquiries.",
    "service.chatbot.benefit":
      "Faster response times, 24/7 availability, and seamless escalation to human agents when needed.",

    "service.document.title": "Document Processing & RAG Systems",
    "service.document.description":
      "Transform unstructured documents into searchable knowledge bases that provide instant answers to complex questions.",
    "service.document.benefit":
      "Reduce document processing time by 70% and unlock insights hidden in your business documents.",

    "service.bi.title": "Business Intelligence Tools",
    "service.bi.description":
      "Convert your data into actionable insights with AI-powered analytics that identify trends and opportunities.",
    "service.bi.benefit":
      "Make data-driven decisions with predictive analytics that forecast outcomes based on historical patterns.",

    "service.automation.title": "Process Automation Workflows",
    "service.automation.description":
      "Streamline repetitive tasks and business processes with intelligent automation that adapts to changing conditions.",
    "service.automation.benefit":
      "Reduce operational costs by 35% while improving accuracy and freeing staff for higher-value work.",

    "service.custom.title": "Custom AI Implementations",
    "service.custom.description":
      "Tailored AI solutions designed specifically for your unique business challenges and opportunities.",
    "service.custom.benefit": "Purpose-built AI that integrates seamlessly with your existing systems and processes.",

    "service.outcome": "Business Outcome:",

    // Case Studies section
    "caseStudies.title": "Real Results for Real Businesses",
    "caseStudies.subtitle": "See how our AI solutions have delivered measurable ROI for SMEs like yours.",

    // Case study cards
    "caseStudy.manufacturing.title": "Manufacturing Efficiency Boost",
    "caseStudy.manufacturing.company": "Precision Parts Co.",
    "caseStudy.manufacturing.description":
      "Implemented an AI-powered predictive maintenance system that reduced downtime by 37% and extended equipment lifespan.",
    "caseStudy.manufacturing.outcome": "Saved $450,000 annually in maintenance costs and prevented critical failures.",
    "caseStudy.manufacturing.roi": "320% ROI in first year",

    "caseStudy.support.title": "Customer Support Transformation",
    "caseStudy.support.company": "Regional Insurance Provider",
    "caseStudy.support.description":
      "Deployed an intelligent chatbot handling 78% of routine customer inquiries without human intervention.",
    "caseStudy.support.outcome":
      "Reduced response time from 24 hours to instant for common questions while cutting support costs by 42%.",
    "caseStudy.support.roi": "215% ROI in first year",

    "caseStudy.legal.title": "Document Processing Revolution",
    "caseStudy.legal.company": "Legal Services Firm",
    "caseStudy.legal.description":
      "Built a custom RAG system to analyze thousands of legal documents and extract relevant case information automatically.",
    "caseStudy.legal.outcome": "Reduced research time by 65% and improved case preparation accuracy by 28%.",
    "caseStudy.legal.roi": "180% ROI in first year",

    "caseStudy.readMore": "Read full case study",
    "caseStudy.outcome": "Business Outcome:",

    // Consultation section
    "consultation.title": "Ready to Transform Your Business with Practical AI?",
    "consultation.subtitle":
      "Schedule a free 30-minute consultation to discuss your business challenges and discover how our AI solutions can deliver measurable results.",
    "consultation.benefit1": "No technical jargon, just clear business outcomes",
    "consultation.benefit2": "Custom solutions tailored to your specific needs",
    "consultation.benefit3": "Transparent pricing with ROI projections",
    "consultation.benefit4": "Ongoing support and optimization",

    "consultation.form.title": "Book Your Free Consultation",
    "consultation.form.name": "Full Name",
    "consultation.form.company": "Company Name",
    "consultation.form.email": "Email Address",
    "consultation.form.phone": "Phone Number",
    "consultation.form.date": "Preferred Date",
    "consultation.form.selectDate": "Select a date",
    "consultation.form.message": "Tell us about your business challenges",
    "consultation.form.messagePlaceholder": "What specific challenges are you looking to solve with AI?",
    "consultation.form.submit": "Book Your Consultation",
    "consultation.form.privacy": "By submitting this form, you agree to our privacy policy and terms of service.",

    "consultation.success.title": "Thank You!",
    "consultation.success.message":
      "Your consultation request has been received. We'll contact you shortly to confirm your appointment.",
    "consultation.success.button": "Book Another Consultation",

    // Trust indicators section
    "trust.title": "Trusted by Businesses Like Yours",
    "trust.subtitle": "We partner with leading technology providers to deliver secure, reliable AI solutions.",

    // Footer
    "footer.description":
      "Practical AI solutions for small and medium businesses that deliver measurable ROI and tangible business outcomes.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.copyright": "© 2023 FasterOperations. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
  },
  fr: {
    // Navigation
    "nav.services": "Services",
    "nav.caseStudies": "Études de cas",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "cta.bookConsultation": "Réserver une consultation",

    // Hero section
    "hero.title": "Solutions d'IA qui Offrent des Résultats Concrets",
    "hero.subtitle":
      "Nous transformons le fonctionnement des PME grâce à des implémentations d'IA pratiques qui fournissent un ROI mesurable et des résultats commerciaux tangibles.",
    "hero.cta.primary": "Réserver une consultation",
    "hero.cta.secondary": "Explorer les services",

    // Services section
    "services.title": "Solutions d'IA Pratiques avec des Résultats Mesurables",
    "services.subtitle":
      "Nous nous concentrons sur les résultats commerciaux, pas sur le jargon technique. Nos solutions offrent un ROI réel.",

    // Service cards
    "service.chatbot.title": "Chatbots de Support Client",
    "service.chatbot.description":
      "Réduisez les coûts de support de 40% tout en améliorant la satisfaction client grâce à des chatbots alimentés par l'IA qui traitent les demandes courantes.",
    "service.chatbot.benefit":
      "Temps de réponse plus rapides, disponibilité 24/7 et transfert transparent vers des agents humains si nécessaire.",

    "service.document.title": "Traitement de Documents et Systèmes RAG",
    "service.document.description":
      "Transformez des documents non structurés en bases de connaissances consultables qui fournissent des réponses instantanées à des questions complexes.",
    "service.document.benefit":
      "Réduisez le temps de traitement des documents de 70% et débloquez des informations cachées dans vos documents d'entreprise.",

    "service.bi.title": "Outils d'Intelligence d'Affaires",
    "service.bi.description":
      "Convertissez vos données en informations exploitables grâce à l'analyse alimentée par l'IA qui identifie les tendances et les opportunités.",
    "service.bi.benefit":
      "Prenez des décisions basées sur les données avec des analyses prédictives qui prévoient les résultats en fonction des modèles historiques.",

    "service.automation.title": "Flux d'Automatisation des Processus",
    "service.automation.description":
      "Rationalisez les tâches répétitives et les processus d'entreprise grâce à une automatisation intelligente qui s'adapte aux conditions changeantes.",
    "service.automation.benefit":
      "Réduisez les coûts opérationnels de 35% tout en améliorant la précision et en libérant le personnel pour un travail à plus forte valeur ajoutée.",

    "service.custom.title": "Implémentations d'IA Personnalisées",
    "service.custom.description":
      "Solutions d'IA sur mesure conçues spécifiquement pour vos défis et opportunités commerciales uniques.",
    "service.custom.benefit": "IA sur mesure qui s'intègre parfaitement à vos systèmes et processus existants.",

    "service.outcome": "Résultat Commercial:",

    // Case Studies section
    "caseStudies.title": "Résultats Réels pour des Entreprises Réelles",
    "caseStudies.subtitle":
      "Découvrez comment nos solutions d'IA ont fourni un ROI mesurable pour des PME comme la vôtre.",

    // Case study cards
    "caseStudy.manufacturing.title": "Amélioration de l'Efficacité de Fabrication",
    "caseStudy.manufacturing.company": "Precision Parts Co.",
    "caseStudy.manufacturing.description":
      "Mise en œuvre d'un système de maintenance prédictive alimenté par l'IA qui a réduit les temps d'arrêt de 37% et prolongé la durée de vie des équipements.",
    "caseStudy.manufacturing.outcome":
      "Économie de 450 000 $ par an en coûts de maintenance et prévention des défaillances critiques.",
    "caseStudy.manufacturing.roi": "320% de ROI la première année",

    "caseStudy.support.title": "Transformation du Support Client",
    "caseStudy.support.company": "Assureur Régional",
    "caseStudy.support.description":
      "Déploiement d'un chatbot intelligent traitant 78% des demandes de routine des clients sans intervention humaine.",
    "caseStudy.support.outcome":
      "Temps de réponse réduit de 24 heures à instantané pour les questions courantes tout en réduisant les coûts de support de 42%.",
    "caseStudy.support.roi": "215% de ROI la première année",

    "caseStudy.legal.title": "Révolution du Traitement des Documents",
    "caseStudy.legal.company": "Cabinet de Services Juridiques",
    "caseStudy.legal.description":
      "Construction d'un système RAG personnalisé pour analyser des milliers de documents juridiques et extraire automatiquement les informations pertinentes sur les cas.",
    "caseStudy.legal.outcome":
      "Temps de recherche réduit de 65% et amélioration de la précision de la préparation des cas de 28%.",
    "caseStudy.legal.roi": "180% de ROI la première année",

    "caseStudy.readMore": "Lire l'étude de cas complète",
    "caseStudy.outcome": "Résultat Commercial:",

    // Consultation section
    "consultation.title": "Prêt à Transformer Votre Entreprise avec l'IA Pratique?",
    "consultation.subtitle":
      "Planifiez une consultation gratuite de 30 minutes pour discuter de vos défis commerciaux et découvrir comment nos solutions d'IA peuvent fournir des résultats mesurables.",
    "consultation.benefit1": "Pas de jargon technique, juste des résultats commerciaux clairs",
    "consultation.benefit2": "Solutions personnalisées adaptées à vos besoins spécifiques",
    "consultation.benefit3": "Tarification transparente avec projections de ROI",
    "consultation.benefit4": "Support et optimisation continus",

    "consultation.form.title": "Réservez Votre Consultation Gratuite",
    "consultation.form.name": "Nom Complet",
    "consultation.form.company": "Nom de l'Entreprise",
    "consultation.form.email": "Adresse Email",
    "consultation.form.phone": "Numéro de Téléphone",
    "consultation.form.date": "Date Préférée",
    "consultation.form.selectDate": "Sélectionnez une date",
    "consultation.form.message": "Parlez-nous de vos défis commerciaux",
    "consultation.form.messagePlaceholder": "Quels défis spécifiques cherchez-vous à résoudre avec l'IA?",
    "consultation.form.submit": "Réservez Votre Consultation",
    "consultation.form.privacy":
      "En soumettant ce formulaire, vous acceptez notre politique de confidentialité et nos conditions d'utilisation.",

    "consultation.success.title": "Merci!",
    "consultation.success.message":
      "Votre demande de consultation a été reçue. Nous vous contacterons prochainement pour confirmer votre rendez-vous.",
    "consultation.success.button": "Réserver une Autre Consultation",

    // Trust indicators section
    "trust.title": "Approuvé par des Entreprises Comme la Vôtre",
    "trust.subtitle":
      "Nous nous associons à des fournisseurs de technologie de premier plan pour fournir des solutions d'IA sécurisées et fiables.",

    // Footer
    "footer.description":
      "Solutions d'IA pratiques pour les petites et moyennes entreprises qui offrent un ROI mesurable et des résultats commerciaux tangibles.",
    "footer.services": "Services",
    "footer.company": "Entreprise",
    "footer.contact": "Contact",
    "footer.copyright": "© 2023 FasterOperations. Tous droits réservés.",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.cookies": "Politique de Cookies",
  },
  es: {
    // Navigation
    "nav.services": "Servicios",
    "nav.caseStudies": "Casos de Éxito",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    "cta.bookConsultation": "Reservar Consulta",

    // Hero section
    "hero.title": "Soluciones de IA que Entregan Resultados Reales",
    "hero.subtitle":
      "Transformamos cómo operan las PYMES con implementaciones prácticas de IA que proporcionan ROI medible y resultados comerciales tangibles.",
    "hero.cta.primary": "Reservar una Consulta",
    "hero.cta.secondary": "Explorar Servicios",

    // Services section
    "services.title": "Soluciones Prácticas de IA con Resultados Medibles",
    "services.subtitle":
      "Nos enfocamos en resultados comerciales, no en jerga técnica. Nuestras soluciones entregan ROI real.",

    // Service cards
    "service.chatbot.title": "Chatbots de Atención al Cliente",
    "service.chatbot.description":
      "Reduzca los costos de soporte en un 40% mientras mejora la satisfacción del cliente con chatbots impulsados por IA que manejan consultas rutinarias.",
    "service.chatbot.benefit":
      "Tiempos de respuesta más rápidos, disponibilidad 24/7 y escalamiento sin problemas a agentes humanos cuando sea necesario.",

    "service.document.title": "Procesamiento de Documentos y Sistemas RAG",
    "service.document.description":
      "Transforme documentos no estructurados en bases de conocimiento consultables que proporcionan respuestas instantáneas a preguntas complejas.",
    "service.document.benefit":
      "Reduzca el tiempo de procesamiento de documentos en un 70% y desbloquee información oculta en sus documentos comerciales.",

    "service.bi.title": "Herramientas de Inteligencia Empresarial",
    "service.bi.description":
      "Convierta sus datos en información procesable con análisis impulsados por IA que identifican tendencias y oportunidades.",
    "service.bi.benefit":
      "Tome decisiones basadas en datos con análisis predictivos que pronostican resultados basados en patrones históricos.",

    "service.automation.title": "Flujos de Automatización de Procesos",
    "service.automation.description":
      "Optimice tareas repetitivas y procesos comerciales con automatización inteligente que se adapta a condiciones cambiantes.",
    "service.automation.benefit":
      "Reduzca los costos operativos en un 35% mientras mejora la precisión y libera al personal para trabajo de mayor valor.",

    "service.custom.title": "Implementaciones Personalizadas de IA",
    "service.custom.description":
      "Soluciones de IA a medida diseñadas específicamente para sus desafíos y oportunidades comerciales únicas.",
    "service.custom.benefit": "IA creada a medida que se integra perfectamente con sus sistemas y procesos existentes.",

    "service.outcome": "Resultado Comercial:",

    // Case Studies section
    "caseStudies.title": "Resultados Reales para Negocios Reales",
    "caseStudies.subtitle": "Vea cómo nuestras soluciones de IA han entregado ROI medible para PYMES como la suya.",

    // Case study cards
    "caseStudy.manufacturing.title": "Aumento de Eficiencia en Manufactura",
    "caseStudy.manufacturing.company": "Precision Parts Co.",
    "caseStudy.manufacturing.description":
      "Implementamos un sistema de mantenimiento predictivo impulsado por IA que redujo el tiempo de inactividad en un 37% y extendió la vida útil del equipo.",
    "caseStudy.manufacturing.outcome":
      "Ahorró $450,000 anualmente en costos de mantenimiento y previno fallas críticas.",
    "caseStudy.manufacturing.roi": "320% ROI en el primer año",

    "caseStudy.support.title": "Transformación de Atención al Cliente",
    "caseStudy.support.company": "Proveedor Regional de Seguros",
    "caseStudy.support.description":
      "Desplegamos un chatbot inteligente que maneja el 78% de las consultas rutinarias de los clientes sin intervención humana.",
    "caseStudy.support.outcome":
      "Tiempo de respuesta reducido de 24 horas a instantáneo para preguntas comunes mientras se reducen los costos de soporte en un 42%.",
    "caseStudy.support.roi": "215% ROI en el primer año",

    "caseStudy.legal.title": "Revolución en Procesamiento de Documentos",
    "caseStudy.legal.company": "Firma de Servicios Legales",
    "caseStudy.legal.description":
      "Construimos un sistema RAG personalizado para analizar miles de documentos legales y extraer automáticamente información relevante del caso.",
    "caseStudy.legal.outcome":
      "Tiempo de investigación reducido en un 65% y precisión mejorada en la preparación de casos en un 28%.",
    "caseStudy.legal.roi": "180% ROI en el primer año",

    "caseStudy.readMore": "Leer caso de éxito completo",
    "caseStudy.outcome": "Resultado Comercial:",

    // Consultation section
    "consultation.title": "¿Listo para Transformar su Negocio con IA Práctica?",
    "consultation.subtitle":
      "Programe una consulta gratuita de 30 minutos para discutir sus desafíos comerciales y descubrir cómo nuestras soluciones de IA pueden entregar resultados medibles.",
    "consultation.benefit1": "Sin jerga técnica, solo resultados comerciales claros",
    "consultation.benefit2": "Soluciones personalizadas adaptadas a sus necesidades específicas",
    "consultation.benefit3": "Precios transparentes con proyecciones de ROI",
    "consultation.benefit4": "Soporte y optimización continuos",

    "consultation.form.title": "Reserve su Consulta Gratuita",
    "consultation.form.name": "Nombre Completo",
    "consultation.form.company": "Nombre de la Empresa",
    "consultation.form.email": "Dirección de Correo Electrónico",
    "consultation.form.phone": "Número de Teléfono",
    "consultation.form.date": "Fecha Preferida",
    "consultation.form.selectDate": "Seleccione una fecha",
    "consultation.form.message": "Cuéntenos sobre sus desafíos comerciales",
    "consultation.form.messagePlaceholder": "¿Qué desafíos específicos está buscando resolver con IA?",
    "consultation.form.submit": "Reserve su Consulta",
    "consultation.form.privacy":
      "Al enviar este formulario, acepta nuestra política de privacidad y términos de servicio.",

    "consultation.success.title": "¡Gracias!",
    "consultation.success.message":
      "Su solicitud de consulta ha sido recibida. Nos pondremos en contacto con usted en breve para confirmar su cita.",
    "consultation.success.button": "Reservar Otra Consulta",

    // Trust indicators section
    "trust.title": "Confiado por Empresas Como la Suya",
    "trust.subtitle":
      "Nos asociamos con proveedores de tecnología líderes para ofrecer soluciones de IA seguras y confiables.",

    // Footer
    "footer.description":
      "Soluciones prácticas de IA para pequeñas y medianas empresas que entregan ROI medible y resultados comerciales tangibles.",
    "footer.services": "Servicios",
    "footer.company": "Empresa",
    "footer.contact": "Contacto",
    "footer.copyright": "© 2023 FasterOperations. Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.cookies": "Política de Cookies",
  },
  it: {
    // Navigation
    "nav.services": "Servizi",
    "nav.caseStudies": "Casi di Studio",
    "nav.about": "Chi Siamo",
    "nav.contact": "Contatto",
    "cta.bookConsultation": "Prenota Consulenza",

    // Hero section
    "hero.title": "Soluzioni AI che Offrono Risultati Reali",
    "hero.subtitle":
      "Trasformiamo il modo in cui operano le PMI con implementazioni pratiche di AI che forniscono ROI misurabile e risultati aziendali tangibili.",
    "hero.cta.primary": "Prenota una Consulenza",
    "hero.cta.secondary": "Esplora i Servizi",

    // Services section
    "services.title": "Soluzioni AI Pratiche con Risultati Misurabili",
    "services.subtitle":
      "Ci concentriamo sui risultati aziendali, non sul gergo tecnico. Le nostre soluzioni offrono un ROI reale.",

    // Service cards
    "service.chatbot.title": "Chatbot per il Supporto Clienti",
    "service.chatbot.description":
      "Riduci i costi di supporto del 40% migliorando la soddisfazione del cliente con chatbot alimentati da AI che gestiscono richieste di routine.",
    "service.chatbot.benefit":
      "Tempi di risposta più rapidi, disponibilità 24/7 e passaggio senza problemi agli agenti umani quando necessario.",

    "service.document.title": "Elaborazione Documenti e Sistemi RAG",
    "service.document.description":
      "Trasforma documenti non strutturati in basi di conoscenza ricercabili che forniscono risposte istantanee a domande complesse.",
    "service.document.benefit":
      "Riduci il tempo di elaborazione dei documenti del 70% e sblocca informazioni nascoste nei tuoi documenti aziendali.",

    "service.bi.title": "Strumenti di Business Intelligence",
    "service.bi.description":
      "Converti i tuoi dati in informazioni utilizzabili con analisi alimentate da AI che identificano tendenze e opportunità.",
    "service.bi.benefit":
      "Prendi decisioni basate sui dati con analisi predittive che prevedono risultati basati su modelli storici.",

    "service.automation.title": "Flussi di Automazione dei Processi",
    "service.automation.description":
      "Ottimizza attività ripetitive e processi aziendali con automazione intelligente che si adatta alle condizioni mutevoli.",
    "service.automation.benefit":
      "Riduci i costi operativi del 35% migliorando la precisione e liberando il personale per lavori di maggior valore.",

    "service.custom.title": "Implementazioni AI Personalizzate",
    "service.custom.description":
      "Soluzioni AI su misura progettate specificamente per le tue sfide e opportunità aziendali uniche.",
    "service.custom.benefit":
      "AI costruita su misura che si integra perfettamente con i tuoi sistemi e processi esistenti.",

    "service.outcome": "Risultato Aziendale:",

    // Case Studies section
    "caseStudies.title": "Risultati Reali per Aziende Reali",
    "caseStudies.subtitle": "Scopri come le nostre soluzioni AI hanno fornito ROI misurabile per PMI come la tua.",

    // Case study cards
    "caseStudy.manufacturing.title": "Aumento dell'Efficienza Produttiva",
    "caseStudy.manufacturing.company": "Precision Parts Co.",
    "caseStudy.manufacturing.description":
      "Implementato un sistema di manutenzione predittiva alimentato da AI che ha ridotto i tempi di inattività del 37% e prolungato la durata delle apparecchiature.",
    "caseStudy.manufacturing.outcome":
      "Risparmiato $450.000 all'anno in costi di manutenzione e prevenuto guasti critici.",
    "caseStudy.manufacturing.roi": "320% ROI nel primo anno",

    "caseStudy.support.title": "Trasformazione del Supporto Clienti",
    "caseStudy.support.company": "Fornitore Regionale di Assicurazioni",
    "caseStudy.support.description":
      "Implementato un chatbot intelligente che gestisce il 78% delle richieste di routine dei clienti senza intervento umano.",
    "caseStudy.support.outcome":
      "Tempo di risposta ridotto da 24 ore a istantaneo per domande comuni riducendo i costi di supporto del 42%.",
    "caseStudy.support.roi": "215% ROI nel primo anno",

    "caseStudy.legal.title": "Rivoluzione nell'Elaborazione dei Documenti",
    "caseStudy.legal.company": "Studio di Servizi Legali",
    "caseStudy.legal.description":
      "Costruito un sistema RAG personalizzato per analizzare migliaia di documenti legali ed estrarre automaticamente informazioni rilevanti sui casi.",
    "caseStudy.legal.outcome":
      "Tempo di ricerca ridotto del 65% e precisione nella preparazione dei casi migliorata del 28%.",
    "caseStudy.legal.roi": "180% ROI nel primo anno",

    "caseStudy.readMore": "Leggi il caso di studio completo",
    "caseStudy.outcome": "Risultato Aziendale:",

    // Consultation section
    "consultation.title": "Pronto a Trasformare la Tua Azienda con AI Pratica?",
    "consultation.subtitle":
      "Programma una consulenza gratuita di 30 minuti per discutere delle tue sfide aziendali e scoprire come le nostre soluzioni AI possono fornire risultati misurabili.",
    "consultation.benefit1": "Nessun gergo tecnico, solo risultati aziendali chiari",
    "consultation.benefit2": "Soluzioni personalizzate adattate alle tue esigenze specifiche",
    "consultation.benefit3": "Prezzi trasparenti con proiezioni ROI",
    "consultation.benefit4": "Supporto e ottimizzazione continui",

    "consultation.form.title": "Prenota la Tua Consulenza Gratuita",
    "consultation.form.name": "Nome Completo",
    "consultation.form.company": "Nome Azienda",
    "consultation.form.email": "Indirizzo Email",
    "consultation.form.phone": "Numero di Telefono",
    "consultation.form.date": "Data Preferita",
    "consultation.form.selectDate": "Seleziona una data",
    "consultation.form.message": "Parlaci delle tue sfide aziendali",
    "consultation.form.messagePlaceholder": "Quali sfide specifiche stai cercando di risolvere con l'AI?",
    "consultation.form.submit": "Prenota la Tua Consulenza",
    "consultation.form.privacy":
      "Inviando questo modulo, accetti la nostra politica sulla privacy e i termini di servizio.",

    "consultation.success.title": "Grazie!",
    "consultation.success.message":
      "La tua richiesta di consulenza è stata ricevuta. Ti contatteremo a breve per confermare il tuo appuntamento.",
    "consultation.success.button": "Prenota Un'Altra Consulenza",

    // Trust indicators section
    "trust.title": "Affidato da Aziende Come la Tua",
    "trust.subtitle": "Collaboriamo con fornitori di tecnologia leader per offrire soluzioni AI sicure e affidabili.",

    // Footer
    "footer.description":
      "Soluzioni AI pratiche per piccole e medie imprese che offrono ROI misurabile e risultati aziendali tangibili.",
    "footer.services": "Servizi",
    "footer.company": "Azienda",
    "footer.contact": "Contatto",
    "footer.copyright": "© 2023 FasterOperations. Tutti i diritti riservati.",
    "footer.privacy": "Politica sulla Privacy",
    "footer.terms": "Termini di Servizio",
    "footer.cookies": "Politica sui Cookie",
  },
}

// Provider component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  const setLanguage = (code: string) => {
    setCurrentLanguage(code)
    localStorage.setItem("language", code)
    document.documentElement.lang = code
  }

  const t = (key: string): string => {
    return translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations.en] || key
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && languages.some((lang) => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage)
      document.documentElement.lang = savedLanguage
    }
  }, [])

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext)

export function LanguageSelector({ onDropdownChange }: { onDropdownChange?: (isOpen: boolean) => void }) {
  const { currentLanguage, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (code: string) => {
    setLanguage(code)
    setIsOpen(false)
    if (onDropdownChange) onDropdownChange(false)
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (onDropdownChange) onDropdownChange(open)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 rounded-lg text-foreground">
          <Globe size={16} />
          <span className="ml-1 text-sm font-medium">
            {languages.find((lang) => lang.code === currentLanguage)?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-lg border-2 bg-background">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`${currentLanguage === language.code ? "bg-muted text-foreground" : "text-muted-foreground"} rounded-md my-1 cursor-pointer`}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
