"use client"

import Link from "next/link"
import { LanguageSelector, useLanguage } from "./language-selector"

export function Footer() {
  const { t } = useLanguage()

  const services = [
    "Customer Support Chatbots",
    "Document Processing",
    "Business Intelligence",
    "Process Automation",
    "Custom AI Solutions",
  ]

  const companyLinks = ["About Us", "Case Studies", "Blog", "Careers", "Contact"]

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">FO</span>
              </div>
              <span className="font-semibold text-xl text-gray-900">FasterOperations</span>
            </div>
            <p className="text-gray-600 mb-6">{t("footer.description")}</p>
            <div className="flex items-center">
              <LanguageSelector />
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">{t("footer.services")}</h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">{t("footer.company")}</h3>
            <ul className="space-y-3">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-gray-600">
              <li>123 AI Boulevard</li>
              <li>Tech District, CA 94103</li>
              <li>contact@fasteroperations.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {["Twitter", "LinkedIn", "Facebook"].map((platform, index) => (
                <Link key={index} href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  {platform}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">{t("footer.copyright")}</p>
          <div className="flex space-x-6">
            {[
              { key: "footer.privacy", label: "Privacy Policy" },
              { key: "footer.terms", label: "Terms of Service" },
              { key: "footer.cookies", label: "Cookie Policy" },
            ].map((item, index) => (
              <Link key={index} href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
