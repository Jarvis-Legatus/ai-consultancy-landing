"use client"

import Link from "next/link"
import { useLanguage } from "./language-selector"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="text-foreground border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">FO</span>
              </div>
              <span className="font-semibold text-xl text-foreground">FasterOperations</span>
            </div>
            <p className="text-muted-foreground mb-6">{t("footer.description")}</p>
            <div className="flex items-center">
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-lg mb-4">{t("footer.services")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.services.chatbot")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.services.document")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.services.bi")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.services.automation")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.services.custom")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-lg mb-4">{t("footer.company")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.caseStudies")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.blog")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.careers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-lg mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>{t("footer.contact.address1")}</li>
              <li>{t("footer.contact.address2")}</li>
              <li>{t("footer.contact.email")}</li>
              <li>{t("footer.contact.phone")}</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.social.twitter")}
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.social.linkedin")}
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.social.facebook")}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">{t("footer.copyright")}</p>
          <div className="flex space-x-6">
            {[
              { key: "footer.privacy", label: "Privacy Policy" },
              { key: "footer.terms", label: "Terms of Service" },
              { key: "footer.cookies", label: "Cookie Policy" },
            ].map((item, index) => (
              <Link key={index} href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
