"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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

  const router = useRouter()
  const pathname = usePathname()


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
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/75 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <svg width="50" height="50" display="block" version="1.1" viewBox="0 0 1775.3214 1272.9539" xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white stroke-black dark:stroke-white"><path d="m 1199.8592,432.71299 c 32.353,-1.16292 70.0807,0.25492 102.4437,0.44441 24.145,0.13987 31.6606,-2.08332 55.4876,2.05061 2.386,2.31004 4.804,4.62572 7.041,7.11961 6.275,6.99554 8.894,17.6806 8.875,27.41142 -0.016,8.36374 -1.985,18.3066 -6.426,25.13633 -11.438,17.59036 -30.488,35.83945 -44.336,51.42093 l -91.487,103.03248 -324.59903,364.95242 c -5.055,5.572 -12.337,14.6633 -18.692,17.9682 -17.971,9.3281 -46.36211,6.5416 -54.49537,6.5416 -6.22864,0 -136.34784,-2.0053 -172.27584,-2.3549 -17.599,-0.056 -54.06779,0.032 -71.52879,-2.3594 -6.806,-0.925 -18.38167,-5.1011 -23.46567,-10.6957 -7.502,-8.2453 -8.0292,-11.8201 -8.1702,-23.44923 -0.187,-15.4642 11.47187,-27.5878 20.33087,-37.8972 64.757,-75.41467 132.141,-148.44937 198.054,-222.60073 15.918,-17.81031 31.727,-35.7447 47.426,-53.80203 8.844,-10.16507 18.616,-24.13697 29.071,-31.85891 22.743,-16.79741 67.65503,4.96861 95.48303,-19.74813 23.118,-20.53205 44.144,-45.99437 64.635,-69.76476 l 45.078,-51.31603 c 16.277,-18.70703 53.601,-66.41475 72.558,-75.3278 15.504,-7.2888 52.1547,-4.59977 68.9927,-4.90319 z" display="none" strokeWidth="1.06205"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" opacity="0.2" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="translate(-491.84764,164.74937)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="translate(385.48407,164.74938)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" opacity="0.6" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="translate(-55.218187,164.74938)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" opacity="0.2" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="matrix(1,0,0,-1,-491.84763,1108.1787)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="matrix(1,0,0,-1,385.48407,1108.1787)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" opacity="0.6" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="matrix(1,0,0,-1,-55.218228,1108.1787)"/></svg>
          <span
            className={cn("font-goldman text-2xl transition-colors", isScrolled ? "text-foreground" : "text-foreground")}
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
    </motion.header>
    </>
  )
}

interface NavLinksProps {
  isScrolled?: boolean;
  mobile?: boolean;
}

function NavLinks({ isScrolled = false, mobile = false }: NavLinksProps) {
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
 
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.substring(1))?.scrollIntoView({
      behavior: 'smooth'
    });
  };
 
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={linkClass}
          onClick={(e) => handleNavClick(e, link.href)}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}