import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"
import Href from "../components/Href"

const ContactBar = styled("div", {
  ul: {
    width: "100%",
    display: "flex",
    flexDirection: "row",

    li: {
      display: "block",
      marginRight: "25px",
    },
  },
})

export default () => {
  return (
    <ContactBar>
      <Box row>
        <ul>
          <li key="ContactBar_0">
            <Href href="https://www.github.com/petercorrea">
              <p>github</p>
            </Href>
          </li>
          <li key="ContactBar_1">
            <Href href="https://www.linkedin.com/in/petercorrea">
              <p>linkedin</p>
            </Href>
          </li>
          <li key="ContactBar_2">
            <Href href="mailto:pmcorrea@me.com?subject=PeterCorrea.com: reaching out...">
              <p>email</p>
            </Href>
          </li>
          <li key="ContactBar_3">
            <Href href="./Peter Correa CV.pdf" download width={30} height={30}>
              <p>download_CV</p>
            </Href>
          </li>
        </ul>
      </Box>
    </ContactBar>
  )
}
