"use client";
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
  t: (key: string) => string | string[]
}

const defaultTranslate = (key: string): string | string[] => key

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "en",
  setLanguage: () => {},
  t: defaultTranslate,
})

import enTranslations from "@/locales/en.json";
import frTranslations from "@/locales/fr.json";
import esTranslations from "@/locales/es.json";
import itTranslations from "@/locales/it.json";

const translations = {
  en: enTranslations,
  fr: frTranslations,
  es: esTranslations,
  it: itTranslations,
};

// Provider component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  const setLanguage = (code: string) => {
    setCurrentLanguage(code)
    localStorage.setItem("language", code)
    document.documentElement.lang = code
  }

  const t = (key: string): string | string[] => {
    const translation = translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations.en];
    return translation !== undefined ? translation : key;
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

export function LanguageSetter({ children }: { children: React.ReactNode }) {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  // Render children within a fragment or appropriate tag if needed
  // We need html tag outside this component
  return <html lang={currentLanguage} suppressHydrationWarning>{children}</html>;
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
