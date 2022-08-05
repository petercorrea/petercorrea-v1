import Bio from "../components/content/Bio"
import ContactMe from "../components/content/ContactMe"
import Experience from "../components/content/Experience"
import Landing from "../components/content/Landing"
import { LeftOrRight } from "../components/content/LeftOrRight"
import Portfolio from "../components/content/Portfolio"
import MobileNavbar from "../components/ui/MobileNavbar"
import Navbar from "../components/ui/Navbar"

import content from "../constants/content.json"

export default function Home() {
  return (
    <div>
      <MobileNavbar />
      <Navbar />
      <Landing />
      <Bio />
      <Experience></Experience>
      <Portfolio items={content.portfolio}></Portfolio>
      <LeftOrRight></LeftOrRight>
      <ContactMe />
    </div>
  )
}
