"use client"

import Link from "next/link"
import { useLanguage } from "./language-selector"
import Gmail from "./icons/Gmail"
import Telegram from "./icons/Telegram"
import Whatsapp from "./icons/Whatsapp"
import Twitter from "./icons/Twitter"
import Linkedin from "./icons/Linkedin"
import Youtube from "./icons/Youtube"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="text-foreground border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <svg width="40" height="40" display="block" version="1.1" viewBox="0 0 1775.3214 1272.9539" xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white stroke-black dark:stroke-white"><path d="m 1199.8592,432.71299 c 32.353,-1.16292 70.0807,0.25492 102.4437,0.44441 24.145,0.13987 31.6606,-2.08332 55.4876,2.05061 2.386,2.31004 4.804,4.62572 7.041,7.11961 6.275,6.99554 8.894,17.6806 8.875,27.41142 -0.016,8.36374 -1.985,18.3066 -6.426,25.13633 -11.438,17.59036 -30.488,35.83945 -44.336,51.42093 l -91.487,103.03248 -324.59903,364.95242 c -5.055,5.572 -12.337,14.6633 -18.692,17.9682 -17.971,9.3281 -46.36211,6.5416 -54.49537,6.5416 -6.22864,0 -136.34784,-2.0053 -172.27584,-2.3549 -17.599,-0.056 -54.06779,0.032 -71.52879,-2.3594 -6.806,-0.925 -18.38167,-5.1011 -23.46567,-10.6957 -7.502,-8.2453 -8.0292,-11.8201 -8.1702,-23.44923 -0.187,-15.4642 11.47187,-27.5878 20.33087,-37.8972 64.757,-75.41467 132.141,-148.44937 198.054,-222.60073 15.918,-17.81031 31.727,-35.7447 47.426,-53.80203 8.844,-10.16507 18.616,-24.13697 29.071,-31.85891 22.743,-16.79741 67.65503,4.96861 95.48303,-19.74813 23.118,-20.53205 44.144,-45.99437 64.635,-69.76476 l 45.078,-51.31603 c 16.277,-18.70703 53.601,-66.41475 72.558,-75.3278 15.504,-7.2888 52.1547,-4.59977 68.9927,-4.90319 z" display="none" strokeWidth="1.06205"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" opacity="0.2" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="translate(-491.84764,164.74937)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="translate(385.48407,164.74938)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" opacity="0.6" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="translate(-55.218187,164.74938)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" opacity="0.2" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="matrix(1,0,0,-1,-491.84763,1108.1787)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="matrix(1,0,0,-1,385.48407,1108.1787)"/><path d="M 1113.2732,517.15981 971.82332,674.60062 a 55.102973,55.102973 155.96877 0 1 -40.98966,18.27655 H 877.0365 a 55.204069,55.204069 156.00781 0 0 -41.01455,18.25416 l -341.3636,378.91497 a 10.935002,10.935002 66.007806 0 0 8.12429,18.2542 h 54.82056 83.1675 190.5909 a 55.103033,55.103033 155.96879 0 0 40.98967,-18.2765 L 1387.0315,517.1598 a 10.955052,10.955052 65.968791 0 0 -8.1491,-18.27654 l -224.6196,0 a 55.102973,55.102973 155.96877 0 0 -40.9896,18.27655 z" display="inline" opacity="0.6" fillOpacity="1" strokeWidth="0" strokeDasharray="none" strokeOpacity="1" transform="matrix(1,0,0,-1,-55.218228,1108.1787)"/></svg>
              <span className="font-goldman text-xl text-foreground">FasterOperations</span>
            </div>
            <p className="text-muted-foreground mb-6">{t("footer.description")}</p>
            <h3 className="text-foreground font-semibold text-lg mb-4 mt-6">{t("footer.contact")}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors group relative">
                <div className="flex items-center justify-center md:justify-start">
                  <Gmail className="w-6 h-6" />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-background text-foreground text-xs rounded py-1 px-2 -mt-12 whitespace-nowrap left-1/2 -translate-x-1/2">Mail</span>
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors group relative">
                <div className="flex items-center justify-center md:justify-start">
                  <Telegram className="w-6 h-6" />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-background text-foreground text-xs rounded py-1 px-2 -mt-12 whitespace-nowrap left-1/2 -translate-x-1/2">Telegram</span>
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors group relative">
                <div className="flex items-center justify-center md:justify-start">
                  <Whatsapp className="w-6 h-6" />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-background text-foreground text-xs rounded py-1 px-2 -mt-12 whitespace-nowrap left-1/2 -translate-x-1/2">Whatsapp</span>
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors group relative">
                <div className="flex items-center justify-center md:justify-start">
                  <Twitter className="w-6 h-6" />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-background text-foreground text-xs rounded py-1 px-2 -mt-12 whitespace-nowrap left-1/2 -translate-x-1/2">Twitter</span>
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors group relative">
                <div className="flex items-center justify-center md:justify-start">
                  <Linkedin className="w-6 h-6" />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-background text-foreground text-xs rounded py-1 px-2 -mt-12 whitespace-nowrap left-1/2 -translate-x-1/2">Linkedin</span>
                </div>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors group relative">
                <div className="flex items-center justify-center md:justify-start">
                  <Youtube className="w-6 h-6" />
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-background text-foreground text-xs rounded py-1 px-2 -mt-12 whitespace-nowrap left-1/2 -translate-x-1/2">Youtube</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
            </div>
          </div>

          <div></div> {/* Empty div for spacing */}

          <div className="text-center md:text-right">
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

          <div className="text-center md:text-right">
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
