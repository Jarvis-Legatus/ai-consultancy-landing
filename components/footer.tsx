"use client"

import Link from "next/link"
import { useLanguage } from "./language-selector"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="text-foreground border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">FO</span>
              </div>
              <span className="font-semibold text-xl text-foreground">FasterOperations</span>
            </div>
            <p className="text-muted-foreground mb-6">{t("footer.description")}</p>
            <div className="flex items-center">
            </div>
          </div>

          <div className="text-center md:text-left">
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

          <div className="text-center md:text-left">
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
              {/* <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.careers")}
                </Link>
              </li> */}
              {/* <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.contact")}
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-foreground font-semibold text-lg mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              {/* <li>{t("footer.contact.address1")}</li> */}
              {/* <li>{t("footer.contact.address2")}</li> */}
              {/* <li>{t("footer.contact.email")}</li> */}
              {/* <li>{t("footer.contact.phone")}</li> */}
              <li>

              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="flex items-center space-x-2 justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42" width="24" height="24"><g fill="none" fillRule="evenodd"><g fillRule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/><path fill="#c5221f" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/></g></svg>
                  <span>Mail</span>
                </div>
              </Link>
              </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="flex items-center space-x-2 justify-center md:justify-start">
                  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#2AABEE"/><stop offset="100%" stopColor="#229ED9"/></linearGradient></defs><path fill="url(#a)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"/></svg>
                  <span>Telegram</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="flex items-center space-x-2 justify-center md:justify-start">
                  <svg viewBox="0 0 256 259" width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"/><path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"/></svg>
                  <span>Whatsapp</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <div className="flex items-center space-x-2 justify-center md:justify-start">
                    <svg viewBox="0 0 256 209" width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="#55acee"/></svg>
                    <span>Twitter</span>
                  </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <div className="flex items-center space-x-2 justify-center md:justify-start">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"/></svg>
                    <span>Linkedin</span>
                  </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="flex items-center space-x-2 justify-center md:justify-start">
                  <svg viewBox="0 0 256 180" width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" fill="red"/><path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z"/></svg>
                  <span>Youtube</span>
                </div>
              </Link>
            </li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {/* <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.social.twitter")}
              </Link> */}
              {/* <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.social.linkedin")}
              </Link> */}
              {/* <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t("footer.social.facebook")}
              </Link> */}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">{t("footer.copyright")}</p>
          <div className="flex space-x-6">
            {[
          //  { key: "footer.privacy", label: "Privacy Policy" },
              { key: "footer.terms", label: "Terms of Service" },
              { key: "footer.cookies", label: "Cookie Policy" },
            ].map((item, index) => (
              <Link key={index} href={item.key === "footer.cookies" ? "/cookies-policy" : item.key === "footer.terms" ? "/terms-conditions" : "#"} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
