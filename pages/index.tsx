import Provider from "../components/structure/Provider"
import Box from "../components/layout/Box"
import Navbar from "../components/ui/NavBar"
import ContactBar from "../components/ui/ContactBar"
import Bipanel from "../components/layout/Bipanel"
import CompanysBar from "../components/ui/CompanysBar"
import Href from "../components/forms/Href"

import Experience from "../components/ui/Experience"

export default function Home() {
  return (
    <Provider>
      <ContactBar></ContactBar>
      <Navbar></Navbar>
      <Href href="./Peter Correa CV.pdf" download>
        Resume
      </Href>

      <Box column>
        <div>This is some text</div>
        <div>This is some text</div>
        <div>This is some text</div>
      </Box>

      <Box row>
        <div>This is some text</div>
        <div>This is some text</div>
        <div>This is some text</div>
      </Box>

      <Bipanel>
        <div>This is some text</div>
        <div>This is some text</div>
      </Bipanel>

      <CompanysBar></CompanysBar>

      <Experience></Experience>
    </Provider>
  )
}
