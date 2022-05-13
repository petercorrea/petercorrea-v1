import Box from "../layout/Box"
import ContactBar from "./ContactBar"
import SubnavBar from "./SubnavBar"
import { styled } from "../../stitches.config"
import Href from "../forms/Href"

const Navbar = styled(Box, {
  padding: "10px",
  position: "sticky",
  top: "0px",
  left: "0",
  right: "0",
  backgroundColor: "white",
  zIndex: 10,
  boxShadow: "0px 0px 10px 1px #2d2d2d6b",
})

export default () => {
  return (
    <Navbar row space-between>
      <ContactBar></ContactBar>
      <SubnavBar></SubnavBar>
    </Navbar>
  )
}
