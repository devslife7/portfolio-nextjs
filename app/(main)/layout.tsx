import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Toaster } from "sonner"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster richColors position="top-center" expand />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
