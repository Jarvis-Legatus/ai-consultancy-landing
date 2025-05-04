"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector, useLanguage } from "./language-selector"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { t } = useLanguage?.() || { t: (key: string) => key }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Add class to body when dropdown is open to prevent layout shift
    if (isDropdownOpen) {
      document.body.classList.add("dropdown-open")
    } else {
      document.body.classList.remove("dropdown-open")
    }
  }, [isDropdownOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 5 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
          >
            <span className="text-white font-bold">FO</span>
          </motion.div>
          <span
            className={cn("font-semibold text-xl transition-colors", isScrolled ? "text-gray-900" : "text-gray-800")}
          >
            FasterOperations
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} />
          <div className="flex items-center space-x-4">
            <LanguageSelector onDropdownChange={setIsDropdownOpen} />
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl button-hover">
              <span>{t("cta.bookConsultation")}</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks mobile />
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
              <LanguageSelector onDropdownChange={setIsDropdownOpen} />
              <Button className="bg-blue-600 hover:bg-blue-700 w-full rounded-xl button-hover">
                <span>{t("cta.bookConsultation")}</span>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

function NavLinks({ isScrolled = false, mobile = false }) {
  const { t } = useLanguage?.() || { t: (key: string) => key }

  const linkClass = cn(
    "transition-colors font-medium",
    mobile ? "block py-2" : "",
    isScrolled ? "text-gray-800 hover:text-blue-600" : "text-gray-700 hover:text-blue-500",
  )

  const links = [
    { href: "#services", label: t("nav.services") },
    { href: "#case-studies", label: t("nav.caseStudies") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <>
      {links.map((link, index) => (
        <Link key={index} href={link.href} className={linkClass}>
          {link.label}
        </Link>
      ))}
    </>
  )
}
