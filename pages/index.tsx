import Provider from "../components/structure/Provider"
import Box from "../components/layout/Box"
import Navbar from "../components/ui/NavBar"
import ContactBar from "../components/ui/ContactBar"
import Bipanel from "../components/layout/Bipanel"
import CompanysBar from "../components/ui/CompanysBar"

export default function Home() {
  return (
    <Provider>
      <Box center>
        <div>This is some text</div>
        <div>This is some text</div>
        <div>This is some text</div>
      </Box>
      <Box row>
        <div>This is some text</div>
        <div>This is some text</div>
        <div>This is some text</div>
      </Box>
      <Box column>
        <div>This is some text</div>
        <div>This is some text</div>
        <div>This is some text</div>
      </Box>
      <Box HStack>
        <div>This is some text</div>
        <div>This is some text</div>
        <div>This is some text</div>
      </Box>
      <ContactBar></ContactBar>
      <Navbar></Navbar>
      <Bipanel>
        <div>This is some text</div>
        <div>This is some text</div>
      </Bipanel>
      <CompanysBar></CompanysBar>
    </Provider>
  )
}
