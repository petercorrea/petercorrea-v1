import Box from "../layout/Box"
import Image from "next/image"
import githubImage from "../../public/logos/github.png"
import linkedinImage from "../../public/logos/linkedin.png"
import emailImage from "../../public/design/at.png"
import { styled } from "../../stitches.config"
import Href from "../forms/Href"

const ContactBar = styled("div", {
  width: "100%",

  ul: {
    border: "solid blue 2px",
    width: "100%",
    display: "flex",
    flexDirection: "row",

    li: {
      display: "block",
      margin: "5px",
      marginRight: "15px",
      ".navbar-images": {
        display: "inline",
        margin: "15px"
      }
    }
  }
})

export default () => {
  return (
    <ContactBar>
      <Box row>
        <ul>
          <li>
            <Href href="https://www.github.com/petercorrea">
              <Image
                className="navbar-images"
                src={githubImage}
                alt="link to peter's git hub"
                width={40}
                height={40}
              ></Image>
            </Href>
          </li>
          <li>
            <Href href="https://www.linkedin.com/in/petercorrea">
              <Image
                className="navbar-images"
                src={linkedinImage}
                alt="link to peter's linked in"
                width={40}
                height={40}
              ></Image>
            </Href>
          </li>
          <li>
            <Href href="mailto:pmcorrea@me.com">
              <Image
                className="navbar-images"
                src={emailImage}
                alt="link to send peter an email"
                width={40}
                height={40}
              ></Image>
            </Href>
          </li>
        </ul>
      </Box>
    </ContactBar>
  )
}
