import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"
import { LanguageProvider, LanguageSetter } from "@/components/language-selector";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { PostHogProvider } from './providers'

export const metadata: Metadata = {
  title: "FasterOperations - AI Solutions for SMEs",
  description: "Practical AI solutions that deliver real results for small & medium businesses",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <PostHogProvider>
          <LanguageProvider>
            <LanguageSetter>
                <head>
                  <link rel="preconnect" href="https://fonts.googleapis.com" />
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                  <link
                    href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                  />
                  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
                  <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"/>
                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
                  <link rel="manifest" href="/favicon_io/site.webmanifest"/>
                  <link rel="mask-icon" href="/favicon_io/safari-pinned-tab.svg" color="#5bbad5"/>
                  <meta name="msapplication-TileColor" content="#da532c"/>
                  <meta name="theme-color" content="#ffffff"/>
                </head>
                <body>
                  <ScrollToTop />
                    {<FlickeringGrid className="fixed left-0 top-0 h-screen w-1/6 z-[0]" color="grey" style={{ maskImage: 'linear-gradient(to right, cyan, transparent)' }} />}
                    {<FlickeringGrid className="fixed right-0 top-0 h-screen w-1/6 z-[0]" color="grey" style={{ maskImage: 'linear-gradient(to left, cyan, transparent)' }} />}
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                  {children}
                  <Toaster />
                </ThemeProvider>
                </body>
            </LanguageSetter>
          </LanguageProvider>
        </PostHogProvider>
  )
}
