import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Href from "../components/Href"

const ContactBar = styled("div", {
  ul: {
    width: "100%",
    display: "flex",
    flexDirection: "row",

    li: {
      display: "block",
      marginRight: "25px"
    }
  }
})

export default () => {
  return (
    <ContactBar>
      <Box row>
        <ul>
          <li key="ContactBar_0">
            <Href href="https://www.github.com/petercorrea">
              {/* <Image
                src={githubImage}
                alt="link to peter's git hub"
                width={30}
                height={30}
              ></Image> */}
              <p>github</p>
            </Href>
          </li>
          <li key="ContactBar_1">
            <Href href="https://www.linkedin.com/in/petercorrea">
              {/* <Image
                src={linkedinImage}
                alt="link to peter's linked in"
                width={30}
                height={30}
              ></Image> */}
              <p>linkedin</p>
            </Href>
          </li>
          <li key="ContactBar_2">
            <Href href="mailto:pmcorrea@me.com?subject=PeterCorrea.com: reaching out...">
              {/* <Image
                src={emailImage}
                alt="link to send peter an email"
                width={30}
                height={30}
              ></Image> */}
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
