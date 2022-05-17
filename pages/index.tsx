import MobileNavbar from "../components/ui/components/MobileNavbar"
import Navbar from "../components/ui/components/Navbar"
import Bio from "../components/ui/content/Bio"
import ContactMe from "../components/ui/content/ContactMe"
import Experience from "../components/ui/content/Experience"
import Landing from "../components/ui/content/Landing"
import LogosBar from "../components/ui/content/LogosBar"
import content from "../content.json"

export default function Home() {
  return (
    <div>
      <MobileNavbar links={content.links} />
      <Navbar links={content.links} />
      <Landing />
      {/* <Typography></Typography> */}
      <Bio />
      <LogosBar />
      <Experience></Experience>
      <ContactMe />
      {/* <Quiz content={content.quiz} /> */}
      {/* <Drawer></Drawer> */}
      {/* <Typography /> */}
    </div>
  )
}
