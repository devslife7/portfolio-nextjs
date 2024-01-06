import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="h-screen bg-blue-300">
        Home
      </div>
      <div id="projects" className="h-screen bg-red-300">
        Projects
      </div>
      <div id="skills" className="h-screen bg-yellow-300">
        Skills
      </div>
      <div id="about" className="h-screen bg-green-300">
        About
      </div>
      <div id="contact" className="h-screen bg-purple-500-300">
        Contact
      </div>
      <Footer />
    </>
  )
}
