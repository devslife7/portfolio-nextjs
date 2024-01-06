import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="h-screen bg-blue-300">
        full page
      </div>
      <div className="h-screen bg-blue-300">full page</div>
      {/* <Footer /> */}
    </>
  )
}
