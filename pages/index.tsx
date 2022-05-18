import MobileNavbar from "../components/ui/components/MobileNavbar"
import Navbar from "../components/ui/components/Navbar"
import Bio from "../components/ui/content/Bio"
import ContactMe from "../components/ui/content/ContactMe"
import Experience from "../components/ui/content/Experience"
import Landing from "../components/ui/content/Landing"
import LogosBar from "../components/ui/content/LogosBar"
import Portfolio from "../components/ui/content/Portfolio"
import content from "../content.json"

export default function Home() {
  return (
    <div>
      <MobileNavbar />
      <Navbar />
      <Landing />
      <LogosBar />
      {/* <Typography></Typography> */}
      <Bio />
      <Experience></Experience>
      <Portfolio items={content.portfolio}></Portfolio>
      <ContactMe />
      {/* <Quiz content={content.quiz} /> */}
      {/* <Drawer></Drawer> */}
      {/* <Typography /> */}
    </div>
  )
}
