import Provider from "../components/structure/Provider"
import Box from "../components/layout/Box"
import CompanysBar from "../components/ui/CompanysBar"
import Experience from "../components/ui/Experience"
import Navbar from "../components/ui/Navbar"
import Landing from "../components/ui/Landing"
import Bio from "../components/ui/Bio"
import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import Block from "../components/layout/Block"
import { DrawerButton, Drawer } from "../components/layout/Drawer"
import Typography from "../components/typography/typography"
import Footer from "../components/ui/Footer"
import Quiz from "../components/forms/quiz/Quiz"
import content from "../content.json"
import Slider from "../components/forms/Slider"
import Hero from "../components/ui/Hero"
import ContactMe from "../components/ui/ContactMe"

export default function Home() {
  let { appContext, setAppContext } = useAppContext()

  return (
    <div>
      <Navbar />
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
