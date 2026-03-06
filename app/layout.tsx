import type { Metadata } from "next"
import { Ubuntu, JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css"

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "mv.virtual",
  description: "Personal portfolio of projects.",
  icons: {
    icon: "/favicon.svg",
  },
  other: { "theme-color": "#0a0a0a" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${ubuntu.className} ${jetbrainsMono.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
