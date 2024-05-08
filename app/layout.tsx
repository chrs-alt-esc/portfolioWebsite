import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active_section_context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme_switch'
import ThemeContextProvider from '@/context/theme_context'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/img/icon.ico" sizes="any" />

        <meta property="og:title" content="Chris | Software Dev Portfolio" />
        <meta property="og:description" content="Software developer with 3 years of experience. Currently on the market for a software developer position."/>
        <meta property="og:image" content="https://chrisesco.vercel.app/img/meta-img-1200x630.jpg" />
        <meta property="og:url" content="https://chrisesco.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Chris | Software Dev Portfolio" />
        <meta name="twitter:description" content="Software developer with 3 years of experience. Currently on the market for a software developer position." />
        <meta name="twitter:image" content="https://chrisesco.vercel.app/img/meta-img-1200x630.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="image" content="https://chrisesco.vercel.app/img/meta-img-1200x630.jpg"/>
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:-text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  )
}
