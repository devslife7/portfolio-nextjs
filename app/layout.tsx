// import type { Metadata } from "next"
// import { Ubuntu } from "next/font/google"
// import "./globals.css"
// import Navbar from "@/components/layout/Navbar"
// import Footer from "@/components/layout/Footer"
// import { Toaster } from "sonner"

// const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] })

// export const metadata: Metadata = {
//   title: "Marcos' Portfolio",
//   description: "Personal portfolio of projects.",
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={ubuntu.className}> */}
      <body>
        {/* <Toaster richColors position="top-center" expand />
        <Navbar />
        {children}
        <Footer /> */}
      </body>
    </html>
  )
}
