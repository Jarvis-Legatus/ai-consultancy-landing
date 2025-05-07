"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector, useLanguage } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ScrollProgress } from "./magicui/scroll-progress"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add("dropdown-open")
    } else {
      document.body.classList.remove("dropdown-open")
    }
  }, [isDropdownOpen])

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg width="40" height="40" display="block" version="1.1" viewBox="0 0 2048 1424" xmlns="http://www.w3.org/2000/svg">
          <path d="m1288.5 497.85c32.353-1.1629 70.081 0.25492 102.44 0.44441 24.145 0.13987 31.661-2.0833 55.488 2.0506 2.386 2.31 4.804 4.6257 7.041 7.1196 6.275 6.9955 8.894 17.681 8.875 27.411-0.016 8.3637-1.985 18.307-6.426 25.136-11.438 17.59-30.488 35.839-44.336 51.421l-91.487 103.03-324.6 364.95c-5.055 5.572-12.337 14.663-18.692 17.968-17.971 9.3281-46.362 6.5416-54.495 6.5416-6.2286 0-136.35-2.0053-172.28-2.3549-17.599-0.056-54.068 0.032-71.529-2.3594-6.806-0.925-18.382-5.1011-23.466-10.696-7.502-8.2453-8.0292-11.82-8.1702-23.449-0.187-15.464 11.472-27.588 20.331-37.897 64.757-75.415 132.14-148.45 198.05-222.6 15.918-17.81 31.727-35.745 47.426-53.802 8.844-10.165 18.616-24.137 29.071-31.859 22.743-16.797 67.655 4.9686 95.483-19.748 23.118-20.532 44.144-45.994 64.635-69.765l45.078-51.316c16.277-18.707 53.601-66.415 72.558-75.328 15.504-7.2888 52.155-4.5998 68.993-4.9032z" display="none" strokeWidth="1.062"/>
          <path transform="translate(-403.24 229.89)" d="m1113.3 517.16-141.45 157.44a55.103 55.103 155.97 0 1-40.99 18.277h-53.797a55.204 55.204 156.01 0 0-41.015 18.254l-341.36 378.91a10.935 10.935 66.008 0 0 8.1243 18.254h328.58a55.103 55.103 155.97 0 0 40.99-18.276l514.68-572.86a10.955 10.955 65.969 0 0-8.1491-18.277h-224.62a55.103 55.103 155.97 0 0-40.99 18.277z" display="inline" fill="#fffff9" opacity=".2" stroke="#000" strokeWidth="15.717"/>
          <path transform="translate(474.09 229.89)" d="m1113.3 517.16-141.45 157.44a55.103 55.103 155.97 0 1-40.99 18.277h-53.797a55.204 55.204 156.01 0 0-41.015 18.254l-341.36 378.91a10.935 10.935 66.008 0 0 8.1243 18.254h328.58a55.103 55.103 155.97 0 0 40.99-18.276l514.68-572.86a10.955 10.955 65.969 0 0-8.1491-18.277h-224.62a55.103 55.103 155.97 0 0-40.99 18.277z" display="inline" fill="#fffff9" stroke="#000" strokeWidth="15.717"/>
          <path transform="translate(33.385 229.89)" d="m1113.3 517.16-141.45 157.44a55.103 55.103 155.97 0 1-40.99 18.277h-53.797a55.204 55.204 156.01 0 0-41.015 18.254l-341.36 378.91a10.935 10.935 66.008 0 0 8.1243 18.254h328.58a55.103 55.103 155.97 0 0 40.99-18.276l514.68-572.86a10.955 10.955 65.969 0 0-8.1491-18.277h-224.62a55.103 55.103 155.97 0 0-40.99 18.277z" display="inline" fill="#fffff9" opacity=".6" stroke="#000" strokeWidth="15.717"/>
          <path transform="matrix(1 0 0 -1 -403.24 1173.3)" d="m1113.3 517.16-141.45 157.44a55.103 55.103 155.97 0 1-40.99 18.277h-53.797a55.204 55.204 156.01 0 0-41.015 18.254l-341.36 378.91a10.935 10.935 66.008 0 0 8.1243 18.254h328.58a55.103 55.103 155.97 0 0 40.99-18.276l514.68-572.86a10.955 10.955 65.969 0 0-8.1491-18.277h-224.62a55.103 55.103 155.97 0 0-40.99 18.277z" display="inline" fill="#fffff9" opacity=".2" stroke="#000" strokeWidth="15.717"/>
          <path transform="matrix(1 0 0 -1 474.09 1173.3)" d="m1113.3 517.16-141.45 157.44a55.103 55.103 155.97 0 1-40.99 18.277h-53.797a55.204 55.204 156.01 0 0-41.015 18.254l-341.36 378.91a10.935 10.935 66.008 0 0 8.1243 18.254h328.58a55.103 55.103 155.97 0 0 40.99-18.276l514.68-572.86a10.955 10.955 65.969 0 0-8.1491-18.277h-224.62a55.103 55.103 155.97 0 0-40.99 18.277z" display="inline" fill="#fffff9" stroke="#000" strokeWidth="15.717"/>
          <path transform="matrix(1 0 0 -1 33.385 1173.3)" d="m1113.3 517.16-141.45 157.44a55.103 55.103 155.97 0 1-40.99 18.277h-53.797a55.204 55.204 156.01 0 0-41.015 18.254l-341.36 378.91a10.935 10.935 66.008 0 0 8.1243 18.254h328.58a55.103 55.103 155.97 0 0 40.99-18.276l514.68-572.86a10.955 10.955 65.969 0 0-8.1491-18.277h-224.62a55.103 55.103 155.97 0 0-40.99 18.277z" display="inline" fill="#fffff9" opacity=".6" stroke="#000" strokeWidth="15.717"/>
          </svg>
          <span
            className={cn("font-semibold text-xl transition-colors", isScrolled ? "text-foreground" : "text-foreground")}
          >
            FasterOperations
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} />
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSelector onDropdownChange={setIsDropdownOpen} />
            <InteractiveHoverButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t("cta.bookConsultation")}</InteractiveHoverButton>
          </div>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background absolute top-full left-0 right-0 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col items-center space-y-4">
            <NavLinks mobile />
            <div className="flex flex-col items-center space-y-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <ThemeToggle />
                <LanguageSelector onDropdownChange={setIsDropdownOpen} />
              </div>
              <InteractiveHoverButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t("cta.bookConsultation")}</InteractiveHoverButton>
            </div>
          </div>
        </motion.div>
      )}
    <ScrollProgress className="absolute bottom-0 left-0 right-0" />
    </header>
    </>
  )
}

function NavLinks({ isScrolled = false, mobile = false }) {
  const { t } = useLanguage()

  const linkClass = cn(
    "transition-colors font-medium",
    mobile ? "block py-2" : "",
    isScrolled ? "text-foreground hover:text-primary" : "text-foreground hover:text-primary",
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