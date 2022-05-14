import Bio from "../components/ui/Bio"
import CompanysBar from "../components/ui/CompanysBar"
import ContactMe from "../components/ui/ContactMe"
import Experience from "../components/ui/Experience"
import Hero from "../components/ui/Hero"
import Landing from "../components/ui/Landing"
import Navbar from "../components/ui/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <Landing />
      <ContactMe />
      <Bio />
      <CompanysBar />
      <Experience></Experience>
      {/* <Quiz content={content.quiz} /> */}
      {/* <Drawer></Drawer> */}
      {/* <Typography /> */}
    </div>
  )
}
